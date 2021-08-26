import { useStoreActions, useStoreState } from "easy-peasy"
import { Button, Table } from "reactstrap"


export default () => {
    const list = useStoreState(state => state.user.data)
    const { remove, edit, activeInactive } = useStoreActions(action => action.user)
    return (
        <Table>
            <thead>
                <h1>List of
                    user</h1>
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
                            <Button onClick={() => edit(item.id)} color='dark' className='mx-3'>Edit</Button>
                            <Button onClick={() => remove(item.id)} className='btn-danger'>Delete</Button>
                        </td>
                    </tr>
                )}
            </tbody>
        </Table>
    )
}