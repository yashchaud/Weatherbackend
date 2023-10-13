const axios = require('axios');

const productsController = {
  getWeather: async (req, res, next) => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${req.params.city}&units=metric&appid=953862e849a5e99832321b555b06a2be`);
     
      res.status(200).json(response.data); // Note the .data here
    } catch (error) {
      console.error(error); // Log the error for development
      res.status(500).json({ error: "Failed to fetch data.", details: error.message });
    }
  }
};

module.exports = productsController;
