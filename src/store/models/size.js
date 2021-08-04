import { action } from "easy-peasy";
import shortid from "shortid";
import { getLocalData, setLocalData } from "../../util/helper";


const SizeModel = {
    data: getLocalData('size'),
    editItem: {},
    create: action((state, payload) => {
        let obj = {
            id: shortid.generate(),
            name: payload,
        }
        state.data.push(obj)
        setLocalData('size', state.data)

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
        setLocalData('size', state.data)

    }),
    remove: action((state, payload) => {
        let arr = state.data.filter(item => item.id !== payload)
        state.data = arr
        state.editItem = {}
        setLocalData('size', state.data)

    })

}

export default SizeModel