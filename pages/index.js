

import Link from "next/link"

function Homepage() {
    return (
        <div>
            <h1>The Home Page</h1>
            <ul>
                <li><Link href='/about'>About</Link></li>
                <li><Link href='/portfolio'>Portfolio</Link></li>
                <li><Link href='/clients'>Clients</Link></li>
                
            </ul>
        </div>
    )
}

export default Homepage