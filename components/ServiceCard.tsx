export default function ServiceCard() {
  return (
    <div className="relative w-80 md:w-[32rem] min-h-[30rem] flex justify-center items-center overflow-hidden rounded-xl shadow-lg before:absolute before:w-2/5 before:h-[150%] before:bg-gradient-to-r before:from-orange-200 before:via-orange-500 before:to-orange-600 before:animate-glowing">
      <div className="absolute w-[95%] h-[95%] bg-black rounded-xl flex flex-col justify-center items-center text-white text-center p-6 cursor-pointer shadow-inner hover:shadow-lg transition-all duration-300 group">
        <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl font-extrabold opacity-50 group-hover:opacity-0 transition-opacity duration-300">
          Service
        </h2>
        <div className="opacity-0 translate-y-full transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
          <p className="text-lg md:text-xl lg:text-2xl leading-6">
            At AEW, our commitment to service is{" "}
            <strong> as strong as our dedication to quality.</strong> We
            recognize that the value of our products extends well beyond their
            production. Our expert team is always on standby, ready to provide
            seamless installation, ongoing maintenance, and quick
            troubleshooting to ensure uninterrupted performance. We believe in
            forging long-term partnerships with our clients, offering tailored
            solutions that adapt to their evolving needs. With a focus on
            reliability, efficiency, and exceptional customer care, we are
            dedicated to providing unparalleled support at every step of our
            clients&apos; journey with us.
          </p>
        </div>
      </div>
    </div>
  );
}
