import React from 'react';
import './styles.css';

export default function ProducerData({ producerData, type }) {
  return (
    producerData.map(p => (
      <ul className="producerDataBox" key={p.producer}>
        <li>
          <label>{type}</label>
          <h3>{p.producer}</h3>
          <h6>PREVIOUS WIN: {p.previousWin}</h6>
          <h6>FOLLOWING WIN: {p.followingWin}</h6>
          <h6>INTERVAL: {p.interval}</h6>
        </li>
      </ul>
    ))
  )
}