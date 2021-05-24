import React from 'react';
import { Nav, Button } from 'react-bootstrap';
import {Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="Navbar">
            {/* <Nav
                activeKey="/home"
                onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
            >
                <Nav.Item>
                    <Nav.Link href="/home">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">About</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2">Link</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="disabled" disabled>Disabled</Nav.Link>
                </Nav.Item>
            </Nav> */}


                <Nav >
                    <Nav.Item><Nav.Link as={Link} to="/home"> Home </Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link as={Link} to="/about"> About </Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link as={Link} to="/postjob"> <Button variant="primary"> Post A Job </Button></Nav.Link></Nav.Item>
                    {/* <Nav.Item><Nav.Link ><Link to="/about">About</Link> </Nav.Link></Nav.Item> */}
                    {/* <Nav.Item><Nav.Link href="/jobdetail">Job Detail</Nav.Link></Nav.Item> */}

                </Nav>
        </div>
    )
}

export default Navbar;
