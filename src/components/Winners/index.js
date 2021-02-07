import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import ProducerData from '../ProducerData';
import './styles.css';

export default function Winners({ hidden }) {
  const [winnersMin, setWinnersMin] = useState([]);
  const [winnersMax, setWinnersMax] = useState([]);

  useEffect(() => {
    async function getWinners() {
      if (!hidden) {
        const response = await api.get('/winners');
        setWinnersMin(response.data.min);
        setWinnersMax(response.data.max);
      }
    }
    getWinners();
  }, [hidden]);

  return (
    <>
      <div hidden={hidden}>
        <h2 className="title">Premiações</h2>
        <div className="winnersContainer">
          <ProducerData type="Min" producerData={winnersMin} />
          <ProducerData type="Max" producerData={winnersMax} />
        </div>
      </div>
    </>
  )
}