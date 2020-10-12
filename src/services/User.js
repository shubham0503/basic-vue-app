import config from '@/config/default.json'
import axios from 'axios'

const registerUser = async (payload) => {
    try {
        await axios.post(config.API.REGISTER, payload)

        return true
    } catch {
        return false;
    }
}

export {
    registerUser
}
