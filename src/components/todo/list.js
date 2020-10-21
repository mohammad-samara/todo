import React, { useContext } from 'react';

import {ToggleContext} from '../context/hideShow';
import {PaginationContext} from '../context/paginationCo';

import {LoginContext} from '../auth/cnontext';
import Auth from '../auth/auth';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
// import ListGroup from 'react-bootstrap/ListGroup';

function TodoList(props) {
  const toggleContext = useContext(ToggleContext);
  const pagination = useContext(PaginationContext);
  const loginContext = useContext(LoginContext);

    return (
      <Container  className="ul">
      {pagination.currentItem.map((item) => (
        <Container className={` complete-${item.complete ? 'complete' : 'pending'}-${toggleContext.status} li`}  key={item._id}>
        <Row className="firstRow">
            <Col  key={item._id} className={`complete-${item.complete ? 'complete' : 'pending'}`}  onClick={ loginContext.user.capabilities.includes('update') ? () => props.handleComplete(item._id) : null}>
               {item.complete ? 'complete' : 'pending'}
             </Col>
            <Col> {item.assignee} </Col>
            <Col className="text-end">
            <Auth capability='delete'>
             <button onClick={() => props.handleDelete(item._id)}>x</button>
             </Auth>
            </Col>
        </Row>
        <Row>
        <Col md="auto">
          {item.text} 
          </Col>
        </Row>
        <Row className="text-end">
        <Col md={{ span: 9, offset: 3 }}> Difficulty : {item.difficulty}</Col>
       
        </Row>
    </Container>
      ))}
    </Container>
    );

}

export default TodoList;
