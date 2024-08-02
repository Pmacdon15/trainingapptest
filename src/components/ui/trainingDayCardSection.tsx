import TrainingDayCard from "./trainingDayCard";
export default function TrainingDayCardSection({ day, email, classData }: { day: number, email: string, classData: any }) {
    console.log(classData);
    const imagePath = `/classics.jpg`;
    return (
        <div className="w-full md:w-4/6  p-4">
            <h1 className="text-3xl mb-4">Day {day}</h1>
            <div className="flex flex-wrap items-center text-center justify-center gap-5">
                {classData.classNames.map((className: string) => {
                    // Generate a random progress value between 0 and 100
                    // Todo: Replace this with actual progress data from server action
                    const randomProgress = Math.floor(Math.random() * 101);
                    // Todo: Replace this with actual image path from server action 
                    return (
                        <TrainingDayCard
                            key={className}
                            className={className}
                            progress={randomProgress}
                            imagePath={imagePath}
                        />
                    );
                })}
            </div>
        </div>
    );
};