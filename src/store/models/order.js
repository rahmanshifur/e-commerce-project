import { action } from "easy-peasy";
import { setLocalData, getLocalData } from "../../util/helper";
import shortid from 'shortid'



// ORDER, PROCESSING, COMPLETE, CANCEL


const OrderModel = {
    data: getLocalData('order'),
    tmpData: [],
    create: action((state, payload) => {
        payload.orderId = shortid.generate()
        payload.createdAt = new Date()

        state.data.unshift(payload)
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
    }),
    filterOrder: action((state, payload) => {
        let { startDate, endDate } = payload
        startDate = new Date(startDate).getTime()
        endDate = new Date(endDate).getTime()
        state.tmpData = state.data
        let arr = state.data.filter(item => new Date(item.createdAt).getTime() >= startDate && new Date(item.createdAt).getTime() <= endDate)
        state.data = arr
    }),
    resetFilter: action((state) => {
        if (state.tmpData.length === 0)
            return;
        state.data = state.tmpData
        state.tmpData = []
    })
}
export default OrderModel