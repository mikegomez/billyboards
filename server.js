//require('dotenv').config();
const express = require('express');
const axios = require('axios');
const path = require('path');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 8080;


app.use(express.json());


// Serve static files from the build folder
//app.use(express.static(path.join(__dirname, 'build')));

// Enable CORS with specific origin
// const corsOptions = {
//     origin: 'https://billboards.eth.limo',
//     methods: 'GET',
//     optionsSuccessStatus: 204,
// };
const corsOptions = {
    origin: [
        'https://billboards.eth.limo', 
        'https://billyboards.onrender.com', // Add your Render URL
        /\.ipfs\./, // Allow any IPFS gateway
        /\.eth\.limo$/, // Allow ENS domains
        'http://localhost:3000', // for local development
        'http://localhost:3001',  // alternative local port
        'http://localhost:8080'  // Add your server port too
    ],
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
    credentials: true,
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

// Also add this before your API routes to handle preflight requests:
app.options('*', cors(corsOptions));


// API endpoint to fetch cryptocurrency data
app.get('/api/cryptocurrency/listings/latest', async (req, res) => {
      console.log('API endpoint hit:', req.url);
    console.log('Query params:', req.query);
    try {
        const limit = req.query.limit || 10;
    const response = await axios.get(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=${limit}`, {
      headers: {
        'X-CMC_PRO_API_KEY': 'e0fd5e52-7a1f-4efa-82d1-13bd719dccba',
         'Accept': 'application/json'
      }
    });
        // const response = await axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=10', {
        //     headers: {
        //         'x-cmc_pro_api_key': 'e0fd5e52-7a1f-4efa-82d1-13bd719dccba',
        //     },
        // });

        return res.json(response.data);
    } catch (error) {
        console.error('Error fetching cryptocurrency data:', error);
        res.status(500).send('Internal Server Error!');
    }
});

// Serve static files from the build folder (AFTER API routes)
app.use(express.static(path.join(__dirname, 'build')));

// Catch-all route to serve the React app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
     console.log('CORS enabled for:', corsOptions.origin);
});
