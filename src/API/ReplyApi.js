import { apiHelper } from '../utils/helpers'
const getToken = () => localStorage.getItem('token')

export default {
  getRelies(tweetId) {
    return apiHelper.get(`/tweets/${tweetId}/replies`, {
      headers: { Authorization: `Bearer ${getToken()}` },
    })
  },
  getUserReliedTweets(userId) {
    return apiHelper.get(`/users/${userId}/replied_tweets`, {
      headers: { Authorization: `Bearer ${getToken()}` },
    })
  },
}
