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
import PostHeader from './PostHeader';
import PostMidSection from './PostMidSection';
import PostDescription from './PostDescription';
import CommentSection from './CommentSection';


class Post extends React.Component{

    //Kinda like this, just unpack the props send the comment props down
    render() {
        return (
          <div className="posty">
            <div className="post-bar no-margin">
              <PostHeader post={this.props.post}/>
              <PostMidSection post={this.props.post}/>
              <PostDescription post={this.props.post}/>
              <CommentSection/>
            </div>
        </div>
        );
      }
}

export default Post;