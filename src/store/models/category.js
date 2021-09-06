import { action } from "easy-peasy";
import shortid from "shortid";
import { setLocalData, getLocalData } from "../../util/helper";


const CategoryModel = {
    data: getLocalData('category'),
    tmpData: [],
    create: action((state, payload) => {
        let obj = {
            id: shortid.generate(),
            name: payload.name,
            file: payload.file,
        }
        state.data.push(obj)
        setLocalData('category', state.data)
    }),
    update: action((state, payload) => {
        let arr = state.data.map(item => {
            if (item.id === payload.id) {
                item = payload
            }
            return item
        })
        state.data = arr
        setLocalData('category', state.data)
    }),
    remove: action((state, payload) => {
        let arr = state.data.filter(item => item.id !== payload)
        state.data = arr
        setLocalData('category', state.data)
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
            if (res) {
                return item
            }
        })
        state.tmpData = state.data
        state.data = arr
    }),
    resetData: action((state) => {
        if (state.tmpData.length === 0)
            return;

        state.data = state.tmpData
        state.tmpData = []
    })

}

export default CategoryModel