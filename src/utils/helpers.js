import axios from 'axios'
import Swal from 'sweetalert2'

const baseURL = 'https://xeeue7w4j5.execute-api.ap-northeast-1.amazonaws.com/api'

export const apiHelper = axios.create({
  baseURL,
})

export const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  heightAuto: false,
  width: 250,
  timer: 3000,
})

export const Alert = Swal.mixin({
  showConfirmButton: false,
  width: 2000,
  timer: 60000,
})

export const WarnAlert = Swal.mixin({
  customClass: {
    confirmButton: 'btn btn-success',
    cancelButton: 'btn btn-danger',
  },
})
