import { useStoreActions, useStoreState } from "easy-peasy"
import { Button, Table } from "reactstrap"


export default ({ editHandler, isOpen }) => {
    const list = useStoreState(state => state.category.data)
    const { remove } = useStoreActions(action => action.category)

    // src="blob:http://localhost:3000/4e87e8f9-36df-492c-8a31-b0c66a90c504"
    // 
    return (
        <div>
            <div>
                <Button onClick={() => editHandler()}>{isOpen ? 'Close' : 'Add'}</Button>
            </div>
            <Table>
                <thead>
                    <h1>List of Category</h1>
                    <tr>
                        <th>#</th>
                        <th>Image</th>
                        <th>ID</th>
                        <th>Name</th>
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