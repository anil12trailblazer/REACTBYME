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
        <div className="p-4 m-4 border border-slate-200 rounded-md">
            <h1 className="font-bold">Name : {Name}</h1>
            <h1 className="font-bold">Location : {Location}</h1>
            <h1 className="font-bold">Hobby : {Hobby}</h1>
            <h1 className="font-bold">Count : {count}</h1>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
};

export default User;
