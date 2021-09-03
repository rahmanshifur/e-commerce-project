import { useStoreActions, useStoreState } from "easy-peasy"
import { Button, Table } from "reactstrap"


export default ({ editHandler, isOpen }) => {
    const list = useStoreState(state => state.user.data)
    const { remove, activeInactive } = useStoreActions(action => action.user)
    return (
        <div>
            <div className="d-flex justify-content-between py-5">
                <h1>List of user</h1>
                <Button onClick={() => editHandler()}>{isOpen ? 'Close' : 'Add'}</Button>
            </div>
            <Table>
                <thead>

                    <tr>
                        <th>#</th>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Contact</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {list.length && list.map((item, i) =>

                        <tr key={item.id}>
                            <td>{++i}</td>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.address}</td>
                            <td>{item.contact}</td>
                            <td>{Number(item.status) === 1 ? 'Active' : 'Inactive'}</td>
                            <td>
                                <Button onClick={() => activeInactive(item.id)}>{Number(item.status) === 1 ? 'Inactive' : 'Active'}</Button>
                                <Button onClick={() => editHandler(item)} color='dark' className='mx-3'>Edit</Button>
                                <Button onClick={() => remove(item.id)} className='btn-danger'>Delete</Button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </div>

    )
}