import heroBg from "../assets/Hero-Bg2.avif";
import useRevealOnView from "../hooks/useRevealOnView";
import { useLocation, Link } from "react-router-dom";

export default function HeroSection() {
  const location = useLocation();

  const [titleRef, titleVisible] = useRevealOnView();
  const [p1Ref, p1Visible] = useRevealOnView();
  const [p2Ref, p2Visible] = useRevealOnView();
  const [ctaRef, ctaVisible] = useRevealOnView();

  return (
    <section
      key={location.pathname}
      className="relative w-full min-h-[500px] h-[80vh] md:h-[calc(100vh-62px)] overflow-hidden"
    >
      {/* Background Image */}
      <img
        src={heroBg}
        alt="Fashion hero"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Contrast Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-xl">
          {/* Headline */}
          <h1
            ref={titleRef}
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-4 sm:mb-6 text-white
              reveal-left ${titleVisible ? "reveal-left-active" : ""} drop-shadow-md`}
            style={{ animationDelay: "0ms" }}
          >
            The Fusion Ethos
          </h1>

          {/* Paragraph 1 */}
          <p
            ref={p1Ref}
            className={`text-sm sm:text-base md:text-lg leading-relaxed text-white mb-3 sm:mb-5 max-w-2xl
              reveal-left ${p1Visible ? "reveal-left-active" : ""}`}
            style={{ animationDelay: "150ms" }}
          >
            At <span className="font-semibold text-[#F5F5DC]">FASHION FUSION</span>,
            we believe modern style is a deliberate fusion - a blend of sharp contemporary design, unwavering quality, and intentional living. We move beyond fleeting trends to offer a carefully curated selection of menswear that empowers you to build a cohesive, confident wardrobe.
          </p>

          {/* Paragraph 2 */}
          <p
            ref={p2Ref}
            className={`text-sm sm:text-base md:text-lg leading-relaxed text-white mb-6 sm:mb-8 max-w-2xl
              reveal-left ${p2Visible ? "reveal-left-active" : ""}`}
            style={{ animationDelay: "300ms" }}
          >
            Our edit focuses on exceptional fabrics, precise tailoring, and versatile pieces that transition seamlessly from the boardroom to weekend explorations. This isn't just clothing; it's the foundation of your personal narrative.
          </p>

          {/* CTA Button */}
          <div
            ref={ctaRef}
            className={`reveal-left ${ctaVisible ? "reveal-left-active" : ""}`}
            style={{ animationDelay: "450ms" }}
          >
            <Link
              to="/about"
              className="inline-flex items-center justify-center sm:justify-start gap-1.5 px-4 py-2.5 sm:px-6 sm:py-3 bg-white/95 text-gray-900 hover:bg-white hover:scale-105 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base w-full sm:w-auto whitespace-nowrap cursor-pointer"
            >
              LEARN MORE ABOUT OUR STORY <span className="flex-shrink-0">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
