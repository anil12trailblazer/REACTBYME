// import { useRouteError } from "react-router-dom";

const Error = () =>{
    // const err = useRouteError();
       
    return(
        <div>
            <h2 className="text-2xl font-bold">Ooops !!</h2>
            <h3 className="text-slate-600">Something went wrong</h3>
            {/* <h3>{err.status } : {err.statusText}</h3> */}
        </div>
    )
}

export default Error;
