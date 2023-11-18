// CryptoList.js
import React, { useEffect, useState } from 'react';
import getCryptoData from './getCryptoData'; // Adjust the import path
import Navbar from './components/Navbar';
import Footer from './components/Footer';


const CryptoList = () => {
  const [cryptoData, setCryptoData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCrypto, setSelectedCrypto] = useState(null); // Add this line

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
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!Array.isArray(cryptoData)) {
    return <p>Data is not in the expected format.</p>;
  }

  const getAddressByCrypto = (crypto) => {
    // Temporary addresses, replace with actual addresses
    const addresses = {
      BTC: '1BitcoinAddress54245',
      ETH: '0x4EthereumAddress2353',
      XRP: 'rXRPAddress2345',
      USDC: '7439174309732fda432',
      TRX: '432432kjhkjh34234',
      SOL: 'SolanaAddress245',
      DOGE: 'DogeAddress2543',
      USDT: '342kfjasfl3223',
      BNB: '42334hjhkkjh123',
      ADA: '432hfdakfhs',
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
            </div>
        </div>
      )}
      <div className='py-4'>
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
    </div>
    </div>
    <Footer />
    </div>
  );
}

export default CryptoList;
