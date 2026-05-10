import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }

        console.log("child Constructor");

    }
    componentDidMount() {
        console.log("child componentDidMount");
    }
    componentDidUpdate() {
        console.log("child componentDidUpdate");
        setInterval(() => {
            console.log("Interval called");
        }, 1000);
    }
    componentWillUnmount() {
        console.log("child componentWillUnmount");
    }
    render() {
        console.log("child Render");
        
        const { Name, Location, Hobby } = this.props;
        const { count } = this.state;
        return (
            <div className="user">
                <h1>Name : {Name}</h1>
                <h1>Location : {Location}</h1>
                <h1>Hobby : {Hobby}</h1>
                <h1>Count : {count}</h1>
                <button onClick={() => this.setState({ count: count + 1 })}>Increment</button>
            </div>
        );
    }
}

export default UserClass;