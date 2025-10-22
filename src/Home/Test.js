import React, { Fragment, useState, useEffect } from "react";
import park from "./edu.PNG";
import axios from "axios";
const Test = () => {
  const [downloads, setDownloads] = useState([]);
  const [loading, setLoading] = useState([]);
  useEffect(() => {
    const fetchDownloads = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/book`);
        setDownloads(response.data.data); // Update downloads state with fetched data
        setLoading(false);
      } catch (error) {
        console.error("Error fetching downloads:", error);
        setLoading(false);
      }
    };

    fetchDownloads();
  }, []); // Fetch downloads on component mount

  return (
    <div>
      <main id="tg-main" class="tg-main tg-haslayout">
        <div class="tg-sectionspace tg-haslayout">
          <div class="container">
            <div class="row">
              <div id="tg-twocolumns" class="tg-twocolumns">
                <div class="col-xs-12 col-sm-8 col-md-8 col-lg-12 pull-right">
                  <div id="tg-content" class="tg-content">
                    <div class="tg-products">
                      <div class="tg-sectionhead">
                        <h2>
                          <span>People’s Choice</span>Bestselling Books
                        </h2>
                      </div>

                      <div class="tg-productgrid">
                        {downloads.map((item, index) => (
                          <div class="col-xs-6 col-sm-6 col-md-4 col-lg-3">
                            <div class="tg-postbook">
                              <figure class="tg-featureimg">
                                <div class="tg-bookimg">
                                  <div class="tg-frontcover">
                                    <img
                                      src={`https://edupros.s3.amazonaws.com/${item.imageUrl}`}
                                      alt="image description"
                                    />
                                  </div>
                                  <div class="tg-backcover">
                                    <img
                                      src={`https://edupros.s3.amazonaws.com/${item.imageUrl}`}
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
                                      {item.category}
                                    </a>
                                  </li>
                                </ul>
                                <div class="tg-themetagbox">
                                  <span class="tg-themetag">
                                    {" "}
                                    {item.status}
                                  </span>
                                </div>
                                <div class="tg-booktitle">
                                  <h3>
                                    <a href="javascript:void(0);">
                                      {item.title}
                                    </a>
                                  </h3>
                                </div>
                                <span class="tg-bookwriter">
                                  By:{" "}
                                  <a href="javascript:void(0);">
                                    {item.authorName}
                                  </a>
                                </span>
                                <span class="tg-stars">
                                  <span></span>
                                </span>
                                <span class="tg-bookprice">
                                  <ins>$ {item.ourprice}</ins>
                                  <del>$ {item.genprice}</del>
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
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Test;
