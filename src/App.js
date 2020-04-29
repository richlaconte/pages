import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Toolbar from './Components/Toolbar';
import Preview from './Components/Preview';
import TextEdit from './Components/TextEdit';
import Options from './Components/Options';

function App() {

  const [page, setPage] = useState({
    containers: []
  });
  const [active, setActive] = useState({});

  // TEMPLATES
  const col = {
    content: 'Column',
    style: {
      height: {
        value: 50,
        type: 'px'
      },
      textAlign: 'left'
    }
  }

  const newActive = (container, row, col) => {
    console.log(container, row, col)
    if (container !== null && row !== null && col !== null) {
      setActive(page.containers[container].rows[row].cols[col]);
      console.log(page.containers[container].rows[row].cols[col])
    } else if (container && row) {
      setActive(page.containers[container].rows[row]);
    } else if (container) {
      setActive(page.containers[container]);
    } else {
      setActive({});
    }
  }

  const appendContainer = () => {
    let newPage = { ...page };
    newPage.containers.push({
      settings: {},
      style: {},
      rows: [{
        style: '',
        cols: [col]
      }],
    });
    setPage(newPage);
  }
  const appendRow = (container) => {
    let newPage = { ...page };
    newPage.containers[container].rows.push({
      style: '',
      cols: [col]
    })
    setPage(newPage);
  }
  const appendCol = (container, row) => {
    let newPage = { ...page };
    newPage.containers[container].rows[row].cols.push(col)
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
    <div className="App container-flex" style={{ height: '100vh' }}>
      <div className="row" style={{ height: '100%' }}>
        <Options active={active} />
        <Preview page={page} updates={updates} setActive={newActive} />
      </div>
    </div>
  );
}

export default App;
