// CryptoList.js
import React, { useEffect, useState } from 'react';
import getCryptoData from './getCryptoData'; // Adjust the import path
import Navbar from './components/Navbar';
import Footer from './components/Footer';



const CryptoList = () => {
  const [cryptoData, setCryptoData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCrypto, setSelectedCrypto] = useState(null); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getCryptoData();

        if (!response.data || !Array.isArray(response.data)) {
          throw new Error('Invalid data format');
        }

        setCryptoData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching cryptocurrency data:', error);
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...Please wait up to 60 seconds my friend</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!Array.isArray(cryptoData)) {
    return <p>Data is not in the expected format.</p>;
  }

  const getAddressByCrypto = (crypto) => {
    const addresses = {
      BTC: 'bc1q9lxkc58dmce8ylefq8esrthvhjudd34earmyl4',
      ETH: '0x5B6cDEAff945AcCC32eFC5ee414c22f608c223cD',
      XRP: 'rDKYj7jiwM5DARSmHTEuG1nmsxYjpQdjZm',
      USDC: '0x5B6cDEAff945AcCC32eFC5ee414c22f608c223cD',
      TRX: 'TVuoQ8V9K4xanKePueMnN6bUsfnUFXtGF7',
      SOL: 'HhuK2MoS1jiSUzQsUCPLRHk9tDZcpeXtTAW4dVCaZM5v',
      DOGE: 'DJAqq1xHkWBGeAgHJihu8DXt4ECLjmg7Gz',
      USDT: '0x5B6cDEAff945AcCC32eFC5ee414c22f608c223cD',
      BNB: '0xc7Ec6B815bB0F24Bda65d4A2d416AeF643f0f797',
      ADA: 'Not Available',
    };

    return addresses[crypto] || 'No address available';
  };

  return (
    <div>
    <Navbar />
    <div className="container my-4 py-3">
      <h1 className="text-center mb-4">Cryptocurrency List</h1>
      <label htmlFor="cryptoDropdown" className='mb-3'>To make a payment, please select a cryptocurrency, copy the address and send the required amount:
      </label><br />
      <select
        id="cryptoDropdown"
        onChange={(e) => setSelectedCrypto(e.target.value)}
        value={selectedCrypto}
      >
        <option value="">Select...</option>
        {cryptoData.map((crypto) => (
          <option key={crypto.id} value={crypto.symbol}>
            {crypto.name}
          </option>
        ))}
      </select>

      {selectedCrypto && (
        <div>
          <h2>{selectedCrypto} Address:</h2>
          <p>{getAddressByCrypto(selectedCrypto)}</p>

           {/* New section for sending $5 worth of selected crypto */}
           <div>
            <h3>Please send $5 worth of {selectedCrypto}</h3>
            {/* Calculate the amount based on the API data */}
            <p>
              Amount: {(5 / cryptoData.find(crypto => crypto.symbol === selectedCrypto).quote.USD.price).toFixed(8)} {selectedCrypto}
            </p>
            <h4>Please email <a href="mailto:recipient@example.com?subject=Hello%20World&body=I%20hope%20this%20email%20finds%20you%20well.">
            billboardseth@gmail.com </a> and let us know which spot you want and the details of your sponsorhip.</h4>
            <h5>Ads will run for 30 days</h5>
            <h5>Please include creative or link to image, a description, and a url link of what you want to advertise.</h5>
            </div>
        </div>
      )}
      {/* <div className='py-4'>
      <ul>
        {cryptoData.map((crypto) => (
          <li key={crypto.id}>
            <strong>{crypto.name}</strong>
            <ul>
              <li>Symbol: {crypto.symbol}</li>
              <li>Price: ${crypto.quote.USD.price}</li>
              <li>Market Cap: ${crypto.quote.USD.market_cap}</li>
              <li>Volume (24h): ${crypto.quote.USD.volume_24h}</li>
              <li>Percent Change (24h): {crypto.quote.USD.percent_change_24h}%</li>
            </ul>
          </li>
        ))}
      </ul>
      <br />
    </div> */}
    </div>
    <Footer />
    </div>
  );
}

export default CryptoList;
