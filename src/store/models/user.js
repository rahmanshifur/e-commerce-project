import { action } from "easy-peasy";
import shortid from "shortid";
import { getLocalData, setLocalData } from "../../util/helper";


const UserModel = {
    data: getLocalData('user'),
    editItem: {},
    create: action((state, payload) => {
        let obj = {
            id: shortid.generate(),
            name: payload.name,
            email: payload.email,
            contact: payload.contact,
            address: payload.address,
            password: payload.password,
        }
        state.data.push(obj)
        setLocalData('user', state.data)

    }),
    edit: action((state, payload) => {
        state.editItem = state.data.filter(item => item.id === payload)[0]

    }),
    update: action((state, payload) => {
        let arr = state.data.map(item => {
            if (item.id === payload.id) {
                item = payload
            }
            return item
        })
        state.editItem = {}
        state.data = arr
        setLocalData('user', state.data)

    }),
    remove: action((state, payload) => {
        let arr = state.data.filter(item => item.id !== payload)
        state.data = arr
        state.editItem = {}
        setLocalData('user', state.data)

    })

}

export default UserModel