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

import Tag from './Tag'


class TagList extends React.Component{
    //map each tag to a li element
    tags(){
        return this.props.tags.map(function(tag) {
            return <Tag tag={tag}/>
        });
    }
    render() {
        return (
            <ul class="skill-tags">
                {this.tags()}
			</ul>
        );
      }
}

export default TagList;