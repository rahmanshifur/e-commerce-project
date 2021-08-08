import { action } from "easy-peasy";
import { setLocalData, getLocalData } from "../../util/helper";

const AuthModel = {
    data: getLocalData('auth'),
    login: action((state, payload) => {
        let authUser = payload.users.filter(item => item.email === payload.email && item.password === payload.password)
        if (!authUser)
            return

        state.data = authUser
        setLocalData('auth', state.data)
    }),
    logout: action((state) => {
        state.data = []
    })
}
export default AuthModel