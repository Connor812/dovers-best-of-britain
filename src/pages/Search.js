import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { PostData } from "../utils/PostData";
import { GoSearch } from "react-icons/go";
import { Spinner } from "react-bootstrap";
import "../assets/css/shop-products.css";

function ShopProducts() {
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]); // Ensure this is initialized as an empty array
    const [relatedObjects, setRelatedObjects] = useState([]);
    const [categoryName, setCategoryName] = useState("");
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");

    function searchProducts() {
        setLoading(true);
        PostData("search-items.php", { search_term: searchTerm })
            .then((response) => {
                if (!response.status) {
                    setError(response.error);
                } else {
                    setProducts(response.items || []);
                    setRelatedObjects(response.related_objects || []);
                    setLoading(false);
                }
                setLoading(false);
            })
            .catch((fetchError) => {
                setError(fetchError.message || "An error occurred while fetching data.");
                setLoading(false);
            });
    }

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            searchProducts();
        }
    };

    function getImage(product) {
        if (product.item_data?.image_ids?.length > 0) {
            const imageId = product.item_data.image_ids[0];
            const relatedObject = relatedObjects.find((object) => object.id === imageId);
            return relatedObject ? relatedObject.image_data.url : "/assets/images/product-placeholder.png";
        }
        return "/assets/images/product-placeholder.png";
    }

    return (
        <main>
            <h1 className="shopping-category-name">{categoryName}</h1>
            <center>
                <div className="home-search-container">
                    <input
                        type="text"
                        className="home-search"
                        placeholder="Enter product name, SKU etc..."
                        value={searchTerm}
                        onChange={handleInputChange}
                        onKeyDown={handleKeyDown} // Run search on Enter key press
                    />
                    <button className="search-icon" onClick={searchProducts}>
                        <GoSearch />
                    </button>
                </div>
            </center>
            <center>
                <section className="product-page">
                    {loading ? (
                        <Spinner animation="border" role="status" />
                    ) : products.length === 0 ? (
                        <h1 className="blue time-regular">No Products Under This Category</h1>
                    ) : (
                        products.map((product, index) => (
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
                        ))
                    )}
                </section>
            </center>
        </main>
    );
}

export default ShopProducts;
