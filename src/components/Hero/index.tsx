import {
  HeroContainer,
  HeroContent,
  HeroContentText,
  HeroTitle,
  HeroTitleText,
  HeroSubTitle,
  HeroText,
} from './Hero.styles';

const Hero = () => {
  return (
    <div>
      {/* <Image
        alt="Hero Image - Typewriter"
        src="/hero.jpeg"
        layout="fill"
        objectFit="cover"
        priority
        quality={100}
      /> */}
      <HeroContainer>
        <HeroContent>
          <HeroContentText>
            <HeroTitle>
              <HeroTitleText>
                Let's Talk Productivity, Business, and Systems
              </HeroTitleText>
            </HeroTitle>
            <HeroSubTitle>Be Your Most Effective Self</HeroSubTitle>
            <HeroText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              bibendum tincidunt dolor a cursus. Cras posuere, libero non rutrum
              pretium, lacus risus tempor nibh, nec placerat enim velit non
              dolor.
            </HeroText>
          </HeroContentText>
        </HeroContent>
      </HeroContainer>
    </div>
  );
};

export default Hero;
