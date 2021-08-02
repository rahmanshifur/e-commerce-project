// IMPORT ROUTER FROM REACH ROUTER
import { Router } from "@reach/router"

// IMPORT LAYOUT FROM COMPONENT
import Layout from '../components/layout'

// IMPORT PAGES
import Home from '../page/home'
import About from '../page/about'
import Contact from '../page/contact'
import FAQ from '../page//faq'
import PageNotFound from '../page/404'


export default () => {
    return (
        <Layout>
            <Router>
                <FAQ path='/faq' />
                <Contact path='/contact' />
                <About path='/about' />
                <Home path='/' />
                <PageNotFound default />
            </Router>
        </Layout>
    )
}
