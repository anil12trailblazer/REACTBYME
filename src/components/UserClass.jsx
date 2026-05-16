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
            <div className="p-4 m-4 border border-slate-200 rounded-md">
                <h1 className="font-bold">Name : {Name}</h1>
                <h1 className="font-bold">Location : {Location}</h1>
                <h1 className="font-bold">Hobby : {Hobby}</h1>
                <h1 className="font-bold">Count : {count}</h1>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={() => this.setState({ count: count + 1 })}>Increment</button>
            </div>
        );
    }
}

export default UserClass;