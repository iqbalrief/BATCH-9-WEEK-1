import React from 'react'
import {Link} from 'react-router-dom'
const Sidebar = () => {
    return (
            <aside>
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/counter">Counter</Link></li>
                <li><Link href="/jsx">JSX</Link></li>
                <li><Link href="/props">Props & State</Link></li>
                <li><Link to="/todo">Todo</Link></li>
            </ul>    
            </aside>     
    )
}

export default Sidebar;
