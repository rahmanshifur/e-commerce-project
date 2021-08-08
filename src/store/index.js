import { createStore, action } from "easy-peasy";

// IMPORT MODELS
import CategoryModel from './models/category';
import ProductModel from "./models/product";
import SubCategoryModel from './models/subcategory';
import ColorModel from './models/color';
import SizeModel from './models/size';
import TagModel from './models/tag';
import UserModel from './models/user';
import ReviewModel from './models/review';
import CartModel from './models/cart';
import OrderModel from "./models/order";
import AuthModel from "./models/auth";

const store = createStore({
    auth: AuthModel,
    order: OrderModel,
    cart: CartModel,
    category: CategoryModel,
    subcategory: SubCategoryModel,
    product: ProductModel,
    color: ColorModel,
    size: SizeModel,
    tag: TagModel,
    user: UserModel,
    review: ReviewModel
});

export default store