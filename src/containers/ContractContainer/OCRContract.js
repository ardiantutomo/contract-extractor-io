import React, {useState} from 'react';
import { Row, Col } from 'antd';
import { Upload, message } from 'antd';
import ContractInfo from './ContractInfo';
import { InboxOutlined } from '@ant-design/icons';
import PDFViewer from 'pdf-viewer-reactjs';
const { Dragger } = Upload;

const OCRContract = () => {
  const [contractData, setContractData] = useState([]);
  
  const props = {
    name: 'file',
    multiple: true,
    method: 'POST',
    action: 'https://contract-extractor-io.herokuapp.com/ocr',
    onChange(info) {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        setContractData(old => [...old, info.file.response])
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
  return (
    <>
    <Row>
        <Col span={24} className="panel">
            <center><h1>OCR</h1></center>
        </Col>
    </Row> 
    <Dragger {...props}>
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">Click or drag file to this area to upload</p>
          <p className="ant-upload-hint">
            Support for a single or bulk upload. Strictly prohibit from uploading company data or other
            band files
          </p>
    </Dragger>
    {contractData.map((contract, i) =>{
        return(   
        <Row>
            <Col span={12} className="panel">
                <PDFViewer
                    document={{
                        url: 'https://contract-extractor-io.herokuapp.com/data/' + contract.filename,
                    }}
                />
            </Col>
            <Col span={12} className="panel">
            <ContractInfo contract={contract}/>
            </Col>
        </Row>
        )
    })}
    </>
);
}

export default OCRContract;