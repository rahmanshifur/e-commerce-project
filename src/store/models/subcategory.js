import { action } from "easy-peasy";
import shortid from 'shortid';
import { getLocalData, setLocalData } from "../../util/helper";



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
    }),
    remove: action((state, payload) => {
        let arr = state.data.filter(item => item.id !== payload)
        state.data = arr
        state.editItem = {}
        setLocalData('subcategory', state.data)
    })

}

export default SubCategoryModel