import Link from 'next/link';
import { NavList, NavItem } from './RightNav.styles';

const RightNav = ({ open }: { open: boolean }) => {
  return (
    <NavList open={open}>
      <NavItem>
        <Link href="/garden" passHref>
          Digital Garden
        </Link>
      </NavItem>
      <NavItem>
        <Link href="/about" passHref>
          About
        </Link>
      </NavItem>
    </NavList>
  );
};

export default RightNav;
