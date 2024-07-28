import { BellRing, Check } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

type CardProps = React.ComponentProps<typeof Card>

export function TrainingPageCard({ className, ...props }: CardProps) {
    return (
        <Card className={cn("w-[380px]", className)} {...props}>
            <CardHeader>
                <CardTitle>Select which day of training to complete</CardTitle>
                <CardDescription>You have 4 uncompleted days of training.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
                {/* Can do loop here later on to determine how many days of training are left or are needed */}
                <Button className="w-full">
                    Day 1
                </Button>
                <Button className="w-full">
                    Day 2
                </Button>
                <Button className="w-full">
                    Day 3
                </Button>
                <Button className="w-full">
                    Day 4
                </Button>
            </CardContent>
        </Card>
    )
}
