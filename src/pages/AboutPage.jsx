import React from 'react'
import { Footer, Navbar } from "../components";
import image1 from '../components/assets/1.jpg';
import image2 from '../components/assets/bitcoins.png';
import image3 from '../components/assets/21.png';
import image4 from '../components/assets/websites.png'

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">About Us</h1>
        <hr />
        <p className="lead text-center">
         We're your Web3 advertising platform. Reached out to us here to advertise your NFTs, websites, products, and much more! We're the premier ETH website on the market. Please contact us today to find out more! Advertise today!
        </p>

        <h2 className="text-center py-4">Our Products</h2>
        <div className="row">
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src={image1} alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">NFTs</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src={image2} alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Cryptocurrency</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src={image3} alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Exchanges</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src={image4} alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Websites</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AboutPage