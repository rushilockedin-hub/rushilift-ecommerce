import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-white text-center py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <img
          src="/images/e06a1c28-7411-4b79-bef4-0d2564224ad6.png"
          alt="Rushilift Logo"
          className="w-48 mx-auto mb-6"
        />
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Premium Gymwear for the Aesthetic Era
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Built for strength. Styled for the grind. Welcome to Rushilift.
        </p>
        <button
          onClick={() => navigate("/shop")}
          className="bg-black text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-gray-800 transition"
        >
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default Hero;