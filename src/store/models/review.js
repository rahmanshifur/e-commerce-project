import { action } from "easy-peasy";
import shortid from "shortid";
import { getLocalData, setLocalData } from "../../util/helper";


const ReviewModel = {
    data: getLocalData('review'),
    editItem: {},
    create: action((state, payload) => {
        let obj = {
            id: shortid.generate(),
            comment: payload.comment,
            star: payload.star,
            user_id: payload.user_id,
            product_id: payload.product_id,
            date: new Date().toLocaleDateString()
        }
        state.data.push(obj)
        setLocalData('review', state.data)

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
        setLocalData('review', state.data)

    }),
    remove: action((state, payload) => {
        let arr = state.data.filter(item => item.id !== payload)
        state.data = arr
        state.editItem = {}
        setLocalData('review', state.data)

    })

}

export default ReviewModel