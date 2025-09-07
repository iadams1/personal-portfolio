import { ref } from "firebase/database";
import { database } from "../../firebase";

export default function ProjectDetails () {

    async function getProject(id) {
        const projectRef = ref(database, `projects/${id}`)
        const snapshot = await get(projectRef)

        if (snapshot.exists()) return; 
    }

    return <></>;
}