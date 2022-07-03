import React from "react";
import useFetch from "../../Hooks/useFetch";
import "./postcard.css";

function ActivityCard() {
  const { data, loading, error, reFetch } = useFetch(
    "/posts/getPosts?type=jetskiing,paragliding,canoeing"
  );
  console.log(data);
  return (
    <div class="card">
      {loading ? (
        "loading"
      ) : (
        <>
          {data.map((i) => (
            <div class="content" key={i}>
              <img id="post-image" src={data[i].img[0]} alt="" />
              <h4>{data[i].title}</h4>
              <h6>
                <span>Posted By : </span> {data[i].username}
              </h6>
              <h6>
                <span>Date : </span> {data[i].date}
              </h6>
              <p>{data[i].desc}</p>
              <button>Read More</button>
            </div>
          ))}
        </>
      )}
      {/* <div class="content">
          <img id="post-image" src= alt="" />
          <h4></h4>
          <h6>
            <span>Posted By : </span> 
          </h6>
          <h6>
            <span>Date : </span> 
          </h6>
          <p></p>
          <button>Read More</button>
        </div> */}
    </div>
  );
}

export default ActivityCard;
