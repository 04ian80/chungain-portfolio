import { useState } from 'react';

import type { IntroData } from '../../lib/data';
import ContentModal from './Modal';

interface Props {
  content: IntroData;
}

const Card = ({ content }: Props) => {
  const [show, setShow] = useState<boolean>(false);

  const openModal = () => {
    setShow(true);
  };

  const closeModal = () => {
    setShow(false);
  };

  return (
    <>
      <div className={`card ${content.color}`} onClick={openModal}>
        <div className='card__thumbnail'>{content.icon}</div>
        <div className='card__title--container'>
          <p className='card__title'>{content.title}</p>
          <p className='card__subTitle'>{content.subTitle}</p>
        </div>
      </div>
      {show && <ContentModal content={content} onClose={closeModal} />}
    </>
  );
};
export default Card;
