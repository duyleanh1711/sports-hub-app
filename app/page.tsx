import { TENNIS_FIELDS_DATA } from '@/constants/mock/tennis-fields-data';
import { FOOTBALL_FIELDS_DATA } from '@/constants/mock/football-fields-data';
import { BADMINTON_FIELDS_DATA } from '@/constants/mock/badminton-fields-data';
import { PICKLEBALL_FIELDS_DATA } from '@/constants/mock/pickleball-fields-data';
import { VOLLEYBALL_FIELDS_DATA } from '@/constants/mock/volleyball-fields-data';
import { TABLE_TENNIS_FIELDS_DATA } from '@/constants/mock/table-tennis-fields-data';

import Hero from '@/components/home/hero';
import Stats from '@/components/home/stats';
import Footer from '@/components/global/footer';
import SportsFieldSearch from '@/components/home/sports-field-search';
import LatestPostsCarousel from '@/components/home/latest-post-carousel';

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <SportsFieldSearch />
      <div className="py-6">
        <LatestPostsCarousel title="Sân bóng đá" posts={FOOTBALL_FIELDS_DATA} />
        <LatestPostsCarousel
          title="Sân cầu lông"
          posts={BADMINTON_FIELDS_DATA}
        />
        <LatestPostsCarousel title="Sân tennis" posts={TENNIS_FIELDS_DATA} />
        <LatestPostsCarousel
          title="Sân pickeball"
          posts={PICKLEBALL_FIELDS_DATA}
        />
        <LatestPostsCarousel
          title="Sân bóng chuyền"
          posts={VOLLEYBALL_FIELDS_DATA}
        />
        <LatestPostsCarousel
          title="Sân bóng bàn"
          posts={TABLE_TENNIS_FIELDS_DATA}
        />
      </div>
      <Stats />
      <Footer />
    </main>
  );
}
