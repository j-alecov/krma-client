import React from 'react';
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
import icon1 from "./../html/images/icon1.png";
import icon4 from "./../html/images/icon4.png";

class NavBar extends React.Component{

    render(){
        return (
			<nav>
				<ul>
					<li>
						<a href="index.html" title="">
							<span><img src={icon1} alt={"icon1"}/></span>
								Home
						</a>
					</li>
					<li>
						<a href="my-profile-feed.html" title="">
							<span><img src={icon4} alt={"icon4"}/></span>
								Profile
						</a>
					</li>
				</ul>
			</nav>
        );
    }
}

export default NavBar;