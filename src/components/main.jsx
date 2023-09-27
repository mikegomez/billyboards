import React from "react";

const Home = () => {
  return (
    <>
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3">
          <img
           className="card-img"
           src="./assets/bbads1.webp"
           alt="Card"
           width={700}
           height={450}
          />
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
