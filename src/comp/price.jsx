import { FactCheck } from "@mui/icons-material";
import { click } from "@testing-library/user-event/dist/click";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { useContext } from "react";
import "../App.css"
const Price = () => {
    const [num, setNum] = useState(0)
    const [istrue, setIstrue] = useState([])

    const onchange = (e) => {
        setNum(e.target.value)

    }
    // const memo = useMemo(() => {
    //     return prime((num,istrue),[num,istrue])})

    const prime = () => {

        for (let i = 1; i <= num; i++) {
            let tegsh = true
            for (let j = 2; j < i; j++) {
                if (i % j === 0) {

                    tegsh = false
                }
            }
            if (i > 1 && tegsh === true) {
                setIstrue(prev => [...prev, i])
            }
        }
    }
    const memo = useMemo(() => {
        prime(num)
    }, [num])


    return (
        <div>
            <input type="number" onChange={onchange}></input>
            <button onClick={prime}>dar</button>
            <p>Prime numbers</p>
            {
                istrue.map(e => <h3>{e}</h3>)
            }
        </div>
    )


}
export default Price