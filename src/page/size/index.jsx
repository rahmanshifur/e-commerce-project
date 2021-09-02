import { useStoreState } from "easy-peasy"

import List from "./list"
import Create from "./create"
import Update from "./update"
import Filter from "./filter"
import { useState } from 'react';

export default () => {
    const [isOpen, setIsOpen] = useState(false)
    const [editItem, setEditITem] = useState({})

    const editHandler = (item = {}) => {
        setIsOpen(!isOpen)
        setEditITem(item)
    }
    return (
        <div>
            {Object.keys(editItem).length !== 0 ? <Update editItem={editItem} editHandler={editHandler} /> :
                isOpen && <Create editHandler={editHandler} />}

            <Filter />
            <List editHandler={editHandler} isOpen={isOpen || Object.keys(editItem).length !== 0} />
        </div>


    )
}