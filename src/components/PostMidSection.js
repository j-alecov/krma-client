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
import icon8 from "./../html/images/icon8.png";
import icon9  from "./../html/images/icon9.png";


class PostMidSection extends React.Component{

    render() {
        return (
            <div className="epi-sec">
				<ul className="descp">
					<li><img src={icon8} alt=""/><span>Dificultad: {this.props.post.dificultad}</span></li>
                    <li><img src={icon9} alt=""/><span>{this.props.post.ubicacion}</span></li>
				</ul>
			</div>
        );
      }
}

export default PostMidSection;