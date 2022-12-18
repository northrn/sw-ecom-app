import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, { useState } from 'react';

export default function Menu() {
  const [image, setImage] = useState('https://a.storyblok.com/f/116485/1000x650/fb35487504/1000x650-03-1.jpg/m/3840x0/filters:quality(88)');
  const handleHover = (link) => {
    // Set the image state to the image that corresponds to the link being hovered over
    setImage(link);
  }

  const mainImg = 'https://a.storyblok.com/f/116485/1000x650/fb35487504/1000x650-03-1.jpg/m/3840x0/filters:quality(88)'

  return (
<div id="root">
  <div className="">
    <div className="header">
      <div className="content">
        <div className="mainMenu">
          <div className="left">
            <div className="logoDiv noSelect">
              <a>
                <img src=''/>
              </a>
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <ul className="row highlighted-menu">
            <span className="jsx-4170258987">
                <li className="title">
                  <a className="" href="/ca/men/new-arrivals">
                    <span className="li title">New Arrivals</span> 
                  </a>
                </li>
                <li className="sub-item highlighted">
                  <a className="" href="/ca/men/top-sellers">
                    <span style={{}}>Top Sellers</span>
                  </a>
              </li>
                <li className="sub-item highlighted">
                  <a className="" href="/ca/men/coming-soon" onMouseEnter={() => handleHover('https://a.storyblok.com/f/116485/860x560/78c8b9b709/860x560_socks_11137.jpg/m/3840x0/filters:quality(88)')} onMouseLeave={() => handleHover(mainImg)}>
                    <span style={{}}>Coming Soon</span>
                    </a>
                  </li>
                <li className="sub-item highlighted">
                  <a className="" href="/ca/aw22-men" onMouseEnter={() => handleHover('https://live.axelarigatocdn.com/')} onMouseLeave={() => handleHover(mainImg)}>
                    <span style={{}}>Autumn/Winter 22</span>
                    </a>
                  </li>
                <li className="sub-item highlighted">
                  <a className="" href="/ca/andre-saraiva-2022" onMouseEnter={() => handleHover('https://live.axelarigatocdn.com/')} onMouseLeave={() => handleHover(mainImg)}>
                    <span style={{ }}>The Axel Arigato x André Saraiva Collection</span>
                    </a>
                  </li>
                <li className="sub-item highlighted">
                  <a className="" href="/ca/2022-puffer-jackets-men" onMouseEnter={() => handleHover('https://live.axelarigatocdn.com/')} onMouseLeave={() => handleHover(mainImg)}>
                    <span style={{}}>Renewed Warmth | AW22 Puffer Jackets</span>
                  </a>
                </li>
                <li className="sub-item highlighted">
                  <a className="" href="/ca/new-season-essentials">
                    <span style={{}}>New-Season Essentials</span></a></li>
            </span>
            <div className="menuImg">
              <a className="" href="/ca/2022-puffer-jackets">
                <img className="jsx-1204169867" src={image}/>
              </a>
              <span><a className="featuredBox">Discover the AW22 Collection</a><br className="jsx-1204169867"/>
                <a className="featuredBox" href="/ca/2022-puffer-jackets">Shop Now</a>
              </span>
            </div>
          </ul>
          <ul className="row highlighted-menu">
            <li className="title">
                <a className="" href="/ca/men/new-arrivals">
                  <span className="li title">Shoes</span>
                </a>
            </li>
            <li className="menu-item">
              <a href="">
                <span className="itemName">Atlas</span>
              </a>
            </li>
            <li class="menu-item">
              <a href="">
                <span className="itemName">Genesis</span>
              </a>
            </li>
            <li class="menu-item">
              <a href="">
                <span className="itemName">Dice</span>
                <sup className="isNew">New</sup>
              </a>
            </li>
            <li class="menu-item">
              <a href="">
                <span className="itemName">Magma</span>
              </a>
            </li>
            <li class="menu-item">
              <a href="">
                <span className="itemName">Marathon</span> 
              </a>
            </li>
            <li class="menu-item">
              <a href="">
                <span className="itemName">Sonar</span> 
              </a>
            </li>
            <li class="menu-item">
              <a href="">
                <span className="itemName">Catfish</span> 
              </a>
            </li>
            <li class="menu-item">
              <a href="">
                <span className="itemName">Hooper</span>
              </a>
            </li>
            <li class="menu-item">
              <a href="">
                <span className="itemName">Platform</span> 
              </a>
            </li>
            <li class="menu-item">
              <a href="">
                <span className="itemName">Dice</span> 
              </a>
            </li>
          </ul>
          <ul className="row highlighted-menu">
          <li className="title">
            <a className="" href="/ca/men/new-arrivals">
              <span className="li title">New Arrivals</span>
            </a>
          </li>
            <li className="menu-item">
              <a href="">
                <span className="itemName">Atlas</span>
              </a>
            </li>
            <li class="menu-item">
              <a href="">
                <span className="itemName">Genesis</span>
              </a>
            </li>
            <li class="menu-item">
              <a href="">
                <span className="itemName">Dice</span>
              </a>
            </li>
            <li class="menu-item">
              <a href="">
                <span className="itemName">Magma</span>
              </a>
            </li>
            <li class="menu-item">
              <a href="">
                <span className="itemName">Marathon</span> 
              </a>
            </li>
            <li class="menu-item">
              <a href="">
                <span className="itemName">Sonar</span> 
              </a>
            </li>
            <li class="menu-item">
              <a href="">
                <span className="itemName">Catfish</span> 
              </a>
            </li>
            <li class="menu-item">
              <a href="">
                <span className="itemName">Hooper</span>
                <sup className="isNew">New</sup>
              </a>
            </li>
          </ul>
        </div>
       </div> 
    </div>
  </div>
</div>
    )
  }
  
