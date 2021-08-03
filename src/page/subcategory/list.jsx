import { useStoreActions, useStoreState } from "easy-peasy"
import { Button, Table } from "reactstrap"


export default () => {
    const list = useStoreState(state => state.subcategory.data)
    const { remove, edit } = useStoreActions(action => action.subcategory)
    const categoryData = useStoreState(state => state.category.data)
    return (
        <Table>
            <thead>
                <h1>List of
                    Color</h1>
                <tr>
                    <th>#</th>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Category Name</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {list.length && list.map((item, i) =>

                    <tr key={item.id}>
                        <td>{++i}</td>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{categoryData.map(ctg => ctg.id === item.category && <> {ctg.name}</>)}</td>
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