import { Course } from '@/types/types';

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