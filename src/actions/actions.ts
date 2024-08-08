'use server';
import { sql } from "@vercel/postgres";
import { Course } from "@/types/types";
//MARK: Get courses
export async function getAllCourses() {
    'use server';
    //TODO: Add auth
    try {
        const courses = await sql`
            SELECT * FROM TACourses
        `;
        return courses.rows as Course[];
    } catch (error) {
        console.log(error);
        return [];
    }
}
//MARK: Remove course
export async function removeCourse(courseName: string, dayoftraining: number) {
    'use server';
    try {
        // await sql`
        //     DELETE FROM TACourses
        //     WHERE courseName = ${courseName} AND dayoftraining = ${dayoftraining}
        // `; 
        console.log(courseName, dayoftraining);
    } catch {
        console.log('Error removing course');
    }
}
