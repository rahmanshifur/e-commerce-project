// IMPORT COMPONENT
import Header from './header'
import Footer from './footer'
import { Container } from 'reactstrap'


export default (props) => {
    return (
        <Container>
            <Header />
            {props.children}
            <Footer />
        </Container>

    )
}