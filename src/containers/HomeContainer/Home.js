import React, {useState} from 'react';
import { Layout, Menu, Breadcrumb, Row, Col, Button } from 'antd';
import classes from './Home.module.css'
import {
  CameraOutlined,
  FileTextOutlined
} from '@ant-design/icons';
import TextContract from '../ContractContainer/TextContract';
import OCRContract from '../ContractContainer/OCRContract';

const Home = () => {
  const [state, setState] = useState(0) // 0 home, 1 text, 2 ocr

  const render = state == 0 ?(
    <Row>
      <Col span={12} className={classes.pane} onClick={()=>setState(2)}>
        <div className={classes.center} >
          <CameraOutlined style={{ fontSize: '250px', color: 'rgb(0, 200, 50)' }}/>
          <center><h1>OCR</h1></center>
        </div>
      </Col>
      <Col span={12} className={classes.pane} onClick={()=>setState(1)}>
        <div className={classes.center}>
          <FileTextOutlined style={{ fontSize: '250px', color: '#08c' }}/>
          <center><h1>Text</h1></center>
        </div>
      </Col>
    </Row>
  ) : state == 1 ? <TextContract/> : <OCRContract/>
  return (
    <div>
      {render}
    </div>
  );
}

export default Home;