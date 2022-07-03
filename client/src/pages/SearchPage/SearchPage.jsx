import React from "react";
import "./searchPage.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useFetch from "../../Hooks/useFetch";

function SearchPage() {

  const { data, loading, error, reFetch } = useFetch(
    "/posts"
  );
  return (
    <div className="searchContainer">
      <Navbar />
      <div className="search">
        {/* <div className="searchBackground">
          <img
            id="surfer"
            src={process.env.PUBLIC_URL + "/Assets/canoeing.jpg"}
            alt=""
          />
        </div> */}
        <div className="searchBar">
          <h2>Explore</h2>
          <div className="searchInput">
            <input type="text" placeholder="Search Activities" />
            <FontAwesomeIcon className="icon" icon={faMagnifyingGlass} />
          </div>
        </div>
      </div>

      <div className="searchedPosts">
        {loading ? (
          "loading"
        ) : (
          <>

            {
              data.map((item, i) => (
                <div className="card" key={item._id}>
                  <div class="content">
                    <img id="post-image" src={item.img[0]} alt="" />
                    <h4>{item.title}</h4>
                    <h6>
                      <span>Posted By : </span> {item.username}
                    </h6>
                    <h6>
                      <span>Date : </span> {item.date}
                    </h6>
                    <p>{item.desc}</p>
                    <button>Read More</button>
                  </div>
                </div >
              ))
            }
          </>
        )}
      </div>
      <Footer />
    </div >
  );
}

export default SearchPage;
