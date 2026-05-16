import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends Component {
    constructor(props) {
        super(props);
        console.log("Parent Constructor");

    }
    componentDidMount() {
        console.log("Parent componentDidMount");
    }
    componentWillUnmount() {
        console.log("Parent componentWillUnmount");
    }
    render() {
        console.log("Parent Render");
        
        return (
            <div className="p-8">
                <h1 className="text-2xl font-bold">About Us</h1>
                <p className="text-slate-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.</p>
                <User Name="Anil" Location="Pune" Hobby="Coding" />

                {/* <UserClass Name="Anil" Location="Pune" Hobby="Coding" /> */}
            </div>
        )
    }

}

export default About;