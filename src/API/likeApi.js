import { apiHelper } from '../utils/helpers'
const getToken = () => localStorage.getItem('token')

export default {
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
  },
}
