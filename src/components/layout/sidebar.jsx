import { Link } from '@reach/router';
import { useStoreState } from 'easy-peasy';

function Sidebar() {
    const catData = useStoreState(state => state.category.data)
    const scatData = useStoreState(state => state.subcategory.data)
    return (
        <ul>
            {catData.length > 0 && catData.map(item => <li className='cat' key={item.id}>{item.name}
                <ul className='scat'>
                    {scatData.length > 0 && scatData.map(scat => scat.category === item.id && <li><Link to={`/scat-product/${scat.id}`} kye={scat.id}>{scat.name}</Link></li>)}
                </ul>
            </li>)}

        </ul>
    )
}
export default Sidebar