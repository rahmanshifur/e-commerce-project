import { action } from "easy-peasy";
import { setLocalData, getLocalData } from "../../util/helper";


const CartModel = {
    data: getLocalData('cart'),
    editItem: {},
    create: action((state, payload) => {
        state.data.push(payload)
        setLocalData('cart', state.data)
    }),
    update: action((state, payload) => {
        let arr = state.data.map(item => {
            if (item.id === payload.id) {
                item.quantity = payload.quantity
            }
            return item
        })
        state.editItem = {}
        state.data = arr
        setLocalData('cart', state.data)

    }),
    remove: action((state, payload) => {
        let arr = state.data.filter(item => item.id !== payload)
        state.data = arr
        setLocalData('cart', state.data)
    }),
    emptyCart: action((state) => {
        state.data = []
        setLocalData('cart', state.data)
    }),
}

export default CartModel