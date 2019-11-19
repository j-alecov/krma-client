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


class PostHeader extends React.Component{

    //Kinda like this, just unpack the props send the comment props down
    render() {
        return (
        <div className="post_topbar">
            <div className="usy-dt">
                <img src="http://via.placeholder.com/50x50" alt=""></img>
                <div className="usy-name">
                    <h3>{this.props.post.name}</h3>
                    <span>
                        <img src="images/clock.png" alt=""/>{this.props.post.date}
                    </span>
                </div>
                <div class="ed-opts">
					<a href="#" title="" class="ed-opts-open"><i class="la la-ellipsis-v"></i></a>
					<ul class="ed-options">
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