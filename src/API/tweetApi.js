import { apiHelper } from '../utils/helpers'
const getToken = () => localStorage.getItem('token')

export default {
  getTweets() {
    return apiHelper.get('/tweets', {
      headers: { Authorization: `Bearer ${getToken()}` },
    })
  },
  getTweet(tweetId) {
    return apiHelper.get(`/tweets/${tweetId}`, {
      headers: { Authorization: `Bearer ${getToken()}` },
    })
  },
  postTweet(description) {
    return apiHelper.post(
      '/tweets',
      {
        description,
      },
      {
        headers: { Authorization: `Bearer ${getToken()}` },
      }
    )
  },
  deleteTweet(tweetId) {
    return apiHelper.delete(`admin/tweets/${tweetId}`, {
      headers: { Authorization: `Bearer ${getToken()}` },
    })
  },
  getAdminTweets() {
    return apiHelper.get('/admin/tweets', {
      headers: { Authorization: `Bearer ${getToken()}` },
    })
  },
}
