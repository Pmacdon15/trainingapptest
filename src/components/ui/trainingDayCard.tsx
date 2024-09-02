'use client';
import { Badge } from "@/components/ui/badge"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { removeCourse, goToCourse, goToAddCourse } from "@/actions/actions";
import { useEffect, useRef } from "react";


export default function TrainingDayCard({
    courseName,
    progress,
    imagePath,
    dayOfTraining,
    isAdmin,
    addCourseFunction,
    closeAddCourseFunction
}:
    {
        courseName: string,
        progress: number,
        imagePath: string,
        dayOfTraining: number,
        isAdmin: boolean,
        addCourseFunction: Function,
        closeAddCourseFunction: Function
    }) {
    const bindFormWithCourseNameAndDayOfTrainingRemoveCourse = removeCourse.bind(null, courseName, dayOfTraining);
    const bindFormWithCourseNameAndDayOfTrainingGoToCourse = goToCourse.bind(null, dayOfTraining, courseName);    
    const cardRef = useRef<HTMLDivElement>(null);
    
    // useEffect(() => {
    //     function handleClickOutside(event: MouseEvent) {
    //         if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
    //             closeAddCourseFunction();
    //         }
    //     }

    //     if (courseName === "Add Courses") {
    //         document.addEventListener('mousedown', handleClickOutside);
    //     }

    //     return () => {
    //         document.removeEventListener('mousedown', handleClickOutside);
    //     };
    // }, [courseName, closeAddCourseFunction]);

    return (
        <Card
            ref={cardRef}
            className="flex flex-col w-[150px] h-[200px]  shadow-md p-1"
            style={{
                backgroundImage: `url(${imagePath})`,
                backgroundSize: '100% 100%',
            }}>
            {isAdmin ?
                <form action={bindFormWithCourseNameAndDayOfTrainingRemoveCourse} className="ml-auto">
                    <button type="submit" >
                        <Badge variant="outline">Remove</Badge>
                    </button>
                </form> : null
            }
            {courseName === "Add Courses" ? (
                <form>
                    <button onClick={(e) => {
                        e.preventDefault();
                        addCourseFunction();
                    }}>
                        <CardHeader>
                            <CardTitle>{courseName}</CardTitle>
                        </CardHeader>
                        <CardContent></CardContent>
                        <CardFooter>
                            {progress !== -1 ? <Progress value={progress} /> : null}
                        </CardFooter>
                    </button>
                </form>
            ) : (
                <form action={bindFormWithCourseNameAndDayOfTrainingGoToCourse} className="mt-auto w-full">
                    <button className="w-full" type="submit">
                        <CardHeader>
                            <CardTitle>{courseName}</CardTitle>
                        </CardHeader>
                        <CardContent></CardContent>
                        <CardFooter>
                            {progress !== -1 ? <Progress value={progress} /> : null}
                        </CardFooter>
                    </button>
                </form>
            )
            }
        </Card >
    );
}





