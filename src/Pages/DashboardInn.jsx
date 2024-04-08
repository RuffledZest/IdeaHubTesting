import Carousel from "../components/Carousel";
import Dashboardpt2 from "../components/Dashboardpt2";
import Navbar from "../components/Navbar";
import vid from "/assets/smiling.mp4";
const slides = [
  "/assets/5d78ef3b-b179-45e0-96b2-f208af2e162e.png",
  "/assets/Machine-learning-860x573.jpg",
  "/assets/DISASTER-MANAGEMENT.webp",
  "/assets/Top-4-Modern-Farming-Methods-in-India-Step-by-Step-Guide.jpg",
]

function DashboardInn() {
  return (
    
    <>
    
    <Navbar />
    <div style={{
            position: "absolute",

      zIndex:"-1",
    }}>
      <img src="/assets/Pattern3forIdeaHubLandingpage.png " className="text-white opacity-45 mb-36"  alt="" />
    </div>
    <div className="flex justify-center items-center  ">
      <div className="max-w-screen-md ">
        <Carousel autoSlide={true} >
          {[...slides.map((s) => (
            <img src={s} />
          )), ]}
        </Carousel>

      </div>
    </div>
    <section className="">

    <Dashboardpt2 />
    </section>
    <div className="flex justify-center">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full items-center">
        <a href="/post">+ Add Project</a>
      </button>
    </div>
    </>
  );
}

export default DashboardInn;