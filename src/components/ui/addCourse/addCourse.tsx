'use client';
import { addCourse } from "@/actions/actions";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button";

import type { PutBlobResult } from '@vercel/blob';
import { useState, useRef } from 'react';

export default function AddCourse({ dayOfTraining, closeAddCourseFunction }: { dayOfTraining: number, closeAddCourseFunction: Function }) {
    const bindFormWithDayOfTraining = addCourse.bind(null, dayOfTraining);

    const inputFileRef = useRef<HTMLInputElement>(null);
    // const [blob, setBlob] = useState<PutBlobResult | null>(null);

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const form = event.currentTarget as HTMLFormElement;
        const formData = new FormData(form);
        const file = inputFileRef.current?.files?.[0];

        if (!inputFileRef.current?.files) {
            throw new Error("No file selected");
        }

        // const file = inputFileRef.current.files[0];


        try {

            const response = await fetch(`/api/avatar/upload?filename=${file?.name}`, {
                method: 'POST',
                body: file,
            });

            if (!response.ok) {
                throw new Error('Failed to upload file');
            }

            const newBlob = (await response.json()) as PutBlobResult;
            const bindFormWithImagePath = bindFormWithDayOfTraining.bind(null, newBlob.url);


            bindFormWithImagePath(formData);
            closeAddCourseFunction();
        } catch (error) {
            console.error("Error during file upload:", error);
            // Handle error (show a message to the user, etc.)
        }
    }

    //TODO: Add form state to disable button when clicked

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
            <div className="h-2/6 w-5/6 md:w-2/6 bg-[#363f4e] p-4 rounded shadow">
                <h1>Select a photo to upload</h1>
                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                    <Input name="courseName" placeholder="Course Name" />
                    <Input name="file" ref={inputFileRef} type="file" />
                    <Button type="submit">Submit</Button>
                    <Button onClick={() => closeAddCourseFunction()}>Cancel</Button>
                </form>
            </div>
        </div>
    );
};


