import React from 'react';
import './App.css';
import styled from "styled-components";

function App() {
    return (
        <div className="App">
            <div>
                <h3>What to learn</h3>
                <div>
                    <input/>
                    <button>+</button>
                </div>
                <ul>
                    <li><input type="checkbox" checked={true}/> <span>HTML&CSS</span></li>
                    <li><input type="checkbox" checked={true}/> <span>JS</span></li>
                    <li><input type="checkbox" checked={false}/> <span>React</span></li>
                </ul>
                <AppButtonSection>
                    <button>All</button>
                    <button>Active</button>
                    <button>Completed</button>
                </AppButtonSection>
            </div>
        </div>
    );
}

export default App;

const AppButtonSection = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    height: 30px;
  }
`