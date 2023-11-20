import Link from "next/link";
import StudentInfo from "./StudentInfo/studentInfo";


export default function Home() {
  return (
   <main>
    <header><font size = "10"><b>CPRG 306: Web Development 2 - Assignments</b></font></header>
    <StudentInfo />
    <button className=" font-bold px-14 py-2 text-white bg-black border-2 border-white m-2 rounded hover:bg-purple-700 active:bg-blue-700 text-white">
    <Link href="week2">Week 2</Link>
    </button>
    <br></br>
    <button className=" font-bold px-14 py-2 text-white bg-black border-2 border-white m-2 rounded hover:bg-purple-700 active:bg-blue-700 text-white">
    <Link href="week3">Week 3</Link>
    </button>
    <br></br>
    <button className=" font-bold px-14 py-2 text-white bg-black border-2 border-white m-2 rounded hover:bg-purple-700 active:bg-blue-700 text-white">
    <Link href="week4">Week 4</Link>
    </button>
    <br></br>
    <button className=" font-bold px-14 py-2 text-white bg-black border-2 border-white m-2 rounded hover:bg-purple-700 active:bg-blue-700 text-white">
    <Link href="week5">Week 5</Link>
    </button>
    <br></br>
    <button className=" font-bold px-14 py-2 text-white bg-black border-2 border-white m-2 rounded hover:bg-purple-700 active:bg-blue-700 text-white">
    <Link href="week6">Week 6</Link>
    </button>
    <br></br>
    <button className=" font-bold px-14 py-2 text-white bg-black border-2 border-white m-2 rounded hover:bg-purple-700 active:bg-blue-700 text-white">
    <Link href="week7">Week 7</Link>
    </button>
    <br></br>
    <button className=" font-bold px-14 py-2 text-white bg-black border-2 border-white m-2 rounded hover:bg-purple-700 active:bg-blue-700 text-white">
    <Link href="week8">Week 8</Link>
    </button>
    <br></br>
    <button className=" font-bold px-14 py-2 text-white bg-black border-2 border-white m-2 rounded hover:bg-white active:bg-blue-700 text-white">
    <p>Week 9</p>
    </button>
    <br></br>
    <button className=" font-bold px-14 py-2 text-white bg-black border-2 border-white m-2 rounded hover:bg-purple-700 active:bg-blue-700 text-white">
    <Link href="week10">Week 10</Link>
    </button>
   </main>
  )
}
