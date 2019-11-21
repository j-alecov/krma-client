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
import clock from "./../html/images/clock.png";


class PostHeader extends React.Component{

    //Kinda like this, just unpack the props send the comment props down
    render() {
        return (
        <div className="post_topbar">
            <div className="usy-dt">
                <img src="http://via.placeholder.com/50x50" alt=""></img>
                <div className="usy-name">
                    <h3>{this.props.post.autor.username}</h3>
                    <span>
                        <img src={clock} alt=""/>{this.props.post.fecha_creacion}
                    </span>
                </div>
                <div className="ed-opts">
					<a href="#" title="" className="ed-opts-open"><i className="la la-ellipsis-v"></i></a>
					<ul className="ed-options">
						<li><a href="#" title="">Edit Post</a></li>
						<li><a href="#" title="">Unsaved</a></li>
						<li><a href="#" title="">Unbid</a></li>
						<li><a href="#" title="">Close</a></li>
						<li><a href="#" title="">Hide</a></li>
					</ul>
				</div>
            </div>
            
        </div>
        );
      }
}

export default PostHeader;