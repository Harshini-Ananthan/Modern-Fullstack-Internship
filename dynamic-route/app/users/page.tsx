import Link from "next/link";


export default function Users(){

    

    return (
        <>
        <h1>This is users route</h1>
        <nav>
            <ul>
                <li>
                    <Link href={`/users/Harshini`}>Harshini</Link>
                </li>
                <li>
                    <Link href={`/users/Madhu`}>Madhu</Link>
                </li>
            </ul>
        </nav>
        </>
    )
}
