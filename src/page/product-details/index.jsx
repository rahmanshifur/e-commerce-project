import { useState } from 'react';
import { useStoreState, useStoreActions } from 'easy-peasy';
import { Form, Col, Container, Row, CardTitle, CardSubtitle, CardText, CardBody, CardImg, Button, Input } from "reactstrap";
import Sidebar from "../../components/layout/sidebar";
import UserReview from '../user-review';
import { dateTime } from './../../util/helper';





function ProductDetails(props) {
    const [quantity, setQuantity] = useState(1)
    const [comment, setComment] = useState('')
    const [star, setStar] = useState('')



    const pdtData = useStoreState(state => state.product.data)
    const selPdt = pdtData.filter(item => item.id === props.pdtId)[0]


    const clrData = useStoreState(state => state.color.data)
    const sizData = useStoreState(state => state.size.data)
    const tagData = useStoreState(state => state.tag.data)


    const cartData = useStoreState(state => state.cart.data)
    const addToCart = useStoreActions(action => action.cart.create)
    const updateQuantity = useStoreActions(action => action.cart.update)





    const { create } = useStoreActions(action => action.userReview)
    const authData = useStoreState(state => state.auth.data)
    const userReviewData = useStoreState(state => state.userReview.data)

    const submitHandler = e => {
        e.preventDefault()
        let obj = {
            comment: comment,
            star: star,
            userId: authData.id,
            pdtId: props.pdtId
        }
        create(obj)
        console.log(obj)
        setComment('')
        setStar('')

    }



    const addToCartHandler = (item) => {
        if (quantity < 1 || quantity > 50) {
            alert('Please provide a valid quantity!')
            return;
        }



        // IF NO HAVE ANY PRODUCT
        if (cartData.length === 0) {
            item.quantity = quantity
            addToCart(item)
            return;
        }

        // CHECK ALREADY HAVE THIS PRODUCT OR NOT 
        let checkPdt = cartData.filter(pdt => pdt.id === item.id)

        // IF ALREADY NOT ADD THIS PRODUCT
        if (checkPdt.length === 0) {
            item.quantity = quantity
            addToCart(item)
            return;
        }

        // IF ALREADY ADD THIS PRODUCT
        updateQuantity({ id: item.id, quantity })
        alert('Quantity has been updated successfully!')
    }

    return (
        <section>
            <Container>
                <Row>
                    <Col sm={3}>
                        <Sidebar />
                    </Col>
                    <Col sm={9}>
                        <Row>
                            <Col md={6}>
                                <div>
                                    <img src={selPdt.file} alt='product' height='250' />
                                    <div>
                                        {selPdt.files && selPdt.files.length !== 0 && selPdt.files.map(item => <img src={item} key={item} alt='pdt' height='100' width='100' />)}
                                    </div>
                                </div>

                            </Col>
                            <Col md={6}>
                                <CardTitle tag="h5">{selPdt.title}</CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted"> Price :{selPdt.price}</CardSubtitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted"> Vat :{selPdt.vat}</CardSubtitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted"> Discount :{selPdt.discount}</CardSubtitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted"> Color :{
                                    clrData.length > 0 && clrData.map(clr => clr.id === selPdt.colors && <span key={clr.id}>{clr.name}</span>)
                                }</CardSubtitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted"> Size :{
                                    sizData.length > 0 && sizData.map(clr => clr.id === selPdt.sizes && <span key={clr.id}>{clr.name}</span>)
                                }</CardSubtitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted"> Tag :{
                                    tagData.length > 0 && tagData.map(clr => clr.id === selPdt.tags && <span key={clr.id}>{clr.name}</span>)
                                }</CardSubtitle>
                                <hr />
                                <CardText>{selPdt.description}</CardText>
                                <Input
                                    type='number'
                                    value={quantity}
                                    onChange={(e) => setQuantity(e.target.value)}
                                />
                                <Button onClick={() => addToCartHandler(selPdt)}>Add Too Cart</Button>

                            </Col>
                        </Row>

                    </Col>
                </Row>
                {authData.length !== 0 &&
                    <Row>
                        <h3>Product Review</h3>
                        <Form onSubmit={submitHandler}>
                            <div>
                                <Input
                                    type='textarea'
                                    value={comment}
                                    onChange={(e) => setComment(e.target.value)}
                                    placeholder='Description'
                                    required
                                />
                            </div>
                            <div>
                                <Input
                                    type='select'
                                    value={star}
                                    onChange={(e) => setStar(e.target.value)}
                                    placeholder='Enter number'
                                    required
                                >
                                    <option value=''>Select Star</option>
                                    <option value='1'>1 Star</option>
                                    <option value='2'>2 Star</option>
                                    <option value='3'>3 Star</option>
                                    <option value='4'>4 Star</option>
                                    <option value='5'>5 Star</option>
                                </Input>
                            </div>
                            <Button type='submit'>Save</Button>
                        </Form>
                        {userReviewData && userReviewData.length > 0 && userReviewData.map(item => item.pdtId === props.pdtId && <span key={item.id}>
                            <h3>{item.comment}</h3>
                            <h3>{item.star}</h3>
                            <h3>{dateTime(item.date)}</h3>
                        </span>)}
                    </Row>
                }
            </Container>
        </section>
    )
}
export default ProductDetails
