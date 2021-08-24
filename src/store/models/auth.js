import { action } from "easy-peasy";
import { setLocalData, getLocalData } from "../../util/helper";
import { navigate } from '@reach/router';

const AuthModel = {
    data: getLocalData('auth'),
    login: action((state, payload) => {
        let authUser = payload.users.filter(item => item.email === payload.email && item.password === payload.password)
        if (authUser.length === 0) {
            alert('Invalid credential')
            return
        }
        if (Number(authUser[0].status) !== 1) {
            alert('Your account is inactive, please contact our support!')
            return
        }
        alert('Login successfully')
        state.data = authUser
        setLocalData('auth', state.data)

        navigate(-1)
    }),
    logout: action((state) => {
        state.data = []
        navigate('/home')
        setLocalData('auth', state.data)
    })
}
export default AuthModel