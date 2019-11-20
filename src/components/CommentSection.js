import React, {Component} from 'react';
import Axios from 'axios';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import './Style.css';

class CommentSection extends Component{
    constructor(props) {
        super(props);
        this.state = {
          isShow: false,
          comments:[]
        };
      }
      componentDidMount(){
        Axios.get('api/posts/'+ this.props.post + '/comments/')
        .then(res => this.setState({comments:res.data}))
    }

    toggleShow = () => {
        this.setState(state => ({ isShow: !state.isShow }));
      };
    
      saveComment = (comment)=>{
    
         let params = {
           name: comment.author,
           response_content: comment.text,
           post_id: comment.post
         }
        Axios.post('/api/blogposts/'+ comment.post + '/comments/', params)
        .then(res => console.log(res.data));
        //update local commentlist
        this.setState({comments: [...this.state.comments, params]});
      }
    render() {
        return (
        <div className="comment-section">
            {this.state.isShow ? <div id="separator">
                <CommentList comments={this.state.comments} /> <CommentForm saveComment={this.saveComment} post={this.props.post} />
                </div>: null}
        <button onClick={this.toggleShow} type="button">
        Show Comments
        </button>
        </div>
        );
      }
}


export default CommentSection;