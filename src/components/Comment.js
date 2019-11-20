  
import React, {Component} from 'react';

class Comment extends Component{
    render() {
        return (
            <li>
                <div className="comment-list">
                <div class="bg-img">
					<img src="http://via.placeholder.com/40x40" alt=""/>
				</div>
                <div class="comment">
					<h3>{this.props.comment.name}</h3>
					<span><img src="images/clock.png" alt=""/>{this.props.comment.created_at}</span>
                    <p>{this.props.comment.response_content}</p>
				</div>
                </div>
            </li>
        );
      }
}


export default Comment;