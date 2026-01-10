import { STATS } from '@/constants/stats';

const Stats = () => {
  return (
    <section className="py-12 md:py-20">
      <div className="mx-auto max-w-5xl space-y-10 px-6 md:space-y-16">
        {/* Heading */}
        <div className="relative z-10 mx-auto max-w-4xl space-y-6 text-center">
          <h2 className="text-4xl font-bold tracking-tight lg:text-5xl">
            Kết nối đam mê thể thao
            <br className="hidden sm:block" />
            <span className="text-primary"> qua những con số</span>
          </h2>
          <p className="text-muted-foreground text-base">
            <span className="text-black font-bold">SportsHub</span> giúp hàng
            nghìn người chơi tìm sân nhanh hơn, đặt lịch dễ hơn và chơi thể thao
            nhiều hơn mỗi ngày.
          </p>
        </div>

        {/* Stats */}
        <div className="grid gap-12 divide-y text-center md:grid-cols-3 md:gap-2 md:divide-x md:divide-y-0">
          {STATS.map((stat, index) => (
            <div key={index} className="space-y-3">
              <div className="text-5xl font-extrabold text-foreground">
                {stat.value}
              </div>
              <p className="text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
