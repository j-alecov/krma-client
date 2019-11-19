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
import Post from './Post';


class PostList extends React.Component{
    posts(){
        return this.props.posts.map(function(post) {
            return <Post key={post.response_id} post={post}/>
        });
    }

    render(){
        return (
            <div className="user-picy">
				<img src="http://via.placeholder.com/100x100" alt=""/>
			</div>
        );
    }
}

export default PostList;