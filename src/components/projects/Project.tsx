import { useParams } from 'react-router-dom';

import type { ProjectDataType } from '../../lib/data';
import { projectData } from '../../lib/data';
import Contents from '../common/Contents';
import Icon from '../common/Icon';
import Tag from '../common/Tag';

const Tags = ({ tags, color }: { tags: string[]; color: string }) => (
  <>
    {tags.map((tag, idx) => (
      <Tag key={idx} tagName={tag} color={color} />
    ))}
  </>
);

const Project = () => {
  const params = useParams();
  const data = projectData.find(data => data.name === params.id);
  const { name, tags, time, description, skills, team, career, link } = data as ProjectDataType;

  return (
    <section className='project'>
      <article className='project__inner'>
        <img
          src={`/image/${name}-img.png`}
          alt='프로젝트 스크린샷'
          className='project-image'
          width={380}
          height={280}
        />
        <div className='project--detail'>
          <Tags tags={tags} color={'pink'} />
          <time>{time}</time>
          <a href={link} target='_blank' rel='noopenner noreferrer' className='project__link-icon'>
            <Icon icon='github' size={20} color='#181717' />
          </a>
        </div>
        <small className='project-description'>{description}</small>

        <div className='project-skills'>
          <Tags tags={skills} color={'gray'} />
        </div>

        <Contents title={'팀원 구성 / 담당 역할'} children={team} />
        <Contents title={'주요 성과'}>
          {career.map((c, idx) => (
            <div key={idx} className='project-career'>
              <strong>{c.subtitle}</strong>
              <br />
              <ul>
                {c.subcontent.map((content, idx) => (
                  <li key={idx}>{content}</li>
                ))}
              </ul>
            </div>
          ))}
        </Contents>
      </article>
    </section>
  );
};

export default Project;
