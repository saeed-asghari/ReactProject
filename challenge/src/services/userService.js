import {apiUrl} from "../config.json";
import http from "./httpservice";

const apiEndpoint =apiUrl + "/api/users"

export function  register(user){
    let request = {}
    request.user={}
    request.user.email = user.email;
    request.user.password = user.password;
    request.user.username = user.username;
   return http.post(apiEndpoint,request)
}

