import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link } from "react-router-dom";


// Import your images
import ad1Image from '../components/assets/19.webp';
import ad2Image from '../components/assets/19.webp';
import ad3Image from '../components/assets/19.webp';
import ad4Image from '../components/assets/19.webp';
import ad5Image from '../components/assets/19.webp';
import ad6Image from '../components/assets/19.webp';
import ad7Image from '../components/assets/7.svg';
import ad8Image from '../components/assets/19.webp';
import ad9Image from '../components/assets/9.webp';
import ad10Image from '../components/assets/10.avif';
import ad11Image from '../components/assets/11.avif';
import ad12Image from '../components/assets/12.png';
import ad13Image from '../components/assets/19.webp';
import ad14Image from '../components/assets/19.webp';
import ad15Image from '../components/assets/15.svg';
import ad16Image from '../components/assets/19.webp';
import ad17Image from '../components/assets/17.gif';
import ad18Image from '../components/assets/19.webp';
import ad19Image from '../components/assets/19.webp';
import ad20Image from '../components/assets/19.webp';

const Products = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
 // const [filter, setFilter] = useState([]); // Remove this line to get rid of the warning
  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  // const filterProduct = (cat) => {
  //   const updatedList = data.filter((item) => item.category === cat);
  // //  setFilter(updatedList);
  // };

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


  // const filterProduct = (cat) => {
  //   const updatedList = data.filter((item) => item.category === cat);
  //   setFilter(updatedList);
  // }


  // Helper function to get the image for a product based on its ID
  const getImageForProduct = (productId) => {
    const imageMapping = {
      1: ad1Image,
      2: ad2Image,
      3: ad3Image,
      4: ad4Image,
      5: ad5Image,
      6: ad6Image,
      7: ad7Image,
      8: ad8Image,
      9: ad9Image,
      10: ad10Image,
      11: ad11Image,
      12: ad12Image,
      13: ad13Image,
      14: ad14Image,
      15: ad15Image,
      16: ad16Image,
      17: ad17Image,
      18: ad18Image,
      19: ad19Image,
      20: ad20Image,
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
              <button className="btn btn-outline-dark btn-sm m-2">
                All
              </button>
              <button
                className="btn btn-outline-dark btn-sm m-2"
               // onClick={() => filterProduct("men's clothing")}
              >
                NFTs
              </button>
              <button
                className="btn btn-outline-dark btn-sm m-2"
              //  onClick={() => filterProduct("women's clothing")}
              >
                Cryptocurrency
              </button>
              <button
                className="btn btn-outline-dark btn-sm m-2"
              //  onClick={() => filterProduct("jewelry")}
              >
                Exchanges
              </button>
              <button
                className="btn btn-outline-dark btn-sm m-2"
               // onClick={() => filterProduct("electronics")}
              >
                Websites
                </button>
            </div>
          )}

          {data.map((product) => (
            <div
              id={product.id}
              key={product.id}
              className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4"
            >
              <div className="card text-center h-100" key={product.id}>
                <img
                  className="card-img-top p-3"
                  src={product.image}
                  alt="Card"
                  height={300}
                />
                <div className="card-body">
                  {/* <h5 className="card-title">{product.title}</h5> */}
                  {/* <p className="card-text">{product.description}</p> */}
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item lead">$ {product.price}</li>
                  {/* Other list items */}
                </ul>
                <div className="card-body">
                  <Link to={"/product/" + product.id} className="btn btn-dark m-1">
                    Buy Now
                  </Link>
                  <button
                    className="btn btn-dark m-1"
                    onClick={() => addProduct(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

//   const ShowProducts = () => {
//     return (
//       <>
//         <div className="buttons text-center py-5">
//           <button className="btn btn-outline-dark btn-sm m-2" onClick={() => setFilter(data)}>All</button>
//           <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("men's clothing")}>Men's Clothing</button>
//           <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("women's clothing")}>
//             Women's Clothing
//           </button>
//           <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("jewelery")}>Jewelery</button>
//           <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("electronics")}>Electronics</button>
//         </div>

//         {filter.map((product) => {
//           return (
//             <div id={product.id} key={product.id} className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
//               <div className="card text-center h-100" key={product.id}>
//                 <img
//                   className="card-img-top p-3"
//                   src={product.image}
//                   alt="Card"
//                   height={300}
//                 />
//                 <div className="card-body">
//                   <h5 className="card-title">
//                     {product.title.substring(0, 12)}...
//                   </h5>
//                   <p className="card-text">
//                     {product.description.substring(0, 90)}...
//                   </p>
//                 </div>
//                 <ul className="list-group list-group-flush">
//                   <li className="list-group-item lead">$ {product.price}</li>
//                   {/* <li className="list-group-item">Dapibus ac facilisis in</li>
//                     <li className="list-group-item">Vestibulum at eros</li> */}
//                 </ul>
//                 <div className="card-body">
//                   <Link to={"/product/" + product.id} className="btn btn-dark m-1">
//                     Buy Now
//                   </Link>
//                   <button className="btn btn-dark m-1" onClick={() => addProduct(product)}>
//                     Add to Cart
//                   </button>
//                 </div>
//               </div>
//             </div>

//           );
//         })}
//       </>
//     );
//   };
//   return (
//     <>
//       <div className="container my-3 py-3">
//         <div className="row">
//           <div className="col-12">
//             <h2 className="display-5 text-center">Latest Products</h2>
//             <hr />
//           </div>
//         </div>
//         <div className="row justify-content-center">
//           {loading ? <Loading /> : <ShowProducts />}
//         </div>
//       </div>
//     </>
//   );
// };

export default Products;
