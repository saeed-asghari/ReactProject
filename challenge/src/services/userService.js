import { apiUrl } from "../config.json";
import http from "./httpservice";
import auth from "../services/authService";
const token = auth.getJwt();
var header = {
  headers: { "Authorization": `Token ${token}`, "content-type": "application/json"},
}
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

export  function createArticle(input) {
  let request = {};
  request.article = {};
  request.article.title =input.title;
  request.article.description =input.description;
  request.article.body=input.body;
  request.article.tagList =[];
  request.article.tagList =input.tagList;
  const { data } = http.post(apiUrl + "/articles",request,header);
  return data;
}