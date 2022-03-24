import Link from 'next/link';
import siteConfig from '../../../site.config';
import Burger from '../Burger';
import { Logo, LogoImage, LogoName, Nav } from './Header.styles';

const Header = () => {
  return (
    <header>
      <Nav>
        <Link href="/" passHref>
          <Logo>
            <LogoImage>🌱</LogoImage>
            <LogoName>{siteConfig.author}</LogoName>
          </Logo>
        </Link>
        <Burger />
      </Nav>
    </header>
  );
};

export default Header;
