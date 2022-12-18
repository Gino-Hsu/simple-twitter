import { apiHelper } from "../utils/helpers";
const getToken =() => localStorage.getItem('token')

export default {
  getUserLikedTweets(userId) {
    return apiHelper.get(`/users/${userId}/likes`, {
      headers: { Authorization: `Bearer ${getToken()}`},
    })
  },
}