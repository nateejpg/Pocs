const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/subscribe', async (req, res) => {
  const { email } = req.body;
  const url = 'https://us13.api.mailchimp.com/3.0/lists/1879a78d15/members/';
  const apiKey = '0f744e21df45bb637c8063dbdefce541-us13';

  const data = {
    email_address: email,
    status: 'subscribed',
    merge_fields: {
      FNAME: 'FirstName',
      LNAME: 'LastName'
    }
  };

  const config = {
    headers: {
      'Authorization': `apikey ${apiKey}`,
      'Content-Type': 'application/json'
    }
  };

  try {
    const response = await axios.post(url, data, config);
    res.status(200).send('Subscription successful!');
  } catch (error) {
    res.status(500).send('Subscription failed.');
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
