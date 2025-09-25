import Section from "./Section";
import Heading from "./Heading";
import PricingList from "./PricingList";

const Pricing = () => {
  return (
    <Section className="overflow-hidden" id="pricing">
      <div className="container relative z-2">
        <Heading
          tag="Get started with Resobridge"
          title="Pay once, use forever"
        />

        <div className="relative">
          <PricingList />
        </div>

        <div className="flex justify-center mt-10">
          <a
            className="text-xs font-code font-bold tracking-wider uppercase border-b"
            href="/pricing"
          >
            See the full details
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Pricing;
