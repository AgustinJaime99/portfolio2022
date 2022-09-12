import { SvgStyled } from '../../components/common/SVGStyled';

const GraphQLIcon = (props) => (
  <SvgStyled
    className={props.selected ? 'selected' : ''}
    xmlns='http://www.w3.org/2000/svg'
    width={props.width ? props.width : '6em'}
    height={props.height ? props.height : '6em'}
    viewBox='0 0 24 24'
    box={props.box}
    {...props}
  >
    <g fill='none'>
      <g clipPath='url(#a)'>
        <path
          fill={props.color ? props.color : '#e1e2dc'}
          fillRule='evenodd'
          d='M11.384 4.187a2.132 2.132 0 0 0 1.171.018l6.326 11.182a2.126 2.126 0 0 0-.593 1.038H5.71a2.148 2.148 0 0 0-.64-1.079l6.313-11.159Zm-.921-.565c.018.02.038.039.057.058L4.193 14.865a2.11 2.11 0 0 0-.09-.022V9.156A2.122 2.122 0 0 0 5.481 8.14a2.142 2.142 0 0 0 .19-1.694l4.792-2.823Zm3.57-.835a2.134 2.134 0 1 0-4.079-.04L5.159 5.573A2.131 2.131 0 0 0 1.785 6a2.146 2.146 0 0 0 1.322 3.143v5.715A2.147 2.147 0 0 0 1.79 18a2.13 2.13 0 0 0 3.368.43l4.795 2.826a2.151 2.151 0 0 0-.086.605A2.134 2.134 0 0 0 12 24a2.138 2.138 0 0 0 2.012-2.848l4.751-2.8a2.128 2.128 0 0 0 3.44-.352 2.138 2.138 0 0 0-1.384-3.159v-5.68A2.147 2.147 0 0 0 22.215 6a2.133 2.133 0 0 0-3.401-.398l-4.78-2.816Zm-.599.937.075-.072 4.808 2.833a2.142 2.142 0 0 0 .203 1.654 2.12 2.12 0 0 0 1.303 1v5.72a2.074 2.074 0 0 0-.078.023L13.434 3.724Zm4.895 13.858-4.774 2.814a2.124 2.124 0 0 0-1.554-.674c-.606 0-1.152.252-1.54.658l-4.785-2.82c.012-.039.023-.078.032-.118H18.29c.012.047.025.094.04.14Z'
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

export default GraphQLIcon;