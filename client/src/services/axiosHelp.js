import axios from "axios";

const BASE_API = axios.create({
	baseURL: import.meta.env.VITE_REACT_BACKEND_URL,
	headers: {
		Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
	},
});

export default BASE_API;
