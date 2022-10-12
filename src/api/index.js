import axios from 'axios';

const BASE_URL = 'http://localhost:8000';

const getResturants = async () => {
  return (await axios.get(`${BASE_URL}/resturants`)).data;
};

const getResturantsDetail = async id => {
  return (await axios.get(`${BASE_URL}/resturants/${id}`)).data;
};

const getHistory = async () => {
  return (await axios.get(`${BASE_URL}/history`)).data;
};

const postOrder = async order => {
  console.log(order);
  return (await axios.post(`${BASE_URL}/order`, order)).data;
};

const bookTable = details => {
  console.log('TableBooked');
  console.log(details);
};

const cancelTable = details => {
  console.log('TableCanceled');
  console.log(details);
};

const userAccount = async () => {
  return (await axios.get(`${BASE_URL}/account`, { withCredentials: true })).data;
};

const signUpUser = async user => {
  user = (await axios.post(`${BASE_URL}/sign-up`, user, { withCredentials: true })).data;
  console.log(user);
  console.log('User Signed Up');
  return user;
};

const logout = async () => {
  await axios.post(`${BASE_URL}/logout`);
  console.log('Loged Out');
};
export default {
  getResturantsDetail,
  getResturants,
  getHistory,
  postOrder,
  bookTable,
  cancelTable,
  userAccount,
  signUpUser,
  logout,
};
