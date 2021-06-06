import axios from 'axios';

//const url = 'https://darwinstees.herokuapp.com';
const url = 'http://localhost:5000';

export const getEvos = (lineage) => axios.get(`${url}/server/evos/${lineage}`);

export const getMutants = (lineage) => axios.get(`${url}/server/mutants/${lineage}`);

export const likeMutant = (lineage, _id) => axios.post(`${url}/server/like/${lineage}/${_id}`);