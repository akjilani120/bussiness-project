import React from "react";

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
              : "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Officia quisquam doloremque nostrum laboriosam, blanditiis libero corporis nulla a aut? "}
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
        <img
          src="https://images.unsplash.com/photo-1586511925558-a4c6376fe65f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=60"
          alt="banner img"
        />
      </div>
    </div>
  );
};

export default BannerCard;
