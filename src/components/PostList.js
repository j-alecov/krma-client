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
import Post from './Post';
import Axios from 'axios';


class PostList extends React.Component{
    constructor(){
        super();
        this.state = {
            posts: [
                {
                    "id": 1,
                    "titulo": "Ayudame a mudarme",
                    "descripcion": "Porfavor no hagas lo de mi nombre",
                    "puntos": "30",
                    "estado": "Open",
                    "ubicacion": "ijalti",
                    "dificultad": "God",
                    "fecha_creacion": 1573845291000,
                    "deadLine": 1574294400000,
                    "tiempo": 5,
                    "tags": "Chupas",
                    "autor": {
                        "id": 1,
                        "nombre": "Chuy Storm",
                        "username": "chupacabras",
                        "password": "chupachups",
                        "email": "chupas@gmail.com",
                        "profile_picture": "imgur.com/4i3o42j4",
                        "puntos": 100,
                        "rango": "Baby",
                        "fecha_creacion": 1573756202000
                    }
                }
            ]
        }
    }

    addPost = (post) =>{
        const newPost = {
            //post properties
        }
        this.setState({posts: [...this.state.posts, newPost]});
    }

    componentDidMount(){
        Axios.get('api/posts').then(res=>this.setState({posts:res.data}))
    }

    posts(){
        return this.state.posts.map(function(post) {
            return <Post key={post.id} post={post}/>
        });
    }

    render(){
        return (
            <div>
				{this.posts()}
			</div>
        );
    }
}

export default PostList;