import { useState } from 'react';
import styled from 'styled-components';
import CssIcon from '../../public/icons/CssIcon';
import GraphQLIcon from '../../public/icons/GraphQLIcon';
import HtmlIcon from '../../public/icons/HtmlIcon';
import JavascriptIcon from '../../public/icons/Javascript';
import NextIcon from '../../public/icons/NextIcon';
import ReactIcon from '../../public/icons/React';
import ReduxIcon from '../../public/icons/ReduxIcon';
import StyledComponentsIcon from '../../public/icons/StyledCompIcon';
import TextSkills from './TextSkills';

const Skills = ({ text }) => {
  const [selected, setSelected] = useState(1);

  const handleSelect = (id) => {
    setSelected(id);
  };

  return (
    <Container>
      <ContainerIcons>
        <JavascriptIcon onClick={(e) => handleSelect(1)} selected={selected === 1} />
        <ReactIcon onClick={(e) => handleSelect(2)} selected={selected === 2} />
        <NextIcon onClick={(e) => handleSelect(3)} selected={selected === 3} />
        <GraphQLIcon onClick={(e) => handleSelect(4)} selected={selected === 4} />
        <StyledComponentsIcon onClick={(e) => handleSelect(5)} selected={selected === 5} />
        <HtmlIcon onClick={(e) => handleSelect(6)} selected={selected === 6} />
        <CssIcon onClick={(e) => handleSelect(7)} selected={selected === 7} />
        <ReduxIcon onClick={(e) => handleSelect(8)} selected={selected === 8} />
      </ContainerIcons>
      <ContainerInfo>
        <TextSkills selected={selected} text={text} />
      </ContainerInfo>
    </Container>
  );
};

export default Skills;

const Container = styled.div`
  display: flex;
  gap: 5em;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ContainerInfo = styled.div`
  overflow: hidden;
  padding: 3em;
  background-color: #e1e2dc;
  min-width: 500px;
  max-width: 500px;
  height: 300px;
  border-radius: 12px;
  filter: drop-shadow(-6px 6px 0px #217dc0);
  position: relative;

  @media (max-width: 768px) {
    overflow-y: scroll;
    margin: 0 1em;
    padding: 1.5em;
    height: auto;
    min-height: 250px;
    width: auto;
    min-width: 292px;
  }
`;

const ContainerIcons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2em;
  max-width: 700px;
  justify-content: center;
  @media (max-width: 768px) {
    margin: 0 2em;
  }
`;
