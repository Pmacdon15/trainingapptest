'use server';
import { sql } from "@vercel/postgres";
import { Course } from "@/types/types";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import path from 'path'
import fs from 'fs'
import { pipeline } from 'stream/promises';
import { MAX_FILE_SIZE_BYTES } from "@/lib/constants";



//MARK: Get courses
export async function getAllCourses() {
    'use server';
    //TODO: Add auth
    let courses;
    try {
        courses = await sql`
            SELECT * FROM TACourses
        `;

    } catch (error) {
        console.log(error);
        return [];
    }
    revalidatePath('/admin');
    revalidatePath('/training');
    // console.log(courses.rows as Course[]);
    return courses.rows as Course[];
}
//MARK: Remove course
export async function removeCourse(courseName: string, dayoftraining: number) {
    //TODO: Add auth
    'use server';
    try {
        await sql`
            DELETE FROM TACourses
            WHERE courseName = ${courseName} AND dayoftraining = ${dayoftraining}
        `;
        // console.log(courseName, dayoftraining);
    } catch {
        console.log('Error removing course');
    }
    //TODO: Remove course image

    revalidatePath('/admin');
    revalidatePath('/training');
    redirect('/admin');
}

//MARK: Go to course
// TODO: Add auth
export async function goToCourse(dayOfTraining: number, courseName: string) {
    'use server';
    let courseId;
    try {
        courseId = await sql`
            SELECT courseId FROM TACourses
            WHERE courseName = ${courseName} AND dayOfTraining = ${dayOfTraining}
        `;
    } catch (error) {
        console.log(error);
        return;
    }
    console.log(courseId.rows[0].courseid);

    redirect(`/courseInfo/${courseId.rows[0].courseid}`);
}

//MARK: Add course
export async function addCourse(dayOfTraining: number, formData: FormData) {
    //TODO: Add auth
    'use server';
    const file = formData.get('file') as File;
    try {
        const fileName = await uploadPhoto(file);
        const courseName = formData.get('courseName') as string;
        await setCourseNameAndImageName(dayOfTraining, courseName, fileName);
    } catch (error) {
        console.log(error);
        return { message: 'Error adding course: ' + (error as Error).message };
    };

    revalidatePath('/admin');
    redirect('/admin');
}

//MARK: Upload photo
async function uploadPhoto(file: File) {
    //TODO: Add auth
    // const file = formData.get('file') as File;
    try {
        const originalFileName = file.name;
        const uniqueFileName = generateUniqueFileName(originalFileName);
        const fileType = file.type;
        const fileSize = file.size;

        if (file.size > MAX_FILE_SIZE_BYTES) {
            throw new Error('File size exceeds 3 MB');
        }

        console.table([{ uniqueFileName, fileType, fileSize }]);

        const filePath = path.join('./public/uploads', uniqueFileName);
        const fileStream = fs.createWriteStream(filePath);
        const reader = file.stream() as unknown as NodeJS.ReadableStream; //Cast as unknown to remove error

        await pipeline(
            reader,
            fileStream
        );
        return uniqueFileName;
    } catch (error) {
        throw new Error('Error uploading file: ' + (error as Error).message);
    }
}

// Function to generate a unique file name based on timestamp
function generateUniqueFileName(originalName: string): string {
    const timestamp = Date.now();
    const ext = path.extname(originalName); // Get file extension
    const baseName = path.basename(originalName, ext); // Get file base name without extension
    return `${baseName}_${timestamp}${ext}`; // Append timestamp to base name
}

//MARK: Set course name and image name
export async function setCourseNameAndImageName(dayOfTraining: number, courseName: string, imagePath: string) {
    try {
        const result = await sql`
        INSERT INTO TACourses (CourseName, DayOfTraining, ImagePath)
        VALUES (${courseName}, ${dayOfTraining}, ${imagePath})
    `;
        if (result.rowCount === 0) {
            throw new Error('Error setting course name and image name');
        }
    } catch (error) {
        // console.log(error);
        throw new Error('Error setting course name and image name: ' + (error as Error).message);
    }
}
