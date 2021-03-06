import React from 'react'
import '../components/Footernew.css'
import { FaFacebook, FaLinkedin, FaMailBulk, FaPhone, FaSearchLocation, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footernew = () => {
    return (
        <div className='footer'>
           	 <div class="container">
  	 	<div class="row">
  	 		<div class="footer-col">
  	 			<h4>Useful Links</h4>
  	 			<ul>
  	 				<li><a href="/training">About Us</a></li>
  	 				<li><a href="/recruitment">Blog</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>Legal and Privacy</h4>
  	 			<ul>
  	 				<li><a href="https://app.termly.io/document/terms-of-use-for-website/bae18684-68a5-4feb-b722-2396bf9b3d07">Terms of service</a></li>
  	 				<li><a href="https://app.termly.io/document/privacy-policy/6e538943-b793-48ed-876f-bf66701c8e56">Privacy policy</a></li>
					   <li><a href="https://app.termly.io/document/disclaimer/fe8696d1-0ff3-47d6-bdc0-a8eba5fb0466">Disclosures</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>Support</h4>
  	 			<ul>
  	 				<li><a href="#">0115689980</a></li>
  	 				<li><a href="#">hello@biztweak.org.za</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>follow us</h4>
  	 			<div class="social-links">
                   <a href="https://www.facebook.com/Tafadzwa-Consulting-530892300334863/?_rdr"><FaFacebook size={30} style={{ color: '#ffffff', marginRight: '1rem' }} /></a>
                   <a href="https://twitter.com/tafadzwaconsult"><FaTwitter size={30} style={{ color: '#ffffff', marginRight: '1rem' }} /></a>
                   <a href="https://za.linkedin.com/in/tafadzwa-consulting-5628bb65"><FaLinkedin size={30} style={{ color: '#ffffff', marginRight: '1rem' }} /></a>
  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
        </div>
    )
}

export default Footernew;
