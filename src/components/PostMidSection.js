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


class PostMidSection extends React.Component{

    render() {
        return (
            <div class="epi-sec">
				<ul class="descp">
					<li><img src="images/icon8.png" alt=""/><span>{this.props.rango}</span></li>
				</ul>
			</div>
        );
      }
}

export default PostMidSection;