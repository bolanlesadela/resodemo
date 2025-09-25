import { check } from "../assets";
import { pricing } from "../constants";
import Button from "./Button";

const PricingList = () => {
  return (
    // <div className="flex gap-[1rem] max-lg:flex-wrap">
    //   {pricing.map((item) => (
    //     <div
    //       key={item.id}
    //       className="w-[19rem] max-lg:w-lg h-lg px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto even:py-14 odd:py-8 odd:my-4 
    //       [&>h4:nth-child(even)]:text-color-1
    //       [&>h4:last-child]:text-color-3
    //       [&>h4:first-child]:text-color-2
    // "
    //     >
    //       <h4 className="h4 mb-4">{item.title}</h4>

    //       <p className="body-2 min-h-[4rem] mb-3 text-n-1/50">
    //         {item.description}
    //       </p>

    //       <div className="flex items-center h-[5.5rem] mb-6">
    //         {item.price && (
    //           <>
    //             <div className="h3">$</div>
    //             <div className="text-[5.5rem] leading-none font-bold">
    //               {item.price}
    //             </div>
    //           </>
    //         )}
    //       </div>

    //       <Button
    //         className="w-full mb-6"
    //         href={item.price ? "/pricing" : "mailto:contact@jsmastery.pro"}
    //         white={!!item.price}
    //       >
    //         {item.price ? "Get started" : "Contact us"}
    //       </Button>

    //       <ul>
    //         {item.features.map((feature, index) => (
    //           <li
    //             key={index}
    //             className="flex items-start py-5 border-t border-n-6"
    //           >
    //             <img src={check} width={24} height={24} alt="Check" />
    //             <p className="body-2 ml-4">{feature}</p>
    //           </li>
    //         ))}
    //       </ul>
    //     </div>
    //   ))}
    // </div>


    <div className="flex gap-[1rem] max-lg:flex-wrap justify-center max-w-6xl mx-auto px-6 lg:px-12">
  {pricing.map((item) => (
    <div
      key={item.id}
      className="w-[19rem] max-lg:w-lg px-5 py-8 bg-n-8 border border-n-6 rounded-[1.5rem] lg:w-auto even:py-12 odd:py-6 odd:my-3 
        [&>h4:nth-child(even)]:text-color-1
        [&>h4:last-child]:text-color-3
        [&>h4:first-child]:text-color-2"
    >
      <h4 className="h4 mb-3">{item.title}</h4>

      <p className="body-2 min-h-[3.5rem] mb-3 text-n-1/50">
        {item.description}
      </p>

      <div className="flex items-center h-[4.5rem] mb-5">
        {item.price && (
          <>
            <div className="h4 mr-1">$</div>
            <div className="text-[4rem] leading-none font-bold">
              {item.price}
            </div>
          </>
        )}
      </div>

      <Button
        className="w-full mb-5"
        href={item.price ? "/pricing" : "mailto:contact@jsmastery.pro"}
        white={!!item.price}
      >
        {item.price ? "Get started" : "Contact us"}
      </Button>

      <ul>
        {item.features.map((feature, index) => (
          <li
            key={index}
            className="flex items-start py-3 border-t border-n-6"
          >
            <img src={check} width={20} height={20} alt="Check" />
            <p className="body-2 ml-3">{feature}</p>
          </li>
        ))}
      </ul>
    </div>
  ))}
</div>



  );
};

export default PricingList;
