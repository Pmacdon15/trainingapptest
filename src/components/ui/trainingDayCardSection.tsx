import TrainingDayCard from "./trainingDayCard";
export default function TrainingDayCardSection({ day, email, userProgressData }: {  day: number, email: string, userProgressData: any }) {
    return (
        <div className="w-full md:w-4/6  p-4">
            <h1 className="text-3xl mb-4">Day {day}</h1>
            <div className="flex flex-wrap items-center text-center justify-center gap-5">
            <TrainingDayCard/>
            <TrainingDayCard/>
            <TrainingDayCard/>
            <TrainingDayCard/>
            <TrainingDayCard/>
            </div>
        </div>
    );
};