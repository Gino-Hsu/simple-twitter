import axios from 'axios'
import Swal from 'sweetalert2'

const baseURL = 'https://secure-peak-76328.herokuapp.com/api'

export const apiHelper = axios.create({
  baseURL,
})

export const Tost = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
})
