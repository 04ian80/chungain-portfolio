import SubContent from '../components/common/SubContent';

const contactData = [
  { href: 'mailto:devain2211@gmail.com', text: 'Email: devain2211@gmail.com' },
  { href: 'tel:01096776912', text: 'Phone: 010-9677-6912' },
  { href: 'https://github.com/04ian80', text: 'GitHub: https://github.com/04ian80' },
  { href: 'https://velog.io/@a_in', text: 'Blog: https://velog.io/@a_in' },
];
const INTRODUCTION_TITLE = '끊임없는 발전을 추구하는 종아인입니다';
const INTRODUCTION_DESCRIPTION =
  '아래의 주제들을 클릭하여 “프론트엔드 개발자 종아인” 대해 더 자세히 알아보세요!';

const Introduction = () => (
  <main className='introduction'>
    <h2 className='introduction__heading'>{INTRODUCTION_TITLE}</h2>
    <section>
      <img
        className='introduction__img'
        src='/image/profile.png'
        alt='프로필 사진'
        width={200}
        height={200}
      />
      <article className='introduction__contact'>
        {contactData.map(({ href, text }) => (
          <a href={href} target='_blank' rel='noopenner noreferrer'>
            {text}
          </a>
        ))}
      </article>
    </section>

    <div className='introduction__tab-bar--container'>
      <small>{INTRODUCTION_DESCRIPTION}</small>
      <div className='introduction__tab-bar'>
        <SubContent />
      </div>
    </div>
  </main>
);

export default Introduction;
