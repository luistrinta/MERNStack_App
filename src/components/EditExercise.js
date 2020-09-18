import React, {Component} from 'react';
import DatePicker from "react-datepicker";
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css"


export default class EditExercise extends Component{
    //construtor para criar variaveis emm React, SEMPRE dentro do state
    constructor(props){
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeDuration = this.onChangeDuration.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit=this.onSubmit.bind(this);

        this.state = {
            username:'',
            description:'',
            duration:0,
            date: new Date(),
            users:[]
        }
    }
    //Chamada do metodo ao carregar o componente , executa codigo interno antes de carregar o componente
    componentDidMount() {
        axios.get('http://localhost:5000/exercises/'+this.props.match.params.id)
            .then(res=>{
            this.setState({
                username:res.data.username,
                description:res.data.description,
                duration:res.data.duration,
                date:new Date(res.data.date)
            })
            });

        axios.get("http://localhost:5000/users/").then(res=>{
            if(res.data.length > 0){
                this.setState({
                    users: res.data.map(user => user.username),
                })
            }
        });
    }

    //da update dos elementos do construtor ao inserir os dados
    onChangeUsername(e){
        this.setState({
            username: e.target.value
        });
    }
    onChangeDuration(e){
        this.setState({
            duration: e.target.value
        });
    }
    onChangeDescription(e){
        this.setState({
            description: e.target.value
        });
    }
    onChangeDate(date){
        this.setState({
            date: date
        });
    }

    onSubmit(e){
        //previne a exevução do HTML ao submeter
        e.preventDefault();

        const exercise = {
            username: this.state.username,
            description: this.state.description,
            duration: this.state.duration,
            date: this.state.date
        };

        console.log(exercise);

        axios.post('http://localhost:5000/exercises/update/'+this.props.match.params.id, exercise)
            .then(res => console.log(res.data));

        window.location = '/';
    }



    render() {
        return(
            <div>
                <h3>Edit Exercise Log</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Username:</label>
                    <select  ref="userInput"
                             required
                             className="form-control"
                             value={this.state.username}
                             onChange={this.onChangeUsername}>
                        {
                            this.state.users.map(function(user){
                                return <option
                                    key={user}
                                    value={user}>{user}</option>
                            })
                        }
                    </select>
                </div>
                <div className="form-group">

                    <label>Description: </label>
                    <input type={"text"} className={"form-control"}
                           required
                           value={this.state.description}
                           onChange={this.onChangeDescription}/>
                </div>
                <div className="form-group">
                    <label>Duration:</label>
                    <input type={"text"} className={"form-control"}
                           placeholder="Duration"
                           required
                           value={this.state.duration}
                           onChange={this.onChangeDuration}/>
                </div>
                <div className="form-group">
                    <label>Date:</label>
                    <br/>
                    <DatePicker
                        selected={this.state.date}
                        onChange={this.onChangeDate}></DatePicker>
                </div>
                <div className="form-group">
                    <input type="submit" value={"Update exercise log"} className={"btn btn-warning"}/>
                </div>
            </form>
            </div>

        );
    }
};