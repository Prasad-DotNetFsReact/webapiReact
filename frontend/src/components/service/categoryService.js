import axios from 'axios';

const API_URL = 'https://localhost:7033/api/Category';


const getCategories = () => axios.get(API_URL);
const getCategoryById = (id) => axios.get(`${API_URL}/${id}`);
const addCategory = (category) => axios.post(API_URL, category);
const updateCategory = (id, category) => axios.put(`${API_URL}/${id}`, category);
const deleteCategory = (id) => axios.delete(`${API_URL}/${id}`);

export default {
  getCategories,
  getCategoryById,
  addCategory,
  updateCategory,
  deleteCategory,
};
