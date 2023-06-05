import axios from "axios";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const myApi = axios.create({ baseURL: BACKEND_URL });

myApi.interceptors.request.use((interceptedRequest) => {
	interceptedRequest.headers.Authorization = `Bearer ${localStorage.getItem(
		"token"
	)}`;
	return interceptedRequest;
});

export default myApi;
