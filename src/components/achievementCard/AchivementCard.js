import React from 'react';
import { SRLWrapper } from 'simple-react-lightbox';

export default function AchivementCard({ cardInfo }) {
  function openUrlInNewTab(url) {
    var win = window.open(url, '_blank');
    win.focus();
  }

  return (
    <div className='certificate-card'>
      <div className='certificate-image-div'>
        <SRLWrapper>
          <a href={cardInfo.image}>
            <img
              src={cardInfo.thumbnail}
              alt='Project'
              className='card-image'
            ></img>
          </a>
        </SRLWrapper>
      </div>
      <div className='certificate-detail-div'>
        <h5 className='card-title'>{cardInfo.title}</h5>
        <p className='card-subtitle'>{cardInfo.description}</p>
      </div>
      <div className='certificate-card-footer'>
        {cardInfo.footer.map((v, i) => {
          return <p onClick={() => openUrlInNewTab(v.url)}>{v.name}</p>;
        })}
      </div>
    </div>
  );
}
