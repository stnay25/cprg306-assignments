import ItemList from "./item-list";
import Link from "next/link";



export default function Page() {
    return <div>
        <header>
                <font size = "10"><b>Shopping List</b></font>
        </header>
        <ItemList/>     
    <button className=" font-bold px-4 py-2 text-black bg-purple-300 border-2 border-black m-4 rounded hover:bg-purple-700">
    <Link href="../">&lt;- Back</Link>
    </button>
    </div> 
}
