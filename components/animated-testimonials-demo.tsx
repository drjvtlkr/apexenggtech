import image1 from "../images/chimney2.jpg";
import image2 from "../images/ffePreHeater.jpg";
import { AnimatedTestimonials } from "./uis/animated-testimonials";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote: "The attention to detail and innovative features have completely transformed our workflow.",
      name: "Sarah Chen",
      designation: "Product Manager at TechFlow",
      src: image1.src, // Access the URL string
    },
    {
      quote: "Implementation was seamless, and the results exceeded our expectations.",
      name: "Michael Rodriguez",
      designation: "CTO at InnovateSphere",
      src: image2.src, // Access the URL string
    },
  ];

  return <AnimatedTestimonials testimonials={testimonials} />;
}
