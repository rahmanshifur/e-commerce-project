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
import Category from "../page/category"
import Color from "../page/color"
import Size from "../page/size"
import Tag from "../page/tag"
import Subcategory from "../page/subcategory"
import Product from "../page/product"
import User from "../page/user"
import Review from "../page/review"
import ScatProduct from "../page/scat-product"
import ProductDetail from "../page/product-details"
import AllProduct from "../page/all-proudct"




export default () => {
    return (
        <Layout>
            <Router>
                <AllProduct path='/all-product' />
                <ProductDetail path='/product-details/:pdtId' />
                <ScatProduct path='/scat-product/:scatId' />
                <FAQ path='/faq' />
                <Contact path='/contact' />
                <About path='/about' />
                <Category path='/category' />
                <Color path='/color' />
                <Size path='/size' />
                <Tag path='tag' />
                <Subcategory path='subcategory' />
                <Product path='/product' />
                <User path='/user' />
                <Review path='/review' />
                <Home path='/' />
                <PageNotFound default />
            </Router>
        </Layout>
    )
}
