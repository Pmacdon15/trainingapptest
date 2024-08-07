import { sql } from "@vercel/postgres";

//MARK: Get courses
export async function getAllCourses() {
    //TODO: Add auth
    const courses = await sql`
        SELECT * FROM TACourses
    `;
    return courses;
}