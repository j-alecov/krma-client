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


class UserFollowerStatus extends React.Component{

    render(){
        return (
            <ul className="user-fw-status">
				<li>
					<h4>Following</h4>
					<span>34</span>
				</li>
				<li>
					<h4>Followers</h4>
					<span>155</span>
				</li>
				<li>
					<a href="#" title="">View Profile</a>
				</li>
			</ul>
        );
    }
}

export default UserFollowerStatus;