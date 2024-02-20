
import Link from "next/link"
function ClientsPage() {
    return (
        <div>
            <h1>The Clients Page</h1>
            <ul>
                <li>
                    <Link href='/clients/max'>Maxamillion</Link>

                </li>
                <li><Link href='/clients/Yoh'>Yoh</Link></li>
                <li><Link href={{
                    pathname: '/clients/[id]',
                    query: { id: 'yussir' }
                }}>Yussir</Link></li>
            </ul>
        </div >
    )
}


export default ClientsPage