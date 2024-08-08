import { sql } from "@vercel/postgres";
import { Course } from "@/types/types";
//MARK: Get courses
export async function getAllCourses() {
    //TODO: Add auth
    const courses = await sql`
        SELECT * FROM TACourses
    `;
    return courses.rows as Course[];
}