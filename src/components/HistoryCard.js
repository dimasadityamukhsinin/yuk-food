import React from 'react';
import './HistoryCard.css';

const historyCard = ({ dataCard }) => {
    return (
        <div>
            {
                dataCard.map((element) => (
                    <div className="card">
                        <div className="content">
                            <img src={element.image} alt={element.title}/>
                            <h1>{element.title}</h1>
                            <p className="status">{element.status}</p>
                            <p>{element.tanggal}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default historyCard;