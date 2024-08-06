// import {TrainingPageCard} from "@/components/ui/trainingPageCard"
import TrainingDayCardSection from "@/components/ui/trainingDayCardSection";
export default function Page({ params }: { params: { email: string } }) {
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
    //TODO: Replace with actual data using server actions, adjust code as needed    
    const decodedEmail = decodeURIComponent(params.email);
    // console.log(decodedEmail);
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
                    email={decodedEmail}
                    coursesData={data}
                />
            ))}

        </div>
    );
};