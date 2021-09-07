import { useStoreActions, useStoreState } from "easy-peasy"
import { Button, Table } from "reactstrap"


export default ({ editHandler, isOpen }) => {
    const list = useStoreState(state => state.subcategory.data)
    const { remove } = useStoreActions(action => action.subcategory)
    const categoryData = useStoreState(state => state.category.data)
    return (
        <div>
            <div>
                <h1>List of Subcategory</h1>
                <Button onClick={() => editHandler()}>{isOpen ? 'Close' : 'Add'}</Button>
            </div>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Image</th>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Category Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {list.length && list.map((item, i) =>

                        <tr key={item.id}>
                            <td>{++i}</td>
                            <td><img src={item.file} alt='pdt' height='100' /></td>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{categoryData.map(ctg => ctg.id === item.category && <> {ctg.name}</>)}</td>
                            <td>
                                <Button onClick={() => editHandler(item)}>Edit</Button>
                                <Button onClick={() => remove(item.id)} className='btn-danger'>Delete</Button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </div>
    )
}