import axios from '/src/common/api/axiosConfig'

export const login = (data) => {
    axios.post
   return axios.post('/auth/sign-in',data);
}
export default login;