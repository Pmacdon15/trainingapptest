export default function Page({params}: {params: { courseId: string}}) {
return (
    <>
        <h1>Hello, from course {params.courseId}</h1>
    </>
);
};