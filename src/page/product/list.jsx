import { useStoreActions, useStoreState } from "easy-peasy"
import { Button, Table } from "reactstrap"


export default () => {
    const list = useStoreState(state => state.product.data)
    const { remove, edit } = useStoreActions(action => action.product)

    const subcategoryData = useStoreState(state => state.subcategory.data)
    const colorData = useStoreState(state => state.color.data)
    const sizeData = useStoreState(state => state.size.data)
    const tagData = useStoreState(state => state.tag.data)


    return (
        <Table>
            <thead>
                <h1>List of Tag</h1>
                <tr>
                    <th>#</th>
                    <th>ID</th>
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
                        <td>{item.id}</td>
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
                            <Button onClick={() => edit(item.id)}>Edit</Button>
                            <Button onClick={() => remove(item.id)} className='btn-danger'>Delete</Button>
                        </td>
                    </tr>
                )}
            </tbody>
        </Table>
    )
}