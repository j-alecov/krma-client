import React, {Component} from 'react';
import Axios from 'axios';
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
import CommentList from './CommentList';
import CommentForm from './CommentForm';


class CommentSection extends Component{
    constructor(props) {
        super(props);
        this.state = {
          isShow: false,
          comments:[
            {
              "id": 1,
              "post": {
                  "id": 1,
                  "titulo": "Whatever",
                  "descripcion": "Porfavor no hagas lo de mi nombre",
                  "puntos": 30,
                  "estado": "Open",
                  "ubicacion": "ijalti",
                  "dificultad": "God",
                  "fecha_creacion": 1573845291000,
                  "deadLine": 1574294400000,
                  "tiempo": 5,
                  "tags": "Chupas"
              },
              "autor": {
                  "id": 3,
                  "nombre": "erickllegatarde",
                  "username": "alv si funciona",
                  "password": "si funcina alv",
                  "email": "erickalv@gmail.com",
                  "profile_picture": "https://alv.com/alv.png",
                  "puntos": 30,
                  "rango": "greta",
                  "fecha_creacion": 1573772406000
              },
              "contenido": "prueba ",
              "fecha": 1573845586000
          }
          ]
        };
      }
      componentDidMount(){
        Axios.get('api/posts/'+ this.props.post + '/comments/')
        .then(res => this.setState({comments:res.data}))
    }

    toggleShow = () => {
        this.setState(state => ({ isShow: !state.isShow }));
      };
    
      saveComment = (comment)=>{
    
         let params = {
           name: comment.author,
           response_content: comment.text,
           post_id: comment.post
         }
        Axios.post('/api/blogposts/'+ comment.post + '/comments/', params)
        .then(res => console.log(res.data));
        //update local commentlist
        this.setState({comments: [...this.state.comments, params]});
      }
    render() {
        return (
        <div className="comment-section">
            {this.state.isShow ? <div id="separator">
                <CommentList comments={this.state.comments} /> <CommentForm saveComment={this.saveComment} post={this.state.comments[0].post} />
                </div>: null}
        <button id="button" onClick={this.toggleShow} type="button">
        Show Comments
        </button>
        </div>
        );
      }
}


export default CommentSection;