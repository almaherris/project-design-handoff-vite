import { ButtonFAQ } from "./reusable/ButtonFAQ";
import data from "../json/FAQs.json";
import arrow from "/arrow.svg";

export const FAQs = () => {
  const getQuestions = (startIndex, endIndex) => {
    return data.questions.slice(startIndex, endIndex).map((question, index) => (
      <li className="border-b-2 flex justify-between py-1 my-1" key={index}>
        {question}
        <img className src={arrow} />
      </li>
    ));
  };

  return (
    <div className="pt-20	font-montserrat border-t tablet:pt-32">
      <h2 className="text-2xl font-semibold text-center mb-16 pt-4 tablet:text-left tablet:mx-8 desktop:mx-32 desktop:mt-36 desktop:text-4xl">
        Find Your Answers Here
      </h2>
      <div className="grid grid-cols-2 gap-y-4 mb-16 tablet:flex tablet:justify-between tablet:mx-8 desktop:my-32">
        <div className="flex justify-center items-center ">
          <ButtonFAQ text={"Prices"} />
        </div>
        <div className="flex justify-center items-center">
          <ButtonFAQ text={"Bookings"} />
        </div>
        <div className="flex justify-center items-center">
          <ButtonFAQ text={"My Account"} />
        </div>
        <div className="flex justify-center items-center font-montserrat text-base font-normal">
          <ButtonFAQ text={"Facilities"} />
        </div>
      </div>
      <div className="flex justify-evenly mb-10 tablet:justify-start mx-8 gap-x-4 desktop:mx-32">
        <h3 className="font-montserrat text-xl font-medium tablet:text-2xl">
          FAQs
        </h3>
        <button className="font-montserrat border-solid border-current border text-base bg-grey-dot2 hover:bg-lightgrey active:bg-grey-dot1 rounded-full w-auto px-4 h-8 tablet:text-lg">
          Discover All Here
        </button>
      </div>
      <div className="grid grid-cols-1 font-montserrat text-sm desktop:grid desktop:grid-cols-2 desktop:text-xl desktop:mx-32 desktop:gap-x-16 desktop:mb-36 desktop:justify-between">
        <ul className="mx-4 tablet:gap-y-8 tablet:w-8/12 tablet:text-lg desktop:text-xl desktop:mx-0 desktop:w-full">
          {getQuestions(0, 6)}
        </ul>
        <ul className="invisible desktop:visible">{getQuestions(6, 12)}</ul>
      </div>
    </div>
  );
};
