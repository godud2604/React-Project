import React from 'react';
// components
import { MainLayout } from '../../../components/layout/front';
import { Scroll, Point } from '../../../components/pages/home/member';
import SwiperSection from '../../../components/pages/home/member/SwiperSection';
// css
import { Container, MainSection } from '../../../styles/home/member';
// images

const Member = () => {

  return (
    <MainLayout 
      headerBack 
      backTitle="회원혜택" 
      
      navBottom
      navPath="/member"
      navcolor="#E83F6F"
    >
      <Container>
        <MainSection>
          <Point />
          <SwiperSection />
        </MainSection>

        <Scroll />
      </Container>
      
    </MainLayout>
  );
};

export default Member;