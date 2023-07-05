import React from 'react';

const SkillBox = ({
  icons,
  lang,
}: {
  icons: { icon: JSX.Element; name: string }[];
  lang: string;
}) => (
  <section className='skillbox'>
    <h3>{lang}</h3>
    <div className='icon__container'>
      {icons.map(({ icon, name }) => (
        <div className='icon__item'>
          <span>{icon}</span>
          <span>{name}</span>
        </div>
      ))}
    </div>
  </section>
);

export default SkillBox;
