import React from "react";

function ImageOnLeft({
  imageUrl,
  productTitle,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mb-5">
      <div className="row">
        <div className="col-5 p-5">
          <img src={imageUrl} alt=""/>
        </div>
        <div className="col-2"></div>
        <div className="col-5 p-5">
          <h4>{productTitle}</h4>
          <p className="mt-4">{productDescription}</p>
          <div className="mt-3">
            <a href={tryDemo}>
                Try demo <i class="fa-solid fa-arrow-right"></i>
            </a>
            <a href={learnMore} style={{marginLeft:"30%"}}>
                Learn more <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
          <div className="mt-5">
            <a href={googlePlay}>
                <img src="media/images/google-play-badge.svg" alt="" />
            </a>
            <a href={appStore} style={{marginLeft:"20%"}}>
                <img src="media/images/appstore-badge.svg" alt=""/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageOnLeft;
