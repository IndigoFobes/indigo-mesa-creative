import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="pt-40 a-gradient flex flex-col">
      {/* First section */}
      <div className="w-full dark-border flex">
        <div className="relative grid grid-cols-8 px-16">
          {/* Image */}
          <div className="col-start-1 col-end-4 flex relative h-[250px] w-[250px] md:h-[250px] md:w-[250px] lg:h-[300px] lg:w-[300px] xl:h-[350px] xl:w-[350px] rounded-full overflow-hidden m-10 shadow-lg shadow-black/50">
            <Image
              src="/Indigo-green-square.jpg"
              alt="Indigo in green"
              fill={true}
              className="object-cover"
            />
          </div>
          {/* text */}
          <div className="col-start-4 col-end-9 ml-16 mr-10 flex flex-col gap-8 place-content-center my-10 lg:my-0">
            <h3>{`Designing & building websites for actors.`}</h3>
            <p>{`Hey there, I’m Indigo! I’m an NYC-based actor and web-developer. More intro etc. I’m an NYC-based actor and web-developer. More intro etc. I’m an NYC-based actor and web-developer. More intro etc. I’m an NYC-based actor and web-developer. More intro etc.`}</p>
            {/* Button */}
            <Link className="button self-start" href="/about">
              Learn more about me
            </Link>
          </div>
        </div>
      </div>
      {/* Second section */}
      <div className="bg-[var(--dark-theme)] text-center mx-auto py-10 dark-border px-60 text-lg">
        <p className="text-white">{`Building a website takes time, ESPECIALLY if you don’t enjoy building it. I am grateful to have spent time studying web development so that I could build really cool websites. And I LOVE doing it. `}</p>
      </div>
      {/* Third section */}
      <div className="relative pt-16 px-16 bg-[var(--light-theme)] dark-border">
        <div className="text-center grid grid-rows-6">
          <h2>How Can I Help You?</h2>
          <p>{`Here is what I offer. Full website design, build, deployment, and upkeep.`}</p>
          {/* Packages */}
          <div className="row-start-3 row-end-7 flex justify-between w-3/4 justify-self-center mb-[-10%] gap-7">
            <div className="border-[var(--dark-theme)] border-[8px] border-solid bg-white w-1/3 shadow-lg shadow-black/50 flex flex-col text-center py-4 px-2 justify-between">
              <div>
                <h4>Single Page Site</h4>
                <p>{`(the scrolly site)`}</p>
                <p className="mt-4 price">{`$700`}</p>
                <p className="mt-4">{`Details details details details details details details details details details details details details details details details details details details details details  details details details details details details details details details details details details details details details details details details`}</p>
              </div>
              {/* Button */}
              <Link className="button mx-auto mt-4" href="/about">
                Learn more
              </Link>
            </div>
            <div className="border-[var(--dark-theme)] border-[8px] border-solid bg-white w-1/3 shadow-lg shadow-black/50 flex flex-col text-center py-4 px-2 justify-between">
              <div>
                <h4>The Classic Site</h4>
                <p>{`(multiple pages)`}</p>
                <p className="mt-4 price">{`$1000`}</p>
                <p className="mt-4">{`Details details details details details details details details details details details details details details details details details details details details details  details details details details details details details details details details details details details details details details details details`}</p>
              </div>
              {/* Button */}
              <Link className="button mx-auto mt-4" href="/about">
                Learn more
              </Link>
            </div>
            <div className="border-[var(--dark-theme)] border-[8px] border-solid bg-white w-1/3 shadow-lg shadow-black/50 flex flex-col text-center py-4 px-2 justify-between">
              <div>
                <h4>Looking for something different?</h4>
                {/* <p>{`(the scrolly site)`}</p> */}
                {/* <p className="mt-4 price">{`$700`}</p> */}
                <p className="mt-12">{`Fill out this form to get a custom quote.`}</p>
              </div>
              {/* Button */}
              <Link className="button mx-auto flex mt-4" href="/about">
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Fourth section */}
      <div className="bg-[var(--light-bg)]"></div>
    </div>
  );
}
