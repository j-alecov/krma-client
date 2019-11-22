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
import UserSummary from './UserSummary';
import PostForm from './PostForm';


class NewPostMain extends React.Component{

    render(){
        return (
            <div className="main-section">
                 <div className="container">
                    <div className="main-section-data">
                        <div className="row">
                            <UserSummary/>
                            <PostForm/>
                        </div>
                    </div>
                 </div>
            </div>
        );
    }
}

export default NewPostMain;