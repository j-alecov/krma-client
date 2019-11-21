import React, {Component} from 'react';
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
import './../html/css/krma.css'

class PostForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            titulo:'',
            descripcion: '',
            puntos: 0,
            estado: '',
            ubicacion: '',
            dificultad: '',
            deadLine: '',
            tiempo: '',
            tags: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        const target = event.target;
        const value =  target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }
    handleSubmit(e){
        e.preventDefault();

            var post = {
                author: this.state.author,
                text: this.state.text,
                post: this.props.post
            };
            
            this.props.savePost(post);
            
            this.setState({text : ''});
    }
    render() {
        return (
        <div className="post-popup job_post active">
            <div className="post-project">
                <h3>Ask for a favor!</h3>
                <div className="post-project-fields">
					<form onSubmit={this.handleSubmit}>
						<div className="row">
							<div className="col-lg-12">
								<input type="text" name="title" placeholder="Title"/>
							</div>
							<div className="col-lg-12">
								<div className="inp-field">
									<select>
										<option>Category</option>
										<option>Category 1</option>
										<option>Category 2</option>
										<option>Category 3</option>
									</select>
								</div>
							</div>
							<div className="col-lg-12">
								<input type="text" name="skills" placeholder="Skills"/>
							</div>
							<div className="col-lg-6">
								<div className="price-br">
									<input type="text" name="price1" placeholder="Price"/>
									<i className="la la-dollar"></i>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="inp-field">
									<select>
										<option>Full Time</option>
										<option>Half time</option>
									</select>
								</div>
							</div>
							<div className="col-lg-12">
								<textarea name="description" value={this.state.descripcion} placeholder="Description"></textarea>
							</div>
							<div className="col-lg-12">
								<ul>
									<li><button className="active" type="submit" value="post">Post</button></li>
									<li><a href="#" title="">Cancel</a></li>
								</ul>
							</div>
						</div>
					</form>
				</div>
                <form onSubmit={this.handleSubmit}>
                    <input  name="text" value={this.state.text} type="text" placeholder="Post a comment" onChange={this.handleChange}/>
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
        
        );
      }
}


export default PostForm;