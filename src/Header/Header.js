import React from 'react';

import './Header.css';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';

export const Header = () => {

	return (
		<div id='header-main' className='bg-primary'>
			<div id='header-top'>
				<Image src='https://i.postimg.cc/nVBqvL6c/GTS-Logo.png' />
			</div>
			<div id='header-nav mb-0'>
				<Navbar bg='' variant='' expand='lg' className='py-1 mb-0 border-top'>
					<Navbar.Toggle aria-controls='basic-navbar-nav'/>
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='mr-auto text-light py-1' fill >
							<Nav.Link href='/' className='font-weight-bold text-center text-light'>Home</Nav.Link>
							<Nav.Link href='/products' className='font-weight-bold text-center text-light'>Products</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</div>
		</div>
		)
}