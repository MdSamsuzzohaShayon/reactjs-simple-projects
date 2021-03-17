import { Menu } from 'semantic-ui-react';
import React from 'react';

function MenuBar() {
    return (
        <Menu className="ui menu">
            <Menu.Item className="item">Our Company</Menu.Item>
            <Menu.Item
                name='jobs'
            />
            <Menu.Item
                name='locations'
            />
        </Menu>
    )
}

export default MenuBar;
