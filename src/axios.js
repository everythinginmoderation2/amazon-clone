import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://us-central1-clone-15400.cloudfunctions.net/api' //The api (cloud function) URL
})

export default instance;