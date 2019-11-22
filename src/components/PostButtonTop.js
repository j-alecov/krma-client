import React from 'react';
import { Link } from 'react-router-dom';
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


class PostButtonTop extends React.Component{

    render(){
        return (
            <div className="post-st">
				<ul>
					<li><Link className="post-jb active" to="/post">Ask for a favor!</Link></li>
				</ul>
			</div>
        );
    }
}

export default PostButtonTop;