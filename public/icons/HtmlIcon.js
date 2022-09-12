import { SvgStyled } from '../../components/common/SVGStyled';

const HtmlIcon = (props) => (
  <SvgStyled
    xmlns='http://www.w3.org/2000/svg'
    width={props.width ? props.width : '6em'}
    height={props.height ? props.height : '6em'}
    viewBox='0 0 24 24'
    box={props.box}
    {...props}
    className={props.selected ? 'selected' : ''}
  >
    <g fill='none'>
      <g fill={props.color ? props.color : '#e1e2dc'} clipPath='url(#a)'>
        <path d='M5.08 0h1.082v1.069h.99V0h1.082v3.236H7.152V2.153h-.99v1.083H5.081V0Zm4.576 1.073h-.952V0h2.987v1.073h-.953v2.163H9.656V1.073ZM12.165 0h1.128l.694 1.137L14.68 0h1.128v3.236h-1.077V1.632l-.744 1.151h-.019l-.745-1.15v1.603h-1.058V0Zm4.181 0h1.083v2.167h1.52v1.07h-2.603V0Z' />
        <path
          fillRule='evenodd'
          d='M5.046 22.072 3 4.717h18L18.953 22.07 11.99 24l-6.944-1.928Zm4.137-9.5-.194-2.18h8.145l.19-2.128H6.664l.574 6.437h7.377l-.247 2.76-2.374.642h-.002l-2.37-.64-.152-1.697H7.332l.298 3.342 4.36 1.21 4.367-1.21.532-5.964.052-.571H9.183Z'
          clipRule='evenodd'
        />
      </g>
      <defs>
        <clipPath id='a'>
          <path fill='#fff' d='M0 0h24v24H0z' />
        </clipPath>
      </defs>
    </g>
  </SvgStyled>
);

export default HtmlIcon;
