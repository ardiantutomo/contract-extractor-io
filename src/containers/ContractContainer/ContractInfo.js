import React from 'react';
import { Input } from 'antd';

const ContractInfo = (props) =>{
    const contract = props.contract;
    return (
        <div style={{padding:'50px'}}>
            <p>Title: <br/>{contract['title'].map(
                title=>(
                    <Input value={title}></Input>
            ))}</p>
            <p>Contract number: <Input value={contract['contract-number']}/>
            </p>
            <p>Date: <br/>{contract['date'].map(date=>(
                <Input value={date}></Input>
            ))}</p>
            <p>Money: <br/>{contract['money'].map(money=>(
                <Input value={money}></Input>
            ))}</p>
            {/* <p>Amount: {contract['money']}</p> */}
            {/* <hr/> */}
        </div>
            
    );
}

export default ContractInfo;