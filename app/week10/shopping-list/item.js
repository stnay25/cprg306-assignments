
export default function Item({ name, quantity, category,}) {
    return (
      <main>
        <div class=" flex justify-between items-center mb-5 px-8 py-5 bg-purple-300 hover:bg-purple-500 border-2 border-white">
          <p className="text-lg font-bold">{name}</p>
          <p>Buy {quantity} in {category}</p>
        </div>
      </main>
    );
  }
