import productsData from "../data";
import Product from "./Product";
const Products = () => {
    return (
        <>
            <h2>Products Components</h2>
            <div className="d-flex flex-warp">



                {productsData.map((product) => {
                    return (
                        <div className="card w-25" key={product.id}>
                            <div className="image-view">
                                <img src={product.image} alt="" width="30%" />
                                <p><b>{product.title}</b></p>
                            </div>
                            <button className="btn btn-primary">More Details</button>
                            {/* <p>{product.description}</p> */}
                            <hr />
                            <Product product={product}/>
                        </div>

                    )
                })}
            </div>
        </>
    )
}

export default Products;