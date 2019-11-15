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

class SearchBar extends React.Component{

    render(){
        return (
				<div className="search-bar">
					<form>
						<input type="text" name="search" placeholder="Search..."/>
						<button type="submit"><i className="la la-search"></i></button>
					</form>
				</div>
        );
    }
}

export default SearchBar;