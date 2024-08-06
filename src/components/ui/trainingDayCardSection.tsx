import TrainingDayCard from "./trainingDayCard";
export default function TrainingDayCardSection({ day, email, coursesData, isAdmin }: { day: number, email: string, coursesData: any , isAdmin: boolean}) {
    console.log(coursesData);
    const imagePath = `/classics.jpg`;
    const adminImagePath = `/plus.webp`;
    
    return (
        <div className="w-full md:w-4/6  p-4">
            <h1 className="text-3xl mb-4">Day {day}</h1>
            <div>
                <div className="flex flex-wrap w-5/6 text-center items-start gap-4 md:gap-5 mx-auto">
                    {coursesData.courseNames.map((courseName: string) => {
                        // Generate a random progress value between 0 and 100
                        // Todo: Replace this with actual progress data from server action
                        const randomProgress = Math.floor(Math.random() * 101);
                        // Todo: Replace this with actual image path from server action 
                        return (
                            <TrainingDayCard
                                key={courseName}
                                courseName={courseName}
                                progress={randomProgress}
                                imagePath={imagePath}
                            />
                        );

                    })}
                    {isAdmin ? <TrainingDayCard
                        key={"addCourse"}
                        courseName={"Add Courses"}
                        progress={-1}
                        imagePath={adminImagePath}
                    /> : null}                       
                </div>
            </div>
        </div>
    );
};