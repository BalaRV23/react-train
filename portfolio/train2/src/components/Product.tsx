const Product = (props: any) => { //props is component to component conection, help get value from another one components

    return (
        <>
            <div className="d-flex justify-content-space-between">
                <p>{props.product.category}</p>
                <p>Rs: {props.product.price}</p>
           
            </div>
            <hr />
            <div className="d-flex justify-content-space-between">
            <p>{props.product.rating.count}</p>
            <p>{props.product.rating.rate}</p>
            </div>
        </>
    )
}

export default Product