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
import TagList from './TagList';


class PostDescription extends React.Component{

    render() {
        return (
            <div className="job_descp">
                <h3>{this.props.post.titulo}</h3>
					<ul className="job-dt">
                <li><a href="#" title="">{this.props.post.tiempo} hrs</a></li>
						<li><span>{this.props.post.puntos} krma</span></li>
					</ul>
				<p>{this.props.post.descripcion}<br/><a href="#" title="">view more</a></p>
                <TagList tags={this.props.post.tags.split(',')}/>
			</div>
        );
      }
}

export default PostDescription;