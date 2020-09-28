import React from 'react';


class User extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userList: [],
        };
    }

    componentDidMount() {
        fetch('https://serene-earth-78588.herokuapp.com/users')
            .then(response => response.json())
            .then(data => {                
                this.setState({userList: data});
            })
            .catch(e => alert("Ha ocurrido un error!"));
    }

    render() {
        console.log(this.state.userList);
        return (
            <div>
               <h1> Lista de Usuarios </h1>
               {JSON.stringify(this.state.userList)}
            </div>
        );
    }
}

export default User;