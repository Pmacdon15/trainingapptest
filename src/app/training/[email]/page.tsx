import TrainingDayCardSection from "@/components/ui/trainingDayCardSection";
import { getAllCourses , groupCoursesByDay} from "@/actions/actions";
import { Course } from "@/types/types";

export default async function Page({ params }: { params: { email: string } }) {
    const coursesData: Course[] = await getAllCourses();;
    const groupedCourses = await groupCoursesByDay(coursesData);
    //TODO: Replace with actual data using server actions and Auth Kit    
    const decodedEmail = decodeURIComponent(params.email);
    return (
        <div className="flex min-h-screen text-[#c8d8f8] flex-col items-center bg-[#536b94] gap-5">
            <h1 className="w-full text-5xl shadow-md drop-shadow-lg text-center">
                Sky 360's Orientation
            </h1>
            <div className="flex flex-col w-4/6">
                <p className="text-xl  items-center text-center">Welcome to the team!! This is a training app
                    to help orient new employees with Sky 360's policies, protocols and Menu Items.
                    This training content is separated into days, feel free to complete at your own pace.
                </p>
            </div>
            
            {Object.entries(groupedCourses).map(([day, courses]) => (
                <TrainingDayCardSection
                    key={day} // Use day as the key
                    day={parseInt(day, 10)} // Convert day to a number
                    email={decodedEmail}
                    coursesData={courses} // Pass the array of courses directly
                    isAdmin={false}
                />
            ))}
        </div>
    );
};