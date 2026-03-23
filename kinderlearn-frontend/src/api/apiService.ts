/*import axios from "axios";

// During development use localhost.
// After deploying to Render.com, replace with your live URL.
const BASE_URL = "http://localhost:5000/api";

export const register = async (name, email, password) => {
  const res = await axios.post(`${BASE_URL}/auth/register`, {
    name,
    email,
    password,
  });
  return res.data;
};

export const login = async (email, password) => {
  const res = await axios.post(`${BASE_URL}/auth/login`, { email, password });
  return res.data;
};

export const saveProgress = async (data) => {
  const res = await axios.post(`${BASE_URL}/progress`, data);
  return res.data;
};

export const getProgress = async (studentId) => {
  const res = await axios.get(`${BASE_URL}/progress/${studentId}`);
  return res.data;
};*/
