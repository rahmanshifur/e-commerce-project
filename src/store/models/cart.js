import { action } from "easy-peasy";
import { setLocalData, getLocalData } from "../../util/helper";


const CartModel = {
    data: getLocalData('cart'),
    editItem: {},
    create: action((state, payload) => {
        if (state.data.length !== 0) {
            let pdt = state.data.filter(item => item.id === payload.id)
            if (pdt.length > 0) {
                alert('This product already in cart!')
                return;
            }
        }
        state.data.push(payload)
        setLocalData('cart', state.data)
        alert('Product add to cart!')
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