import { useEffect, useState } from "react";

const User = (props) => {
    const [count, setCount] = useState(0);
    const { Name, Location, Hobby } = props;
    console.log(count);
    useEffect(() => {
        console.log("useEffect called");
        const interval = setInterval(() => {
            console.log("Interval called");
        }, 1000);
        return () => {
            clearInterval(interval);
            console.log("Cleanup");
        };
    }, [count]);

    return (
        <div className="user">
            <h1>Name : {Name}</h1>
            <h1>Location : {Location}</h1>
            <h1>Hobby : {Hobby}</h1>
            <h1>Count : {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
};

export default User;
