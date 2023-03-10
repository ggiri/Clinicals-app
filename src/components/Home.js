import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Home extends React.Component {
    state = {
        patientData: []
    }

    componentWillMount() {
        axios.get('http://localhost:8080/clinicalservices/api/patients').then(res => {
            const patientData = res.data;
            this.setState({ patientData })
        })
    }
    render() {
        return (<div >
            <h2 >Patient:</h2>
            <table align="center">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>First name</th>
                        <th>Last name</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.patientData.map(patient=><RowCreator key = {patient.id} item={patient}/>)}
                </tbody>
            </table>
            <Link to={'/addPatient'}><font size="5"></font>Register Patient</Link>
        </div>)
    }
}

class RowCreator extends React.Component{
    render(){
        var patient = this.props.item;
        return <tr key = {"row"}>
            <td>{patient.id}</td>
            <td>{patient.firstName}</td>
            <td>{patient.lastName}</td>
            <td>{patient.age}</td>
            <td><Link to= {'patientDetails/'+patient.id}>Add Clinical data</Link></td>
            <td><Link to= {'analyze/'+patient.id}>Analyze data</Link></td>
        </tr>
    }
}

export default Home;