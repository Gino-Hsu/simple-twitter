import { apiHelper } from '../utils/helpers'
const getToken = () => localStorage.getItem('token')

export default {
  getCurrentUser() {
    return apiHelper.get('/current_user', {
      headers: { Authorization: `Bearer ${getToken()}` },
    })
  },
  getOtherUser(userId) {
    return apiHelper.get(`/users/${userId}`, {
      headers: { Authorization: `Bearer ${getToken()}` },
    })
  },
  getAdminUsers() {
    return apiHelper.get('/admin/users', {
      headers: { Authorization: `Bearer ${getToken()}` },
    })
  },
  putUserEdit(userId, formData) {
    return apiHelper.put(
      `/api/users/${userId}`,
      {
        formData,
      },
      {
        headers: { Authorization: `Bearer ${getToken()}` },
      }
    )
  },
  putUserSetting(payload) {
    const { userId, account, name, email, password, checkPassword } = payload
    return apiHelper.put(
      `/users/${userId}/setting`,
      {
        account,
        name,
        email,
        password,
        checkPassword,
      },
      {
        headers: { Authorization: `Bearer ${getToken()}` },
      }
    )
  },
  getUserFollower(userId) {
    return apiHelper.get(`/users/${userId}/followers`, {
      headers: { Authorization: `Bearer ${getToken()}` },
    })
  }
}
