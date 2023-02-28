import { useState } from "react"

function Product({ product, onClickHandler }) {
// false protože je košík prázdný
    const [isInCart, setIsInCart] = useState(false);

    return (
        <div>
            <h2>{product.name}</h2>
            <div>{product.price} CZK</div>
            <div>{isInCart && "In cart"}</div>
    {/* z onClick se vytvořila uvnitř funkce a (productName je její volání) */}
            <button onClick={() => { setIsInCart(true); onClickHandler(product)}}>Buy</button>
        </div>
    )
}
export default Product;