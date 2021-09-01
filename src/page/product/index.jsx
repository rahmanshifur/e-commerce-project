import { useStoreState } from "easy-peasy"

import Create from "./create"
import Filter from "./filter";
import List from "./list"
import Update from './update';
import { useState } from 'react';

export default () => {
    const [isOpen, setIsOpen] = useState(false)
    const { editItem } = useStoreState(state => state.product)


    return (
        <div>
            {Object.keys(editItem).length > 0 ?
                <Update editItem={editItem} /> :
                <Create />}
            <Filter />
            <List />
            {isOpen && <Filter addHandler={setIsOpen(true)} />}
        </div>
    )
}