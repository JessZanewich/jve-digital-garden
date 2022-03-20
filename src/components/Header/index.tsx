import Link from 'next/link';
import siteConfig from '../../../site.config';
import { Logo, LogoImage, LogoName, Nav, NavList, NavItem } from './styles';

const Header = () => {
  return (
    <header className="py-2">
      <Nav>
        <Link href="/" passHref>
          <Logo>
            <LogoImage>🌱</LogoImage>
            <LogoName>{siteConfig.author}</LogoName>
          </Logo>
        </Link>
        <NavList>
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
      </Nav>
    </header>
  );
};

export default Header;
