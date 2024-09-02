'use client';
import { uploadPhoto } from "@/actions/actions";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button";


export default function AddCourse({ dayOfTraining , closeAddCourseFunction }: { dayOfTraining : number ,closeAddCourseFunction: Function }) {
    console.log(dayOfTraining);
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
            <div className="h-2/6 w-5/6 md:w-2/6 bg-[#363f4e] p-4 rounded shadow">
                <h1>Select a photo to upload</h1>
                <form className="flex flex-col gap-4" action={uploadPhoto}>
                    <Input name="courseName" placeholder="Course Name" />
                    <Input name="file" type="file" />
                    <Button type="submit">Submit</Button>
                    <Button onClick={() => closeAddCourseFunction()}>Cancel</Button>
                </form>
            </div>
        </div>
    );
};

