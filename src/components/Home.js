import React, { useState } from "react";
import { Table } from 'react-bootstrap';
import Modal from 'react-modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector, useDispatch } from "react-redux";
import { addValues } from "./feature/addItemSlice";

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
let Home = () => {
    let adminLogIn=localStorage.getItem("admin");
    
    if(adminLogIn!=="true" ){
       window.location.href='/';
    }
    const dispatch = useDispatch();
    let subtitle;
    const [modalIsOpen, setIsOpen] = useState(false);
    const [fnameValues, setFname] = useState("");
    const [lnameValues, setLname] = useState("");
    const [ageValues, setAgeValues] = useState("");

    const fname=(e)=>{
        
        setFname(e.target.value);
    }
    const lanme=(e)=>{
        setLname(e.target.value);
    }
    const date=(e)=>{
        setAgeValues(e.target.value)
    }
    const submit=()=>{
      
        if(fnameValues===undefined || fnameValues===null || fnameValues===''){
            alert("Please Enter First Name.")
        }
        else if(lnameValues===undefined || lnameValues===null || lnameValues===''){
            alert("Please Enter Last Name.")
        }
        else if(ageValues===undefined || ageValues===null || ageValues===''){
            alert("Please Enter age.")
        }else{
            let obj={
                fname:fnameValues,
                lname:lnameValues,
                age:ageValues,
            }
            dispatch(addValues(obj));
            setFname("");
            setLname("");
            setAgeValues("");
            setIsOpen(false);
            alert("Successfully added.");
        }
     }

    
     let value = useSelector((state) => state.value);

    function openModal() {
        setIsOpen(true);
    }
    
      function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
      }
    
      function closeModal() {
        setIsOpen(false);
      }
    
    return (


        <div className="container">
                  <button onClick={openModal}>Add Item</button>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Age</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {value.map(function(values,id){
                    
                        return <tr>

                            <td>{++id}</td>
                            <td>{values.fname}</td>
                            <td>{values.lname}</td>
                            <td>{values.age}</td>
                            
                        </tr>
                    })}
                    
                    
                </tbody>
            </Table>
            
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <p>Add Item</p>
        {/* <button onClick={closeModal}>close</button> */}
        <div>
            <label for="fname" >First name:</label><br/>
            <input type="text" onChange={(e)=>fname(e)} value={fnameValues} /><br/>
            <label for="lname" >Last name:</label><br/>
            <input type="text"  onChange={(e)=>lanme(e)} value={lnameValues}/><br/>
            <label for="age">Age:</label><br/>
            <input type="date" value={ageValues} className="date" onChange={(e)=>date(e)}/><br/>
            <br/>
            <button type="button"value="Save" onClick={submit} className="date">Save</button><br/>

            
            
            </div>
        
        
          
       
      </Modal>
        </div>



    );
}
export default Home;
