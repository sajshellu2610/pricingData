import { useState } from "react";

const pricingData = {
  monthly: [
    {
      id: 1,
      name: "Starter",
      price: 9,
      currency: "$",
      billing: "month",
      popular: false,
      description: "Perfect for freelancers and individuals getting started.",
      features: [
        "Up to 5 Projects",
        "10 GB Storage",
        "Basic Analytics",
        "Email Support",
        "Single User Access",
      ],
      buttonText: "Start Free Trial",
    },
    {
      id: 2,
      name: "Professional",
      price: 29,
      currency: "$",
      billing: "month",
      popular: true,
      description:
        "Best for growing teams that need advanced collaboration tools.",
      features: [
        "Unlimited Projects",
        "100 GB Storage",
        "Advanced Analytics",
        "Priority Email Support",
        "Up to 10 Team Members",
        "Custom Integrations",
      ],
      buttonText: "Get Started",
    },
    {
      id: 3,
      name: "Enterprise",
      price: 99,
      currency: "$",
      billing: "month",
      popular: false,
      description: "Advanced security and scalability for large organizations.",
      features: [
        "Unlimited Projects",
        "1 TB Storage",
        "Advanced Analytics",
        "Dedicated Account Manager",
        "Unlimited Team Members",
        "Custom API Access",
        "24/7 Premium Support",
      ],
      buttonText: "Contact Sales",
    },
  ],

  yearly: [
    {
      id: 1,
      name: "Starter",
      price: 90,
      currency: "$",
      billing: "year",
      popular: false,
      description: "Perfect for freelancers and individuals getting started.",
      features: [
        "Up to 5 Projects",
        "10 GB Storage",
        "Basic Analytics",
        "Email Support",
        "Single User Access",
      ],
      buttonText: "Start Free Trial",
      savings: "Save 17%",
    },
    {
      id: 2,
      name: "Professional",
      price: 290,
      currency: "$",
      billing: "year",
      popular: true,
      description:
        "Best for growing teams that need advanced collaboration tools.",
      features: [
        "Unlimited Projects",
        "100 GB Storage",
        "Advanced Analytics",
        "Priority Email Support",
        "Up to 10 Team Members",
        "Custom Integrations",
      ],
      buttonText: "Get Started",
      savings: "Save 17%",
    },
    {
      id: 3,
      name: "Enterprise",
      price: 990,
      currency: "$",
      billing: "year",
      popular: false,
      description: "Advanced security and scalability for large organizations.",
      features: [
        "Unlimited Projects",
        "1 TB Storage",
        "Advanced Analytics",
        "Dedicated Account Manager",
        "Unlimited Team Members",
        "Custom API Access",
        "24/7 Premium Support",
      ],
      buttonText: "Contact Sales",
      savings: "Save 17%",
    },
  ],
};

function App() {

const [plan, setPlan] = useState()

  return (
    <>
      <div>
        <div>
          <p className="text-center text-sm ">LOREM IPSUM</p>
          <h1 className="text-center text-2xl">
            {" "}
            <span className="text-blue-500">Donec lacinia</span> turpis non
          </h1>
          <h1 className="text-center text-2xl">sapien lobortis pretium</h1>
        </div>

        <div className="flex text-center justify-center text-white">
          <button className="border bg-blue-600 w-30">Monthly</button>
        </div>

        <div className="flex justify-center gap-10 text-center mt-10 ">
          <div className="border w-50">
            <p>{pricingData.monthly[0].name}</p>
            <p className="text-xl mt-5">
              <span>{pricingData.monthly[0].currency}</span>
              {pricingData.monthly[0].price}/mo
            </p>
            <div className="mt-5">
              <p>3 Emails</p>
              <p>1 Database</p>
              <p>Unlimited Domains</p>
              <p>10 GB Storage</p>
            </div>

            <button className="border mt-5 text-sm w-30">SELECT PLAN</button>
            <p className="text-blue-400 mt-5">Learn more</p>
          </div>

          <div className="border w-50">
            <p>{pricingData.monthly[1].name}</p>
            <p className="text-xl mt-5">
              <span className="text-xl">{pricingData.monthly[1].currency}</span>
              {pricingData.monthly[1].price}/mo
            </p>
            <p className="mt-5">3 Emails</p>
            <p>1 Database</p>
            <p>Unlimited Domains</p>
            <p>10 GB Storage</p>
            <button className="border mt-5 text-sm w-30">SELECT PLAN</button>
            <p className="text-blue-400 mt-5">Learn more</p>
          </div>

          <div className="border w-50">
            <p>{pricingData.monthly[2].name}</p>
            <p className="text-xl mt-5">
              <span className="text-xl">{pricingData.monthly[2].currency}</span>
              {pricingData.monthly[2].price}/mo
            </p>
            <p className="mt-5">3 Emails</p>
            <p>1 Database</p>
            <p>Unlimited Domains</p>
            <p>10 GB Storage</p>
            <button className="border mt-5 text-sm w-30">SELECT PLAN</button>
            <p className="  text-blue-400 mt-5">Learn more</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
