import styled from 'styled-components';
import IconJavaScript from '../../svg/IconJavaScript';
import TypeScript from '../../svg/IconTypeScript';
import IconTanstackQuery from '../../svg/IconTanstackQuery';
import IconReact from '../../svg/IconReact';
import IconStyledComponents from '../../svg/IconStyledComponents';
import IconTailwindCSS from '../../svg/IconTailwindCSS';
import IconSass from '../../svg/IconSass';

import IconGitHub from '../../svg/GiHub';
import IconJira from '../../svg/IconJira';
import IconConfluence from '../../svg/IconConfluence';
import { breakpoints } from '../../../lib/media';

const Skills = () => (
  <Wrapper>
    <Title>Skills</Title>
    <Heading3>Technical Skills</Heading3>
    <Grid>
      <Badge>
        <IconJavaScript />
        JavaScript
      </Badge>
      <Badge>
        <TypeScript />
        TypeScript
      </Badge>
      <Badge>
        <IconReact />
        React
      </Badge>
      <Badge>
        <IconTanstackQuery />
        Tanstack-Query
      </Badge>
    </Grid>
    <Grid>
      <Badge>
        <IconStyledComponents /> styled-components
      </Badge>
      <Badge>
        <IconTailwindCSS /> tailwindCSS
      </Badge>
      <Badge>
        <IconSass />
        Sass
      </Badge>
    </Grid>
    <Heading3>Tools & Collaboration</Heading3>
    <Grid>
      <Badge>
        <IconGitHub color='#000' size={20} /> GitHub
      </Badge>
      <Badge>
        <IconJira /> Jira
      </Badge>
      <Badge>
        <IconConfluence />
        Confluence
      </Badge>
    </Grid>
  </Wrapper>
);

const Wrapper = styled.div`
  grid-area: skills;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 40px 56px;
  border-radius: 16px;
  opacity: 0;
  animation: fade-in 0.6s 0.2s ease forwards;
  font-size: 24px;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 20px;
    font-size: 16px;
  }
  @media (max-width: ${breakpoints.desktop}) {
    font-size: 18px;
  }

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
const Title = styled.h2`
  font-size: 1em;
`;
const Heading3 = styled.h3`
  font-size: 0.64em;
  font-weight: 600;
  margin: 0;
  @media (max-width: ${breakpoints.tablet}) {
    font-size: 14px;
  }
`;
const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  width: fit-content;
`;
const Badge = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: fit-content;
  padding: 8px;
  border-radius: 8px;
  background-color: #eee;
  font-family: D2Coding;
  font-size: 0.6em;

  @media (max-width: ${breakpoints.tablet}) {
    border-radius: 4px;
    padding: 4px;
    font-size: 12px;
  }

  svg {
    width: 12px;
    height: 12px;
  }
`;

export default Skills;
