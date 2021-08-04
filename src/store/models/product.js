import { action } from "easy-peasy";
import shortid from "shortid";


const ProductModel = {
    data: [],
    editItem: {},
    create: action((state, payload) => {
        let obj = {
            id: shortid.generate(),
            category_id: payload.category_id,
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
    }),
    remove: action((state, payload) => {
        let arr = state.data.filter(item => item.id !== payload)
        state.data = arr
        state.editItem = {}

    })

}

export default ProductModel