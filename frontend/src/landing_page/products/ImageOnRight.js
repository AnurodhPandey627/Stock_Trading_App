import React from "react";

function ImageOnRight({productTitle, productDescription, learnMore, imageUrl}) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-5 p-5">
          <h4>{productTitle}</h4>
          <p className="mt-4">{productDescription}</p>
          <a href={learnMore}>
            Learn more <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
        {/* <div className="col-2"></div> */}
        <div className="col-5 pb-5">
          <img src={imageUrl} />
        </div>
      </div>
    </div>
  );
}

export default ImageOnRight;
