import Link from "next/link";

const ids:number[] = [101, 102];

export default async function UserName(props: any){
    const user = await props.params;
    console.log("username", user.username) 
    return (
        <>
        <Link href={}></Link>
        </>
    )
}