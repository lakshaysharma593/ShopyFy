import '../App.css';

function ProductList({ product,addToCart }) {
    return (
        <div className='flex'>
            {
                product.map((productItem, productIndex) => {
                    return (
                        <div style={{ width: '33%' }}>
                            <div className='product-item'>
                                <img className="img" src={productItem.url} width="100%" />
                                <p className = "desc">{productItem.name} | {productItem.category} </p>
                                <p className = "desc"> {productItem.seller} </p>
                                <p className = "desc"> Rs. {productItem.price} /-</p>
                                <button className ="add-btn"
                                    onClick={() => addToCart(productItem)}
                                >Add to Cart</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ProductList