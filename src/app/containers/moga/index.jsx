import React from 'react';

import {Form, Row, Col, Button, InputGroup, InputGroupAddon, Input } from 'reactstrap';
import * as _ from 'lodash';

import Panel from '../../components/panel/index.jsx';
import CustomNavbar from '../../components/navbar/navbar.jsx';
import Papa from 'papaparse';


import style from'./style.css';

class Moga extends React.PureComponent {
    constructor(){
        super();
        this.state={
            csvfile:undefined,
            data:null,
            length:[],
            input:'',
            output:'',
            constraint:'',
            count:1
        };
        

    }

    importCSV = () =>{
        const { csvfile} =this.state;
        Papa.parse(csvfile, {
            complete: this.updateData,
            header:false
        });
    };

    handleChange(event) {
        // TODO: clear the input if wrong file is selected
        // and clear the input once a file is selected
        var file = event.target.files[0];
        if (_.includes(file.type, '/csv')) {
            this.csvfile = file;
        }
        else {
            alert('Invalid file type. Please upload a CSV file');
        }
    }

    handlesubmit (event) {
        event.preventDefault()
        var input =parseInt(this.state.input)
        var output =parseInt(this.state.output)
        var constraint =parseInt(this.state.constraint)
        var length =this.state.length.length
        var totalVal = input+output+constraint
        if (totalVal ==length){
            let arr_final =[]
            for (let i=1; i<=input; i++){
                arr_final.push("X"+i)
            }
            for (let i=1; i<=output; i++){
                arr_final.push("Y"+i)
            }
            for (let i=1; i<=constraint; i++){
                arr_final.push("C"+i)
            }
            this.setState({
                length:arr_final
            })
        } else{
            alert("value did not match")
        }


    }
    

    renderMainContent() {
        var tableMarkup = null;
        if(this.state.data) {
            tableMarkup = (
                <Table bordered style={{ marginTop: '15px', padding: '0.15rem' }} >
                    <thead style={{ backgroundColor: '#80bfff', borderColor: '#333' }}>
                        <tr style={{ height: '50px' }}>
                            <th>#</th>
                            {this.state.length.map((item) => <th>{item}</th>)}
                        </tr>

                    </thead>
                    <tbody>
                        {
                            !!this.state.data && this.state.data.map((numList, i) => (
                                <tr key={i}>
                                    <td style={{ backgroundColor: '#80bfff' }}>{i}</td>
                                    {
                                        numList.map((num, j) =>
                                            <td key={j}>{num}</td>
                                        )
                                    }
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            );
        }
        return (
            <div>
                <h3>Import moga file</h3>
                <Row>
                    <Col md="6">
                        <input className="file-uploader"
                            type='file'
                            ref={input => {
                                this.filesInput = input;
                            }}
                            accept=".csv"
                            placeholder={null}
                            onChange={(e) => this.handleChange(e)}
                        />
                        </Col>
                    <Col md="6">
                        <Button outline color="primary" onClick={this.importCSV} className="btn-margin" size="sm">Submit</Button>
                        <Button outline color="success" onClick={this.importCSV} className="btn-margin"  size="sm">Save File</Button>
                        <Button outline color="danger" onClick={this.importCSV} className="btn-margin"  size="sm">Open Saved Files</Button>
                    </Col>
                </Row>
                <Row>
                <Form>
                    <Row className="input-box">
                        <InputGroup size="sm" className="user-input" >
                            <InputGroupAddon addonType="prepend"> No of Input</InputGroupAddon>
                            <Input name="input" onChange={e =>this.setState({input:e.target.value})} />
                        </InputGroup>
                        
                        <InputGroup size='sm' className="user-input" >
                            <InputGroupAddon addonType="prepend"> No of Output</InputGroupAddon>
                            <Input name="output"  onChange={e =>this.setState({output:e.target.value})} />
                        </InputGroup>
                        <InputGroup size='sm' className="user-input" >
                            <InputGroupAddon addonType="prepend"> No of constraints</InputGroupAddon>
                            <Input name="constraints" onChange={e =>this.setState({constraint:e.target.value})} />
                        </InputGroup>
                    <Button outline type="submit" color="success" onClick={e =>this.handlesubmit(e)} size="sm" className="validate-button">Validate</Button>

                    </Row>
                </Form>
                </Row>
                <Row>
                {tableMarkup}
                </Row>
            </div>
        )
    }

    render() {
        const mainContentMarkup = this.renderMainContent();

        const firstGraphMarkup = (
            <div>First graph</div>
        );

        const secondGraphMarkup = (
            <div>Second graph</div>
        );

        const settingsMarkup = (
            <div>Settings</div>
        );

        return (
            <div>
                <CustomNavbar/>
            <div className="custom-row">
                
                <Panel content={mainContentMarkup}>
                </Panel>
                <div className="column">
                    <Panel content={firstGraphMarkup}>
                    </Panel>
                    <Panel content={secondGraphMarkup}>
                    </Panel>
                    <Panel content={settingsMarkup}>
                    </Panel>
                </div>
            </div>
            </div>
        )
    }
}

export default Moga;