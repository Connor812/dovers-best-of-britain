import React from "react";
import { Link } from "react-router-dom";
import { GoSearch } from "react-icons/go";
import "../assets/css/pastries.css";

function ShopProducts() {
    return (
        <main>

            <h1 className="shopping-category-name">Category Name</h1>
            <center>
                <p className="shopping-category-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic voluptas reiciendis quos dolores nesciunt minus ea mollitia, magni tenetur, quidem possimus architecto eaque, aliquam aliquid quod. Laboriosam dicta expedita ab!</p>
                <div className="home-search-container">
                    <input type="text" className="home-search" placeholder="Enter product name, SKU etc..." />
                    <button className="search-icon">
                        <GoSearch />
                    </button>
                </div>
            </center>

            <center>
                <section className="shop-pastries-container">
                    <div className="pastry">
                        <div className="pastry-img-container">
                            <img className="pastry-img" src="/assets/images/pastry.png" alt="Pastry" />
                        </div>
                        <div className="pastry-info-container">
                            <h1 className="pastry-title">
                                Pastry
                            </h1>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint, distinctio corporis debitis, suscipit pariatur minima at neque ab officia laborum voluptate possimus sapiente dolorem explicabo similique exercitationem, delectus harum fuga cupiditate! Aperiam sit vel iusto impedit ipsam fuga facilis explicabo.
                            </p>
                            <div className="pastry-pricing-container">
                                <div>

                                    <div>
                                        Single: $6.00
                                    </div>
                                    <div>
                                        6-Pack: $30.00
                                    </div>
                                    <div>
                                        12-Pack: $60.00
                                    </div>
                                </div>
                                <div>
                                    <button className="add-to-cart-btn">Add To Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="pastry">
                        <div className="pastry-img-container">
                            <img className="pastry-img" src="/assets/images/pastry.png" alt="Pastry" />
                        </div>
                        <div className="pastry-info-container">
                            <h1 className="pastry-title">
                                Pastry
                            </h1>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint, distinctio corporis debitis, suscipit pariatur minima at neque ab officia laborum voluptate possimus sapiente dolorem explicabo similique exercitationem, delectus harum fuga cupiditate! Aperiam sit vel iusto impedit ipsam fuga facilis explicabo.
                            </p>
                            <div className="pastry-pricing-container">
                                <div>

                                    <div>
                                        Single: $6.00
                                    </div>
                                    <div>
                                        6-Pack: $30.00
                                    </div>
                                    <div>
                                        12-Pack: $60.00
                                    </div>
                                </div>
                                <div>
                                    <button className="add-to-cart-btn">Add To Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="pastry">
                        <div className="pastry-img-container">
                            <img className="pastry-img" src="/assets/images/pastry.png" alt="Pastry" />
                        </div>
                        <div className="pastry-info-container">
                            <h1 className="pastry-title">
                                Pastry
                            </h1>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint, distinctio corporis debitis, suscipit pariatur minima at neque ab officia laborum voluptate possimus sapiente dolorem explicabo similique exercitationem, delectus harum fuga cupiditate! Aperiam sit vel iusto impedit ipsam fuga facilis explicabo.
                            </p>
                            <div className="pastry-pricing-container">
                                <div>

                                    <div>
                                        Single: $6.00
                                    </div>
                                    <div>
                                        6-Pack: $30.00
                                    </div>
                                    <div>
                                        12-Pack: $60.00
                                    </div>
                                </div>
                                <div>
                                    <button className="add-to-cart-btn">Add To Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="pastry">
                        <div className="pastry-img-container">
                            <img className="pastry-img" src="/assets/images/pastry.png" alt="Pastry" />
                        </div>
                        <div className="pastry-info-container">
                            <h1 className="pastry-title">
                                Pastry
                            </h1>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint, distinctio corporis debitis, suscipit pariatur minima at neque ab officia laborum voluptate possimus sapiente dolorem explicabo similique exercitationem, delectus harum fuga cupiditate! Aperiam sit vel iusto impedit ipsam fuga facilis explicabo.
                            </p>
                            <div className="pastry-pricing-container">
                                <div>

                                    <div>
                                        Single: $6.00
                                    </div>
                                    <div>
                                        6-Pack: $30.00
                                    </div>
                                    <div>
                                        12-Pack: $60.00
                                    </div>
                                </div>
                                <div>
                                    <button className="add-to-cart-btn">Add To Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>




                </section>
            </center>

        </main>
    );
}

export default ShopProducts;