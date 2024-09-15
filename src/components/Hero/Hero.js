import React, { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import Header from "../Header/Header";
import {
  HeroContainer,
  HeroWrapper,
  HeroLeft,
  HeroRight,
  Image,
  ScrollDown,
  ScrollLink,
} from "./HeroElements";
import { TypeAnimation } from 'react-type-animation';
import ScrollAnimation from "react-animate-on-scroll";
import Grid from '@mui/material/Unstable_Grid2';

function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  //const [showSubtitle, setShowSubtitle] = useState(false);
  const [showScrollDown, setShowScrollDown] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <main>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
          <HeroContainer>
            <HeroWrapper>
              <HeroLeft>
                <ScrollAnimation animateIn="fadeIn" >
                  <TypeAnimation
                    cursor={false}
                    sequence={[
                      'Hi, I\'m Brendan.',
                      //() => setShowSubtitle(true)
                    ]}
                    speed={{ type: "keyStrokeDelayInMs", value: 150 }}
                    wrapper="h1"
                    repeat={0}
                  />
                  {//showSubtitle &&
                    <TypeAnimation
                      cursor={true}
                      sequence={[
                        3000,
                        '',
                        700,
                        'A Full-Stack Software Developer and Student',
                        1200,
                        'An undergraduate at the University of Maryland - College Park.',
                        // 'I design and code beautifully simple things, and I love what I do.',
                        1200,
                        'A problem solver.',
                        1200,
                        'An innovative thinker.',
                        1000,
                        'A....',
                        1000,
                        'A.... cool guy?',
                        1200,
                        "You can scroll down to see my projects now...",
                        300,
                        () => setShowScrollDown(true),
                        1200,
                        "You're uh...",
                        1000,
                        "You're uh... still here?",
                        1200,
                        "Ok, this has been fun, but I'm gonna restart the loop now...",
                        // 1000,
                        // "Or...",
                        // 1000,
                        // "Or... I could scroll you by force! Muahaha!",
                        1000,
                        "See ya! :)",
                        500,
                      ]}
                      speed={50}
                      deletionSpeed={65}
                      wrapper="h5"
                      repeat={Infinity}
                    />
                  }
                  
                </ScrollAnimation>

              </HeroLeft>
            </HeroWrapper>
            {showScrollDown &&<ScrollAnimation animateIn="flipInX" offset={0}>
            <ScrollDown to="projects" id="scrollDown">
              <ScrollLink>
                Scroll down
                <img
                  src="/scroll-down.svg"
                  alt="scroll-down"
                />
              </ScrollLink>
            </ScrollDown>
            </ScrollAnimation>}
          </HeroContainer>
    </main>
  );
}

export default Hero;
