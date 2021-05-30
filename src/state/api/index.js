import axios from 'axios';

//const url = 'https://darwinstees.herokuapp.com';
const url = 'http://localhost:5000';

export const getEvos = () => axios.get(`${url}/server/evos`);

export const getMutants = () => axios.get(`${url}/server/mutants`);