import React, { Component } from 'react';
import {AppProvider,AppConsumer} from '../../contexts/AppContext.js';
import {MenuConsumer} from '../../contexts/MenuContext.js';
import { Container,Row,Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
class BlogEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return <AppProvider>

            <Container fluid>
                <Row>
                    <Col sm={10}>
                        <AppConsumer>
                            {({editorComponent})=>editorComponent}
                        </AppConsumer>
                    </Col>
                    <Col style={{backgroundColor:'#fff3e0',height:'100vh'}}>
                        <MenuConsumer>
                            {({menuComponent})=>menuComponent}
                        </MenuConsumer>
                    </Col>
                </Row>
            </Container>
        </AppProvider>;
    }
}
 
export default BlogEditor;