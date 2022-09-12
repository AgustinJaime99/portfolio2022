import styled from 'styled-components';
export const SvgStyled = styled.svg`
  transition: all ease-in-out 0.2s;
  cursor: ${(props) => (props.box ? 'initial' : 'pointer')};
  position: ${(props) => props.box && 'absolute'};
  left: ${(props) => props.box && '10em'};
  top: ${(props) => props.box && '0em'};
  &.selected {
    filter: drop-shadow(-4px 4px 0px #62aee4);
  }

  &:hover {
    filter: ${(props) => (props.box ? 'none' : 'drop-shadow(-4px 4px 0px #62aee4)')};
  }
`;
