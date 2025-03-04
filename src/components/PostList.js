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
import Axios from 'axios';


class PostList extends React.Component{
    constructor(){
        super();
        this.state = {
            posts:[]
        }
    }

    addPost = (post) =>{
        const newPost = {
            //post properties
        }
        this.setState({posts: [...this.state.posts, newPost]});
    }

    componentDidMount(){
        Axios.get('http://env-1474631.jl.serv.net.mx/api/posts').then(res => this.setState({posts:res.data.data}));
    }

    render(){
        return (
            <div>
				{this.state.posts.map(post =>
                      <Post key={post.id} post={post}/>
                )}
			</div>
        );
    }
}

export default PostList;