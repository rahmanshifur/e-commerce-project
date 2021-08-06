import { Link } from '@reach/router';
import { useStoreState } from 'easy-peasy';


function Sidebar() {
    const catData = useStoreState(state => state.category.data)
    const scatData = useStoreState(state => state.subcategory.data)
    return (

        <ul>
            {catData.length > 0 && catData.map(item => <li key={item.id}>{item.name}
                <ul>
                    {scatData.length > 0 && scatData.map(scat => scat.category === item.id && <li><Link to={`/scat-product/${scat.id}`} key={scat.id}>{scat.name}</Link></li>)}
                </ul>
            </li>)}
        </ul>
    )
}

export default Sidebar