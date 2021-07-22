import axios from "axios";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css';

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response && error.response.state >= 400 && error.response.state < 500;
  if (!expectedError) {
    console.log("Logging the error", error);
    toast.error("An unexpected error occurrred.");
  }
  return Promise.reject(error);
});
function setJwt(jwt) {
  axios.defaults.headers.common["x-auth-token"] = jwt;
}
export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  setJwt,
};
