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
import Axios from 'axios';


class UserSummary extends React.Component{
    //We should make the axios api call here and drill the components down
    constructor(){
        super();
        this.state = {
            user: {
                "id": 1,
                "nombre": "Chuy Storm",
                "username": "chupacabras",
                "password": "chupachups",
                "email": "chupas@gmail.com",
                "profile_picture": "imgur.com/4i3o42j4",
                "puntos": 100,
                "rango": "Baby",
                "followers": [
                    {
                        "id": 3,
                        "nombre": "erickllegatarde",
                        "username": "alv si funciona",
                        "password": "si funcina alv",
                        "email": "erickalv@gmail.com",
                        "profile_picture": "https://alv.com/alv.png",
                        "puntos": 30,
                        "rango": "greta",
                        "fecha_creacion": 1573772406000
                    }
                ],
                "posts": [
                    {
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
                ],
                "fecha_creacion": 1573756202000
            }
        }
    }

    componentDidMount(){
        Axios.get('api/users').then(res=>this.setState({state:res.data}))
    }
    render(){
        return (
            <div id="user"className="col-lg-3 col-md-4 pd-left-none no-pd">
                 <div className="main-left-sidebar no-margin">
                    <div className="main-section-data">
                        <div className="user-data full-width ">
                            <UserProfile user={this.state.user}/>
                            <UserFollowerStatus user={this.state.user}/>
                        </div>
                    </div>
                 </div>
            </div>
        );
    }
}

export default UserSummary;