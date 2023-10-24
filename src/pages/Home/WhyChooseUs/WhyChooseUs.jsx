import Heading from "../../../components/shared/Heading/Heading";
import UserCheckimg from "../../../assets/bx-user-check.svg";
import Card from "./Card";

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-[#FCFBFB]">
      <Heading
        title="Why Choose Us"
        description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
      />
      <div className="max-w-6xl mx-auto grid grid-cols-1 gap-6 lg:grid-cols-3 px-4 lg:px-0">
        {/* card 1 */}
        <Card
          img={UserCheckimg}
          title="Easy & Fast Booking"
          description="Completely carinate e business testing process whereas fully researched customer service. Globally extensive content with quality."
          color="#000"
        />
        <Card
          img={UserCheckimg}
          title="Many Pickup Location"
          description="Enthusiastically magnetic initiatives with cross-platform sources. Dynamically target testing procedures through effective."
          color="#127384"
        />
        <Card
          img={UserCheckimg}
          title="Customer Satisfaction"
          description="Globally user centric method interactive. Seamlessly revolutionize unique portals corporate collaboration."
          color="#FFA633"
        />
      </div>
    </section>
  );
};

export default WhyChooseUs;
