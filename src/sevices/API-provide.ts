import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '4ca60c13404e49d09d9bb8df1588582b',
    },
})
