import axios from 'axios'
import Swal from 'sweetalert2'

const baseURL = 'https://floating-badlands-66539.herokuapp.com/api'

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
