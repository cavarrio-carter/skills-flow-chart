import React from 'react';
import logo from './logo.svg';
import './App.css';
import Flow from './Flow.js'
import { ReactFlow, ReactFlowProvider } from '@xyflow/react';

function App() {
  return (
    <div>
      <header>
      </header>

      <div>
        <Flow/>
      </div>
    </div>
  );
}

export default App;
