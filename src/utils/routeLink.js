const currentUserId = localStorage.getItem('userId')

export const profileLink = (userId, page) => {
  if (userId === Number(currentUserId)) {
    return `/alphitter/user/self/${page}`
  } else {
    return `/alphitter/user/other/${page}/${userId}`
  }
}
