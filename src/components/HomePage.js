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
/* import './../html/js/bootstrap.min.js'
import './../html/js/flatpickr.min.js'
import './../html/js/jquery.mCustomScrollbar.js'
import './../html/js/jquery.min.js'
import './../html/js/jquery.range-min.js'
import './../html/js/popper.js'
import './../html/js/script.js'
import './../html/js/scrollbar.js' */
import Header from './Header';
import Main from './Main';



class HomePage extends React.Component{
    
    render() {
        return (
        <div>
            <div className="wrapper">
                <header>
                    <Header/>
                </header>
            </div>
            <main>
                <Main/>
            </main>
            <script type="text/javascript" src="js/jquery.min.js"></script>
            <script type="text/javascript" src="js/popper.js"></script>
            <script type="text/javascript" src="js/bootstrap.min.js"></script>
            <script type="text/javascript" src="js/jquery.mCustomScrollbar.js"></script>
            <script type="text/javascript" src="lib/slick/slick.min.js"></script>
            <script type="text/javascript" src="js/scrollbar.js"></script>
            <script type="text/javascript" src="js/script.js"></script>
        </div>
        );
      }
}

export default HomePage;