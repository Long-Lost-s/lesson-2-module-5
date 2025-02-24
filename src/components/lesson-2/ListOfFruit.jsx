export function ListOfFruit() {
    const fruits = ["Apple",
        "Banana",
        "Orange",
        "Apricot",
        "Black rowan",
        "Cranberry"]

    return <>
        <h1>List of fruits</h1>
        <ul>
            {fruits.map(iteam => (<li>{iteam}</li>))}
        </ul>

    </>
}