import TrainingDayCardSection from "@/components/ui/trainingDayCardSection";
import { getAllCourses } from "@/actions/actions";
import { groupCoursesByDay } from "@/functions/functions";
import { Course } from "@/types/types";
export default async function Page() {
    const coursesData: Course[] = await getAllCourses();
    const groupedCourses = groupCoursesByDay(coursesData);

    //TODO: Use auth kit function to get user and then server action to auth user
    const decodedEmail = "pmacdonald15@gmail.com";    

    return (
        <div className="flex min-h-screen  text-[#c8d8f8] flex-col items-center bg-[#536b94] gap-5">
            <h1 className="w-full text-5xl  shadow-md drop-shadow-lg text-center">
                Sky 360&apos;s Orientation Admin Page
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

