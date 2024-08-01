// import {TrainingPageCard} from "@/components/ui/trainingPageCard"
import TrainingDayCardSection from "@/components/ui/trainingDayCardSection";
export default function Page() {
    return (
        <div className="flex min-h-screen text-[#c8d8f8] flex-col items-center bg-[#536b94] gap-5">
            <h1 className="w-full text-5xl underline underline-offset-3 text-center">
                Orientation
            </h1>
            <div className="flex flex-col w-4/6">
                <p className="text-xl  items-center text-center">Welcome to the team!! This is a training app 
                    to help orient new employees with Sky 360's policies, protocols and Menu Items.
                    This training content is separated into days, feel free to complete at your own pace
                    but you will not be able to move on till the next day until you complete the current day's training.
                </p>
            </div>
            <TrainingDayCardSection day={1} email="example@example.com" userProgressData={{}} />

            {/* <TrainingPageCard /> */}
        </div>
    );
};