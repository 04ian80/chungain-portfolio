import React from 'react';

type ContentsType = {
  title: string;
  children: React.ReactNode;
};

const Contents = ({ title, children }: ContentsType) => (
  <section className='contents'>
    <h3 className='contents__heading'>{title}</h3>
    {children}
  </section>
);

export default Contents;
