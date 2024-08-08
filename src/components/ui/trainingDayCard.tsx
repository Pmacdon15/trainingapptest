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
import { removeCourse, goToCourse } from "@/actions/actions";




export default function TrainingDayCard({ courseName, progress, imagePath, dayOfTraining, isAdmin }: { courseName: string, progress: number, imagePath: string, dayOfTraining: number, isAdmin: boolean }) {
    const bindFormWithCourseNameAndDayOfTrainingRemoveCourse = removeCourse.bind(null, courseName, dayOfTraining);
    const bindFormWithCourseNameAndDayOfTrainingGoToCourse = goToCourse.bind(null, dayOfTraining, courseName);
    return (
        <Card className="flex flex-col w-[150px] h-[200px] me-auto shadow-md p-1"
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
            <form action={bindFormWithCourseNameAndDayOfTrainingGoToCourse} className="mt-auto w-full">
                <button className="w-full" type="submit" >
                    <CardHeader>
                        <CardTitle>{courseName}</CardTitle>
                    </CardHeader>

                    <CardContent>
                    </CardContent>
                    <CardFooter>
                        {progress !== -1 ? <Progress value={progress} /> : null}
                    </CardFooter>
                </button>
            </form>
        </Card >


    );
}





