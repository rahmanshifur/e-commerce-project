import { useStoreState } from "easy-peasy"

import List from "./list"
import Create from "./create"
import Update from "./update"

export default () => {
    const { editItem } = useStoreState(state => state.color)
    return (
        <div>
            {Object.keys(editItem).length > 0 ?
                <Update editItem={editItem} /> :
                <Create />}
            <List />
        </div>
    )
}