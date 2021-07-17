import axios from "axios";

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response && error.response.state >= 400 && error.response.state < 500;
  if (!expectedError) {
    console.log("Logging the error", error);
    toast.error("An unexpected error occurrred.");
  }
  return Promise.reject(error);
});

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  setJwt,
};
