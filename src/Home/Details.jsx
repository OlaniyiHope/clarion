import React, { Fragment, useState, useEffect } from "react";
import Footer from "../Footer";
import Header from "../Header";
import axios from "axios";
import hope from "./img-02.jpg";
import { useParams } from "react-router-dom";
import Test from "../Test";
// import useFetch from "../../components/useFetch/useFetch";

const Details = () => {
  const { id } = useParams(); // Access route parameters using useParams hook
  const [book, setBook] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://eduproapi.vercel.app/api/book/${id}`
        );
        setBook(response.data.data);
      } catch (error) {
        console.error("Error fetching book details:", error);
      }
    };

    fetchData();
  }, [id]); // Make sure to include id in the dependency array

  useEffect(() => {
    console.log("Book state:", book); // Log book state
    console.log("Cart items:", cartItems); // Log cart items state
    console.log("Cart count:", cartCount); // Log cart count state
  }, [book, cartItems, cartCount]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
    setCartCount(cartCount + 1);
  };

  return (
    <div>
      <body class="tg-home tg-homeone">
        <div id="tg-wrapper" class="tg-wrapper tg-haslayout">
          <Test cartCount={cartCount} />

          <div
            class="tg-innerbanner tg-haslayout tg-parallax tg-bginnerbanner"
            data-z-index="-100"
            data-appear-top-offset="600"
            data-parallax="scroll"
            data-image-src="images/parallax/bgparallax-07.jpg"
          >
            <div class="container">
              <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <div class="tg-innerbannercontent">
                    <h1>All Products</h1>
                    <ol class="tg-breadcrumb">
                      <li>
                        <a href="javascript:void(0);">home</a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">Products</a>
                      </li>
                      {book ? (
                        <li class="tg-active">{book.title}</li>
                      ) : (
                        <div>Loading...</div>
                      )}
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <main id="tg-main" class="tg-main tg-haslayout">
            <div class="tg-sectionspace tg-haslayout">
              <div class="container">
                <div class="row">
                  <div id="tg-twocolumns" class="tg-twocolumns">
                    <div class="col-xs-12 col-sm-8 col-md-8 col-lg-9 pull-right">
                      <div id="tg-content" class="tg-content">
                        <div class="tg-productdetail">
                          <div class="row">
                            <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                              <div class="tg-postbook">
                                <figure class="tg-featureimg">
                                  {book ? (
                                    <img
                                      src={`https://edupros.s3.amazonaws.com/${book.imageUrl}`}
                                      alt="image description"
                                    />
                                  ) : (
                                    <div>Loading...</div>
                                  )}
                                </figure>
                                {book ? (
                                  <div class="tg-postbookcontent">
                                    <span class="tg-bookprice">
                                      <ins>${book.ourprice}</ins>
                                      <del>${book.genprice}</del>
                                    </span>
                                    <span class="tg-bookwriter">
                                      {`${book.genprice} - ${book.ourprice} = ${
                                        book.genprice - book.ourprice
                                      }`}
                                    </span>
                                    <ul class="tg-delevrystock">
                                      <li>
                                        <i class="icon-rocket"></i>
                                        <span>
                                          Free delivery anywhere in Lagos
                                        </span>
                                      </li>
                                      <li>
                                        <i class="icon-checkmark-circle"></i>
                                        <span>
                                          Dispatch from other state is two
                                          working days
                                        </span>
                                      </li>
                                      <li>
                                        <i class="icon-store"></i>
                                        <span>
                                          Status: <em>In Stock</em>
                                        </span>
                                      </li>
                                    </ul>
                                    <div class="tg-quantityholder">
                                      <em class="minus">-</em>
                                      <input
                                        type="text"
                                        class="result"
                                        value="0"
                                        id="quantity1"
                                        name="quantity"
                                      />
                                      <em class="plus">+</em>
                                    </div>
                                    <a
                                      class="tg-btn tg-active tg-btn-lg"
                                      href="javascript:void(0);"
                                    >
                                      Add To Basket
                                    </a>
                                    <a
                                      class="tg-btnaddtowishlist"
                                      href="javascript:void(0);"
                                    >
                                      <span onClick={() => addToCart(book)}>
                                        add to cart
                                      </span>
                                    </a>
                                  </div>
                                ) : (
                                  <div>Loading...</div>
                                )}
                              </div>
                            </div>

                            {book ? (
                              <div class="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                                <div class="tg-productcontent">
                                  <ul class="tg-bookscategories">
                                    <li>
                                      <a href="javascript:void(0);">
                                        Category: {book.category}
                                      </a>
                                    </li>
                                  </ul>
                                  <div class="tg-themetagbox">
                                    <span class="tg-themetag">
                                      {book.status}
                                    </span>
                                  </div>
                                  <div class="tg-booktitle">
                                    <h3>{book.title}</h3>
                                  </div>
                                  <span class="tg-bookwriter">
                                    By:{" "}
                                    <a href="javascript:void(0);">
                                      {book.authorName}
                                    </a>
                                  </span>
                                  <span class="tg-stars">
                                    <span></span>
                                  </span>
                                  <span class="tg-addreviews">
                                    <a href="javascript:void(0);">
                                      Add Your Review
                                    </a>
                                  </span>
                                  <div class="tg-share">
                                    <span>Share:</span>
                                    <ul class="tg-socialicons">
                                      <li class="tg-facebook">
                                        <a href="javascript:void(0);">
                                          <i class="fa fa-facebook"></i>
                                        </a>
                                      </li>
                                      <li class="tg-twitter">
                                        <a href="javascript:void(0);">
                                          <i class="fa fa-twitter"></i>
                                        </a>
                                      </li>
                                      <li class="tg-twitter">
                                        <a href="javascript:void(0);">
                                          <i class="fa fa-instagram"></i>
                                        </a>
                                      </li>
                                      <li class="tg-linkedin">
                                        <a href="javascript:void(0);">
                                          <i class="fa fa-linkedin"></i>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                  <div class="tg-description">
                                    <p>
                                      {book.desc}
                                      <a href="javascript:void(0);">
                                        Read More
                                      </a>
                                    </p>
                                  </div>
                                  <div class="tg-sectionhead">
                                    <h2>Product Details</h2>
                                  </div>
                                  <ul class="tg-productinfo">
                                    <li>
                                      <span>Format:</span>
                                      <span>{book.format}</span>
                                    </li>
                                    <li>
                                      <span>Pages:</span>
                                      <span>{book.pages} pages</span>
                                    </li>
                                    <li>
                                      <span>Dimensions:</span>
                                      <span>{book.dimensions}</span>
                                    </li>
                                    <li>
                                      <span>Publication Date:</span>
                                      <span>{book.pubDate}</span>
                                    </li>
                                    <li>
                                      <span>Publisher:</span>
                                      <span>{book.authorName}</span>
                                    </li>
                                    <li>
                                      <span>Language:</span>
                                      <span>{book.language}</span>
                                    </li>

                                    <li>
                                      <span>ISBN</span>
                                      <span>{book.ISBN}</span>
                                    </li>

                                    {/*}    <li>
                                      <span>Other Fomate:</span>
                                      <span>CD-Audio, Paperback, E-Book</span>
                            </li>*/}
                                  </ul>
                                  <div class="tg-alsoavailable">
                                    <figure>
                                      <img src={hope} alt="image description" />
                                      <figcaption>
                                        <h3>Also Available in:</h3>
                                        <ul>
                                          <li>
                                            <span>
                                              CD-Audio ${book.ourprice}
                                            </span>
                                          </li>
                                          <li>
                                            <span>
                                              Paperback ${book.ourprice}
                                            </span>
                                          </li>
                                          <li>
                                            <span>E-Book ${book.ourprice}</span>
                                          </li>
                                        </ul>
                                      </figcaption>
                                    </figure>
                                  </div>
                                </div>
                              </div>
                            ) : (
                              <div>Loading...</div>
                            )}

                            <div class="tg-productdescription">
                              {book ? (
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                  <div class="tg-sectionhead">
                                    <h2>Product Description</h2>
                                  </div>
                                  <ul class="tg-themetabs" role="tablist">
                                    <li role="presentation" class="active">
                                      <a href="#description" data-toggle="tab">
                                        Description
                                      </a>
                                    </li>
                                    <li role="presentation">
                                      <a href="/review" data-toggle="tab">
                                        Reviews
                                      </a>
                                    </li>
                                  </ul>
                                  <div class="tg-tab-content tab-content">
                                    <div
                                      role="tabpanel"
                                      class="tg-tab-pane tab-pane active"
                                      id="description"
                                    >
                                      <div class="tg-description">
                                        {book.desc}
                                      </div>
                                    </div>
                                    <div
                                      role="tabpanel"
                                      class="tg-tab-pane tab-pane"
                                      id="review"
                                    >
                                      <div class="tg-description">
                                        <p>
                                          Consectetur adipisicing elit, sed do
                                          eiusmod tempor incididunt ut labore et
                                          dolore magna aliqua. Ut enim ad minim
                                          veni quis nostrud exercitation ullamco
                                          laboris nisi ut aliquip ex ea commodo
                                          consequat. Duis aute irure dolor in
                                          reprehenden voluptate velit esse
                                          cillum dolore eu fugiat nulla
                                          pariatur.
                                        </p>
                                        <figure class="tg-alignleft">
                                          <img
                                            src="images/placeholdervtwo.jpg"
                                            alt="image description"
                                          />
                                          <iframe src="https://www.youtube.com/embed/aLwpuDpZm1k?rel=0&amp;controls=0&amp;showinfo=0"></iframe>
                                        </figure>
                                        <ul class="tg-liststyle">
                                          <li>
                                            <span>
                                              Sed do eiusmod tempor incididunt
                                              ut labore et dolore
                                            </span>
                                          </li>
                                          <li>
                                            <span>
                                              Magna aliqua enim ad minim veniam
                                            </span>
                                          </li>
                                          <li>
                                            <span>
                                              Quis nostrud exercitation ullamco
                                              laboris nisi ut
                                            </span>
                                          </li>
                                          <li>
                                            <span>
                                              Aliquip ex ea commodo consequat
                                              aute dolor reprehenderit
                                            </span>
                                          </li>
                                          <li>
                                            <span>
                                              Voluptate velit esse cillum dolore
                                              eu fugiat nulla pariatur
                                            </span>
                                          </li>
                                          <li>
                                            <span>
                                              Magna aliqua enim ad minim veniam
                                            </span>
                                          </li>
                                          <li>
                                            <span>
                                              Quis nostrud exercitation ullamco
                                              laboris nisi ut
                                            </span>
                                          </li>
                                        </ul>
                                        <p>
                                          Sed ut perspiciatis unde omnis iste
                                          natus error sit voluptatem accusantium
                                          doloremque laudantium, totam remmata
                                          aperiam, eaque ipsa quae ab illo
                                          inventore veritatis et quasi
                                          architecto beatae vitae dicta sunt
                                          explicabo. Nemo enimsam voluptatem
                                          quia voluptas sit aspernatur aut odit
                                          aut fugit, sed quia consequuntur magni
                                          dolores eos quistatoa.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              ) : (
                                <div>Loading...</div>
                              )}
                            </div>
                            <div class="tg-aboutauthor">
                              {book ? (
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                  <div class="tg-sectionhead">
                                    <h2>About Author</h2>
                                  </div>
                                  <div class="tg-authorbox">
                                    <figure class="tg-authorimg">
                                      <img alt="image description" />
                                    </figure>
                                    <div class="tg-authorinfo">
                                      <div class="tg-authorhead">
                                        <div class="tg-leftarea">
                                          <div class="tg-authorname">
                                            <h2>{book.authorName}</h2>
                                            <span>{book.AuthorSince}</span>
                                          </div>
                                        </div>
                                        <div class="tg-rightarea">
                                          <ul class="tg-socialicons">
                                            <li class="tg-facebook">
                                              <a href="javascript:void(0);">
                                                <i class="fa fa-facebook"></i>
                                              </a>
                                            </li>
                                            <li class="tg-twitter">
                                              <a href="javascript:void(0);">
                                                <i class="fa fa-twitter"></i>
                                              </a>
                                            </li>
                                            <li class="tg-linkedin">
                                              <a href="javascript:void(0);">
                                                <i class="fa fa-linkedin"></i>
                                              </a>
                                            </li>
                                            <li class="tg-googleplus">
                                              <a href="javascript:void(0);">
                                                <i class="fa fa-google-plus"></i>
                                              </a>
                                            </li>
                                            <li class="tg-rss">
                                              <a href="javascript:void(0);">
                                                <i class="fa fa-rss"></i>
                                              </a>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <div class="tg-description">
                                        <p>
                                          Laborum sed ut perspiciatis unde omnis
                                          iste natus sit voluptatem accusantium
                                          doloremque laudantium totam rem
                                          aperiam eaque ipsa quae ab illo
                                          inventore veritatis etation.
                                        </p>
                                      </div>
                                      <a
                                        class="tg-btn tg-active"
                                        href="javascript:void(0);"
                                      >
                                        View All Books
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              ) : (
                                <div>Loading...</div>
                              )}
                            </div>

                            <div class="tg-relatedproducts">
                              <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <div class="tg-sectionhead">
                                  <h2>
                                    <span>Related Products</span>You May Also
                                    Like
                                  </h2>
                                  <a class="tg-btn" href="javascript:void(0);">
                                    View All
                                  </a>
                                </div>
                              </div>
                              <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <div
                                  id="tg-relatedproductslider"
                                  class="tg-relatedproductslider tg-relatedbooks owl-carousel"
                                >
                                  <div class="item">
                                    <div class="tg-postbook">
                                      <figure class="tg-featureimg">
                                        <div class="tg-bookimg">
                                          <div class="tg-frontcover">
                                            <img alt="image description" />
                                          </div>
                                          <div class="tg-backcover">
                                            <img
                                              src=""
                                              alt="image description"
                                            />
                                          </div>
                                        </div>
                                        <a
                                          class="tg-btnaddtowishlist"
                                          href="javascript:void(0);"
                                        >
                                          <i class="icon-heart"></i>
                                          <span>add to wishlist</span>
                                        </a>
                                      </figure>
                                      <div class="tg-postbookcontent">
                                        <ul class="tg-bookscategories">
                                          <li>
                                            <a href="javascript:void(0);">
                                              Adventure
                                            </a>
                                          </li>
                                          <li>
                                            <a href="javascript:void(0);">
                                              Fun
                                            </a>
                                          </li>
                                        </ul>
                                        <div class="tg-themetagbox">
                                          <span class="tg-themetag">sale</span>
                                        </div>
                                        <div class="tg-booktitle">
                                          <h3>
                                            <a href="javascript:void(0);">
                                              Help Me Find My Stomach
                                            </a>
                                          </h3>
                                        </div>
                                        <span class="tg-bookwriter">
                                          By:{" "}
                                          <a href="javascript:void(0);">
                                            Angela Gunning
                                          </a>
                                        </span>
                                        <span class="tg-stars">
                                          <span></span>
                                        </span>
                                        <span class="tg-bookprice">
                                          <ins>$25.18</ins>
                                          <del>$27.20</del>
                                        </span>
                                        <a
                                          class="tg-btn tg-btnstyletwo"
                                          href="javascript:void(0);"
                                        >
                                          <i class="fa fa-shopping-basket"></i>
                                          <em>Add To Basket</em>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="item">
                                    <div class="tg-postbook">
                                      <figure class="tg-featureimg">
                                        <div class="tg-bookimg">
                                          <div class="tg-frontcover">
                                            <img
                                              src=""
                                              alt="image description"
                                            />
                                          </div>
                                          <div class="tg-backcover">
                                            <img
                                              src=""
                                              alt="image description"
                                            />
                                          </div>
                                        </div>
                                        <a
                                          class="tg-btnaddtowishlist"
                                          href="javascript:void(0);"
                                        >
                                          <i class="icon-heart"></i>
                                          <span>add to wishlist</span>
                                        </a>
                                      </figure>
                                      <div class="tg-postbookcontent">
                                        <ul class="tg-bookscategories">
                                          <li>
                                            <a href="javascript:void(0);">
                                              Adventure
                                            </a>
                                          </li>
                                          <li>
                                            <a href="javascript:void(0);">
                                              Fun
                                            </a>
                                          </li>
                                        </ul>
                                        <div class="tg-themetagbox">
                                          <span class="tg-themetag">sale</span>
                                        </div>
                                        <div class="tg-booktitle">
                                          <h3>
                                            <a href="javascript:void(0);">
                                              Drive Safely, No Bumping
                                            </a>
                                          </h3>
                                        </div>
                                        <span class="tg-bookwriter">
                                          By:{" "}
                                          <a href="javascript:void(0);">
                                            Angela Gunning
                                          </a>
                                        </span>
                                        <span class="tg-stars">
                                          <span></span>
                                        </span>
                                        <span class="tg-bookprice">
                                          <ins>$25.18</ins>
                                          <del>$27.20</del>
                                        </span>
                                        <a
                                          class="tg-btn tg-btnstyletwo"
                                          href="javascript:void(0);"
                                        >
                                          <i class="fa fa-shopping-basket"></i>
                                          <em>Add To Basket</em>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="item">
                                    <div class="tg-postbook">
                                      <figure class="tg-featureimg">
                                        <div class="tg-bookimg">
                                          <div class="tg-frontcover">
                                            <img
                                              src=""
                                              alt="image description"
                                            />
                                          </div>
                                          <div class="tg-backcover">
                                            <img
                                              src=""
                                              alt="image description"
                                            />
                                          </div>
                                        </div>
                                        <a
                                          class="tg-btnaddtowishlist"
                                          href="javascript:void(0);"
                                        >
                                          <i class="icon-heart"></i>
                                          <span>add to wishlist</span>
                                        </a>
                                      </figure>
                                      <div class="tg-postbookcontent">
                                        <ul class="tg-bookscategories">
                                          <li>
                                            <a href="javascript:void(0);">
                                              Adventure
                                            </a>
                                          </li>
                                          <li>
                                            <a href="javascript:void(0);">
                                              Fun
                                            </a>
                                          </li>
                                        </ul>
                                        <div class="tg-themetagbox"></div>
                                        <div class="tg-booktitle">
                                          <h3>
                                            <a href="javascript:void(0);">
                                              Let The Good Times Roll Up
                                            </a>
                                          </h3>
                                        </div>
                                        <span class="tg-bookwriter">
                                          By:{" "}
                                          <a href="javascript:void(0);">
                                            Angela Gunning
                                          </a>
                                        </span>
                                        <span class="tg-stars">
                                          <span></span>
                                        </span>
                                        <span class="tg-bookprice">
                                          <ins>$25.18</ins>
                                          <del>$27.20</del>
                                        </span>
                                        <a
                                          class="tg-btn tg-btnstyletwo"
                                          href="javascript:void(0);"
                                        >
                                          <i class="fa fa-shopping-basket"></i>
                                          <em>Add To Basket</em>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="item">
                                    <div class="tg-postbook">
                                      <figure class="tg-featureimg">
                                        <div class="tg-bookimg">
                                          <div class="tg-frontcover">
                                            <img
                                              src=""
                                              alt="image description"
                                            />
                                          </div>
                                          <div class="tg-backcover">
                                            <img
                                              src=""
                                              alt="image description"
                                            />
                                          </div>
                                        </div>
                                        <a
                                          class="tg-btnaddtowishlist"
                                          href="javascript:void(0);"
                                        >
                                          <i class="icon-heart"></i>
                                          <span>add to wishlist</span>
                                        </a>
                                      </figure>
                                      <div class="tg-postbookcontent">
                                        <ul class="tg-bookscategories">
                                          <li>
                                            <a href="javascript:void(0);">
                                              Adventure
                                            </a>
                                          </li>
                                          <li>
                                            <a href="javascript:void(0);">
                                              Fun
                                            </a>
                                          </li>
                                        </ul>
                                        <div class="tg-themetagbox">
                                          <span class="tg-themetag">sale</span>
                                        </div>
                                        <div class="tg-booktitle">
                                          <h3>
                                            <a href="javascript:void(0);">
                                              Our State Fair Is A Great State
                                              Fair
                                            </a>
                                          </h3>
                                        </div>
                                        <span class="tg-bookwriter">
                                          By:{" "}
                                          <a href="javascript:void(0);">
                                            Angela Gunning
                                          </a>
                                        </span>
                                        <span class="tg-stars">
                                          <span></span>
                                        </span>
                                        <span class="tg-bookprice">
                                          <ins>$25.18</ins>
                                          <del>$27.20</del>
                                        </span>
                                        <a
                                          class="tg-btn tg-btnstyletwo"
                                          href="javascript:void(0);"
                                        >
                                          <i class="fa fa-shopping-basket"></i>
                                          <em>Add To Basket</em>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="item">
                                    <div class="tg-postbook">
                                      <figure class="tg-featureimg">
                                        <div class="tg-bookimg">
                                          <div class="tg-frontcover">
                                            <img
                                              src=""
                                              alt="image description"
                                            />
                                          </div>
                                          <div class="tg-backcover">
                                            <img
                                              src=""
                                              alt="image description"
                                            />
                                          </div>
                                        </div>
                                        <a
                                          class="tg-btnaddtowishlist"
                                          href="javascript:void(0);"
                                        >
                                          <i class="icon-heart"></i>
                                          <span>add to wishlist</span>
                                        </a>
                                      </figure>
                                      <div class="tg-postbookcontent">
                                        <ul class="tg-bookscategories">
                                          <li>
                                            <a href="javascript:void(0);">
                                              Adventure
                                            </a>
                                          </li>
                                          <li>
                                            <a href="javascript:void(0);">
                                              Fun
                                            </a>
                                          </li>
                                        </ul>
                                        <div class="tg-themetagbox"></div>
                                        <div class="tg-booktitle">
                                          <h3>
                                            <a href="javascript:void(0);">
                                              Put The Petal To The Metal
                                            </a>
                                          </h3>
                                        </div>
                                        <span class="tg-bookwriter">
                                          By:{" "}
                                          <a href="javascript:void(0);">
                                            Angela Gunning
                                          </a>
                                        </span>
                                        <span class="tg-stars">
                                          <span></span>
                                        </span>
                                        <span class="tg-bookprice">
                                          <ins>$25.18</ins>
                                          <del>$27.20</del>
                                        </span>
                                        <a
                                          class="tg-btn tg-btnstyletwo"
                                          href="javascript:void(0);"
                                        >
                                          <i class="fa fa-shopping-basket"></i>
                                          <em>Add To Basket</em>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="item">
                                    <div class="tg-postbook">
                                      <figure class="tg-featureimg">
                                        <div class="tg-bookimg">
                                          <div class="tg-frontcover">
                                            <img
                                              src=""
                                              alt="image description"
                                            />
                                          </div>
                                          <div class="tg-backcover">
                                            <img
                                              src=""
                                              alt="image description"
                                            />
                                          </div>
                                        </div>
                                        <a
                                          class="tg-btnaddtowishlist"
                                          href="javascript:void(0);"
                                        >
                                          <i class="icon-heart"></i>
                                          <span>add to wishlist</span>
                                        </a>
                                      </figure>
                                      <div class="tg-postbookcontent">
                                        <ul class="tg-bookscategories">
                                          <li>
                                            <a href="javascript:void(0);">
                                              Adventure
                                            </a>
                                          </li>
                                          <li>
                                            <a href="javascript:void(0);">
                                              Fun
                                            </a>
                                          </li>
                                        </ul>
                                        <div class="tg-themetagbox">
                                          <span class="tg-themetag">sale</span>
                                        </div>
                                        <div class="tg-booktitle">
                                          <h3>
                                            <a href="javascript:void(0);">
                                              Help Me Find My Stomach
                                            </a>
                                          </h3>
                                        </div>
                                        <span class="tg-bookwriter">
                                          By:{" "}
                                          <a href="javascript:void(0);">
                                            Angela Gunning
                                          </a>
                                        </span>
                                        <span class="tg-stars">
                                          <span></span>
                                        </span>
                                        <span class="tg-bookprice">
                                          <ins>$25.18</ins>
                                          <del>$27.20</del>
                                        </span>
                                        <a
                                          class="tg-btn tg-btnstyletwo"
                                          href="javascript:void(0);"
                                        >
                                          <i class="fa fa-shopping-basket"></i>
                                          <em>Add To Basket</em>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="item">
                                    <div class="tg-postbook">
                                      <figure class="tg-featureimg">
                                        <div class="tg-bookimg">
                                          <div class="tg-frontcover">
                                            <img
                                              src=""
                                              alt="image description"
                                            />
                                          </div>
                                          <div class="tg-backcover">
                                            <img
                                              src=""
                                              alt="image description"
                                            />
                                          </div>
                                        </div>
                                        <a
                                          class="tg-btnaddtowishlist"
                                          href="javascript:void(0);"
                                        >
                                          <i class="icon-heart"></i>
                                          <span>add to wishlist</span>
                                        </a>
                                      </figure>
                                      <div class="tg-postbookcontent">
                                        <ul class="tg-bookscategories">
                                          <li>
                                            <a href="javascript:void(0);">
                                              Adventure
                                            </a>
                                          </li>
                                          <li>
                                            <a href="javascript:void(0);">
                                              Fun
                                            </a>
                                          </li>
                                        </ul>
                                        <div class="tg-themetagbox"></div>
                                        <div class="tg-booktitle">
                                          <h3>
                                            <a href="javascript:void(0);">
                                              Let The Good Times Roll Up
                                            </a>
                                          </h3>
                                        </div>
                                        <span class="tg-bookwriter">
                                          By:{" "}
                                          <a href="javascript:void(0);">
                                            Angela Gunning
                                          </a>
                                        </span>
                                        <span class="tg-stars">
                                          <span></span>
                                        </span>
                                        <span class="tg-bookprice">
                                          <ins>$25.18</ins>
                                          <del>$27.20</del>
                                        </span>
                                        <a
                                          class="tg-btn tg-btnstyletwo"
                                          href="javascript:void(0);"
                                        >
                                          <i class="fa fa-shopping-basket"></i>
                                          <em>Add To Basket</em>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-xs-12 col-sm-4 col-md-4 col-lg-3 pull-left">
                      <aside id="tg-sidebar" class="tg-sidebar">
                        <div class="tg-widget tg-widgetsearch">
                          <form class="tg-formtheme tg-formsearch">
                            <div class="form-group">
                              <button type="submit">
                                <i class="icon-magnifier"></i>
                              </button>
                              <input
                                type="search"
                                name="search"
                                class="form-group"
                                placeholder="Search by title, author, key..."
                              />
                            </div>
                          </form>
                        </div>
                        <div class="tg-widget tg-catagories">
                          <div class="tg-widgettitle">
                            <h3>Categories</h3>
                          </div>
                          <div class="tg-widgetcontent">
                            <ul>
                              <li>
                                <a href="javascript:void(0);">
                                  <span>Art &amp; Photography</span>
                                  <em>28245</em>
                                </a>
                              </li>
                              <li>
                                <a href="javascript:void(0);">
                                  <span>Biography</span>
                                  <em>4856</em>
                                </a>
                              </li>
                              <li>
                                <a href="javascript:void(0);">
                                  <span>Children’s Book</span>
                                  <em>8654</em>
                                </a>
                              </li>
                              <li>
                                <a href="javascript:void(0);">
                                  <span>Craft &amp; Hobbies</span>
                                  <em>6247</em>
                                </a>
                              </li>
                              <li>
                                <a href="javascript:void(0);">
                                  <span>Crime &amp; Thriller</span>
                                  <em>888654</em>
                                </a>
                              </li>
                              <li>
                                <a href="javascript:void(0);">
                                  <span>Fantasy &amp; Horror</span>
                                  <em>873144</em>
                                </a>
                              </li>
                              <li>
                                <a href="javascript:void(0);">
                                  <span>Fiction</span>
                                  <em>18465</em>
                                </a>
                              </li>
                              <li>
                                <a href="javascript:void(0);">
                                  <span>Fod &amp; Drink</span>
                                  <em>3148</em>
                                </a>
                              </li>
                              <li>
                                <a href="javascript:void(0);">
                                  <span>Graphic, Anime &amp; Manga</span>
                                  <em>77531</em>
                                </a>
                              </li>
                              <li>
                                <a href="javascript:void(0);">
                                  <span>Science Fiction</span>
                                  <em>9247</em>
                                </a>
                              </li>
                              <li>
                                <a href="javascript:void(0);">
                                  <span>View All</span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="tg-widget tg-widgettrending">
                          <div class="tg-widgettitle">
                            <h3>Trending Products</h3>
                          </div>
                          <div class="tg-widgetcontent">
                            <ul>
                              <li>
                                <article class="tg-post">
                                  <figure>
                                    <a href="javascript:void(0);">
                                      <img src="" alt="image description" />
                                    </a>
                                  </figure>
                                  <div class="tg-postcontent">
                                    <div class="tg-posttitle">
                                      <h3>
                                        <a href="javascript:void(0);">
                                          Where The Wild Things Are
                                        </a>
                                      </h3>
                                    </div>
                                    <span class="tg-bookwriter">
                                      By:{" "}
                                      <a href="javascript:void(0);">
                                        Kathrine Culbertson
                                      </a>
                                    </span>
                                  </div>
                                </article>
                              </li>
                              <li>
                                <article class="tg-post">
                                  <figure>
                                    <a href="javascript:void(0);">
                                      <img src="" alt="image description" />
                                    </a>
                                  </figure>
                                  <div class="tg-postcontent">
                                    <div class="tg-posttitle">
                                      <h3>
                                        <a href="javascript:void(0);">
                                          Where The Wild Things Are
                                        </a>
                                      </h3>
                                    </div>
                                    <span class="tg-bookwriter">
                                      By:{" "}
                                      <a href="javascript:void(0);">
                                        Kathrine Culbertson
                                      </a>
                                    </span>
                                  </div>
                                </article>
                              </li>
                              <li>
                                <article class="tg-post">
                                  <figure>
                                    <a href="javascript:void(0);">
                                      <img src="" alt="image description" />
                                    </a>
                                  </figure>
                                  <div class="tg-postcontent">
                                    <div class="tg-posttitle">
                                      <h3>
                                        <a href="javascript:void(0);">
                                          Where The Wild Things Are
                                        </a>
                                      </h3>
                                    </div>
                                    <span class="tg-bookwriter">
                                      By:{" "}
                                      <a href="javascript:void(0);">
                                        Kathrine Culbertson
                                      </a>
                                    </span>
                                  </div>
                                </article>
                              </li>
                              <li>
                                <article class="tg-post">
                                  <figure>
                                    <a href="javascript:void(0);">
                                      <img src="" alt="image description" />
                                    </a>
                                  </figure>
                                  <div class="tg-postcontent">
                                    <div class="tg-posttitle">
                                      <h3>
                                        <a href="javascript:void(0);">
                                          Where The Wild Things Are
                                        </a>
                                      </h3>
                                    </div>
                                    <span class="tg-bookwriter">
                                      By:{" "}
                                      <a href="javascript:void(0);">
                                        Kathrine Culbertson
                                      </a>
                                    </span>
                                  </div>
                                </article>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="tg-widget tg-widgetinstagram">
                          <div class="tg-widgettitle">
                            <h3>Instagram</h3>
                          </div>
                          <div class="tg-widgetcontent">
                            <ul>
                              <li>
                                <figure>
                                  <img src="" alt="image description" />
                                  <figcaption>
                                    <a href="javascript:void(0);">
                                      <i class="icon-heart"></i>
                                      <em>50,134</em>
                                    </a>
                                  </figcaption>
                                </figure>
                              </li>
                              <li>
                                <figure>
                                  <img src="" alt="image description" />
                                  <figcaption>
                                    <a href="javascript:void(0);">
                                      <i class="icon-heart"></i>
                                      <em>50,134</em>
                                    </a>
                                  </figcaption>
                                </figure>
                              </li>
                              <li>
                                <figure>
                                  <img
                                    src="images/instagram/img-03.jpg"
                                    alt="image description"
                                  />
                                  <figcaption>
                                    <a href="javascript:void(0);">
                                      <i class="icon-heart"></i>
                                      <em>50,134</em>
                                    </a>
                                  </figcaption>
                                </figure>
                              </li>
                              <li>
                                <figure>
                                  <img
                                    src="images/instagram/img-04.jpg"
                                    alt="image description"
                                  />
                                  <figcaption>
                                    <a href="javascript:void(0);">
                                      <i class="icon-heart"></i>
                                      <em>50,134</em>
                                    </a>
                                  </figcaption>
                                </figure>
                              </li>
                              <li>
                                <figure>
                                  <img
                                    src="images/instagram/img-05.jpg"
                                    alt="image description"
                                  />
                                  <figcaption>
                                    <a href="javascript:void(0);">
                                      <i class="icon-heart"></i>
                                      <em>50,134</em>
                                    </a>
                                  </figcaption>
                                </figure>
                              </li>
                              <li>
                                <figure>
                                  <img
                                    src="images/instagram/img-06.jpg"
                                    alt="image description"
                                  />
                                  <figcaption>
                                    <a href="javascript:void(0);">
                                      <i class="icon-heart"></i>
                                      <em>50,134</em>
                                    </a>
                                  </figcaption>
                                </figure>
                              </li>
                              <li>
                                <figure>
                                  <img
                                    src="images/instagram/img-07.jpg"
                                    alt="image description"
                                  />
                                  <figcaption>
                                    <a href="javascript:void(0);">
                                      <i class="icon-heart"></i>
                                      <em>50,134</em>
                                    </a>
                                  </figcaption>
                                </figure>
                              </li>
                              <li>
                                <figure>
                                  <img
                                    src="images/instagram/img-08.jpg"
                                    alt="image description"
                                  />
                                  <figcaption>
                                    <a href="javascript:void(0);">
                                      <i class="icon-heart"></i>
                                      <em>50,134</em>
                                    </a>
                                  </figcaption>
                                </figure>
                              </li>
                              <li>
                                <figure>
                                  <img
                                    src="images/instagram/img-09.jpg"
                                    alt="image description"
                                  />
                                  <figcaption>
                                    <a href="javascript:void(0);">
                                      <i class="icon-heart"></i>
                                      <em>50,134</em>
                                    </a>
                                  </figcaption>
                                </figure>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="tg-widget tg-widgetblogers">
                          <div class="tg-widgettitle">
                            <h3>Top Bloogers</h3>
                          </div>
                          <div class="tg-widgetcontent">
                            <ul>
                              <li>
                                <div class="tg-author">
                                  <figure>
                                    <a href="javascript:void(0);">
                                      <img
                                        src="images/author/imag-03.jpg"
                                        alt="image description"
                                      />
                                    </a>
                                  </figure>
                                  <div class="tg-authorcontent">
                                    <h2>
                                      <a href="javascript:void(0);">
                                        Jude Morphew
                                      </a>
                                    </h2>
                                    <span>21,658 Published Books</span>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div class="tg-author">
                                  <figure>
                                    <a href="javascript:void(0);">
                                      <img
                                        src="images/author/imag-04.jpg"
                                        alt="image description"
                                      />
                                    </a>
                                  </figure>
                                  <div class="tg-authorcontent">
                                    <h2>
                                      <a href="javascript:void(0);">
                                        Jude Morphew
                                      </a>
                                    </h2>
                                    <span>21,658 Published Books</span>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div class="tg-author">
                                  <figure>
                                    <a href="javascript:void(0);">
                                      <img
                                        src="images/author/imag-05.jpg"
                                        alt="image description"
                                      />
                                    </a>
                                  </figure>
                                  <div class="tg-authorcontent">
                                    <h2>
                                      <a href="javascript:void(0);">
                                        Jude Morphew
                                      </a>
                                    </h2>
                                    <span>21,658 Published Books</span>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div class="tg-author">
                                  <figure>
                                    <a href="javascript:void(0);">
                                      <img
                                        src="images/author/imag-06.jpg"
                                        alt="image description"
                                      />
                                    </a>
                                  </figure>
                                  <div class="tg-authorcontent">
                                    <h2>
                                      <a href="javascript:void(0);">
                                        Jude Morphew
                                      </a>
                                    </h2>
                                    <span>21,658 Published Books</span>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </aside>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
          <Footer />
        </div>
      </body>
    </div>
  );
};

export default Details;
