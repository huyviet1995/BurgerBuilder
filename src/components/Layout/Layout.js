import React from 'react';
import Aux from '../../hoc/Auxx';

const Layout = (props) => (
    <Aux>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className={CSS.Content}>
            {props.children}
        </main>
    </Aux>
)

export default Layout