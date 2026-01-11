import { FOOTBALL_FIELDS_DATA } from '@/constants/mock/football-fields-data';

import Header from '@/components/global/header';
import AppBreadcrumb from '@/components/global/app-breadcrumb';

import FieldMap from '@/components/posts/field-map';
import FieldInfo from '@/components/posts/field-info';
import FieldDetails from '@/components/posts/field-details';
import FieldReviews from '@/components/posts/field-reviews';
import FieldOwnerInfo from '@/components/posts/field-owner-info';
import LatestPostsCarousel from '@/components/home/latest-post-carousel';

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;

  return (
    <div className="bg-muted">
      {/* Header with dark mode */}
      <Header mode="dark" />

      {/* Breadcrumb section */}
      <div className="py-2 bg-white">
        <div className="w-full max-w-360 pt-16 px-6 mx-auto">
          {/* AppBreadcrumb component with navigation items */}
          <AppBreadcrumb
            items={[
              { label: 'Trang chủ', href: '/' }, // Home
              { label: 'Sân đá banh', href: '/football' }, // Football fields
              { label: slug }, // Current field name
            ]}
          />
        </div>
      </div>

      <div className="py-6 space-y-6">
        {/* Main content area */}
        <div className="max-w-360 mx-auto flex flex-col xl:flex-row gap-6">
          {/* Left column: Field info, details, and map */}
          <div className="w-full xl:w-[60%] space-y-6">
            <FieldInfo /> {/* Basic field info */}
            <FieldDetails /> {/* Additional details about the field */}
            <FieldMap /> {/* Map showing field location */}
          </div>

          {/* Right column: Sticky sidebar with owner info and reviews */}
          <div className="flex-1 space-y-6 sticky top-22 h-full">
            <FieldOwnerInfo /> {/* Owner contact info, quick chat, booking */}
            <FieldReviews /> {/* Reviews and comments for the field */}
          </div>
        </div>

        <LatestPostsCarousel title="Sân bóng đá" posts={FOOTBALL_FIELDS_DATA} />
      </div>
    </div>
  );
};

export default Page;
