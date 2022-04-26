import api from "../../utils/api";

const userAPI = {
    async login(payload) {
        const response = await api.post('http://restapi.adequateshop.com/api/authaccount/login', payload)
        return response
    },

    async getAllUsers() {
        const response = await api.get('http://restapi.adequateshop.com/api/users?page=1')
        return response
    }
}

export default userAPI;