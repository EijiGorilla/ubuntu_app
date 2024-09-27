import axios from 'axios';
// const baseURL = process.env.NODE_ENV === 'production' ? '/*' : 'http://localhost:5000/*';

const baseURL = 'http://13.236.193.199:5000';

export default axios.create({
  baseURL,
});
