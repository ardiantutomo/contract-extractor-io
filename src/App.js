import React, {useState} from 'react';
import { Layout, Menu, Breadcrumb, Row, Col } from 'antd';
import './App.css';
import { Upload, message } from 'antd';
import Choose from './containers/HomeContainer/Home';



const App = () => {
  
  return (
    <div className="App">   
      <Choose/>
    </div>
  );
}

export default App;