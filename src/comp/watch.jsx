import { SatelliteAlt } from "@mui/icons-material";
import { useReducer ,useEffect} from "react";


    var intetrval;
    const initialState = {clock : 0,istrue : false};
   

    const reducer = (state,action) => {
        switch (action.type) {
            case 'start':
                return{ ...state , istrue:true}
            break;
            case 'stop':
                return{ ...state, istrue:false}
            break;
            case 'reset':
                return{istrue:false, clock:0}
                break;
            case 'tick':
                return{...state, clock: state.clock + 1}
                default:
                    throw new Error();

        }
    }

  
     const Counter = () =>{
        const [state,dispatch] = useReducer(reducer,initialState)

        useEffect(() => {
            if(state.istrue){
             intetrval =setInterval(() => {
               dispatch({type : "tick"})
            }, 1000)
            return () => clearInterval(intetrval);
          }},[state.istrue])

        return ( 
            <>
                Time: {state.clock}
                <button onClick={() => dispatch({type: "start"})}> start</button>
                <button onClick={() => dispatch({type: "stop"})}>stop</button>
                <button onClick={() => dispatch({type: "reset"})}>stop</button>
            </>
        )  
    }

    export default Counter

