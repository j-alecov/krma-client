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


class PostDescription extends React.Component{

    render() {
        return (
            <div class="job_descp">
                <h3>{this.props.post.titulo}</h3>
					<ul class="job-dt">
						<li><a href="#" title="">Full Time</a></li>
						<li><span>$30 / hr</span></li>
					</ul>
				<p>{this.props.post.description}<a href="#" title="">view more</a></p>
					
			</div>
        );
      }
}

export default PostDescription;