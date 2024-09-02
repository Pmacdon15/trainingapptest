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

//MARK: Go to add course
export async function goToAddCourse(dayOfTraining: number) {
    //TODO: Add auth
    'use server';
    redirect(`/addCourse/${dayOfTraining}`);
}

//MARK: Upload photo
export async function uploadPhoto(formData: FormData) {
    //TODO: Add auth
    'use server';
    const file = formData.get('file') as File;
    try {
        const fileName = file.name;
        const fileType = file.type;
        const fileSize = file.size;

        if (file.size > MAX_FILE_SIZE_BYTES) {
            throw new Error('File size exceeds 3 MB');
        }
        
        console.table([{ fileName, fileType, fileSize }]);        

        const filePath = path.join('./public/uploads', fileName);
        const fileStream = fs.createWriteStream(filePath);
        const reader = file.stream() as unknown as NodeJS.ReadableStream; //Cast as unknown to remove error

        await pipeline(
            reader,
            fileStream
        );
    } catch (error) {
        console.log(error);
        return { message: (error as Error).message };
    }
    // revalidatePath('/admin');
    // revalidatePath('/training');
    // redirect('/admin');
}