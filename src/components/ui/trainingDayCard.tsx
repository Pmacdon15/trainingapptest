import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"


export default function TrainingDayCard() {
    return (
        <Card className="w-[150px] h-[200px] flex flex-col justify-between">
            <CardHeader>
                <CardTitle>Class Name</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex-grow"></div>
            </CardContent>
            <CardFooter>
                <Progress value={66} />
            </CardFooter>
        </Card>
    );
}





