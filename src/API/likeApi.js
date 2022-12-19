import { apiHelper } from '../utils/helpers'
const getToken = () => localStorage.getItem('token')

export default {
  getUserLiked(userId) {
    return apiHelper.get(`/users/${userId}/likes`, {
      headers: { Authorization: `Bearer ${getToken()}` },
    })},
  postLike(tweetId) {
    return apiHelper.post(
      `/tweets/${tweetId}/like`,
      {},
      {
        headers: { Authorization: `Bearer ${getToken()}` },
      }
    )
  },
  postUnlike(tweetId) {
    return apiHelper.post(
      `/tweets/${tweetId}/unlike`,
      {},
      {
        headers: { Authorization: `Bearer ${getToken()}` },
      }
    )

  }
}
