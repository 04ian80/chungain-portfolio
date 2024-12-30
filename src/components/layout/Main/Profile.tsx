import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { COLOR } from '../../../lib/color';
import { breakpoints } from '../../../lib/media';

const contactData = [
  { href: 'mailto:devain0804@naver.com', title: 'Email', text: 'devain0804@naver.com', icon: '📧' },
  { href: 'tel:01096776912', title: 'Phone', text: '010-9677-6912', icon: '📞' },
  {
    href: 'https://github.com/04ian80',
    title: 'GitHub',
    text: 'https://github.com/04ian80',
    icon: '👩🏻‍💻',
  },
  { href: 'https://velog.io/@a_in', title: 'Blog', text: 'https://velog.io/@a_in', icon: '🖋️' },
];

const Profile = () => {
  const [alertInfo, setAlertInfo] = useState(false);

  useEffect(() => {
    if (alertInfo) {
      const timer = setTimeout(() => {
        setAlertInfo(false);
        return () => clearTimeout(timer);
      }, 3000);
    }
  }, [alertInfo]);

  const renderAlert = () => {
    return alertInfo && <Toast>복사되었습니다!</Toast>;
  };

  const handleCopyClipBoard = () => {
    const $textarea = document.createElement('textarea'); // 임시요소 생성해서 부착하고
    document.body.appendChild($textarea);
    $textarea.value = 'devain0804@naver.com';
    $textarea.select();
    document.execCommand('copy');
    document.body.removeChild($textarea);
    setAlertInfo(true);
  };

  return (
    <Wrapper>
      <ImageBG>
        <Image src={'/image/profile.png'} alt='프로필 이미지' />
      </ImageBG>
      <Contact>
        {/* <Link href='mailto:devain0804@naver.com' onClick={handleCopyClipBoard}>
          <p>📧</p>
          <p>Email</p>
        </Link> */}
        {contactData.map((contact, idx) => (
          <Link
            key={idx}
            href={contact.href}
            target='_blank'
            rel='noopenner noreferrer'
            className='introduction__contact--anchor '
          >
            <div>
              <p>{contact.icon}</p>
              <p>{contact.title}</p>
            </div>
            <p>{contact.text}</p>
          </Link>
        ))}
      </Contact>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 28px;
  border-bottom: 1px solid ${COLOR.gray200};
  padding: 28px;
  font-size: 18px;
  @media (max-width: ${breakpoints.xwide}) {
    border-bottom: none;
  }

  animation: fade-in 0.6s ease;
  @keyframes fade-in {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
`;
const ImageBG = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  width: 210px;
  height: 210px;
  background-color: ${COLOR.gray100};
  border-radius: 105px;
  transition: box-shadow 0.2s ease, transform 0.2s ease;
  box-shadow: 0px 5px 15px -2px rgba(0, 0, 0, 0.3);
  @media (max-width: ${breakpoints.tablet}) {
    width: 150px;
    height: 150px;
  }
`;
const Image = styled.img`
  width: 200px;
  height: 200px;
  transition: transform 0.2s ease;
  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 140px;
    height: 140px;
  }
`;
const Contact = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 8px;
  width: fit-content;
  padding: 12px;
  max-width: 300px;
`;

const Link = styled.a`
  position: relative;
  margin: 0;
  color: ${COLOR.gray950};
  text-decoration: none;
  text-align: center;
  display: flex;
  align-items: center;
  gap: 12px;

  &:hover {
    p:first-child {
      transition: transform 0.2s ease;
      transform: scale(1.1);
    }
    p:last-child {
      transition: color 0.2s ease;
      color: ${COLOR.gray900};
    }
  }

  p:first-child {
    font-family: Tossface;
    font-size: 1.4em;
    will-change: transform;
    min-width: 50px;
  }
  p:last-child {
    font-size: 0.8em;
    color: ${COLOR.gray700};
  }
`;
const Toast = styled.div`
  position: absolute;
  top: 60px;
  left: -20%;
  white-space: nowrap;
  transform: translateY(0px);
  padding: 4px 8px;
  border-radius: 16px;
  background-color: ${COLOR.primary}80;
  color: ${COLOR.gray900};
  font-weight: 700;
  /* letter-spacing: 1px; */
  animation: fade-in 0.3s ease-in-out, fade-out 0.3s 2s ease-in-out forwards;

  @keyframes fade-in {
    0% {
      opacity: 0;
      transform: translateY(10px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }

  @keyframes fade-out {
    0% {
      opacity: 1;
      transform: translateY(0px);
    }
    100% {
      opacity: 0;
      transform: translateY(10px);
    }
  }
`;

export default Profile;
