import Link from "next/link";
import StudentInfo from "../StudentInfo/studentInfo";

export default function page(){
    return (
        <main>
            <header>
                <font size = "10"><b>My Shopping List</b></font>
            </header>
            <StudentInfo />
            <Link href="../">&lt;- Back</Link>
        </main>
    )
}