import Axios from 'axios'

export default Axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers : {
        Authorization: 'Client-ID vlMwOIsc1ppWklhJAfx-wDJlHfh2sOldy3H2G-Z-v0k'
    }
})