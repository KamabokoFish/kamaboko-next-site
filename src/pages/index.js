/** @jsxImportSource @emotion/react */

import Layout from '@/components/layouts/main';
import { VantaRender } from '@/components/vantaNetwork';
import ProfileSection from '@/components/profileSection';
import LinkSection from '@/components/linkSection';
import ContactSection from '@/components/contactSection';

const Home = () => {
  return (
    <Layout>
      <VantaRender />
      <ProfileSection />
      <LinkSection />
      <ContactSection />
    </Layout>
  );
};

export default Home;
