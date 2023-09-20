import Link from "next/link";
import StudentInfo from "./StudentInfo/studentInfo";


export default function Home() {
  return (
   <main>
    <header><font size = "10"><b>CPRG 306: Web Development 2 - Assignments</b></font></header>
    <StudentInfo />
    <Link href="week2">Week 2</Link>
   </main>
  )
}
