import { useStoreState } from "easy-peasy"

import List from "./list"
import Create from "./create"
import Update from "./update"
import Filter from "./filter"

export default () => {
    const { editItem } = useStoreState(state => state.review)
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