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
        console.log(courses);
        return courses.rows as Course[];
    } catch (error) {
        console.log(error);
        return [];
    }
}

export function groupCoursesByDay(courses: Course[]): Record<number, Course[]> {
    const acc: Record<number, Course[]> = {};
    courses.forEach((course) => {
        // Check if the day already exists in the accumulator
        if (!acc[course.dayoftraining]) {
            acc[course.dayoftraining] = [];
        }
        // Push the current course into the correct day array
        acc[course.dayoftraining].push(course);
    });
    return acc;
}