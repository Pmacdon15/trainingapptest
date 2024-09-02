import { uploadPhoto } from "@/actions/actions";

export default function Page() {    
    return (
        <>
            <h1>Test file upload</h1>
            <form action={uploadPhoto} >
                <input name="file" type="file" />
                <button>Upload</button>
            </form>
        </>
    );
};