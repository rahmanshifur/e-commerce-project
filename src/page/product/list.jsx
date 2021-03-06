import { Link } from "@reach/router"
import { useStoreActions, useStoreState } from "easy-peasy"
import { Button, Table } from "reactstrap"



export default ({ editHandler, isOpen }) => {
    const list = useStoreState(state => state.product.data)
    const { remove } = useStoreActions(action => action.product)

    const catData = useStoreState(state => state.category.data)
    const subcategoryData = useStoreState(state => state.subcategory.data)
    const colorData = useStoreState(state => state.color.data)
    const sizeData = useStoreState(state => state.size.data)
    const tagData = useStoreState(state => state.tag.data)




    return (
        <div>
            <div className="d-flex justify-content-between py-5">
                <h1 >List of Product</h1>
                <Button onClick={() => editHandler()}>{isOpen ? 'Close' : 'Add'}</Button>
            </div>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Image</th>
                        <th>ID</th>
                        <th>Category Name</th>
                        <th>Subcategory Name</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Vat</th>
                        <th>Discount</th>
                        <th>Color</th>
                        <th>Size</th>
                        <th>Tag</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {list.length && list.map((item, i) =>

                        <tr key={item.id}>
                            <td>{++i}</td>
                            <td><img src={item.file} alt='pdt' height='100' /></td>
                            <td>{item.id}</td>
                            <td>{subcategoryData.map(scat => scat.id === item.subcategory_id && catData.map(cat => cat.id === scat.category && <span key={cat.id}>{cat.name}</span>))}</td>
                            <td>{subcategoryData.map(sctg => sctg.id === item.subcategory_id && <>{sctg.name}</>)}</td>
                            <td>{item.title}</td>
                            <td>{item.description}</td>
                            <td>{item.price}</td>
                            <td>{item.vat}</td>
                            <td>{item.discount}</td>
                            <td>{colorData.map(clr => clr.id === item.colors && <>{clr.name}</>)}</td>
                            <td>{sizeData.map(siz => siz.id === item.sizes && <>{siz.name}</>)}</td>
                            <td>{tagData.map(tg => tg.id === item.tags && <>{tg.name}</>)}</td>
                            <td>
                                <Button onClick={() => editHandler(item)}>Edit</Button>
                                <Link to={`/product-details/${item.id}`} className='btn btn-primary'>Details</Link>
                                <Button onClick={() => remove(item.id)} className='btn-danger'>Delete</Button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </div >
    )
}