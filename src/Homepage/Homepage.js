import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import './Homepage.css';




export default class Homepage extends React.Component {

	render() {

		return (
			<div>
				<div id='homepage-header' className='container-fluid my-0'>
					<div className='row text-center'>
						<div className='col'>
							<div id='header-text' className='jumbotron w-50 mx-auto'>
								<h1 className='display-3'>Guitar Tech Services</h1>
								<hr></hr>
								<h4 className=''>If you are a Pro Player, you've come to the right place.</h4>
							</div>
						</div>
					</div>
				</div>
				<div id='homepage-body'>
					<div className='container'>
						<div id='homepage-mission' className='row mt-5 jumbotron'>
							<div className='col-12'>
								<h2>Our Mission</h2>
								<p className='lead'>Guitar Tech Services was created to supply honest and natural products with little to no harmful chemicals. A line of products 
								Luthiers and "do it yourselfers" can use in confidence knowing they are proven over many years of use and refinements</p>
							</div>
						</div>
						<hr></hr>
						<div id='homepage-about' className='row jumbotron'>
							<div className='col-12'>
								<h2>About the Creator</h2>
								<p className='lead'>Guitar Tech Supplies is a line of products designed with the goal of being the best products designed for 
								Luthiers, builders and the home repair person.</p>
								<p>Over 40 years ago, I was apprenticing with a Master Luthier in my home city of Los Angeles, California.  Jack was well 
								known and highly respected as being the former Warranty Repair Manager for Gibson Guitars in the 40s and 50s.  In his 
								retirement, Jack was such a wealth of knowledge to me and others who apprenticed under him.  The first thing he taught me 
								was the need for a clean, polished and conditioned fingerboard.  What Jack had been using was getting hard for him to find 
								so I and others started to search for a better fingerboard conditioner.  As I began to develop RWC, I kept his goals in mind 
								and Raw Wood Cream was born.  RWC has exceeded my hopes and I know Jack would be proud to use it.</p>
								<div className='text-primary'>
									<p>15 years ago, GTS was created to supply honest and natural products with little goal of no harmful chemicals.</p>
									<p>I hope you enjoy using my products and I welcome your feedback.</p>
									<p>Martin Miranda<br></br>Luthier<br></br>Guitar Tech Supplies</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			)
	}
}