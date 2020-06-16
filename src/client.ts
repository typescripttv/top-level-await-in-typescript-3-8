import axios from 'axios';

try {
  const response = await axios.post('http://localhost:8080/', {number: 1});
  console.log(response.data);
} catch (error) {
  console.error(error.message);
}
