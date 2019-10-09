import React from 'react';

import './Products.css';

import { Header } from '../Header/Header.js';


import Card from 'react-bootstrap/Card';


export default class Products extends React.Component {

	render() {

	return (
		<div>
			<div id='products-header' className='container-fluid my-0'>
				<div className='row text-center'>
					<div className='col'>
						<div id='products-header-text' className='jumbotron w-50 mx-auto'>
							<h1 className='display-3'>Products</h1>
							<hr></hr>
							<h4 className='lead'>A line of honest and natural products for your guitar</h4>
						</div>
					</div>
				</div>
			</div>
			<div id='products-body'>
			</div>
		</div>
		)
}
}