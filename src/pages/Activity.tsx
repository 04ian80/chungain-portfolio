import Contents from '../components/common/Contents';

const TASK_LINKS = [
  { link: 'https://github.com/pre-onboarding-team10/pre-onboarding-10th-1-10', name: '1차과제' },
  { link: 'https://github.com/pre-onboarding-team10/pre-onboarding-10th-2-10', name: '2차과제' },
  { link: 'https://github.com/pre-onboarding-team10/pre-onboarding-10th-4-10', name: '3차과제' },
];

const ACTIVITY_TITLE = '원티드 프리온보딩 프론트엔드 인턴십 10차';
const ACTIVITY_DESCRIPTION =
  '동료들과 함께 다양한 기술 과제를 4주 동안 수행하며, 협업 역량과 기술 과제 해결 역량을 키우는 교육형 인턴십 프로젝트입니다.';
const CONTENT_TITLE = '교육내용';
const CONTENT_ARTICLE = (
  <ul>
    <li>4주 동안 총 24시간의 강의 세션 수강 및 3개의 기업과제 수행하였습니다.</li>
    <li>
      300명의 지원자 중 <strong>우수 교육생 최종 10인</strong>으로 선정되었습니다.
    </li>
    <li>
      프론트엔드 팀원 9명과 기술 과제를 수행하며 PR 및 코드 리뷰, Merge 등 Git 관리를 통한
      <strong>동료학습을 경험</strong>하였습니다.
    </li>
    <li>
      ESLint 와 Prettier를 Git Hooks인 husky로 <strong>자동화 구축에 대한 학습 및 실습</strong>
      하였습니다.
    </li>
    <li>
      TypeScript, React Custom Hook 등 <strong>JavaScript와 React에 대한 심층 학습</strong>을
      진행하였습니다.
    </li>
    <li>
      기술 과제마다 구현내용을 바탕으로 문서를 작성하는 과정을 통해 <strong>문서화의 중요성</strong>
      을 깨달았습니다.
    </li>
  </ul>
);

const Activity = () => (
  <main className='activity'>
    <div className='activity--inner'>
      <div className='activity__title--container'>
        <h2>{ACTIVITY_TITLE}</h2>
        <ul className='activity__links--list'>
          {TASK_LINKS.map(({ link, name }, idx) => (
            <li key={idx} className='activity__links--item'>
              <a href={link} target='_blank' rel='noopenner noreferrer'>
                {name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <small className='activity__description'>{ACTIVITY_DESCRIPTION}</small>
      <time className='activity__time'>2023.04 ~ 2023.05</time>
      <Contents title={CONTENT_TITLE}>{CONTENT_ARTICLE}</Contents>
    </div>
  </main>
);

export default Activity;
