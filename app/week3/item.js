let list

export default function Item({ name, quantity, category }) {
    return (
        <div style={{ padding: "1rem", backgroundColor: "red", border:"1px solid red", margin:"0.2rem 0"}}>
            <p>{name}</p>
            <p>Buy {quantity} in {category}</p>
        </div>
    )
}