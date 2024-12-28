import styled from 'styled-components';
import { COLOR } from '../../../lib/color';
import { breakpoints } from '../../../lib/media';
// import { AiFillGithub } from 'react-icons/ai';

const contactData = [
  { href: 'mailto:devain2211@gmail.com', title: 'Email', text: 'devain2211@gmail.com', icon: '📧' },
  { href: 'tel:01096776912', title: 'Phone', text: '010-9677-6912', icon: '📞' },
  {
    href: 'https://github.com/04ian80',
    title: 'GitHub',
    text: 'https://github.com/04ian80',
    icon: '👩🏻‍💻',
    // icon: <AiFillGithub width={40} height={40} />,
  },
  { href: 'https://velog.io/@a_in', title: 'Blog', text: 'https://velog.io/@a_in', icon: '🖋️' },
];

const Profile = () => (
  <Wrapper>
    <ImageBG>
      <Image src={'/image/profile.png'} alt='프로필 이미지' />
    </ImageBG>
    <Contact>
      {/* <Bar /> */}
      {/* <div> */}
      {contactData.map((contact, idx) => (
        // <DD key={idx}>
        <Link
          key={idx}
          href={contact.href}
          target='_blank'
          rel='noopenner noreferrer'
          className='introduction__contact--anchor '
        >
          <p>{contact.icon}</p>
          <p>{contact.title}</p>
        </Link>
        // </DD>
      ))}
      {/* </div> */}
      {/* <DL>
      </DL> */}
    </Contact>
  </Wrapper>
);

const Wrapper = styled.div`
  grid-area: profile;
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
  justify-content: space-between;
  gap: 8px;
  width: 100%;
  padding: 12px;
  max-width: 300px;
`;

const Link = styled.a`
  margin: 0;
  color: ${COLOR.gray950};
  text-decoration: none;
  text-align: center;

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
  }
  p:last-child {
    font-size: 0.8em;
    color: ${COLOR.gray700};
  }
`;

export default Profile;
