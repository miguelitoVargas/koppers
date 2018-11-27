import axios from 'axios'

export const SEARCH_ACTION = 'SEARCH_ACTION'
export const UPLOAD_DATA = 'UPLOAD_DATA'
export const GET_DATA = 'GET_DATA'

const PORT = '8081'
const BASE_URL = `http://localhost:${PORT}/`
const endpoint = '/players'
  
export function searchAction(term) {

  return {
    type: SEARCH_ACTION,
    payload: term
  }
}


export function uploadFormData(data) {

  return {
    type: UPLOAD_DATA,
    payload: data
  }
}

export function getPlayers() {

  const request = {}
  return {
    type: GET_DATA,
    payload: request
  }
}
