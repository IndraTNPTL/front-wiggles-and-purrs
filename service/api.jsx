import axios from "axios";

export const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const myApi = axios.create({ baseURL: BACKEND_URL });

myApi.interceptors.request.use((interceptedRequest) => {
	interceptedRequest.headers.Authorization = `Bearer ${localStorage.getItem(
		"token"
	)}`;
	interceptedRequest.headers.Accept = "application/json";

	return interceptedRequest;
});

export default myApi;
