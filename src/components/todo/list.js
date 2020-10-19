import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

function TodoList(props) {


    return (
      <ListGroup>
      {props.list.map((item) => (
        <Card
          // variant={item.complete ? 'success' : 'danger'}
          className={`complete-${item.complete.toString()}`}
          key={item._id}
        >
          <Card.Header>{item.complete}  {item.assignee}</Card.Header>
          <Card.Text onClick={() => props.handleComplete(item._id)}>
            {item.text}  {item.difficulty }
          </Card.Text>
          <Button variant="danger" className='delete' onClick={() => props.handleDelete(item._id)}>X</Button>
        </Card>
      ))}
    </ListGroup>
    );

}

export default TodoList;
