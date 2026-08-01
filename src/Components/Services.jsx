import Card from "./Card";

export const Services = () => {
  return (
    <div id="services" className="h-screen bg-slate-50 flex-center">
      <section className="mx-auto w-[90%] max-w-8xl h-[80%] flex flex-col justify-center items-center gap-32">
        <h1 className="text-6xl text-main">الخدمات</h1>
        <div className="w-[90%] flex flex-col gap-4 lg:justify-between lg:flex-row">
          <Card />
          <Card />
          <Card />
        </div>
      </section>
    </div>
  );
};
