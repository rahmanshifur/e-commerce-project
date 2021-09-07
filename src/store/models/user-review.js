import { getLocalData, setLocalData } from "../../util/helper";
import { action } from 'easy-peasy';
import shortid from 'shortid';


const UserReviewModel = {
    data: getLocalData('userReview'),
    create: action((state, payload) => {
        let obj = {
            id: shortid.generate(),
            date: new Date().toLocaleDateString(),
            comment: payload.comment,
            star: payload.star,
            userId: payload.userId,
            pdtId: payload.pdtId
        }
        state.data.push(obj)
        setLocalData('userReview', state.data)
    }),
    update: action((state, payload) => {
        let arr = state.data.map(item => {
            if (item.id === payload.id) {
                item = payload
            }
            return item
        })
        state.data = arr
        setLocalData('userReview', state.data)
    }),
    remove: action((state, payload) => {
        let arr = state.data.filter(item => item.id !== payload)
        state.data = arr
        setLocalData('userReview', state.data)
    })
}

export default UserReviewModel