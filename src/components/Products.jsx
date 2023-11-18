import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link } from "react-router-dom";
import ethlogo from '../components/assets/ethlogo.png';


// Import your images
import ad1Image from '../components/assets/19.webp';
import ad2Image from '../components/assets/19.webp';
// import ad3Image from '../components/assets/19.webp';
// import ad4Image from '../components/assets/19.webp';
// import ad5Image from '../components/assets/19.webp';
// import ad6Image from '../components/assets/19.webp';
   import ad7Image from '../components/assets/7.svg';
// import ad8Image from '../components/assets/19.webp';
   import ad9Image from '../components/assets/9.webp';
// import ad10Image from '../components/assets/10.avif';
   import ad11Image from '../components/assets/11.avif';
  import ad12Image from '../components/assets/12.png';
// import ad13Image from '../components/assets/19.webp';
// import ad14Image from '../components/assets/19.webp';
// import ad15Image from '../components/assets/15.svg';
// import ad16Image from '../components/assets/19.webp';
  import ad17Image from '../components/assets/17.gif';
// import ad18Image from '../components/assets/19.webp';
// import ad19Image from '../components/assets/19.webp';
// import ad20Image from '../components/assets/19.webp';

const cardDescriptions = [
  {
    id: 1,
    title: "Advertise Today!",
    description: "Register your spot today! 1 month free with purchase.",
    price: " ETH",
    url: "https://opensea.io/",
  },
  {
    id: 2,
    title: "Advertise Today!",
    description: "Register your spot today! 1 month free with purchase.",
    price: " ETH",
  },
  {
    id: 3,
    title: "Advertise Today!",
    description: "Register your spot today! 1 month free with purchase.",
    price: " ETH",
  },
  {
    id: 4,
    title: "Advertise Today!",
    description: "Register your spot today! 1 month free with purchase.",
    price: " ETH",
  },
  {
    id: 5,
    title: "Advertise Today!",
    description: "Register your spot today! 1 month free with purchase.",
    price: " ETH",
  },
  {
    id: 6,
    title: "Advertise Today!",
    description: "Register your spot today! 1 month free with purchase.",
    price: " ETH",
  },
  {
    id: 7,
    title: "Trista Piney Hazard",
    description: "CyberBrokers is a first-of-its-kind art collectibles ecosystem centered around 10,001 unique and on-chain CyberBroker NFTs.",
    price: "3 ETH",
    url: "https://opensea.io/assets/ethereum/0x892848074ddea461a15f337250da3ce55580ca85/3607",
  },
  {
    id: 8,
    title: "Advertise Today!",
    description: "Register your spot today! 1 month free with purchase.",
    price: " ETH",
  },
  {
    id: 9,
    title: "Invest on Digital Art Infomercial",
    description: "Learn how to make easy money on digital art! Dear crypto natives,want to level up your finance game? Learn how to use digital marketplaces to buy provably authentic NFTs, build a collection, and make trades $$$$$$",
    price: " ETH",
    url: "https://opensea.io/assets/ethereum/0xfbeef911dc5821886e1dda71586d90ed28174b7d/126980",
  },
  {
    id: 10,
    title: "Advertise Today!",
    description: "Register your spot today! 1 month free with purchase.",
    price: " ETH",
  },
  {
    id: 11,
    title: "PAK - WWWeb!",
    description: "Async Art. Controls WWWeb Material.",
    price: " ETH",
    url: "https://opensea.io/assets/ethereum/0xb6dae651468e9593e4581705a09c10a76ac1e0c8/169",
  },
  {
    id: 12,
    title: "Kintsugi Revisited",
    description: "Kintsugi is the Japanese art of repairing broken pottery with gold, they say a broken object is beautiful, to repair it shows it was loved.",
    price: " ETH",
    url: "https://opensea.io/assets/ethereum/0xb932a70a57673d89f4acffbe830e8ed7f75fb9e0/9565",
  },
  {
    id: 13,
    title: "Advertise Today!",
    description: "Register your spot today! 1 month free with purchase.",
    price: " ETH",
  },
  {
    id: 14,
    title: "Advertise Today!",
    description: "Register your spot today! 1 month free with purchase.",
    price: " ETH",
  },
  {
    id: 15,
    title: "Advertise Today!",
    description: "Register your spot today! 1 month free with purchase.",
    price: " ETH",
  },
  {
    id: 16,
    title: "Advertise Today!",
    description: "Register your spot today! 1 month free with purchase.",
    price: " ETH",
  },
  {
    id: 17,
    title: "Who tell the truth?",
    description: "In a sea of fake news, fear press and click rates. Everyone has to form his own opinion, and if you are not sure, you can use this work of art as a lie detector.",
    price: "10 ETH",
    url: "https://opensea.io/assets/ethereum/0xb932a70a57673d89f4acffbe830e8ed7f75fb9e0/8698",
  },
  {
    id: 18,
    title: "Advertise Today!",
    description: "Register your spot today! 1 month free with purchase.",
    price: " ETH",
  },
  {
    id: 19,
    title: "Advertise Today!",
    description: "Register your spot today! 1 month free with purchase.",
    price: " ETH",
  },
  {
    id: 20,
    title: "Advertise Today!",
    description: "Register your spot today! 1 month free with purchase.",
    price: " ETH",
  },
  // Add more descriptions for other cards
];

