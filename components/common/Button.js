import styled from 'styled-components';

const Button = ({ children, href, shadowColor, primaryColor, secondaryColor, colorText, width = '140px', margin, backgroundHover, height }) => {
  return (
    <Btn
      href={href}
      target='blank'
      width={width}
      height={height}
      className='link'
      colorText={colorText}
      shadowColor={shadowColor}
      primaryColor={primaryColor}
      secondaryColor={secondaryColor}
      margin={margin}
      backgroundHover={backgroundHover}
    >
      <button className='button'>
        <span>{children}</span>
      </button>
    </Btn>
  );
};

export default Button;

const Btn = styled.a`
  text-decoration: none;
  display: inline-block;

  .button {
    margin: ${(props) => props.margin};
    border: 1px solid;
    border-color: ${(props) => props.colorText};
    max-width: ${(props) => props.width};
    display: flex;
    height: ${(props) => props.height};
    background-color: transparent;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-radius: 6px;
    width: ${(props) => props.width};
    text-align: center;
    align-self: center;
    color: ${(props) => props.colorText};
    transition: all ease-in 0.1s;
    box-shadow: ${(props) => (props.shadowColor ? props.shadowColor : 'var(--secondaryColor1)')} -5px 5px 0px 2px;
    font-weight: 600;

    span {
      color: ${(props) => props.colorText + '40'};
      transition: all ease-in 0.1s;
      z-index: 100;
      text-shadow: -5px 5px 0px transparent;
      p {
        font-size: 1.8rem;
      }
    }

    &:hover {
      z-index: 99;
      background-color: ${(props) => (props.backgroundHover ? props.backgroundHover : 'transparent')};
      box-shadow: ${(props) => (props.primaryColor ? props.primaryColor : 'var(--secondaryColor2)')} 0px 0px 0px 0px;
      border: ${(props) => (props.secondaryColor ? props.secondaryColor : 'var(--secondaryColor3)')} 1px solid;
      color: ${(props) => (props.secondaryColor ? props.secondaryColor : 'var(--secondaryColor3)')};
      span {
        color: ${(props) => props.secondaryColor};
        text-shadow: ${(props) => (props.secondaryColor ? props.secondaryColor : 'var(--secondaryColor3)')} 0px 0px 0px 0px;
      }
    }
  }
`;
