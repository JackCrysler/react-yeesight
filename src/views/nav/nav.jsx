import React,{Component} from 'react';
import Swiper from 'swiper';
import { Link } from 'react-router';
import './swiper.css';
import './nav.css';


export default class Nav extends Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
        let sc = document.querySelector('.swiper-container');
        new Swiper(sc,{
            freeMode:true,
            slidesPerView:6.5
        })
    }
    render(){
        return (
            <nav className="swiper-container">
                    <ul className="swiper-wrapper">
                        <li className="swiper-slide"><Link activeClassName="active" to="Home">全部</Link></li>
                        <li className="swiper-slide"><Link activeClassName="active" to="Politics">时政</Link></li>
                        <li className="swiper-slide"><Link activeClassName="active" to="Home">全部</Link></li>
                        <li className="swiper-slide"><Link activeClassName="active" to="Politics">时政</Link></li>
                        <li className="swiper-slide"><Link activeClassName="active" to="Home">全部</Link></li>
                        <li className="swiper-slide"><Link activeClassName="active" to="Politics">时政</Link></li>
                        <li className="swiper-slide"><Link activeClassName="active" to="Home">全部</Link></li>
                        <li className="swiper-slide"><Link activeClassName="active" to="Politics">时政</Link></li>
                        <li className="swiper-slide"><Link activeClassName="active" to="Home">全部</Link></li>
                        <li className="swiper-slide"><Link activeClassName="active" to="Politics">时政</Link></li>
                    </ul>
                    <span className="mask"> </span>
                </nav>
        )
    }
}