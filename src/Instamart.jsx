import { useState } from "react";

const data = [
  {
    name: "Dana White(As a Man)",
    moto: "Nothing comes easy. Success doesn't just drop on your lap. You have to go out and fight for it every day.",
  },
  {
    name: "Dana White(As a UFC President)",
    moto: "When you talk about somebody being your world champion, you couldn't ask for a better human being than Daniel Cormier.",
  },
  {
    name: "Dana White(As a Father)",
    moto: "I swear to God, if my kids, when they're 18, if they come to me and say, 'Dad, I love pumping gas. I love getting up in the morning, I love grabbing the handle, I love the smell of the gas station,' I'd say, 'Go for it,' because if you love it that much at 18, he's probably going to end up owning 25 gas stations by the time he's 30.",
  },
];

const AccordianItem = ({ name, moto, openIndex, setOpenIndex }) => {
  return (
    <div className="mb-5 font-bold text-white">
      <div
        className="flex justify-between cursor-pointer"
        onClick={() => setOpenIndex(!openIndex)}
      >
        <h1 className="text-2xl">{name}</h1>
        <button className="bg-black text-white p-1 cursor-pointer">
          {openIndex ? "🔼" : "🔽"}
        </button>
      </div>
      {openIndex && <h2>{moto}</h2>}
    </div>
  );
};

const Instamart = () => {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <div className="bg-black">
      {data.map((item, index) => (
        <AccordianItem
          key={index}
          name={item.name}
          moto={item.moto}
          openIndex={openIndex === index}
          setOpenIndex={() => setOpenIndex(index == openIndex ? null : index)}
        />
      ))}
    </div>
  );
};

export default Instamart;
