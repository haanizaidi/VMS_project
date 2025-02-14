import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api/visitors',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const registerVisitor = (visitorData) => {
  return api.post('/register', visitorData);
};

export const exitVisitor = (exitData) => {
  return api.post('/exit', exitData);
};
