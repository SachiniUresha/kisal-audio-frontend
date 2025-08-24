import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
    
      <div
        className="relative w-full h-screen bg-cover bg-center text-white flex flex-col justify-center items-center px-4"
        style={{
          backgroundImage: `url("/home-bg.jpg")`,
        }}
      >
        
        <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>

        
        <div className="relative z-10 text-center">
          <p className="text-lg tracking-widest text-white/80 ">
            Hear the Difference, Feel the Vibe
          </p>
         
          <h1 className="text-5xl md:text-6xl font-extrabold mt-2 uppercase">Kisal Audio </h1>
          <p className="text-md md:text-lg mt-6 max-w-xl text-center text-white/90">
            Kisal-Audio brings you the perfect blend of powerful sound and stunning lights to transform any occasion. From intimate gatherings to large-scale celebrations, we deliver quality, reliability, and an experience that resonates long after the event.
          </p>
          <button
            onClick={() => navigate("/items")}
            className="mt-8 px-6 py-3 border-2 border-white rounded-full text-white hover:bg-white hover:text-purple-900 transition"
          >
            Rent Now
          </button>
        </div>
      </div>

     
      <section className="py-16 px-4 bg-[#f4f4f5] text-center">
        <h2 className="text-3xl font-bold text-purple-900 mb-8">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg">
            <h3 className="text-xl font-semibold text-purple-800 mb-2">
              Sound Systems
            </h3>
            <p>
              High-quality speakers, mixers, and audio equipment for any venue
              size.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg">
            <h3 className="text-xl font-semibold text-purple-800 mb-2">
              Lighting Effects
            </h3>
            <p>
              Custom lighting setups that enhance mood and elevate your stage
              presence.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg">
            <h3 className="text-xl font-semibold text-purple-800 mb-2">
              Event Setup
            </h3>
            <p>
              From planning to on-site installation, we handle the technical
              side of your event.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white text-center">
        <h2 className="text-3xl font-bold text-purple-900 mb-8">Why Choose Us?</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="p-6 rounded-xl bg-[#f4f4f5] shadow-sm hover:shadow-md">
            <h3 className="text-xl font-semibold text-purple-800 mb-2">
              Island-wide Delivery
            </h3>
            <p>We deliver and set up your equipment anywhere in Sri Lanka.</p>
          </div>
          <div className="p-6 rounded-xl bg-[#f4f4f5] shadow-sm hover:shadow-md">
            <h3 className="text-xl font-semibold text-purple-800 mb-2">
              24/7 Support
            </h3>
            <p>
              We're available round the clock to assist with any technical
              issues or concerns.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-[#f4f4f5] shadow-sm hover:shadow-md">
            <h3 className="text-xl font-semibold text-purple-800 mb-2">
              Best Rates
            </h3>
            <p>
              Enjoy competitive prices without compromising on quality and
              service.
            </p>
          </div>
        </div>
      </section>

      {/* Product Gallery Section */}
      <section className="py-16 px-4 text-center bg-[#f4f4f5]">
        <h2 className="text-3xl font-bold text-purple-900 mb-8">
          Gallery
        </h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <img
            src="../1.jpg"
            alt="Speaker"
            className="rounded-xl shadow-md w-[400px] h-[400px] object-cover"
          />
          <img
            src="../2.jpg"
            alt="Mixer"
            className="rounded-xl shadow-md w-[400px] h-[400px] object-cover"
          />
          <img
            src="../3.jpg"
            alt="Lighting"
            className="rounded-xl shadow-md w-[400px] h-[400px] object-cover"
          />
           <img
            src="../4.jpg"
            alt="Speaker"
            className="rounded-xl shadow-md w-[400px] h-[400px] object-cover"
          />
          <img
            src="../5.jpg"
            alt="Mixer"
            className="rounded-xl shadow-md w-[400px] h-[400px] object-cover"
          />
          <img
            src="../6.jpg"
            alt="Lighting"
            className="rounded-xl shadow-md w-[400px] h-[400px] object-cover"
          />
        </div>
      </section>
    </>
  );
}
