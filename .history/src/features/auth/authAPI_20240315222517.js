import axios from '/src/common/api/axiosConfig'

export const login = (data) => {
    console.log("data",)
   return axios.post('/auth/sign-in',data);
}
export default login;