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


export default function TrainingDayCard({ courseName, progress, imagePath, isAdmin }: { courseName: string, progress: number, imagePath: string, isAdmin: boolean }) {
    return (
        <Card className="flex flex-col w-[150px] h-[200px] shadow-md p-1"
            style={{
                backgroundImage: `url(${imagePath})`,
                backgroundSize: '100% 100%',
            }}>
            {isAdmin ? <button className="ml-auto">
                <Badge variant="outline">Remove</Badge>
            </button> : null}

            <CardHeader>
                <CardTitle>{courseName}</CardTitle>
            </CardHeader>
            <CardContent>
            </CardContent>
            <CardFooter>
                {progress !== -1 ? <Progress value={progress} /> : null}
            </CardFooter>
        </Card>
    );
}





