import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const PROJECTS_TABLIST = [
  { id: 0, text: '머스트잇', link: 'musteat' },
  { id: 1, text: 'Toodos', link: 'toodos' },
  { id: 2, text: '임상실험 검색 서비스', link: 'trial' },
];

const Projects = () => {
  const [isNavClicked, setIsNavClicked] = useState(PROJECTS_TABLIST[0].id);
  return (
    <div className='projects'>
      <nav className='projects__tabnav'>
        <ul className='projects__tablist'>
          {PROJECTS_TABLIST.map(({ text, link, id }) => (
            <li
              key={id}
              onClick={() => setIsNavClicked(id)}
              className={`${isNavClicked === id && `nav-clicked`}`}
            >
              <Link to={`/projects/${link}`}>{text}</Link>
            </li>
          ))}
        </ul>
        <Outlet />
      </nav>
    </div>
  );
};
export default Projects;
