import * as React from "react";
import { Link } from 'react-router-dom';
function Button({ children }) {
  return (
    <div className="flex justify-center items-center self-stretch py-2.5 pr-6 pl-5 rounded-xl border border-solid shadow-sm backdrop-blur-xl bg-white bg-opacity-0 border-white border-opacity-10">
      <div className="flex overflow-hidden relative flex-col justify-center px-3 py-3 aspect-[4.55] w-[182px] transition duration-2000 hover:scale-95">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8e2fa599cd0228cc2c44c44e5cbf1fbcf565e424d623b944e060884f5bc4a37d?apiKey=dadde3c8bb91485ea6a1326748697be7&"
          alt=""
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex relative gap-1">
          {children}
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/04bb9fcbe5a18574474db3e75e91692fc53666ef2a38940d39ae0b870eb7aef0?apiKey=dadde3c8bb91485ea6a1326748697be7&"
            alt=""
            className="shrink-0 w-4 aspect-square"
          />
        </div>
      </div>
    </div>
  );
}

function NavLink({ children }) {
  return <div>{children}</div>;
}

function Navbar() {
  const navLinks = ["Features", "About Us", "Blogs"];

  return (
    <div className="flex flex-col justify-center text-base leading-4 text-slate-300">
      <header className="flex justify-center items-center px-16 py-5 w-full max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col justify-center p-3 max-w-full rounded-xl border border-solid backdrop-blur-[17px] bg-neutral-900 bg-opacity-10 border-white border-opacity-10 w-[1173px]">
          <div className="flex gap-5 justify-center items-center px-8 w-full max-md:flex-wrap max-md:px-5 max-md:max-w-full">
            <div className="flex gap-2 self-stretch my-auto text-2xl font-bold tracking-tight whitespace-nowrap">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/68fb89b028c8bfd5a16c190119e2a88155f98d3ce54849d9273ffbef93869878?apiKey=dadde3c8bb91485ea6a1326748697be7&"
                alt="IdeaHub Logo"
                className="shrink-0 w-9 aspect-[1.03]"
              />
              <div className="my-auto bg-clip-text">IdeaHub</div>
            </div>
            <nav className="flex gap-5 justify-center self-stretch px-20 py-1 my-auto max-md:px-5">
              {navLinks.map((link, index) => (
                <NavLink key={index}>{link}</NavLink>
                
              ))}
            </nav>
            <Button>
              
              <div className="button" ><Link to="/login"><div>Let's Get Started</div></Link></div>
            </Button>
          </div>
        </div>
      </header>
    </div>
  );
}


export default Navbar