import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useParams, Link } from "react-router-dom";
import { PostData } from "../utils/PostData";
import { Carousel, Row, Col, Spinner } from "react-bootstrap";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import "../assets/css/product.css";

function Product() {

    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [product, setProduct] = useState(null);
    const [relatedObjects, setRelatedObjects] = useState([]);
    const [activeVariation, setActiveVariation] = useState(null);
    const [sku, setSku] = useState(null);
    const [price, setPrice] = useState(null);
    const [description, setDescription] = useState(null);
    const [images, setImages] = useState([]);


    useEffect(() => {
        PostData("get-product-by-id.php", { product_id: id }).then((response) => {
            if (!response.status) {
                setError(response.error);
                setLoading(false);
            }
            setProduct(response.product);
            setActiveVariation(response.product.item_data.variations[0]);
            setRelatedObjects(response.related_objects);
            setSku(response.product.item_data.variations[0].item_variation_data.sku);
            setPrice(response.product.item_data.variations[0].item_variation_data.price_money.amount);
            setDescription(response.product.item_data.description);
            setImages(response.product.item_data.image_ids || []);
            setLoading(false);
        })
    }, []);

    function formatPrice(price) {
        return `$${(price / 100).toFixed(2)}`;
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
            <Row className="display-product-container">
                <Col md={6} sm={12} className="image-container">
                    <Carousel data-bs-theme="dark" className="product-carousel">
                        {images.length === 0 ?
                            <Carousel.Item>
                                <img className="product-carousel-image" src="/assets/images/product-placeholder.png" alt="" />
                            </Carousel.Item>
                            : images.map((imageId) => {
                                const imageUrl = relatedObjects.find((object) => object.id === imageId).image_data.url;
                                return (
                                    <Carousel.Item>
                                        <img className="product-carousel-image" src={imageUrl} alt="" />
                                    </Carousel.Item>
                                )
                            })
                        }
                    </Carousel>
                </Col>
                <Col md={6} sm={12} className="product-information">
                    <div>
                        <h1 className="product-name m-0">{product.item_data.name}</h1>
                        <div className="item-number">
                            Sku: <span>{sku}</span>
                        </div>
                        <h2 className="m-0 mb-4">
                            {formatPrice(price)}
                        </h2>
                        <p className="m-0 mb-4">
                            {description}
                        </p>
                        {/* <div>
                            Quantity:
                            <div className="quantity-buttons-container">
                                <button className="quantity-buttons">
                                    <MdOutlineKeyboardArrowDown />
                                </button>
                                1
                                <button className="quantity-buttons">
                                    <MdOutlineKeyboardArrowUp />
                                </button>
                            </div>
                        </div> 
                        <div className="mt-4">
                            <button className="add-to-cart-btn">
                                Add To Cart
                            </button>
                    </div>
                                */}
                    </div>
                </Col>
            </Row>
        </main >
    );
}

export default Product;
