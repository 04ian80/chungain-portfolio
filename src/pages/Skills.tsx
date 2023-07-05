import Icon from '../components/common/Icon';
import SkillBox from '../components/common/SkillBox';

const ICON_SIZE = 50;

const icons = [
  [
    { icon: <Icon size={ICON_SIZE} icon='html' color='#E34F26' />, name: 'html' },
    { icon: <Icon size={ICON_SIZE} icon='css' color='#1572B6' />, name: 'css' },
    { icon: <Icon size={ICON_SIZE} icon='javascript' color='#F7DF1E' />, name: 'javascript' },
    { icon: <Icon size={ICON_SIZE} icon='typescript' color='#3178C6' />, name: 'typescript' },
  ],
  [
    { icon: <Icon size={ICON_SIZE} icon='react' color='#61DAFB' />, name: 'react' },
    { icon: <Icon size={ICON_SIZE} icon='nextjs' color='#000000' />, name: 'nextjs' },
  ],
  [
    { icon: <Icon size={ICON_SIZE} icon='tailwindcss' color='#06B6D4' />, name: 'tailwindcsss' },
    { icon: <Icon size={ICON_SIZE} icon='sass' color='#CC6699' />, name: 'sass' },
    {
      icon: <Icon size={ICON_SIZE} icon='styledComponents' color='#DB7093' />,
      name: 'style-components',
    },
  ],
  [
    { icon: <Icon size={ICON_SIZE} icon='figma' color='#F24E1E' />, name: 'figma' },
    { icon: <Icon size={ICON_SIZE} icon='github' color='#181717' />, name: 'github' },
  ],
];

const Skills = () => (
  <main className='skills'>
    <SkillBox icons={icons[0]} lang='BaseSkill' />
    <SkillBox icons={icons[1]} lang='Library & Framework' />
    <SkillBox icons={icons[2]} lang='CSS Tools' />
    <SkillBox icons={icons[3]} lang='Communication Tool' />
  </main>
);

export default Skills;
