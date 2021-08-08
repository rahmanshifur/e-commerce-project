import { useStoreState, useStoreActions } from 'easy-peasy';
import { Container, Row, Col, Table, Input, Button } from "reactstrap"
import Sidebar from './../../components/layout/sidebar';
import { navigate } from '@reach/router';


function Payment() {
    const cartData = useStoreState(state => state.cart.data)
    const auth = useStoreState(state => state.auth.data)

    const createOrder = useStoreActions(action => action.order.create)
    const emptyCart = useStoreActions(action => action.cart.emptyCart)

    const totalCal = () => {
        let total = 0;
        if (cartData && cartData.length) {
            cartData.forEach(cart => {
                total += cart.quantity * cart.price
            })
        }
        return total
    }

    const orderHandler = () => {
        if (auth.length === 0) {
            navigate('/login')
            return
        }


        let obj = {
            pdtItem: cartData,
            status: 'ORDER',
            userId: auth[0].id
        }
        createOrder(obj)
        emptyCart()
        alert('Order has been submitted successfully!')
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
                                    <td>{item.quantity}</td>
                                </tr>
                            )}

                            {cartData && cartData.length && <tr>
                                <td colSpan={7}> Ground-Total</td>
                                <td>BDT{totalCal()}</td>
                            </tr>}
                        </tbody>
                    </Table>

                    <Button onClick={() => orderHandler()} className='float-right'>Submit Order</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default Payment