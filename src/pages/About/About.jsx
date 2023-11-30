const About = () => {
  document.title = "Dreams Rent | About";

  return (
    <section>
      {/* <!-- Container --> */}
      <div className="mx-auto w-full max-w-7xl px-5 py-12 md:px-10 md:py-16 lg:py-20">
        {/* <!-- Component --> */}
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-10">
          {/* <!-- Content --> */}

          {/* <!-- Image --> */}
          <div className="w-full rounded-md   lg:w-2/5">
            <img
              src="https://images.unsplash.com/photo-1616804087352-0d82fc0c37bf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <div className="flex flex-col gap-8 lg:w-3/5">
            <div>
              <h2 className="mb-2 text-lg text-color-pest font-semibold md:text-lg">
                ABOUT OUR COMPANY
              </h2>
              <h1 className="text-3xl text-color-black-1 font-semibold">
                Best Solution For Cleaning Services
              </h1>
            </div>
            <p className="text-sm sm:text-base text-color-gray">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Proin
              fermentum leo vel orci. Dui faucibus in ornare quam viverra orci
              sagittis eu. Viverra nam libero justo laoreet sit amet. Vulputate
              odio ut enim blandit volutpat maecenas volutpat blandit. A lacus
              vestibulum sed arcu non odio euismod. Feugiat pretium nibh ipsum
              consequat. Cum sociis natoque penatibus et. Leo in vitae turpis
              massa sed. Neque aliquam vestibulum morbi blandit cursus.
              Facilisis sed odio morbi quis. A pellentesque sit amet porttitor
              eget.
            </p>
            <a
              href="#"
              className="w-36 rounded-md bg-black px-6 py-3 text-center font-semibold text-white"
            >
              Learn More
            </a>
            {/* <!-- Divider --> */}

            {/* <!-- Testimonials --> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
