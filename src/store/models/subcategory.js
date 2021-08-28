import { action } from "easy-peasy";
import shortid from 'shortid';
import { getLocalData, setLocalData } from "../../util/helper";


const SubCategoryModel = {
    data: getLocalData('subcategory'),
    editItem: {},
    tmpData: [],
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
            if (payload.catName && item.category !== payload.catName) {
                res = false
            }
            if (payload.scatName && !item.name.toLowerCase().includes(payload.scatName.toLowerCase())) {
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

export default SubCategoryModel