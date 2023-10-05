import React from "react";
import "./bannerCardStyle.css";
import Image from "next/image";

const BannerCard = ({ cardTitle, aboutDiscri, desCPersentage }) => {
  return (
    <div className="mt-0">
      <div class="card-hover ">
        <div class="card-hover__content">
          <h3 class="card-hover__title">
            {cardTitle ? (
              cardTitle
            ) : (
              <p>
                {" "}
                Make your <span>choice</span> right now!
              </p>
            )}
          </h3>
          <p class="card-hover__text">
            {aboutDiscri
              ? aboutDiscri
              : "The car has special offer. The car best features is you can use anywhere like heal , pond and up down place. "}
          </p>
          <a href="#" class="card-hover__link">
            <span>Learn How</span>
            <svg
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </a>
        </div>
        <div class="card-hover__extra">
          <h4>
            Learn <span>now</span> and get{" "}
            <span>{desCPersentage ? desCPersentage : "40%"}</span> discount!
          </h4>
        </div>

        <Image
          src="https://images.unsplash.com/photo-1617650727577-950c8e4cf977?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z3JlZW4lMjBjYXJ8ZW58MHx8MHx8fDA%3D&w=400&q=60"
          alt="banner image"
          height={200}
          width={200}
        />
      </div>
    </div>
  );
};

export default BannerCard;
