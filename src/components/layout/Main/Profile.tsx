import styled from 'styled-components';
import { COLOR } from '../../../lib/color';
import { breakpoints } from '../../../lib/media';

const contactData = [
  { href: 'mailto:devain2211@gmail.com', title: 'Email', text: 'devain2211@gmail.com' },
  { href: 'tel:01096776912', title: 'Phone', text: '010-9677-6912' },
  { href: 'https://github.com/04ian80', title: 'GitHub', text: 'https://github.com/04ian80' },
  { href: 'https://velog.io/@a_in', title: 'Blog', text: 'https://velog.io/@a_in' },
];

const Profile = () => (
  <Wrapper>
    <Image src={'/image/profile.png'} alt='프로필 이미지' />
    <Contact>
      <DL>
        <div>
          {contactData.map((contact, idx) => (
            <DT key={idx}>{contact.title}</DT>
          ))}
        </div>
        <Bar />
        <div>
          {contactData.map((contact, idx) => (
            <DD key={idx}>
              <a
                href={contact.href}
                target='_blank'
                rel='noopenner noreferrer'
                className='introduction__contact--anchor'
              >
                {contact.text}
              </a>
            </DD>
          ))}
        </div>
      </DL>
    </Contact>
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;
`;
const Image = styled.img`
  width: 200px;
  height: 200px;

  @media (max-width: ${breakpoints.desktop}) {
    width: 100px;
    height: 100px;
  }
`;
const Contact = styled.div`
  display: flex;
  gap: 8px;
  font-size: 18px;

  @media (max-width: ${breakpoints.desktop}) {
    font-size: 14px;
  }
`;
const DL = styled.dl`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin: 0;
  div {
    display: flex;
    align-items: start;
    flex-direction: column;
    gap: 20px;
  }
`;
const DT = styled.dt`
  font-weight: 500;
`;
const DD = styled.dd`
  margin: 0;
  a {
    color: ${COLOR.gray950};
  }
`;
const Bar = styled.div`
  width: 1px;
  height: 130px;
  background-color: ${COLOR.gray400};
`;

export default Profile;
