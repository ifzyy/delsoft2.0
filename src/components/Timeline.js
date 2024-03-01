import "./timeline.scss";
const Timeline = () => {
  return (
    <ul className="timeline timeline-vertical text-[#252627]">
      <li>
        <div className="timeline--circle">
          {" "}
          <i />
        </div>
        <div className="flex flex-col">
          <div className="timeline--description mb-0 pb-[12px] font-bold">
            Software Engineering
          </div>
          <p className="ml-[30px] mt-0 pt-0">
            Converting ideas into functional digital solutions
          </p>
          <ul className="lg:ml-[30px] mb-[30px] list-disc mt-0">
            <li className="list-disc marker:text-white lg:text-[20px]">
              {" "}
              • Code refinement and architecture
            </li>
            <li className="list disc pt-[15px] lg:text-[20px]">
              {" "}
              • Software development ecosystem
            </li>
            <li className="list disc pt-[15px]  lg:text-[20px]">
              {" "}
              • Product monetization
            </li>
            <li className="list disc pt-[15px]  lg:text-[20px]">
              {" "}
              • Practical Software solutions
            </li>
          </ul>
        </div>
      </li>
      <li>
        <div className="timeline--circle">
          {" "}
          <i />
        </div>
        <div className="flex flex-col">
          <div className="timeline--description mb-0 pb-[12px]  font-bold">
            Data Science
          </div>
          <p className="ml-[30px] mt-0 pt-0">
            We translate your raw data into actionable insights
          </p>{" "}
          <ul className="lg:ml-[30px] mb-[30px] list-disc mt-0">
            <li className="list-disc marker:text-white lg:text-[20px]">
              {" "}
              • Data cleaning
            </li>
            <li className="list disc pt-[15px] lg:text-[20px]">
              {" "}
      • End to end management of the data life cylcle
            </li>
            <li className="list disc pt-[15px]  lg:text-[20px]">
              {" "}
              • Applied Analytics
            </li>
            <li className="list disc pt-[15px]  lg:text-[20px]">
              {" "}
              • Data monetization
            </li>
          </ul>
        </div>
      </li>
      <li>
        <div className="timeline--circle">
          {" "}
          <i />
        </div>
        <div className="flex flex-col">
          <div className="timeline--description mb-0 pb-[12px] font-bold">
            Machine Learning
          </div>
          <p className="ml-[30px] mt-0 pt-0">
            Transforming your data into intelligent predictions
          </p>
          <ul className="lg:ml-[30px] mb-[30px] list-disc mt-0">
            <li className="list-disc marker:text-white lg:text-[20px]">
              {" "}
              • Model training and optimization
            </li>
            <li className="list disc pt-[15px] lg:text-[20px]">
              {" "}
              • Machine learning ecosystem
            </li>
            <li className="list disc pt-[15px]  lg:text-[20px]">
              {" "}
              • A.I driven insights
            </li>
            <li className="list disc pt-[15px]  lg:text-[20px]">
              {" "}
              • Predictive Analysis
            </li>
          </ul>
        </div>
      </li>
      <li>
        <div className="timeline--circle--last">
          {" "}
          <i />
        </div>
        <div className="flex flex-col">
          <div className="timeline--description mb-0 pb-[12px] font-bold">
            Data Engineering
          </div>
          <p className="ml-[30px] mt-0 pt-0">
            Turning raw data into robust infrastructure
          </p>
          <ul className="lg:ml-[30px] mb-[30px] list-disc mt-0">
            <li className="list-disc marker:text-white lg:text-[20px]">
              {" "}
              • Data integration and transformation
            </li>
            <li className="list disc pt-[15px] lg:text-[20px]">
              {" "}
              • Data pipeline architecture
            </li>
            <li className="list disc pt-[15px]  lg:text-[20px]">
              {" "}
              • Data optimization
            </li>
            <li className="list disc pt-[15px]  lg:text-[20px]">
              {" "}
              • Big Data Solutions
            </li>
          </ul>
        </div>
      </li>
    </ul>
  );
};

export default Timeline;
