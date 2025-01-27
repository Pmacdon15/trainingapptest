'use client';
import { useState } from "react";
import TrainingDayCard from "./trainingDayCard";
import { Course } from "@/types/types";
import AddCourse from "@/components/ui/addCourse/addCourse";

export default function TrainingDayCardSection({ day, email, coursesData, isAdmin }: { day: number, email: string, coursesData: Course[], isAdmin: boolean }) {
    const adminImagePath = `https://yiteg94znhby2sle.public.blob.vercel-storage.com/plus-7kcRWNKJh1y6DX7OdqEoRj0vkZTriQ.webp`;

    const [showAddCourse, setShowAddCourse] = useState(false);

    function addCourseClicked() {
        setShowAddCourse(true);
    }
    function addCourseClose() {
        setShowAddCourse(false);
    }
    

    return (
        <div className="w-full md:w-4/6  p-4">
            <h1 className="text-3xl mb-4">Day {day}</h1>
            <div>
                <div className="flex flex-wrap w-5/6 text-center items-start gap-4 md:gap-5 mx-auto">
                    {coursesData.map(course => {
                        // Generate a random progress value between 0 and 100
                        // TODO: Replace this with actual progress data from server action
                        const randomProgress = Math.floor(Math.random() * 101);
                        // Use the course name and ID for the card
                        return (
                            <TrainingDayCard
                                key={course.courseid}
                                courseName={course.coursename}
                                progress={randomProgress}
                                imagePath={course.imagepath}
                                dayOfTraining={day}
                                isAdmin={isAdmin}
                                addCourseFunction={addCourseClicked}
                            />
                        );
                    })}
                    {showAddCourse ? <AddCourse dayOfTraining={day}closeAddCourseFunction={addCourseClose} /> : null}
                    {isAdmin ? <TrainingDayCard
                        key={"addCourse"}
                        courseName={"Add Courses"}
                        progress={-1}
                        imagePath={adminImagePath}
                        dayOfTraining={day}
                        isAdmin={false}
                        addCourseFunction={addCourseClicked}
                    /> : null}
                </div>
            </div>
        </div>
    );
};