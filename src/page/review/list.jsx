import { useStoreActions, useStoreState } from "easy-peasy"
import { Button, Table } from "reactstrap"


export default () => {
    const list = useStoreState(state => state.review.data)
    const { remove, edit } = useStoreActions(action => action.review)
    const userData = useStoreState(state => state.user.data)
    const productData = useStoreState(state => state.product.data)

    return (
        <Table>
            <thead>
                <h1>List of
                    Color</h1>
                <tr>
                    <th>#</th>
                    <th>ID</th>
                    <th>Name</th>
                    <th>User</th>
                    <th>Product</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {list.length && list.map((item, i) =>

                    <tr key={item.id}>
                        <td>{++i}</td>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{userData.map(usr => usr.id === item.user_id && <>{usr.name}</>)}</td>
                        <td>{productData.map(pdt => pdt.id === item.product_id && <>{pdt.name}</>)}</td>
                        <td>
                            <Button onClick={() => edit(item.id)}>Edit</Button>
                            <Button onClick={() => remove(item.id)} className='btn-danger'>Delete</Button>
                        </td>
                    </tr>
                )}
            </tbody>
        </Table>
    )
}