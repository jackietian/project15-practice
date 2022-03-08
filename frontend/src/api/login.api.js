import axios from "axios";

const api = "http://localhost:3000/api/login";

export const login = (data) => axios.post(api, data);
