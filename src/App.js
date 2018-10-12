import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
	    <div class="App-header">
	    	<img src={logo} alt="Beau's beer"/>
	    </div>
	    <div class="App-intro">
	    		<p class="introduction">Since 2006 Beau’s All Natural has been brewing interesting, tasty beers like our Lug Tread Lagered Ale using the best ingredients & local spring water. Our family takes p    ride in creating unique, wonderful and certified organic craft beer, conceived with honest consideration for the environment and our local communities, and delivered with a sense of fr    iendly relationship. We are an award-winning, local, family-run, organic, and independent brewery.</p>
		   <div class="App-beer">
			<div class="container"><img src={require("./images/beer1.jpg")} alt="CDN Pale Ale"/></div>
			<h3>LUG TREAD</h3>
			<p><i>Lagered Ale</i><br/>
			5.2% ABV<br/>
			Beau’s year-round flagship beer is Lug-Tread, our tribute to the classic Kölsch beers of Germany. Lug-Tread is fermented like an ale and cold-aged like a lager, giving it both ale notes and a lager-like crispness. Balanced, crisp, refreshing.</p>
	    		<p><a href={"https://maps.google.com/?ll=43.905842,-78.82756"} target="_blank">Direction to store</a></p>
		   </div>
		   <div class="App-beer">
			<div class="container"><img src={require("./images/beer2.jpg")} alt="CDN Pale Ale"/></div>
			<h3>CDN PALE ALE</h3>
			<p><i>Farm Table Series</i><br/>
			5.8 % ABV<br/>
			An easy-to-enjoy patriotic pale ale. Made with an all-Canadian list of ingredients: aromatic hops from Ontario and British Columbia, Ontario barley and wheat malts, Alberta-grown oats, and Ontario brewer’s yeast. Citrus, fruity, hoppy.</p>
	    		<p><a href={"https://maps.google.com/?ll=43.648188,-79.398005"} target="_blank">Direction to store</a></p>
		    </div>
		   <div class="App-beer">
			<div class="container"><img src={require("./images/beer3.jpg")} alt="Dortmunder"/></div>
			<h3>DORTMUNDER</h3>
			<p><i>Farm Table Series</i><br/>
			5.5 % ABV<br/>
			A solid, well-rounded German-style lager. Brewed true to style, and designed to be a robust reward at the end of an honest day’s work. An all-German and organic malt bill is balanced by Saaz hop bitterness. Classic, balanced, clean.</p>
	    		<p><a href={"https://maps.google.com/?ll=44.583055,-79.868197"} target="_blank">Direction to store</a></p>
		   </div>
	    </div>
	    <div class="App-footer">
	    	Copyright Bear's Beverages @ 2018
	    </div>
      </div>
    );
  }
}
export default App;

