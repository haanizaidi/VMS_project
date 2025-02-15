// import axios from 'axios';

// const api = axios.create({
//   baseURL: process.env.REACT_APP_API_URL,
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });

// export const registerVisitor = (visitorData) => {
//   return api.post('/register', visitorData);
// };

// export const exitVisitor = (exitData) => {
//   return api.post('/exit', exitData);
// };

// export const getAllVisitors = () => {
//   return api.get('/all');
// };


import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const registerVisitor = (visitorData) => {
  return api.post("/register", visitorData);
};

export const exitVisitor = (exitData) => {
  return api.post("/exit", exitData);
};

export const preApproveVisitor = (preApprovalData) => {
  return api.post("/pre-approve", preApprovalData);
};

export const getAllVisitors = () => {
  return api.get("/all");
};

export const getAllPreApprovedVisitors = () => {
  return api.get("/pre-approved"); // New function
};