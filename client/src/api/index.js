import axios from "axios";
const API = axios.create({ baseURL: "http://localhost:8000" });

export const fetchProductLists = () => API.get(`/productlist`);
export const fetchDiseaseLists = () => API.get("/disease");
// export const fetchUsers = () => API.get("/admin");
export const block = (id) => API.put("/block", { id: id });
export const unblock = (id) => API.post("/unblock", { id: id });
export const fetchDiseaseListsById = (id) => API.get(`/disease/${id}`);
export const fetchProductListsById = (id) => API.get(`/productlist/${id}`);
// export const LogIn = (formData) => API.post("/login", formData);
export const RegisterUser = (formData) => API.post("/users", formData);
export const Users = () => API.get("/users");
export const LogOut = (refreshToken) =>
  API.post("/logout", { token: refreshToken });
// export const payment = (order) => API.post("/checkout", { cart: order });
export const confirm = (order, email, createdAt) =>
  API.post("/orders", { order: order, email: email, createdAt: createdAt });
export const orders = (email) => API.get(`/orders?email=${email}`);
