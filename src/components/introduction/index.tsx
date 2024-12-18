import Cards from './Cards';

const contactData = [
  { href: 'mailto:devain2211@gmail.com', title: 'Email', text: 'devain2211@gmail.com' },
  { href: 'tel:01096776912', title: 'Phone', text: '010-9677-6912' },
  { href: 'https://github.com/04ian80', title: 'GitHub', text: 'https://github.com/04ian80' },
  { href: 'https://velog.io/@a_in', title: 'Blog', text: 'https://velog.io/@a_in' },
];
// const INTRODUCTION_TITLE = '끊임없는 발전을 추구하는 종아인입니다';
const INTRODUCTION_DESCRIPTION =
  '아래의 주제들을 클릭하여 “프론트엔드 개발자 종아인” 대해 더 자세히 알아보세요!';

const Introduction = () => (
  <>
    <section className='introduction__contact--container'>
      <img
        className='introduction__img'
        src='/image/profile.png'
        alt='프로필 사진'
        width={200}
        height={200}
      />
      <article className='introduction__contact'>
        {contactData.map(({ href, title, text }) => (
          <div className='introduction__contact--content' key={href}>
            <p>{title}</p>
            <div className='common__small-bar' />
            <a
              href={href}
              target='_blank'
              rel='noopenner noreferrer'
              className='introduction__contact--anchor'
            >
              {text}
            </a>
          </div>
        ))}
      </article>
    </section>

    <div className='introduction__card--container'>
      <small>{INTRODUCTION_DESCRIPTION}</small>
      <div className='introduction__card'>
        <Cards />
      </div>
    </div>
  </>
);

export default Introduction;
