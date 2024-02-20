
import { useRouter } from "next/router"
function ClientProjectsPage() {

    const router = useRouter();

    const loadProjectHandler = () => {
        // load data....
        // router.push('/clients/max/a')
        // router.replace('/clients/max/a')
        router.push({
            pathname: '/clients/[id]/[clientprojectid]',
            query: { id: 'max', clientprojectid: 'a'}
        })
    }
    return (
        <div>
            <h1>The projects of a given client</h1>
            <button onClick={loadProjectHandler}>Load Project A</button>
        </div>
    )
}


export default ClientProjectsPage