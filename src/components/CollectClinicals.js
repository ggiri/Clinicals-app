import React from "react";
import axios from "axios";
import withRouter from "../withRouter";
import { toast } from "react-toastify";
// import { useParams } from 'react-router-dom';

class CollectClinicals extends React.Component{
    state={};
    componentWillMount(){
        axios.get("http://localhost:8080/clinicalservices/api/patients/"+this.props.params.patientId)
        .then(res=>{
            this.setState(res.data);
        })
    }

    handleSubmit(event){
        event.preventDefault();
        const data = {
            patientId: this.props.params.patientId,
            componentName: this.componentName,
            componentValue: this.componentValue
        }
        axios.post("http://localhost:8080/clinicalservices/api/clinicals", data)
        .then(res=> {
            toast.success("Patient's clinicals saved successfully", {autoClose:2000, position:toast.POSITION.BOTTOM_CENTER})
        })
    }
    render(){
        return (<div>
            <h2>Patient details:</h2>
            First name: {this.state.firstName}&nbsp;  
            Last name: {this.state.LastName}
            Age: {this.state.age}
            <h2>Clinical Data</h2>
            <form>
                Clinical entry type: <select onChange={(event)=>{this.componentName=event.target.value}}>
                <option>Select One</option>
                    <option value="bp">Blood Pressure</option>
                    <option value="hw">Height/Weight</option>
                    <option value="heartrate">Heart rate</option>
                </select>&nbsp;
                Value:<input type="text" name="componentValue" onChange={(event)=>{this.componentValue=event.target.value}}></input>
                <button onClick={this.handleSubmit.bind(this)}>Confirm</button>
            </form>
        </div>)
    }
}

export default withRouter(CollectClinicals);