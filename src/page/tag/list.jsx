import { useStoreActions, useStoreState } from "easy-peasy"
import { Button, Table } from "reactstrap"


export default ({ editHandler, isOpen }) => {
    const list = useStoreState(state => state.tag.data)
    const { remove } = useStoreActions(action => action.tag)


    return (
        <div>
            <Button onClick={() => editHandler()}>{isOpen ? 'Close' : 'Add'}</Button>
            <Table>
                <thead>
                    <h1>List of Tag</h1>
                    <tr>
                        <th>#</th>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {list.length && list.map((item, i) =>

                        <tr key={item.id}>
                            <td>{++i}</td>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
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