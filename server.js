const express = require('express');
const axios = require('axios');
const path = require('path');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8080;


app.use(express.json());


// Serve static files from the build folder
app.use(express.static(path.join(__dirname, 'build')));

// Enable CORS with specific origin
const corsOptions = {
    origin: 'https://billboards.eth.limo',
    methods: 'GET',
    optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));


// Define the CORS options
// const corsOptions = {
//   origin: 'https://billboards.eth.limo', // Replace with your actual production domain
//   methods: 'GET',
//   optionsSuccessStatus: 204,
// };

// app.use(cors(corsOptions));

// Serve static files from the build folder
// app.use(express.static(path.join(__dirname, 'build')));

// // API endpoint to fetch cryptocurrency data
// app.get('/api/cryptocurrency/listings/latest', async (req, res) => {
//   try {
//     const response = await axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
//       headers: {
//          'X-CMC_PRO_API_KEY': 'e0fd5e52-7a1f-4efa-82d1-13bd719dccba',
//        // 'X-CMC_PRO_API_KEY': process.env.REACT_APP_API_KEY,
//       },
//     });





// API endpoint to fetch cryptocurrency data
app.get('/api/cryptocurrency/listings/latest', async (req, res) => {
    try {
        const response = await axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=20', {
            headers: {
                'x-cmc_pro_api_key': process.env.API_KEY,
            },
        });

        return res.json(response.data);
    } catch (error) {
        console.error('Error fetching cryptocurrency data:', error);
        res.status(500).send('Internal Server Error');
    }
});

// Catch-all route to serve the React app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
