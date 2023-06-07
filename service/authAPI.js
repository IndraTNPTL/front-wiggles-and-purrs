import myApi from "./api";

const authAPI = {
	logIn: (email, password) => {
		return myApi.post("/auth/login", { email, password });
	},

	signUp: (name, email, password) => {
		return myApi.post("/auth/signup", { name, email, password });
	},
};

export default authAPI;
