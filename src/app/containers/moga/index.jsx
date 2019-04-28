import React from 'react';

import { Row, Col, Button } from 'reactstrap';
import * as _ from 'lodash';

import Panel from '../../components/panel/index.jsx';
import CustomNavbar from '../../components/navbar/navbar.jsx';


import style from'./style.css';

class Moga extends React.PureComponent {

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

    renderMainContent() {
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
                    {/* {proces ? <Spinner /> : <Table />} */}
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