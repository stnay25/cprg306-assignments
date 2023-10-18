export default function Item({ name, quantity, category }) {
    return (
        <div class="p-8 bg-purple-300 border-4 border-black m-4 w-1/3 ">
            <p className="text-lg font-bold">{name}</p>
            <p>Buy {quantity} in {category}</p>
        </div>
    );
}