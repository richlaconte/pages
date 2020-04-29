import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Toolbar from './Components/Toolbar';
import Preview from './Components/Preview';
import TextEdit from './Components/TextEdit';

function App() {

  const [page, setPage] = useState({
    containers: []
  });
  const [currentCol, setCurrentCol] = useState('');

  const newCurrentCol = (col) => {
    setCurrentCol(col);
  }


  const appendContainer = () => {
    let newPage = { ...page };
    newPage.containers.push({
      settings: {},
      style: {},
      rows: [],
    });
    setPage(newPage);
  }
  const appendRow = (container) => {
    let newPage = { ...page };
    newPage.containers[container].rows.push({
      style: '',
      cols: []
    })
    setPage(newPage);
  }
  const appendCol = (container, row) => {
    let newPage = { ...page };
    newPage.containers[container].rows[row].cols.push(
      {
        content: 'test4'
      }
    )
    setPage(newPage);
  }

  const updateColContent = (container, row, col, newContent) => {
    let newPage = { ...page };
    newPage.containers[container].rows[row].cols[col].content = newContent;
    setPage(newPage);
  }


  const updates = {
    appendContainer() {
      appendContainer();
    },
    appendRow(container) {
      appendRow(container);
    },
    appendCol(container, row) {
      appendCol(container, row);
    },
    changeColContent(container, row, col, content) {
      updateColContent(container, row, col, content);
    }
  }

  return (
    <div className="App">
      <Toolbar />
      <Preview page={page} updates={updates} />
      <TextEdit content={'test'} newCurrentCol={newCurrentCol} />
    </div>
  );
}

export default App;
