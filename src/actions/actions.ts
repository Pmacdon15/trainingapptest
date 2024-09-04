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
export async function addCourse( dayOfTraining: number, imagePath:string, formData: FormData) {
    //TODO: Add auth
    'use server';
    const courseName = formData.get('courseName') as string;

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

    revalidatePath('/admin');
    redirect('/admin');
}

