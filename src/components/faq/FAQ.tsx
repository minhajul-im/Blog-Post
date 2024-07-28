const FAQ = () => {
  return (
    <section id="faq">
      <div className="bg-BG-main">
        <h1 className="text-white text-2xl font-bold text-center">
          Our Services
        </h1>
        <div className="w-[800px] border-2 border-TX-dark rounded-md bg-BG-soft h-[1200px] flex justify-center items-center mx-auto">
          <div className="col-span-6 flex flex-col items-start gap-4">
            <h1 className="text-primary font-bold text-4xl">
              Woodside Creek Paradise
            </h1>
            <p className="flex-1">
              Your own piece of paradise awaits you. Nestled among oak trees,
              this home is tucked away on nearly half an acre overlooking a
              seasonal creek at the end of a quiet cul-de-sac with access to
              trails. This move-in ready sunny home features abundant natural
              light and forest views from every room. Highlights include
              hardwood floors, an updated kitchen with stainless steel
              appliances, dedicated off-street parking, and sunny spaces for
              flower/vegetable gardens.
            </p>
            <div className="flex gap-4">
              <button className="bg-primary hover:bg-secondary text-tBase font-medium px-6 py-2 rounded-md">
                Buy now
              </button>
              <button className="bg-bgPrimary border-secondary border-2 hover:border-primary font-medium px-6 py-2 rounded-md">
                Explore
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
