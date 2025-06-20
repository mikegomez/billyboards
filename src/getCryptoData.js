// getCryptoData.js
import axios from 'axios';
//require('dotenv').config();
//import apiKey from './apiKeys';


const getCryptoData = async () => {
  try {
    // More robust detection for static IPFS/ENS sites
    const hostname = window.location.hostname;
    const isStaticSite = hostname.includes('eth.limo') || 
                         hostname.includes('ipfs') || 
                         hostname.includes('dweb.link') ||
                         hostname.includes('.eth');
    
    console.log('Hostname:', hostname);
    console.log('Is static site:', isStaticSite);
    
    let response;
    
    if (isStaticSite) {
      // For static IPFS site, call your Render API directly
      console.log('Using Render API for static site');
      response = await axios.get('https://billyboards.onrender.com/api/cryptocurrency/listings/latest?limit=10');
    } else {
      // For development/server-based deployment, use relative path
      console.log('Using relative path for server-based site');
      response = await axios.get('/api/cryptocurrency/listings/latest?limit=10');
    }
    
    console.log('API Response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching cryptocurrency data:', error);
    throw error;
  }
};

// const getCryptoData = async () => {
//   try {
//    //const response = await axios.get('https://billyboards.vercel.app/api/cryptocurrency/listings/latest?limit=20');
//     const response = await axios.get('/api/cryptocurrency/listings/latest?limit=10');
//     // headers: {
//     //     'X-CMC_PRO_API_KEY': 'e0fd5e52-7a1f-4efa-82d1-13bd719dccba',
//     //   },
//     // });
//     console.log(response.data);
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching cryptocurrency data:', error);
//     throw error;
//   }
// };


    
// const getCryptoData = async () => {
//   try {
//     const response = await axios.get('/api/cryptocurrency/listings/latest');
//     // const response = await axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=10', {
//     //   headers: {
//     //     'X-CMC_PRO_API_KEY': 'e0fd5e52-7a1f-4efa-82d1-13bd719dccba',
//     //   },
//     // });
//     console.log(response.data);
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching cryptocurrency data:', error);
//     throw error;
//   }
// };

    // const response = await axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=10', {
    //   headers: {
    //     'X-CMC_PRO_API_KEY': 'e0fd5e52-7a1f-4efa-82d1-13bd719dccba',
    //   },

//     // Log the data to the console for debugging purposes
//     console.log(response.data);

//     return response.data; // Return the data for further processing
//   } catch (error) {
//     // Log the error to the console
//     console.error('Error fetching cryptocurrency data:', error);
//     throw error; // Rethrow the error to be handled by the calling code
//   }
// };

export default getCryptoData;