const Products = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  const componentMounted = useRef(true);

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      // Simulate fetching data from an API
      const response = await fetch("https://fakestoreapi.com/products/");
      const fetchedData = await response.json();

      // Map the fetched data and add the imported images
      const productsWithImages = fetchedData.map(product => ({
        ...product,
        image: getImageForProduct(product.id),
      }));

      if (componentMounted.current) {
        setData(productsWithImages);
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-12 py-5 text-center">
          <Skeleton height={40} width={560} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
      </>
    );
  };


  // Helper function to get the image for a product based on its ID
  const getImageForProduct = (productId) => {
    const imageMapping = {
      1: ad1Image,
      2: ad2Image,
      // 3: ad3Image,
      // 4: ad4Image,
      // 5: ad5Image,
      // 6: ad6Image,
         7: ad7Image,
      // 8: ad8Image,
         9: ad9Image,
      // 10: ad10Image,
         11: ad11Image,
         12: ad12Image,
      // 13: ad13Image,
      // 14: ad14Image,
      // 15: ad15Image,
      // 16: ad16Image,
         17: ad17Image,
      // 18: ad18Image,
      // 19: ad19Image,
      // 20: ad20Image,
    };

    return imageMapping[productId] || ad1Image; // Default to ad1Image if no image is found
  };

  return (
    <>
      <div className="container my-3 py-3">
        <div className="row">
          <div className="col-12">
            <h2 className="display-5 text-center">Advertise Here</h2>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : (
            <div className="buttons text-center py-5">
              <button className="btn btn-outline-dark btn-sm m-2"
              // onClick={() => filterProduct("All")}
              >
                All
              </button>
              <button
                className="btn btn-outline-dark btn-sm m-2"
               // onClick={() => filterProduct("NFTs")}
              >
                NFTs
              </button>
              <button
                className="btn btn-outline-dark btn-sm m-2"
              //  onClick={() => filterProduct("cryptocurrency")}
              >
                Cryptocurrency
              </button>
              <button
                className="btn btn-outline-dark btn-sm m-2"
              //  onClick={() => filterProduct("exchanges")}
              >
                Exchanges
              </button>
              <button
                className="btn btn-outline-dark btn-sm m-2"
               // onClick={() => filterProduct("websites")}
              >
                Websites
                </button>
            </div>
          )}
  {data.map((product) => {
            // Find the card description based on the product ID
            const cardDescription = cardDescriptions.find((desc) => desc.id === product.id);

            return (
              <div id={product.id} key={product.id} className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
                <div className="card text-center h-100" key={product.id}>
                <Link to={cardDescription ? cardDescription.url : 'Buy Now'} target="_blank"><img
                    className="card-img-top p-3"
                    src={product.image}
                    alt="Card"
                    height={300}
                  />
                  </Link>
                  <div className="card-body">
                  <h5 className="card-title">{cardDescription ? cardDescription.title : 'Title'}</h5>
                    <p className="card-text">{cardDescription ? cardDescription.description : 'Description'}</p>
                  </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item lead">
                    <img src={ethlogo} alt="Ethereum Logo" width={20} height={20} />{cardDescription ? cardDescription.price : 'Price'}
                    </li>
                    {/* Other list items */}
                  </ul>
                  <div className="card-body">
                  <Link to={cardDescription ? cardDescription.url : 'Buy Now'} target="_blank" className="btn btn-dark m-1">
                      Buy Now
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Products;
