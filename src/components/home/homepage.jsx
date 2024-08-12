import AOS from "aos";
import "aos/dist/aos.css";
// import "./tentang.css";

const Homepage = () => {
  AOS.init();
  AOS.refresh();
  AOS.refreshHard();

  return (
    <>
      <div className="bg-center bg-cover h-screen bg-pemandangan-1 opacity-100"></div>
      <div
        className="container absolute flex flex-col items-center w-full top-1/2 transform -translate-y-1/2 px-16 text-[#374259]"
      >
        <p className="font-Montserrat text-center font-bold text-2xl mb-4 sm:text-2xl md:text-3xl lg:text-6xl bg-basic rounded-2xl p-3 bg-opacity-50">
          SELAMAT DATANG
          <br />
          DI DESA GIRIREJO
        </p>
        <p className="text-center sm:text-lg md:text-xl text-basic">
        Jelajahi pesona wisata alam, budaya, dan hasil bumi unggulan Desa Girirejo.
        </p>
      </div>
    </>
  );
  
};

export default Homepage;
