import TrainingDayCard from "./trainingDayCard";
export default function TrainingDayCardSection({ day, email, userProgressData }: {  day: number, email: string, userProgressData: any }) {
    return (
        <div className="bg-black w-4/6">
            <h1 className="text-3xl">Day {day}</h1>
            <TrainingDayCard/>
        </div>
    );
};