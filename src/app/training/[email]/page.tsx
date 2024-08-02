// import {TrainingPageCard} from "@/components/ui/trainingPageCard"
import TrainingDayCardSection from "@/components/ui/trainingDayCardSection";
export default function Page() {
    const classData = {
        1: {
            completed: 50,
            classNames: ["On Tap", "Starters", "Entrees", "Desserts"],
        },
        2: {
            completed: 60,
            classNames: ["Mock Tails", "Cocktails", "Wine", "Beer"],
        },
        3: {
            completed: 70,
            classNames: ["Classics", "Your Guest", "Discounts", "Specials"],
        },
    } as any;

    return (
        <div className="flex min-h-screen text-[#c8d8f8] flex-col items-center bg-[#536b94] gap-5">
            <h1 className="w-full text-5xl shadow-md text-center">
                Sky 360's Orientation
            </h1>
            <div className="flex flex-col w-4/6">
                <p className="text-xl  items-center text-center">Welcome to the team!! This is a training app
                    to help orient new employees with Sky 360's policies, protocols and Menu Items.
                    This training content is separated into days, feel free to complete at your own pace.
                </p>
            </div>
            {Object.entries(classData).map(([day, data]) => (
                <TrainingDayCardSection
                    key={day}
                    day={parseInt(day)}
                    email="example@example.com"
                    classData={data}
                />
            ))}
            {/* <TrainingDayCardSection day={1} email="example@example.com" userProgressData={{}} />
            <TrainingDayCardSection day={2} email="example.com" userProgressData={{}} /> */}

            {/* <TrainingPageCard /> */}
        </div>
    );
};