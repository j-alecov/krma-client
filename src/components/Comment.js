  
import React, {Component} from 'react';
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

class Comment extends Component{
    render() {
        return (
            <li>
                <div className="comment-list">
                <div className="bg-img">
					<img src="http://via.placeholder.com/40x40" alt=""/>
				</div>
                <div className="comment">
					<h3>{this.props.comment.autor.nombre}</h3>
					<span><img src={clock} alt=""/>{this.props.comment.fecha}</span>
                    <p>{this.props.comment.contenido}</p>
				</div>
                </div>
            </li>
        );
      }
}


export default Comment;