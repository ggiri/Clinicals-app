import axios from "axios";
import React from "react";
import withRouter from "../withRouter";

class AnalyzeData extends React.Component{
    state={
        clinicalData:[]
    }

    componentWillMount(){
        axios.get("http://localhost:8080/clinicalservices/api/patients/analyse/"+this.props.params.patientId)
        .then(res=> this.setState(res.data));
    }
    render(){
        return (<div>
            <h2>Patient Details:</h2>
            First name: {this.state.firstName}&nbsp;
            Last name: {this.state.lastName}&nbsp;
            Age: {this.state.age}
            <h2>Clinical Report:</h2>
            {this.state.clinicalData.map(each=><TableCreator item={each} patientId={this.state.id}/>)}
        </div>)
    }
}

class TableCreator extends React.Component{
    render(){
        var each = this.props.item;
        return <div>
            <table>
                <tr>
                    <td><b>{each.componentName}</b></td>&nbsp;
                    <td>{each.componentValue}</td>&nbsp;
                    <td>{each.measuredDateTime}</td>
                </tr>
            </table>
        </div>
    }
}

export default withRouter(AnalyzeData);