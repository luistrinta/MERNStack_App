import React, {Component} from 'react';
import axios from 'axios';

export default class CreateUser extends Component{
    constructor(props){
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onSubmit=this.onSubmit.bind(this);

        this.state = {
            username:'',
        }
    }
    //da update dos elementos do construtor ao inserir os dados
    onChangeUsername(e){
        this.setState({
            username: e.target.value
        });
    }
    onSubmit(e){
        //previne a exevução do HTML ao submeter
        e.preventDefault();

        const user = {
            username: this.state.username,
        };

        console.log(user);

        axios.post('http://localhost:5000/users/add', user)
            .then(res => console.log(res.data));
        window.location = '/';
    }



    render() {
        return(
            <form onSubmit={this.onSubmit}>
                <div className="form-group">

                    <label>Username: </label>
                    <input type={"text"} className={"form-control"}
                           required
                           value={this.state.username}
                           onChange={this.onChangeUsername}/>
                </div>

                <div className="form-group">
                    <input type="submit" value={"Create exercise"} className={"btn btn-warning"}/>
                </div>
            </form>

        );
    }

};