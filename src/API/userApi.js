import { apiHelper } from '../utils/helpers'
import axios from 'axios'
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
    const headers = {
       Authorization: `Bearer ${getToken()}`,
      'Content-Type': 'multipart/form-data'
    }
    return axios({
      method: 'put',
      baseURL: 'https://secure-peak-76328.herokuapp.com/api',
      url: `/users/${userId}`,
      data: formData,
      headers: headers,
    })
  },
  patchUserCover(userId) {
    return apiHelper.patch(
      `/users/${userId}/cover`,
      {},
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
  },
  getUserFollowing(userId) {
    return apiHelper.get(`/users/${userId}/followings`, {
      headers: { Authorization: `Bearer ${getToken()}` },
    })
  },
}
