import React, {Component} from 'react';
import '../components/style/homestyles.css';
import Image from '../images/logo.png';
import Card from "./card";
import sl from "../images/Animated Flag of Srilanka Srilankan Flag Animation.gif"

class Home extends Component {
    constructor(props) {
        super(props);
        this.state={
            local_new_cases: null,
            local_active_cases :null,
            local_total_cases : null,
            update_date_time :null,
            local_recovered : null,
            local_deaths : null,
            in_hospitals :null
        }
    }


    componentDidMount() {
        fetch('https://hpb.health.gov.lk/api/get-current-statistical').then((resp=>{
            resp.json().then((result)=>{
                this.setState({
                    local_new_cases : result.data.local_new_cases,
                    local_active_cases : result.data.local_active_cases,
                    local_total_cases : result.data.local_total_cases,
                    update_date_time : result.data.update_date_time,
                    local_recovered : result.data.local_recovered,
                    local_deaths : result.data.local_deaths,
                    in_hospitals : result.data.local_total_number_of_individuals_in_hospitals

                });
            })
        }))
    }

    render() {
        return (
            <div className={'container'}>
                <div style={{marginTop:'10px'}}>
                    <div className="card text-center">
                        <div className="card-body">
                            <h6 className="card-title">Sourse</h6>
                            <img className={"image"} src={Image} alt="logo"/>
                        </div>
                        <div className="card-footer text-muted">
                            <a className={'links'} href="https://hpb.health.gov.lk/en/api-documentation">https://hpb.health.gov.lk/en/api-documentation</a>
                        </div>
                    </div><br/>



                    <div className="card">
                        <div className="card-body">
                            <div style={{textAlign:"center"}}>
                                <img src={sl} className={"flag"} alt="flag"/>
                                <h2>Sri Lanka</h2>
                            </div>


                            <div className="row">
                                <div className="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
                                    <Card color={"primary"} cheader={this.state.local_new_cases} ccontent={"Newly Reported Patients"}
                                          update={this.state.update_date_time}/>
                                </div>
                                <div className="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
                                    <Card color={"danger"} cheader={this.state.local_active_cases} ccontent={"Local Active Cases"}
                                          update={this.state.update_date_time}/>

                                </div>
                                <div className="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
                                    <Card color={"success"} cheader={this.state.local_total_cases} ccontent={"Total Reported Patients"}
                                          update={this.state.update_date_time}/>
                                </div>
                                <div className="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
                                    <Card color={"dark"} cheader={this.state.local_recovered} ccontent={"Total Recovered Patients"}
                                          update={this.state.update_date_time}/>
                                </div>
                                <div className="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
                                    <Card color={"info"} cheader={this.state.local_deaths} ccontent={"Total Reported Deaths"}
                                          update={this.state.update_date_time}/>

                                </div>
                                <div className="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
                                    <Card color={"warning"} cheader={this.state.in_hospitals} ccontent={"Total Patients in Hospitals"}
                                          update={this.state.update_date_time}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
