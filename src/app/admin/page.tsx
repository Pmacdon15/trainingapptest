import TrainingDayCardSection from "@/components/ui/trainingDayCardSection";
import { getAllCourses } from "@/actions/actions";
import { Course } from "@/types/types";
export default async function Page() {
    // TODO: Replace with actual data using server actions, adjust code as needed
    const coursesData: Course[] = await getAllCourses();
    const groupCoursesByDay = (courses: Course[]) => {
        return courses.reduce((acc, course) => {
            // If the dayoftraining key doesn't exist in the accumulator, initialize it with an empty array
            if (!acc[course.dayoftraining]) {
                acc[course.dayoftraining] = [];
            }
            // Push the current course into the correct dayoftraining array
            acc[course.dayoftraining].push(course);
            return acc;
        }, {} as Record<number, Course[]>);
    };
    const groupedCourses = groupCoursesByDay(coursesData);
    // console.log(groupedCourses);

    //TODO: Use auth kit function to get user and then server action to auth user
    const decodedEmail = "pmacdonald15@gmail.com";

    return (
        <div className="flex min-h-screen  text-[#c8d8f8] flex-col items-center bg-[#536b94] gap-5">
            <h1 className="w-full text-5xl  shadow-md drop-shadow-lg text-center">
                Sky 360's Orientation Admin Page
            </h1>

            {Object.entries(groupedCourses).map(([day, courses]) => (
                <TrainingDayCardSection
                    key={day} // Use day as the key
                    day={parseInt(day, 10)} // Convert day to a number
                    email={decodedEmail}
                    coursesData={courses} // Pass the array of courses directly
                    isAdmin={true}
                />
            ))}
        </div>
    );
};

