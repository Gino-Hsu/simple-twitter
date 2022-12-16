import { apiHelper } from '../utils/helpers'
const getToken = () => localStorage.getItem('token')

export default {
  getCurrentUser() {
    return apiHelper.get('/users', {
      headers: { Authorization: `Bearer ${getToken()}` },
    })
  },
}
