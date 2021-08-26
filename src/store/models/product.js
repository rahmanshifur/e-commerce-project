import { action } from "easy-peasy";
import shortid from "shortid";
import { getLocalData, setLocalData } from "../../util/helper";


const ProductModel = {
    data: getLocalData('product'),
    editItem: {},
    tmpData: [],
    create: action((state, payload) => {
        let obj = {
            id: shortid.generate(),
            subcategory_id: payload.subcategory_id,
            title: payload.title,
            price: payload.price,
            vat: payload.vat,
            discount: payload.discount,
            description: payload.description,
            colors: payload.colors,
            sizes: payload.sizes,
            tags: payload.tags,
        }
        state.data.push(obj)
        setLocalData('product', state.data)

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
        setLocalData('product', state.data)

    }),
    remove: action((state, payload) => {
        let arr = state.data.filter(item => item.id !== payload)
        state.data = arr
        state.editItem = {}
        setLocalData('product', state.data)
    }),
    filterData: action((state, payload) => {
        console.log(payload)
        return
        if (state.tmpData.length !== 0) {
            state.data = state.tmpData
        }
        let arr = state.data.filter(item => {
            let res = true
            if (payload.id && !item.id.toLowerCase().includes(payload.id.toLowerCase())) {
                res = false
            }
            if (payload.title && !item.title.toLowerCase().includes(payload.title.toLowerCase())) {
                res = false
            }
            if (payload.tag && !item.tags.toLowerCase().includes(payload.tag.toLowerCase())) {
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

export default ProductModel