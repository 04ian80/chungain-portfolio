import type { iconName } from '../../lib/constants';
import { IconSet } from '../../lib/constants';

interface IconProps {
  icon: iconName;
  size: number;
  color?: string;
}

const Icon = ({ icon, size = 24, color = 'currentColor' }: IconProps) => (
  <svg
    height={size}
    viewBox={IconSet[icon].viewBox}
    fill={color}
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d={IconSet[icon].path} />
  </svg>
);
export default Icon;
