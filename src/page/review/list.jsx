import { useStoreActions, useStoreState } from "easy-peasy"
import { Button, Table } from "reactstrap"


export default ({ editHandler, isOpen }) => {
    const list = useStoreState(state => state.review.data)
    const { remove, edit } = useStoreActions(action => action.review)
    const userData = useStoreState(state => state.user.data)
    const productData = useStoreState(state => state.product.data)

    return (
        <div>
            <div className="d-flex justify-content-between py-5">
                <h1>List of Color</h1>
                <Button onClick={() => editHandler()}>{isOpen ? 'Close' : 'Add'}</Button>
            </div>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>ID</th>
                        <th>Star</th>
                        <th>Comment</th>
                        <th>User</th>
                        <th>Product</th>
                        <th>Date&Time</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {list.length && list.map((item, i) =>

                        <tr key={item.id}>
                            <td>{++i}</td>
                            <td>{item.id}</td>
                            <td>{item.star}</td>
                            <td>{item.comment}</td>
                            <td>{userData.map(usr => usr.id === item.user_id && <>{usr.name}</>)}</td>
                            <td>{productData.map(pdt => pdt.id === item.product_id && <>{pdt.title}</>)}</td>
                            <td>{item.date}</td>
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