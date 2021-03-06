import { action } from "easy-peasy";
import shortid from "shortid";
import { getLocalData, setLocalData } from "../../util/helper";


const UserModel = {
    data: getLocalData('user'),
    tmpData: [],
    create: action((state, payload) => {
        let obj = {
            id: shortid.generate(),
            name: payload.name,
            email: payload.email,
            contact: payload.contact,
            address: payload.address,
            password: payload.password,
            file: payload.file,
            status: payload.status,
        }
        state.data.push(obj)
        setLocalData('user', state.data)

    }),
    update: action((state, payload) => {
        let arr = state.data.map(item => {
            if (item.id === payload.id) {
                item = payload
            }
            return item
        })
        state.data = arr
        setLocalData('user', state.data)
    }),
    remove: action((state, payload) => {
        let arr = state.data.filter(item => item.id !== payload)
        state.data = arr
        setLocalData('user', state.data)
    }),
    activeInactive: action((state, payload) => {
        let arr = state.data.map(item => {
            if (item.id === payload) {
                item.status = Number(item.status) === 1 ? 0 : 1
            }
            return item
        })
        state.data = arr
        setLocalData('user', state.data)
    }),
    filterData: action((state, payload) => {

        if (state.tmpData.length !== 0) {
            state.data = state.tmpData
        }

        let arr = state.data.filter(item => {

            let res = true
            if (payload.id && !item.id.toLowerCase().includes(payload.id.toLowerCase())) {
                res = false
            }
            if (payload.name && !item.name.toLowerCase().includes(payload.name.toLowerCase())) {
                res = false
            }
            if (payload.email && !item.email.toLowerCase().includes(payload.email.toLowerCase())) {
                res = false
            }
            if (payload.address && !item.address.toLowerCase().includes(payload.address.toLowerCase())) {
                res = false
            }
            if (payload.contact && !item.contact.toLowerCase().includes(payload.contact.toLowerCase())) {
                res = false
            }
            if (payload.status && Number(item.status) !== Number(payload.status)) {
                res = false
            }
            if (res) {
                return item
            }
        })
        state.tmpData = state.data
        state.data = arr
    }),
    resetData: action((state) => {
        if (state.tmpData.length === 0)
            return
        state.data = state.tmpData
        state.tmpData = []
    })
}

export default UserModel