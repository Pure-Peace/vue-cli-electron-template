import axios from '../requester'

// Api resources here
export default {
  // Async await
  async demoGetV2 () {
    return (await axios.get('http://example.com/')).data
  },
  demoPostV2 () {
    return axios.post('http://example.com/').then(response => response.data)
  }
}
