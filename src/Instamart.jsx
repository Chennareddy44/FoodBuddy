import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const data = [
  {
    name: "Andrew Tate (On Water)",
    moto: "Sparkling water is for men. Still water? What, are you afraid of bubbles? Grow up.",
  },
  {
    name: "Conor McGregor (On Humility)",
    moto: "I’d like to take this chance to apologize… to absolutely NOBODY!",
  },
  {
    name: "Khabib Nurmagomedov (On Fighting)",
    moto: "Send me your location, Im gonna smash you, you tap like chicken",
  },
  {
    name: "Islam Makhachev (On Wrestling)",
    moto: "Brother, send your son 2-3 years dagestan and forget 6 months 1 time you can call",
  },
  {
    name: "Dana White (On Fighter Complaints)",
    moto: "You don’t like your contract? Go start your own fight league and pay yourself whatever you want.",
  },
  {
    name: "Dricus du Plessis (On African Champions)",
    moto: "I’m not saying Adesanya’s not African, I’m just saying **he left Africa.** I still train here. I still breathe African air. **That’s the difference.**",
  },
];

const AccordionItem = ({ name, moto, isOpen, onClick }) => {
  return (
    <div className="mb-4 bg-gray-900 text-white p-4 rounded-lg shadow-lg">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={onClick}
      >
        <h1 className="text-xl font-semibold">{name}</h1>
        <button className="bg-gray-800 p-2 rounded text-white focus:outline-none cursor-pointer">
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </button>
      </div>
      {isOpen && <p className="mt-2 text-gray-300">{moto}</p>}
    </div>
  );
};

const Instamart = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold text-white mb-6">
        Inside the Mind of Funniest People🤣🤐
      </h1>
      <div className="w-full max-w-2xl">
        {data.map((item, index) => (
          <AccordionItem
            key={index}
            name={item.name}
            moto={item.moto}
            isOpen={openIndex === index}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Instamart;
