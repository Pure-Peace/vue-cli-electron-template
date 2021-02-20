import axios from '../requester'

// Api resources here
export default {
  // Async await
  async publicGet () {
    return (await axios.get('http://example.com/')).data
  },
  publicPost () {
    return axios.post('http://example.com/').then(response => response.data)
  }
}
