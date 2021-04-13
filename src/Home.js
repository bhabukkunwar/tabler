import React from 'react'
import food from "./images/food.jpg";
import './Home.css'
import Product from "./Product"

function Home() {
    return (
        <div className="home">
            <img className="home__image" src={food} alt=""/>
                    <div className="home__row">
                        <Product id="1" title = "Bajeko Sekuwa" location = "Battisputali, Kathmandu" rating={4} image="https://lexlimbu.com/wp-content/uploads/Bajeko-Sekuwa-Nepal-New-York.jpg"/>
                        <Product id="1" title = "Redmud Coffee" location = "Jhamsikhel, Lalitpur" rating={4} image="https://media-cdn.tripadvisor.com/media/photo-s/14/39/9b/68/interior.jpg"/>
                        <Product id="1" title = "Trisara" location = "Durbarmarg, Kathmandu" rating={5} image="https://www.nepal-travel-guide.com/wp-content/uploads/2020/05/image-36.png"/>
                    </div> 
                    <div className="home__row">
                        <Product id="1" title = "The Burger House and CFC " location = "Banepa, Kavre" rating={3} image="https://foodmandu.com//Images/Vendor/677/OriginalSize/Web_080620023846.happy_lunch.Burger_House.jpg"/>
                        <Product id="1" title = "Cheers Lounge and Bar" location = "Dhulikhel, Kavre" rating={4} image="https://www.siemreap.net/wp-content/uploads/2016/12/877_cheers-club-siem-reap.jpg"/>
                        
                    </div> 
            
            
        </div>
        
    )
}

export default Home
