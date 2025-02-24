export function ProductList() {
    const products = [
        { id: 1, name: "Iphone", price: 1500, quantity: 15 },
        { id: 2, name: "Apple", price: 1700, quantity: 5 },
        { id: 3, name: "Super Apple", price: 2000, quantity: 23 },
        { id: 4, name: "Super Saiyan Apple", price: 5000, quantity: 18 }
    ]

    const totalPrice = products.reduce((total, product) => total + product.price * product.quantity, 0);

    const filterProduct = (minPrice) => products.filter((product) => product.price >= minPrice);

    const newProducts = { id: 5, name: "Super Saiyan Blue Apple", price: 10000, quantity: 1 };

    const addProducts = [...products, newProducts];

    const removeProduts = (productId) => addProducts.filter((product) => product.id != productId);

    const updateQuantity = addProducts.map((product) => product.id === 1 ? { ...product, quantity: 200 } : product);

    return (<>
        <h1>Danh sach san pham</h1>
        <table>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
            </tr>
            {products.map(product => {
                return <tr key={product.id}><td>{product.id}</td><td>{product.name}</td><td>{product.price}</td><td>{product.quantity}</td>
                </tr>
            })}
        </table>

        <h2>Tổng giá trị sản phẩm: {totalPrice}</h2>

        <h1>Sản phẩm có giá tối thiểu</h1>
        <table>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
            </tr>
            {filterProduct(2000).map(product => {
                return <tr key={product.id}><td>{product.id}</td><td>{product.name}</td><td>{product.price}</td><td>{product.quantity}</td>
                </tr>
            })}
        </table>


        <h1>Danh sach san pham thêm mới</h1>
        <table>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
            </tr>
            {addProducts.map(product => {
                return <tr key={product.id}><td>{product.id}</td><td>{product.name}</td><td>{product.price}</td><td>{product.quantity}</td>
                </tr>
            })}
        </table>

        <h1>Xóa sản phẩm</h1>
        <table>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
            </tr>
            {removeProduts(1).map(product => {
                return <tr key={product.id}><td>{product.id}</td><td>{product.name}</td><td>{product.price}</td><td>{product.quantity}</td>
                </tr>
            })}
        </table>

        <h1>Danh sach san pham chỉnh sửa số lượng</h1>
        <table>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
            </tr>
            {updateQuantity.map(product => {
                return <tr key={product.id}><td>{product.id}</td><td>{product.name}</td><td>{product.price}</td><td>{product.quantity}</td>
                </tr>
            })}
        </table>
    </>
    )
}