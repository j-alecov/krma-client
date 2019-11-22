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
import { Link } from 'react-router-dom';
import Axios from 'axios';


class PostForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            titulo:'',
            descripcion: '',
            puntos: 0,
            ubicacion: '',
            dificultad: '',
            deadLine: '',
            tiempo: '',
            tags: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    savePost = (post)=>{
        //format the JSON post object for API consumption
        let params = {
          name: post.author,
          response_content: post.text
        }
       Axios.post('http://env-1474631.jl.serv.net.mx/api/posts', params)
       .then(res => console.log(res.data));
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
                titulo: this.state.titulo,
                descripcion: this.state.descripcion,
                puntos: this.state.puntos,
                estado: 'Open',
                ubicacion: this.state.ubicacion,
                dificultad: this.state.dificultad,
                deadLine: this.state.deadLine,
                tiempo: this.state.tiempo,
                tags: this.state.tags 
            };
            
            this.savePost(post);
            
            this.setState({
                titulo:'',
                descripcion: '',
                puntos: 0,
                ubicacion: '',
                dificultad: '',
                deadLine: '',
                tiempo: '',
                tags: ''
        });
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
									<li><Link to="/home">Cancel</Link></li>
								</ul>
							</div>
						</div>
					</form>
				</div>
            </div>
        </div>
        
        );
      }
}


export default PostForm;