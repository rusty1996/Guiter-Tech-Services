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
							<h1 className='display-3 text-light'>Products</h1>
							<hr></hr>
							<h4 className='lead text-light'>A line of honest and natural products for your guitar</h4>
						</div>
					</div>
				</div>
			</div>
			<div id='products-body'>
				<div className='container'>
					<div className='row'>
						<div className='col-12'>
							<h2 id='products-body-header' className='mt-5'>Keeping Your Guitar Clean</h2>
							<p className='lead mt-3'>Before I founded Guitar Tech Services, I got asked quite alot what the best products were to clean a guitar. Nowadays, 
							there are tons of cleaning products on the market for your guitar. While these products may certainly be effective, you 
							have to be careful, because they could be harmful to not only your guitar, but to your skin as well. This is why I created GTS - <em>to provide 
							honest and natural products to keep your guitar in the shape it deserves to be in.</em></p>
						</div>
						<div className='col-12 mt-5'>
							<h4 className=''><em>Why should I keep my guitar clean?</em></h4>
							<p className='lead mt-3'>You may be wondering why it is so important to keep your guitar in good and clean health. Well, there are a few 
							reasons why we need to keep our guitar clean, and it's not all down to how a guitar looks!</p>
							<p className=''>The oil from our skin, dust, sweat, and smoke all contribute to the "dirtying up" of our guitar. And although a dirty, well 
							used guitar may look cool, the dirt and gunk can have a negative effect on usability and playability of your guitar, and trapped in the 
							wrong places it can cause some serious damage to it's inner workings.</p>
							<p>Our skin creates oil and sweat which transfers over to the guitar whenever we play it. If we gig with our guitar regulary and play under 
							harsh lights on stage or get quite sweaty when we're rehearsing, this sweat and moisture will eventually make it to our guitar, effectively 
							baking in to the wood! Unfortunately, this sweat is really bad for our instruments as it starts to erode your fretboard, hardware, and finish 
							over time.</p>
							<p>It's just a fact that the more we play our guitars under harsh conditions such as stage lights or in hot rooms, the more we're going 
							to sweat. This means over time your finish may start to erode and chip away, hardware starts to rust, and your fretboard would slowly become 
							stained and full of gunk as it gets covered in your sweat, spilled drinks, and dust.</p>
						</div>
						<div className='col-12 mt-5 mb-2'>
							<h4 className=''><em>How do I stop my guitar getting dirty?</em></h4>
							<p>Now I'm not suggesting that you play your guitar as little as possible to prolong it's life, as that would defeat it's purpose! But I am 
							saying, you might want to give your guitar a wipe down after use, or at the very least store it in a guitar case when you're finished. Also, 
							take great care in picking out the products you plan to use to clean your guitar, that could make all the difference!</p>
							<p>One of the easiest ways of keeping your guitar clean is giving it a wipe down with a dry microfibre cloth after use. This will help 
							pick up a lot of the oil and sweat that may have accumulated. You should also use specially designed guitar cleaners to remove the 
							accumulated gunk and dirt from your guitar. But please, <span className='text-primary'>DON'T USE HOUSEHOLD CLEANERS!</span> These 
							cleaners are full of chemicals like acid, bleach, and ammonia, which can damage your guitar as well as your skin.</p>
						</div>
					</div>
				</div>
				<div className='container mt-5'>
					<div className='row'>
						<div className='col-12'>
							<h2 className='text-center'>What We Have to Offer</h2>
						</div>
					</div>
					<div className='row mt-5'>
						<div className='col-12 col-md-4 border'>
							<img src='https://i.postimg.cc/bJtyVhFH/wood-conditioner-stock.jpg' className='products-img' />
						</div>
						<div className='col-12 col-md-8 border'>
							<h3 className='mt-4'>RWC</h3>
							<p>Raw Wood Cream conditions the wood naturally and deeply. A blend of 7 natural products the wood absorbs like magic. The original 
							instrument raw wood conditioner available in a variety of colors - natural, rosewood, amber, and ebony</p>
						</div>
					</div>
					<div className='row mt-5'>
						<div className='col-12 col-md-4 border'>
							<img src='https://i.postimg.cc/bJtyVhFH/wood-conditioner-stock.jpg' className='products-img' />
						</div>
						<div className='col-12 col-md-8 border'>
							<h3 className='mt-4'>PF</h3>
							<p>Possum Fat is a hardware and wood lube using the highest amount of Teflon in a product of this type. The carrier oil is also a natural 
							product minimizing the contact to many chemicals people would prefer not to be in contact with. Great for friction points such as - nuts, 
							vibrato contact points, tuning machine screws, and intonation screws. PF contains NO animal products/</p>
						</div>
					</div>
					<div className='row mt-5'>
						<div className='col-12 col-md-4 border'>
							<img src='https://i.postimg.cc/bJtyVhFH/wood-conditioner-stock.jpg' className='products-img' />
						</div>
						<div className='col-12 col-md-8 border'>
							<h3 className='mt-4'>PFCL</h3>
							<p>Possum Fat Cube Lube is the size of an ice cube that is concentrated and firm. Very useful for using on larger hardware and assembly of 
							guitars. Great for neck screws and bridge anchors / inserts. I developed this because the old way was to use paraffin wax. The problem is 
							paraffin will take space the screw is trying to occupy. PF and PFCL leave a thin PTFE layer. PFCL contains no animal products.</p>
						</div>
					</div>
					<div className='row mt-5'>
						<div className='col-12 col-md-4 border'>
							<img src='https://i.postimg.cc/bJtyVhFH/wood-conditioner-stock.jpg' className='products-img' />
						</div>
						<div className='col-12 col-md-8 border'>
							<h3 className='mt-4'>RWCW</h3>
							<p>Raw Wood Conditioning Wax is RWC and a blend of three waxes with a high content of Carnauba wax. RWCW is different from other waxes 
							in that I don't use petroleum solvents. Petroleum solvents are bad for wood! I take my RWC and add waxes to condition the wood and 
							coat the grain with hard wax. This also comes in colors - natural, rosewood, ebony, and amber. The rosewood color is perfect for leaving 
							that worn in look on a maple neck, like it's been played hard for many years!</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		)
}
}