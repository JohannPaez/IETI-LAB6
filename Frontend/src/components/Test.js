import React from 'react';


class Test extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userList: [],
        };
    }

    componentDidMount() {
        fetch('https://quiet-garden-90466.herokuapp.com/users')
            .then(response => response.json())
            .then(data => {
                let userList = [];
                data.items.forEach(function (user) {
                    console.log("USERS " + user);
                    userList.push({
                       
                    })

                });
                this.setState({userList: userList});
            }).catch(e => alert("ERROR"));
    }

    render() {
        console.log(this.state.userList);
        return (
            <div>
               <h1> HOLA SOY TEST </h1>
                
            </div>
        );
    }
}

export default Test;