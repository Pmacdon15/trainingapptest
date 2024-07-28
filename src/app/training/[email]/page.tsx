import {TrainingPageCard} from "@/components/ui/trainingPageCard"
export default function Page() {
    return (
        <main className="flex min-h-screen flex-col items-center bg-sky-400 gap-5">
            <h1 className="bg-sky-200 w-full text-5xl text-center">Training</h1>
            <div className="flex flex-col w-4/6">
                <p className="text-xl  items-center text-center">Welcome to the team!! This is a training app to help orient new employees with Company X's policies and protocols.
                    This training and content is meant to be completed over a series of four days however you can complete it at your own pace.
                </p>
            </div>
            
            <TrainingPageCard />
        </main>
    );
};