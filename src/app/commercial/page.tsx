import { ArrowRight, Home, Search } from "lucide-react";

// Replicate  https://www.arambo.co/comercial
const CommercialPage = () => {
  return (
    <section
      className="related w-full py-32 rounded-2xl overflow-hiddenbg-cover bg-center"
      style={{ backgroundImage: "url('/commercial/commercial-bg.png')" }}
    >
      <img
        src="/commercial/commercial-bg.png"
        alt="Commercial Space"
        className="absolute inset-0 w-full h-full object-cover"
      />
    </section>
  );
};

export default CommercialPage;
