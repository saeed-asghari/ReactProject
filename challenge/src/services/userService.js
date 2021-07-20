import { apiUrl } from "../config.json";
import http from "./httpservice";


export function register(user) {
  let request = {};
  request.user = {};
  request.user.email = user.email;
  request.user.password = user.password;
  request.user.username = user.username;
  return http.post(apiUrl + "/users", request);
}

export async function getAllTags() {
  const { data } = await http.get(apiUrl + "/tags");
  return data;
}
