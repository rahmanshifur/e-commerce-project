import { action } from "easy-peasy";
import { setLocalData, getLocalData } from "../../util/helper";
import shortid from 'shortid'



// ORDER, PROCESSING, COMPLETE, CANCEL


const OrderModel = {
    data: getLocalData('order'),
    create: action((state, payload) => {
        payload.orderId = shortid.generate()
        payload.createdAt = new Date()

        state.data.push(payload)
        setLocalData('order', state.data)
    }),
    update: action((state, payload) => {
        let arr = state.data.map(item => {
            if (item.orderId === payload.orderId) {
                item.status = payload.status
            }
            return item
        })
        state.data = arr
        setLocalData('order', state.data)
    }),
    remove: action((state, payload) => {
        let arr = state.data.filter(item => item.orderId !== payload)
        state.data = arr
        setLocalData('order', state.data)
    })
}
export default OrderModel