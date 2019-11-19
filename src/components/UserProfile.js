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


class UserProfile extends React.Component{
    
    render(){
        return (
            <div  class="user-profile">
				<div class="username-dt">
					<div class="usr-pic">
						<img src="http://via.placeholder.com/100x100" alt=""/>
					</div>
				</div>
				<div class="user-specs">
					<h3>John Doe</h3>
					<span>Graphic Designer at Self Employed</span>
				</div>
			</div>
        );
    }
}

export default UserProfile;