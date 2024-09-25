import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { PostData } from "../utils/PostData";
import { GoSearch } from "react-icons/go";
import { Spinner } from "react-bootstrap";
import "../assets/css/shop-products.css";

function ShopProducts() {

    const { categoryId } = useParams();
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const [relatedObjects, setRelatedObjects] = useState([]);
    const [categoryName, setCategoryName] = useState("");
    const [error, setError] = useState(null);

    useEffect(() => {
        PostData("get-items-by-category.php", { category_id: categoryId }).then((response) => {
            if (!response.status) {
                setError(response.error);
                setLoading(false);
            }
            setProducts(response.objects);
            setRelatedObjects(response.related_objects);
            setCategoryName(response.category_name);
            setLoading(false);
        })
    }, []);

    function getImage(product) {

        if (product.item_data?.image_ids ?? false) {
            console.log("Image found for product");

            const imageId = product.item_data.image_ids[0];
            console.log("Image ID: ", imageId);

            return relatedObjects.find((object) => object.id === imageId).image_data.url;
        }
        console.log("No image found for product");

        return "/assets/images/product-placeholder.png";
    }


    if (loading) {
        return (
            <main className="display-loading">
                <Spinner animation="border" role="status" />
            </main>
        )
    }

    if (error) {
        return (
            <main className="display-error">
                <h1>{error}</h1>
            </main>
        )
    }

    return (
        <main>

            <h1 className="shopping-category-name">{categoryName}</h1>
            <center>
                <div className="home-search-container">
                    <input type="text" className="home-search" placeholder="Enter product name, SKU etc..." />
                    <button className="search-icon">
                        <GoSearch />
                    </button>
                </div>
            </center>


            <center>


                <section className="product-page">

                    {products === null || products.length === 0 ?
                        <>
                            <h1 className="blue time-regular">
                                No Products Under This Category
                            </h1>
                        </>
                        : products.map((product, index) => {
                            return (
                                <Link key={index} to={`/product/${product.id}`} className="product-container">
                                    <div className="product">
                                        <div className="product-image-container">
                                            <img className="product-image" src={getImage(product)} alt="product" />
                                        </div>
                                        <div className="shop-product-name">
                                            {product.item_data.name}
                                        </div>
                                    </div>
                                </Link>
                            )
                        })}
                </section>
            </center>
        </main>
    );
}

export default ShopProducts;
