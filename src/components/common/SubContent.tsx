import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

import { introDatas } from '../../lib/data';
import type { IntroData } from '../../lib/data';

const SubContent = () => {
  const [selectedTitle, setSelectedTitle] = useState<string | null>(null);

  const openModal = (title: string) => {
    setSelectedTitle(title);
  };

  const closeModal = () => {
    setSelectedTitle(null);
  };

  return (
    <>
      {introDatas.map(({ title, content }: IntroData, idx) => (
        <div key={idx} className='tab-bar'>
          {title && (
            <h4 className='tab-bar__subtitle' onClick={() => openModal(title)}>
              {title}
            </h4>
          )}
          {selectedTitle === title && (
            <div className='tab-bar__subcontent'>
              <div className='tab-bar__subcontent--inner'>
                <AiOutlineClose size={20} className='close-modal__btn' onClick={closeModal} />
                <h5 className='tab-bar__title'>{title}</h5>
                {content.map(({ subtitle, subcontent }, idx) => (
                  <div key={idx}>
                    <li className='tab-bar__list'>
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
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default SubContent;
