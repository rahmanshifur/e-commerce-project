// IMPORT COMPONENT
import Header from './header'
import Footer from './footer'


export default (props) => {
    return (
        <>
            <Header />
            {props.children}
            <Footer />
        </>
    )
}