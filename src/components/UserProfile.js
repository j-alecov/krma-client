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
            <div  className="user-profile">
				<div className="username-dt">
					<div className="usr-pic">
						<img src="http://via.placeholder.com/100x100" alt=""/>
					</div>
				</div>
				<div className="user-specs">
				<h3>{this.props.user.nombre}</h3>
				<span>Rank: {this.props.user.rango}</span>
				</div>
			</div>
        );
    }
}

export default UserProfile;