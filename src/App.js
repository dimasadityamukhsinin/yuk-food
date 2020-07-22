import React from 'react';
import './App.css';
import HistoryCard from './components/HistoryCard';

function App() {
  let dataCard = 
  [
      {
          image : 'https://awsimages.detik.net.id/community/media/visual/2020/01/03/c993eff2-ea2b-412a-b7ab-69ed1011a2b7.jpeg?w=700&q=90',
          title : 'Bakso Nusantara, Sudirman',
          status : 'Makanan sudah diantar',
          tanggal : '22 Juli 2020'
      },
      {
          image : 'data:image/jpeg;base64,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',
          title : 'KE-PO CAFE, Panam',
          status : 'Driver sedang menuju ke tempat tujuan',
          tanggal : '22 Juli 2020'
      },
      {
          image : 'data:image/jpeg;base64,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',
          title : 'Martabak Djoeragan, Panam',
          status : 'Driver sedang menuju ke tempat tujuan',
          tanggal : '22 Juli 2020'
      },
      {
          image : 'data:image/jpeg;base64,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',
          title : 'Ayam Penyet Lunak Ludes, Purwodadi',
          status : 'Makanan sudah sampai',
          tanggal : '22 Juli 2020'
      },
      {
          image : 'https://lh5.googleusercontent.com/p/AF1QipNdkCFqBO50jjnos6rNLscsFjGiCQZJvKzlGbKC=w90-h90-n-k-no',
          title : 'CHATIME PANAM SQUARE, Panam',
          status : 'Makanan sudah sampai',
          tanggal : '22 Juli 2020'
      },

  ];

  return (
    <div className="wrapper">
      <h1>{'Makanan Kamu Lagi Dimana Ya?'.toUpperCase()}</h1>
      <HistoryCard dataCard={dataCard}/>
    </div>
  );
}

export default App;
