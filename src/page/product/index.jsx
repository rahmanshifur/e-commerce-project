import { useStoreState } from "easy-peasy"

import Create from "./create"
import Filter from "./filter";
import List from "./list"
import Update from './update';

export default () => {
    const { editItem } = useStoreState(state => state.product)
    return (
        <div>
            {Object.keys(editItem).length > 0 ?
                <Update editItem={editItem} /> :
                <Create />}
            <Filter />
            <List />
        </div>
    )
}