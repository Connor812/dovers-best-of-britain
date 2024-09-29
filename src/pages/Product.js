import React, { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import { useParams, Link } from "react-router-dom";
import { PostData } from "../utils/PostData";
import { Carousel, Row, Col, Spinner, Dropdown } from "react-bootstrap";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { BsCartCheck } from "react-icons/bs";
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
    const [quantity, setQuantity] = useState(1);
    const [activeImage, setActiveImage] = useState(0);
    const [addToCartBtnText, setAddToCartBtnText] = useState("Add To Cart");
    const addToCartBtn = useRef(null);

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

    function handleQuantityChange(event) {
        if (event === "increase") {
            setQuantity(quantity + 1);
        } else {
            if (quantity > 1) {
                setQuantity(quantity - 1);
            }
        }
    }

    function handleChangeVariation(variation) {
        setActiveVariation(variation);
        setPrice(variation.item_variation_data.price_money.amount);
        setSku(variation.item_variation_data.sku);
        if (variation.item_variation_data.image_ids && variation.item_variation_data.image_ids.length > 0) {
            const imageId = variation.item_variation_data.image_ids[0];
            const newImageIndex = images.indexOf(imageId);

            if (newImageIndex !== -1) {
                setActiveImage(newImageIndex);
            }
        }
    }


    function addToCart() {
        console.log(activeVariation);

        let imageUrl = '/assets/images/product-placeholder.png';
        let variationName = null;

        if (product.item_data.variations.length === 1) {
            const productImageId = product.item_data.image_ids && product.item_data.image_ids.length > 0
                ? product.item_data.image_ids[0]
                : null;
            const productImage = productImageId ? relatedObjects.find((object) => object.id === productImageId) : null;
            imageUrl = productImage && productImage.image_data ? productImage.image_data.url : imageUrl;
        } else {
            const imageId = activeVariation.item_variation_data.image_ids && activeVariation.item_variation_data.image_ids.length > 0
                ? activeVariation.item_variation_data.image_ids[0]
                : null;
            const variationImage = imageId ? relatedObjects.find((object) => object.id === imageId) : null;
            imageUrl = variationImage && variationImage.image_data ? variationImage.image_data.url : imageUrl;
            variationName = activeVariation.item_variation_data.name;
        }

        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        const cartProduct = {
            id: activeVariation.id,
            name: product.item_data.name,
            sku: sku,
            price: price,
            quantity: quantity,
            image: imageUrl,
            variation: variationName
        };

        const existingProductIndex = cart.findIndex(item => item.id === activeVariation.id);

        if (existingProductIndex !== -1) {
            cart[existingProductIndex].quantity += quantity;
        } else {
            cart.push(cartProduct);
        }

        localStorage.setItem("cart", JSON.stringify(cart));
        setAddToCartBtnText(<BsCartCheck className="added-to-cart-icon" />);
        addToCartBtn.current.disabled = true;

        setTimeout(() => {
            if (addToCartBtn.current) {
                setAddToCartBtnText("Add To Cart");
                addToCartBtn.current.disabled = false;
            }
        }, 4000);

    }


    function handleSelect(selectedIndex) {
        setActiveImage(selectedIndex);
    }

    if (loading) {
        return (
            <main className="display-loading">
                <Spinner animation="border" role="status" />
            </main>
        );
    }

    if (error) {
        return (
            <main className="display-error">
                <h1>{error}</h1>
            </main>
        );
    }

    return (
        <main>
            <Row className="display-product-container">
                <Col md={6} sm={12} className="image-container">
                    <Carousel
                        activeIndex={activeImage}
                        onSelect={handleSelect}
                        data-bs-theme="dark"
                        className="product-carousel"
                    >
                        {images.length === 0 ? (
                            <Carousel.Item className="product-carousel-img">
                                <center>
                                    <img
                                        className="product-carousel-image"
                                        src="/assets/images/product-placeholder.png"
                                        alt=""
                                    />
                                </center>
                            </Carousel.Item>
                        ) : (
                            images.map((imageId, index) => {
                                const imageUrl = relatedObjects.find(
                                    (object) => object.id === imageId
                                ).image_data.url;
                                return (
                                    <Carousel.Item className="product-carousel-img" key={index}>
                                        <center>
                                            <img
                                                className="product-carousel-image"
                                                src={imageUrl}
                                                alt=""
                                            />
                                        </center>
                                    </Carousel.Item>
                                );
                            })
                        )}
                    </Carousel>
                </Col>
                <Col md={6} sm={12} className="product-information">
                    <div>
                        <h1 className="product-name m-0">{product.item_data.name}</h1>
                        <div className="item-number">
                            Sku: <span>{sku}</span>
                        </div>
                        <h2 className="m-0 mb-4">{formatPrice(price)}</h2>
                        <p className="m-0 mb-4">{description}</p>

                        {product.item_data.variations.length > 1 ? (
                            <div>
                                <Dropdown>
                                    <Dropdown.Toggle className="option-btn mb-3" id="dropdown-basic">
                                        {activeVariation.item_variation_data.name}
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        {product.item_data.variations.map((variation) => {
                                            return (
                                                <Dropdown.Item
                                                    key={variation.id}
                                                    onClick={() => handleChangeVariation(variation)}
                                                >
                                                    {variation.item_variation_data.name}
                                                </Dropdown.Item>
                                            );
                                        })}
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        ) : null}
                        <div>
                            Quantity:
                            <div className="quantity-buttons-container">
                                <button
                                    className="quantity-buttons"
                                    onClick={() => handleQuantityChange("subtract")}
                                >
                                    <MdOutlineKeyboardArrowDown />
                                </button>
                                {quantity}
                                <button
                                    className="quantity-buttons"
                                    onClick={() => handleQuantityChange("increase")}
                                >
                                    <MdOutlineKeyboardArrowUp />
                                </button>
                            </div>
                        </div>
                        <div className="mt-4">
                            <button ref={addToCartBtn} className="add-to-cart-btn" onClick={() => addToCart()}>
                                {addToCartBtnText}
                            </button>
                        </div>
                    </div>
                </Col>
            </Row>
        </main>
    );
}

export default Product;
