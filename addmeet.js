import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const Addmeet=()=>{
        const navigate=useNavigate()
        const [alert,setalert]=useState()
        const [btn,setbtn]=useState('ADD MEET')
        const roll=useRef()
        const uname=useRef()
        const streamname=useRef()
        const date=useRef()
        function pushdata(){
            const rollname=roll.current.value
            const urname=uname.current.value
            const strname=streamname.current.value
            const datename=date.current.value
            if(rollname==''|| urname==''|| strname==''|| datename==''){
                setalert('Please Fill All the Fields !!')
            }
            else{
                const dataObject={
                    meetRoll:rollname,
                    meetName:urname,
                    meetClass:strname,
                    meetDate:datename
    
                }
                fetch('https://let-s-meet-d0647-default-rtdb.firebaseio.com/letsmeet.json',{
                    method:'post',
                    body:JSON.stringify(dataObject)
                    }).then(()=>{
                        setbtn('MEET ADDED')
                        setalert('')
                        navigate('/')
                    })
            }
        }
    return <div className="add_meet">
        <div className="addmeet-items">
            <h1 className="name">Add your meeting details !!!</h1>
            <input className="text" placeholder="Enter your roll..." ref={roll}></input>
            <input className="text" type="text" placeholder="Enter your name..." ref={uname} ></input>
            <input className="text" type="text" placeholder="Enter your class name..." ref={streamname}></input>
            <input className="text" type="date" ref={date}></input>
            <h5 className="alert">{alert}</h5>
            <button className="btn" onClick={pushdata}>{btn}</button>

        </div>
        


    </div>
}
export default Addmeet;