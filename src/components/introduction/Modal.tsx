import React from 'react';
import type { IntroData } from '../../lib/data';
import { AiOutlineClose } from 'react-icons/ai';

interface Props {
  content: IntroData;
  onClose: () => void;
}

const ContentModal = ({ content, onClose }: Props) => (
  <>
    <div className='common__modal-backdrop' />
    <div className='common__modal'>
      <div className='card__modal_inner--header'>
        <p className='card__modal_inner--title'>{content.title}</p>
        <button className='close-modal__btn'>
          <AiOutlineClose size={20} onClick={onClose} />
        </button>
      </div>
      {content.content.map(({ subtitle, subcontent }, idx) => (
        <div key={idx} className='card__modal_inner--content'>
          <li className='card__modal_inner--content-list'>
            {subtitle && (
              <>
                <strong>{subtitle}</strong>
                <br />
              </>
            )}
            <span>{subcontent}</span>
          </li>
        </div>
      ))}
    </div>
  </>
);

export default ContentModal;
