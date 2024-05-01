import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="pt-40 a-gradient flex flex-col">
      {/* First section – Hero/welcome*/}
      <div className="a-gradient w-full dark-border flex">
        <div className="relative grid grid-cols-8 px-16">
          {/* Image */}
          <div className="col-start-1 col-end-4 flex relative h-[250px] w-[250px] md:h-[250px] md:w-[250px] lg:h-[300px] lg:w-[300px] xl:h-[350px] xl:w-[350px] rounded-full overflow-hidden m-10 shadow-lg shadow-black/50">
            <Image
              src="/Indigo-green-square.jpg"
              alt="Indigo in green"
              fill={true}
              className="object-cover rotate"
            />
          </div>
          {/* text */}
          <div className="col-start-4 col-end-9 ml-16 mr-10 flex flex-col gap-8 place-content-center my-10 lg:my-0">
            <h2>{`Designing & building websites for actors.`}</h2>
            <p>{`Hey there, I’m Indigo! I’m an NYC-based actor and web-developer. More intro etc. I’m an NYC-based actor and web-developer. More intro etc. I’m an NYC-based actor and web-developer. More intro etc. I’m an NYC-based actor and web-developer. More intro etc.`}</p>
            {/* Button */}
            <Link className="button self-start" href="/about">
              Learn more about me
            </Link>
          </div>
        </div>
      </div>
      {/* Second section – Hook*/}
      <div className="bg-[var(--dark-theme)] text-center mx-auto py-10 dark-border px-60 text-lg">
        <p className="text-white">{`Building a website takes time, ESPECIALLY if you don’t enjoy building it. I am grateful to have spent time studying web development so that I could build really cool websites. And I LOVE doing it. `}</p>
      </div>
      {/* Third section – 3 packages*/}
      <div className="relative pt-16 px-16 bg-[var(--light-theme)] dark-border">
        <div className="text-center grid grid-rows-6">
          <h2>How Can I Help You?</h2>
          <p>{`Here is what I offer. Full website design, build, deployment, and upkeep.`}</p>
          {/* Packages */}
          <div className="row-start-3 row-end-7 flex justify-between max-w-[1100px] justify-self-center mb-[-10%] gap-4">
            <div className="bounce border-[var(--dark-theme)] border-[8px] border-solid bg-white w-1/3 shadow-lg shadow-black/20 flex flex-col text-center py-4 px-2 justify-between">
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
            <div className="bounce border-[var(--dark-theme)] border-[8px] border-solid bg-white w-1/3 shadow-lg shadow-black/20 flex flex-col text-center py-4 px-2 justify-between">
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
            <div className="bounce border-[var(--dark-theme)] border-[8px] border-solid bg-white w-1/3 shadow-lg shadow-black/20 flex flex-col text-center py-4 px-2 justify-between">
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
      {/* Fourth section – What to expect */}
      <div className="bg-[var(--light-bg)] pt-40 text-center pb-10 dark-border flex flex-col gap-10">
        <div>
          <h2 className="text-[var(--accent-two)]">What to Expect</h2>
          <p>{`What to expect when I build a site. General timeline. You provide me materials. Free consultation. 2 hours of additional meetings. Etc.`}</p>
        </div>
        {/* Arrow image/icon */}
        <p>Arrow</p>
      </div>
      {/* Fifth section – 3 boxes*/}
      <div className="relative min-h-[550px] w-full dark-border">
        <Image
          src="/girl-writing.jpg"
          alt="girl writing with coffee and laptop"
          fill
          className="object-cover"
        />
        {/* overlay */}
        <div className="absolute top-0 left-0 w-full h-full light-overlay flex py-16 gap-10 justify-center items-center">
          {/* 3 squares */}
          <div className="bg-white h-[300px] w-[300px] shadow-lg shadow-black/20 bounce"></div>
          <div className="bg-white h-[300px] w-[300px] shadow-lg shadow-black/20 bounce"></div>
          <div className="bg-white h-[300px] w-[300px] shadow-lg shadow-black/20 bounce"></div>
        </div>
      </div>
      {/* Sixth section – Contact preview */}
      <div className="bg-[var(--dark-theme)] text-center mx-auto py-8 dark-border px-20 text-lg w-full flex flex-col gap-4">
        <h3 className="text-white">{`Interested to know more, or simply want to chat?`}</h3>
        <div className="w-3/4 flex justify-between self-center text-white text-center">
          <Link href="/#contact">
            <h4>Fill out the form below</h4>
          </Link>
          <h4>Or send me an email at hello@indigomesacreative.com</h4>
        </div>
      </div>
      {/* Seventh section – Contact */}
      <div className="a-gradient min-h-[600px] w-full">
        <div className="relative w-[615px] mx-auto bg-white min-h-[565px] mt-20 mb-40 shadow-lg shadow-black/20">
          {/* Image */}
          <div className="absolute bottom-[-100px] right-[-100px]">
            <div className="relative h-[100px] w-[100px] md:h-[150px] md:w-[150px] lg:h-[175px] lg:w-[175px] xl:h-[200px] xl:w-[200px] rounded-full overflow-hidden m-10 shadow-lg shadow-black/50">
              <Image
                src="/Indigo-orange-square.jpg"
                alt="Indigo in green"
                fill={true}
                className="object-cover rotate"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
