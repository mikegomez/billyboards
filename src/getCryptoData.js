// getCryptoData.js
import axios from 'axios';
//require('dotenv').config();


const getCryptoData = async () => {
  try {
    const response = await axios.get('http://localhost:8080/api/cryptocurrency/listings/latest', {
      headers: {
        'X-CMC_PRO_API_KEY': 'e0fd5e52-7a1f-4efa-82d1-13bd719dccba',
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching cryptocurrency data:', error);
    throw error;
  }
};

//     const response = await axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=10', {
//       headers: {
//         'X-CMC_PRO_API_KEY': 'e0fd5e52-7a1f-4efa-82d1-13bd719dccba',
//       },
//     });

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
