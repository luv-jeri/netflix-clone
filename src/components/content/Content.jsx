import React, { useEffect } from 'react';
import './Content.css';
import Row from '../row/Row';
import RowData from '../../constants/urls';
import axios from 'axios';

export default function Content() {
  return (
    <div className='content_container'>
      {RowData.map((item, index) => {
        return <Row key={index} title={item.title} url={item.url} />;
      })}
    </div>
  );
}
