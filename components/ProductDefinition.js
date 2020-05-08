const productDefinition = (props) => {
    return (
        <button className="snipcart-add-item"
        data-item-id={props.product.id}
        data-item-name={props.product.name}
        data-item-price={props.product.price}
        data-item-image={props.router.pathname}
        data-item-url="/">
            Add to cart ${props.product.price}
        </button>
    )
}

export default productDefinition;