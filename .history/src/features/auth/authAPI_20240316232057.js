import axios from '/src/common/api/axiosConfig'

export const login = (data) => {
   return axios.post('/auth/sign-in',data);
}
export default login;