import React from 'react';
import SearchBar from './SearchBar.js';
import Navbar from './NavBar.js'
import MenuButton from './MenuButton.js'
import './../html/css/animate.css'
import './../html/css/bootstrap.min.css'
import './../html/css/flatpickr.min.css'
import './../html/css/font-awesome.min.css'
//import './../html/css/jquery.mCustomScrollbar.min.css'
import './../html/css/jquery.range.css'
import './../html/css/line-awesome-font-awesome.css'
import './../html/css/line-awesome-font-awesome.min.css'
import './../html/css/line-awesome.css'
import './../html/css/line-awesome.min.css'
import './../html/css/mystyle.css'
import './../html/css/responsive.css'
import './../html/css/style.css'
import logo from "./../html/images/logo.png";


class Header extends React.Component{

    render(){
        return (
            <header>
			<div className="container">
				<div  className="header-data">
					<div className="logo">
						<a href="index.html" title=""><img src={logo} alt={"logo"}/></a>
					</div>
					<SearchBar/>
					<Navbar/>
					<MenuButton/>
				</div>
			</div>
		</header>
        );
    }
}

export default Header;