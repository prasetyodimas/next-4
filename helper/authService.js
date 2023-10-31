import axios from "axios";

// temporary solution
const API_URL = "https://fifty-ads-stick.loca.lt/";

const login = (email) => {
  console.log(email)
  return axios
    .get(API_URL + `users?email=${email}`)
    .then((response) => {
      console.log(response);
      if (response.status === 200) {  
        localStorage.setItem("FDN-Credentials", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem('FDN-Credentials');
}

const AuthService = {
  login,
  logout,
};

export default AuthService
