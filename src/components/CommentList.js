import React, {Component} from 'react';
import Comment from './Comment';

class CommentList extends Component{
    comments(){
        return this.props.comments.map(function(comment) {
            return <Comment key={comment.id} comment={comment}/>
        });
    }
    render() {
        return (
        <div className="comment-sec">
            <ul>
                {this.comments()}
            </ul>
        </div>
        );
      }
}


export default CommentList;