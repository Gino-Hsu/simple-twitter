import { apiHelper } from '../utils/helpers'
const getToken = () => localStorage.getItem('token')

export default {
  getFollowerShips() {
    return apiHelper.get('/followships/top', {
      headers: { Authorization: `Bearer ${getToken()}` },
    })
  },
  postFollowerShips(id) {
    return apiHelper.post(
      '/followships',
      {
        id,
      },
      {
        headers: { Authorization: `Bearer ${getToken()}` },
      }
    )
  },
  deleteFollowerShips(id) {
    return apiHelper.delete(`/followships/${id}`, {
      headers: { Authorization: `Bearer ${getToken()}` },
    })
  },
}
