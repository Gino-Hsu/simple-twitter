import { apiHelper } from '../utils/helpers'
const getToken = () => localStorage.getItem('token')

export default {
  getFollowerShips() {
    return apiHelper.get('/followships/top', {
      headers: { Authorization: `Bearer ${getToken()}` },
    })
  },
}