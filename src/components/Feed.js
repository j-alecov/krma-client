import React from 'react';
import Axios from 'axios';
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
import PostTopbar from './PostTopbar';
import PostForm from './PostForm';
import PostList from './PostList';


class Feed extends React.Component{
    
    render(){
        return (
            <div id="contenido" className="col-lg-6 col-md-8 no-pd ">
				<div className="main-ws-sec">
                    <PostTopbar/>
                    <PostList/>
                </div>
            </div>
        );
    }
}

export default Feed;