import axios from "axios";
import React from "react";
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {Link} from 'react-router-dom';


class AddPatient extends React.Component{

    handleSubmit(event){
        event.preventDefault();
        const data={
            firstName: this.firstName,
            lastName: this.lastName,
            age: this.age
        }
        axios.post("http://localhost:8080/clinicalservices/api/patients", data).then(res=>{
            toast.success("Patient added successfully!", {autoClose:2000, position:toast.POSITION.BOTTOM_CENTER});
        })

    }
    render(){
        return (<div>
            <h2>Create patient:</h2>
            <form>
                First name: <input type="text" name="first name" onChange={(event=>this.firstName=event.target.value)}/>
                Last name: <input type="text" name="last name" onChange={(event=>this.lastName=event.target.value)}/>
                Age: <input type="text" name="age" onChange={(event=>this.age=event.target.value)}/>
                <button onClick={this.handleSubmit.bind(this)}>Confirm</button>
            </form>
            <Link to={"/"}>Go back</Link>

        </div>)
    }
}

export default AddPatient;