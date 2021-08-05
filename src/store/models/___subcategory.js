import { action } from "easy-peasy";
import shortid from 'shortid';
import { getLocalData, setLocalData } from "../../util/helper";
<<<<<<< HEAD

=======
>>>>>>> 6aac71099789881d8b79f3358057b50ec99e7ebd


const SubCategoryModel = {
    data: getLocalData('subcategory'),
    editItem: {},
    create: action((state, payload) => {
        let obj = {
            id: shortid.generate(),
            name: payload.name,
            category: payload.category,
        }
        state.data.push(obj)
        setLocalData('subcategory', state.data)
<<<<<<< HEAD
=======

>>>>>>> 6aac71099789881d8b79f3358057b50ec99e7ebd
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
        setLocalData('subcategory', state.data)
<<<<<<< HEAD
=======

>>>>>>> 6aac71099789881d8b79f3358057b50ec99e7ebd
    }),
    remove: action((state, payload) => {
        let arr = state.data.filter(item => item.id !== payload)
        state.data = arr
        state.editItem = {}
        setLocalData('subcategory', state.data)
<<<<<<< HEAD
=======

>>>>>>> 6aac71099789881d8b79f3358057b50ec99e7ebd
    })

}

export default SubCategoryModel