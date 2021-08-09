import { useStoreState, useStoreActions } from 'easy-peasy';
import { Container, Row, Col, Table, Input, Button } from "reactstrap"
import Sidebar from './../../components/layout/sidebar';
import { Link } from '@reach/router';


function CheckOut() {

    const cartData = useStoreState(state => state.cart.data)

    const updateQuantity = useStoreActions(action => action.cart.update)
    const cartRemove = useStoreActions(action => action.cart.remove)

    const quantityHandler = (quantity, pdtId) => {
        if (quantity < 1 || quantity > 50) {
            alert('Please provide valid quantity!')
            return;
        }
        updateQuantity({ id: pdtId, quantity })
        alert('Update has been successfully')
    }

    const totalCal = () => {
        let total = 0;
        if (cartData && cartData.length) {
            cartData.forEach(cart => {
                total += cart.quantity * cart.price
            })
        }
        return total
    }


    return (
        <Container>
            <Row>
                <Col sm={3}>
                    <Sidebar />
                </Col>
                <Col sm={9}>
                    <Table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>ID</th>
                                <th>Title</th>
                                <th>Price</th>
                                <th>Vat</th>
                                <th>Discount</th>
                                <th>Total-Price</th>
                                <th>Quantity</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartData && cartData.length > 0 && cartData.map((item, i) =>
                                <tr key={item.id}>
                                    <td>{++i}</td>
                                    <td>{item.id}</td>
                                    <td>{item.title}</td>
                                    <td>BDT{item.price}</td>
                                    <td>{item.vat}%</td>
                                    <td>{item.discount}%</td>
                                    <td>BDT{item.quantity * item.price}</td>

                                    <td>
                                        <Input
                                            type='number'
                                            value={item.quantity}
                                            onChange={(e) => quantityHandler(e.target.value, item.id)}
                                            style={{ width: 70 }}
                                        />
                                    </td>
                                    <td>
                                        <Button onClick={() => cartRemove(item.id)} color="danger">Remove</Button>
                                    </td>
                                </tr>
                            )}

                            {cartData && cartData.length && <tr>
                                <td colSpan={8}> Ground-Total</td>
                                <td>BDT{totalCal()}</td>
                            </tr>}
                        </tbody>
                    </Table>

                    {cartData.length > 0 &&
                        <Link to='/payment' className='btn btn-primary float-right'>Pay Now</Link>}
                </Col>
            </Row>
        </Container>
    )
}

export default CheckOut