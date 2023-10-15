import Link from "next/link";
import ItemList from "./item-list";




export default function Page() {
    return <div>
        <header>
        <h1 class="px-4 py-2 text-4xl font-bold  ">Shopping List Organizer</h1>
        </header>
        <ItemList />
        <button className=" font-bold px-4 py-2 text-black bg-purple-300 border-2 border-black m-4 rounded hover:bg-purple-700">
    <Link href="../">&lt;- Back</Link>
    </button>
    </div> 
}