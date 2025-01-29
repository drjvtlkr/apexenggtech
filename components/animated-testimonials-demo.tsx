import image1 from "../images/chimney2.jpg";
import image2 from "../images/ffePreHeater.jpg";
import image3 from "../images/verticalCrystalizer.jpg";
import image4 from "../images/uhvj.jpg";
import image5 from "../images/sugarPlantBanner9.jpg";
import { AnimatedTestimonials } from "./ui/animated-testimonials";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote: "AEW operates with advanced facilities, ensuring precision and excellence in every project from design to delivery. ",
      name: "Cutting-Edge Infrastructure",
      src: image1.src, 
    },
    {
      quote: `Whether it's raw materials or fully finished products, we trust only the highest quality materials to ensure superior durability, strength, and consistent performance throughout the entire production process.`,
      name: "Material Quality ",
      src: image2.src,
    },
    {
      quote: `Our skilled professionals bring years of experience and deep industry knowledge, ensuring exceptional 
craftsmanship in every project. `,
      name: "Expert Team",
      src: image3.src,
    },
    {
      quote: `We prioritize punctuality and reliability, consistently delivering projects on schedule without 
compromising on quality.`,
      name: "On-Time, Every Time",
      src: image4.src,
    },
    {
      quote: `We provide customized engineering and fabrication solutions that meet the unique needs of each client, 
driving optimal results.`,
      name: "Tailored Solutions ",
      src: image5.src,
    },
  ];

  return <AnimatedTestimonials testimonials={testimonials} />;
}
