import React from "react";
import styled from "styled-components";

// Define a styled component with your CSS
const HeroContainer = styled.div`
  /* Add your CSS styles here */
  // max-width: 100%;
  // max-height: 100%;
  /* Set a maximum width for the container */
  max-width: 400px; /* Adjust this value as needed */
  margin: 0 auto; /* Center the container horizontally */
`;

const Image = styled.img`
  /* Limit the image size to the container's width */
  max-width: 80%;
  height: auto; /* Maintain the image's aspect ratio */
`;

const Home = () => {
  return (
    <>
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3">
        <HeroContainer>
          <Image
           className="card-img"
           src="./assets/bbtest.jpg"
           alt="Card"
          //  width={700}
          //  height={450}
          />
       </HeroContainer>
          <div className="card-img-overlay d-flex align-items-center">
            <div className="container">
            <h1 className="card-title fs-1 text text-black fw-lighter">BILLBOARDS.ETH</h1>
              <p className="card-text fs-3 d-none text-black d-sm-block ">
                ADVERTISE WITH BILLBOARDS.ETH - ADVERTISE YOUR NFTS, BUSINESS, WEBSITE, COMPANY.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
