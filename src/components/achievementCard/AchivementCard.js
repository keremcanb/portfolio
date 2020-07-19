import React from 'react';
import ModalImage from 'react-modal-image';

const AchivementCard = ({ cardInfo }) => {
  function openUrlInNewTab(url) {
    var win = window.open(url, '_blank');
    win.focus();
  }

  return (
    <div className='certificate-card'>
      <div className='certificate-image-div'>
        <ModalImage
          small={cardInfo.thumbnail}
          large={cardInfo.image}
          alt='Projects'
          className='card-image'
          hideDownload='false'
        />
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
};

export default AchivementCard;
