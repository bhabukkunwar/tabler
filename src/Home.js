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
                        <Product id="1" title = "Trisara" location = "Durbarmarg, Kathmandu" rating={5} image="https://goodfoodnepal.com/wp-content/uploads/2018/10/interior-4-1.jpg"/>
                    </div> 
                    <div className="home__row">
                        <Product id="1" title = "The Burger House and CFC" location = "Banepa, Kavre" rating={3} image="https://scontent.fbom19-2.fna.fbcdn.net/v/t1.0-9/116877925_353252546073657_5174517770807680914_n.jpg?_nc_cat=111&_nc_sid=110474&_nc_ohc=uzcdazqDViMAX86wYQF&_nc_ht=scontent.fbom19-2.fna&oh=67e93c75e8176c5230770299302f605e&oe=5F69B701"/>
                        <Product id="1" title = "Cheers Lounge and Bar" location = "Dhulikhel, Kavre" rating={4} image="https://scontent.fbom19-1.fna.fbcdn.net/v/t1.0-9/109747514_956174278160256_1271201749162069123_o.jpg?_nc_cat=102&_nc_sid=8bfeb9&_nc_ohc=DpbHfHKYa1sAX9Jz84B&_nc_ht=scontent.fbom19-1.fna&oh=6d69b17d3c484bd6ece184270ed9254c&oe=5F67B427"/>
                        
                    </div> 
            
            
        </div>
        
    )
}

export default Home
