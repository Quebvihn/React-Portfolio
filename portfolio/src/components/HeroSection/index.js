import React from 'react';
import styled from 'styled-components';

const HeroContainer = styled.div`
    background-color: ${({ theme }) => theme.card_light};
    display: flex;
    justify-content: center;
    position: relative;
    padding: 80px 30px;

const Hero = () => {
    return (
        <div id='about'>
        <HeroContainer>
            <HeroBg></HeroBg>
            <HeroInnerContainer>
                <HeroLeftContainer></HeroLeftContainer>
                <HeroRightContainer></HeroRightContainer>
            </HeroInnerContainer>   
        </HeroContainer>
        </div>
    );
    }

export default Hero;