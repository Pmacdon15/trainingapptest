import TrainingDayCardSection from "@/components/ui/trainingDayCardSection";
import { getAllCourses } from "@/actions/actions";

export default function Page() {
    // TODO: Replace with actual data using server actions, adjust code as needed
    const classData = {
        1: {
            courseNames: ["Tour", "WHMIS", "Food knowledge", "Beverage knowledge", "Specials", "POS", "Serving"],
        },
        2: {
            courseNames: ["Food knowledge", "Beverage knowledge", "POS", "Bar Spirits", "Side Dishes", "Situational Serving"],
        },
        3: {
            courseNames: ["Food knowledge", "Beverage knowledge", "POS", "Cash Out", "Situational Serving"],
        },
        4: {
            courseNames: ["Food knowledge", "Beverage knowledge", "Situational Serving"],
        },
    } as any;
    //TODO: Use auth kit function to get user and then server action to auth user
    const decodedEmail = "pmacdonald15@gmail.com";
    const coursesData1 = getAllCourses();
    console.log(coursesData1);
    return (
        <div className="flex min-h-screen  text-[#c8d8f8] flex-col items-center bg-[#536b94] gap-5">
            <h1 className="w-full text-5xl  shadow-md drop-shadow-lg text-center">
                Sky 360's Orientation Admin Page
            </h1>

            {Object.entries(classData).map(([day, data]) => (
                <TrainingDayCardSection
                    key={day}
                    day={parseInt(day)}
                    email={decodedEmail}
                    coursesData={data}
                    isAdmin={true}
                />
            ))}
        </div>
    );
};

