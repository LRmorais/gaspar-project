import axios from 'axios';

const api = axios.create({
  baseURL: 'http://18.228.117.192:3333/',
});
// const api = axios.create({
//   baseURL:
//     process.env.NODE_ENV === 'production'
//       ? 'http://18.228.117.192:3333/'
//       : 'http://127.0.0.1:3333/',
// });

export {api};
