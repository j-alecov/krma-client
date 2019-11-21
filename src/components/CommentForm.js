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

class CommentForm extends Component{
    constructor(props){
        super(props);
        this.state = {
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
            
            this.setState({text : ''});
    }
    render() {
        return (
        <div className="post-comment">
            <div className="comment_box">
                <form onSubmit={this.handleSubmit}>
                    <input  name="text" value={this.state.text} type="text" placeholder="Post a comment" onChange={this.handleChange}/>
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
        
        );
      }
}


export default CommentForm;