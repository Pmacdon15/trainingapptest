import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"


export default function TrainingDayCard({ courseName, progress, imagePath }: { courseName: string, progress: number, imagePath: string }) {    
    return (
        <Card className="flex flex-col w-[150px] h-[200px] shadow-md"
            style={{
                backgroundImage: `url(${imagePath})`,
                backgroundSize: '100% 100%',
            }}>
            <CardHeader>
                <CardTitle>{courseName}</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex-grow"></div>
            </CardContent>
            <CardFooter>
                <Progress value={progress} />
            </CardFooter>
        </Card>
    );
}





