import axios from 'axios'
import Swal from 'sweetalert2'

const baseURL = 'https://secure-peak-76328.herokuapp.com/api'
// const baseURL = 'http://localhost:3000/api'

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