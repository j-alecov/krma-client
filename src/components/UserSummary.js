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
import UserProfile from './UserProfile';
import UserFollowerStatus from './UserFollowersStatus';


class UserSummary extends React.Component{
    //We should make the axios api call here and drill the components down
    render(){
        return (
            <div id="user"className="col-lg-3 col-md-4 pd-left-none no-pd">
                 <div className="main-left-sidebar no-margin">
                    <div className="main-section-data">
                        <div className="user-data full-width ">
                            <UserProfile/>
                            <UserFollowerStatus/>
                        </div>
                    </div>
                 </div>
            </div>
        );
    }
}

export default UserSummary;