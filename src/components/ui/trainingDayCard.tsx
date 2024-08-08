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
import { removeCourse } from "@/actions/actions";


export default async function TrainingDayCard({ courseName, progress, imagePath, dayOfTraining, isAdmin }: { courseName: string, progress: number, imagePath: string, dayOfTraining: number, isAdmin: boolean }) {
    return (
        <Card className="flex flex-col w-[150px] h-[200px] shadow-md p-1"
            style={{
                backgroundImage: `url(${imagePath})`,
                backgroundSize: '100% 100%',
            }}>
            {isAdmin ?
                <form action={async () => await removeCourse(courseName, dayOfTraining)} className="ml-auto">
            <button type="submit" >
                <Badge variant="outline">Remove</Badge>
            </button>
        </form> : null
}

            <CardHeader>
                <CardTitle>{courseName}</CardTitle>
            </CardHeader>
            <CardContent>
            </CardContent>
            <CardFooter>
                {progress !== -1 ? <Progress value={progress} /> : null}
            </CardFooter>
        </Card >
    );
}





