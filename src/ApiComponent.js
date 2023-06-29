import React, { useState, useEffect } from 'react';
import axios from 'axios';

const axios = require('axios');

const ApiComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://rapidapi.com/Glavier/api/twitter135/');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>API Component</h1>
      {data.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

const query = 'Elon';

async function getTwitterData(query) {
  const options = {
    method: 'GET',
    url: 'https://twitter135.p.rapidapi.com/AutoComplete/',
    params: { q: query },
    headers: {
      'X-RapidAPI-Key': 'YOUR_RAPIDAPI_KEY',
      'X-RapidAPI-Host': 'twitter135.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export default ApiComponent;

