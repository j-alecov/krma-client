import React, {Component} from 'react';
import './Style.css';

class CommentForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            author: '',
            text:''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        const target = event.target;
        const value =  target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }
    handleSubmit(e){
        e.preventDefault();

            var comment = {
                author: this.state.author,
                text: this.state.text,
                post: this.props.post
            };
            
            this.props.saveComment(comment);
            
            this.setState({author : ''});
            this.setState({text : ''});
    }
    render() {
        return (
        <div className="post-comment">
            <div className="comment-box">
                <form onSubmit={this.handleSubmit}>
                    <input name="author" value={this.state.author} type="text" placeholder="Author" onChange={this.handleChange}/>
                    <br />
                    <textarea  name="text" value={this.state.text} rows="3" placeholder="Post a comment" onChange={this.handleChange}></textarea>
                    <br />
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
        
        );
      }
}


export default CommentForm;