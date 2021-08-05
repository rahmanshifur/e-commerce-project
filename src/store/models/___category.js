import { action } from "easy-peasy";
import shortid from "shortid";
<<<<<<< HEAD
import { getLocalData, setLocalData } from './../../util/helper';
=======
import { setLocalData, getLocalData } from "../../util/helper";
>>>>>>> 6aac71099789881d8b79f3358057b50ec99e7ebd


const CategoryModel = {
    data: getLocalData('category'),
    editItem: {},
    create: action((state, payload) => {
        let obj = {
            id: shortid.generate(),
            name: payload,
        }
        state.data.push(obj)
        setLocalData('category', state.data)
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
        setLocalData('category', state.data)
<<<<<<< HEAD
=======

>>>>>>> 6aac71099789881d8b79f3358057b50ec99e7ebd
    }),
    remove: action((state, payload) => {
        let arr = state.data.filter(item => item.id !== payload)
        state.data = arr
        setLocalData('category', state.data)
<<<<<<< HEAD
=======

>>>>>>> 6aac71099789881d8b79f3358057b50ec99e7ebd
    })

}

export default CategoryModel