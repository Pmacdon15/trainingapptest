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
        <Card className="w-[150px] h-[200px]">
            <CardHeader>
                <CardTitle>Class Name</CardTitle>
                <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardFooter>
                <Progress value={66} />
            </CardFooter>
        </Card>
    );
}





