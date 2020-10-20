import React, { useEffect, useState } from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';

import useAjax from '../hooks/useAjax'

import Pagination from './pagination';
import ToggleShowProvider from '../context/hideShow';
import ToggleHideShow from './toggleHideShow';

import PaginationContext from '../context/paginationCo';
import ChangeNumberOfPages from './itemperpage';

import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './todo.scss';

const todoAPI = 'https://api-js401.herokuapp.com/api/v1/todo';//'mongodb://localhost:27017/food-db'


const ToDo = () => {

  const [list , _addItem , _toggleComplete , _getTodoItems , _deleteItem] = useAjax()


  useEffect(_getTodoItems, []);

  return (
    <>
      <Container>
      <ToggleShowProvider list={list}>

        <Row className="justify-content-md-center">
          <Col><h2>
            {/* There are {list.filter(item => item.complete == 'pending').length} Items To Complete */}
            There are {list.filter(item => !item.complete).length} Items To Complete
        </h2></Col>
        
        <Col>  <ToggleHideShow /> </Col>
        </Row>
        <Row className="todo">
          <Col className="form">
            <div>
              <TodoForm handleSubmit={_addItem} />
            </div></Col>
          <PaginationContext list={list}>

            <Col >
              
                <ChangeNumberOfPages />

                <TodoList
                  // list={currentItems}
                  handleComplete={_toggleComplete}
                  // handleDelete={_deleteItem}
                  handleDelete={_deleteItem}
                />


              <Row >
                <Pagination
                  // itemsPerPage={itemsPerPage}
                  totalItems={list.length}
                // paginate={paginate}
                // currentPage={currentPage}

                />
              </Row>
            </Col>
          </PaginationContext>
        </Row>
        </ToggleShowProvider>

      </Container>
    </>
  );
};

export default ToDo;
