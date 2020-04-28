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

  const updateColContent = (container, row, col, content) => {
    let newPage = { ...page };
    newPage.containers[container].rows[row].cols[col].content = content;
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
      <TextEdit />
    </div>
  );
}

export default App;
