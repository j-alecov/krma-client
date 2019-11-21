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
import UserPicSmall from './UserPicSmall';
import PostButtonTop from './PostButtonTop';


class PostTopbar extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          isShow: false           
        };
      }
      toggleShow = () => {
        this.setState(state => ({ isShow: !state.isShow }));
      };
      savePost = (post)=>{
        //format the JSON post object for API consumption
        let params = {
          name: post.author,
          response_content: post.text
        }
       Axios.post('/api/posts/', params)
       .then(res => console.log(res.data));
     }
    render(){
        return (
            <div className="post-topbar">
                    <UserPicSmall/>
                    <PostButtonTop/>
            </div>
        );
    }
}

export default PostTopbar;