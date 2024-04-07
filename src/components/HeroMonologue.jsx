import * as React from "react";

function Button({ children }) {
  return (
    <div className="flex justify-center items-center px-5 py-2.5 rounded-xl border border-solid shadow-sm backdrop-blur-xl bg-white bg-opacity-0 border-white border-opacity-10">
      {children}
    </div>
  );
}

function LoginButton() {
  return (
    <div className="justify-center px-5 py-3 whitespace-nowrap rounded-xl border border-red-100 border-solid backdrop-blur-[2px]">
      Login
    </div>
  );
}

function HeroMonologue() {
  return (
    <main className="flex flex-col items-center max-w-[992px]">
      <div className="flex flex-col justify-center max-w-full text-sm leading-4 border border-blue-700 border-solid shadow-md bg-zinc-950 rounded-[38px] text-slate-300 w-[140px]">
        <div className="overflow-hidden justify-center px-8 py-1.5 max-md:px-5">
          Begin Here
        </div>
      </div>
      <section className="flex flex-col items-center self-stretch px-7 mt-2 w-full text-center max-md:px-5 max-md:max-w-full">
        <h1 className="self-stretch text-6xl font-semibold bg-clip-text leading-[72px] max-md:max-w-full max-md:text-4xl max-md:leading-[53px]">
          Your Idea is what makes you unique
        </h1>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/eadc13f338b5ccfed01d61277d4da2600de6b92f0b6251a628a92e5419e67203?apiKey=dadde3c8bb91485ea6a1326748697be7&"
          alt=""
          className="ml-12 max-w-full aspect-[33.33] stroke-[6px] stroke-blue-700 w-[264px]"
        />
        <p className="mt-4 text-2xl leading-9 text-slate-300 max-md:max-w-full">
          Ideate and grow your profile with your imaginations. Meet and
          collaborate with like minded peers.
        </p>
      </section>
      <div className="flex gap-4 justify-center mt-8 text-base font-bold leading-4 text-white">
        <Button>
          <div className="overflow-hidden relative flex-col justify-center px-9 py-3 aspect-[3.25] max-md:px-5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4615376fef31c3dfad08eef828ec7b3956c0d4999092429a2d4cc0d7e2315dc5?apiKey=dadde3c8bb91485ea6a1326748697be7&"
              alt=""
              className="object-cover absolute inset-0 size-full"
            />{" "}
            Join us{" "}
          </div>
        </Button>
        <LoginButton />
      </div>
    </main>
  );
}


export default HeroMonologue;