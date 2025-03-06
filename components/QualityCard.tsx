export default function ServiceCard() {
  return (
    <div className="relative w-80 md:w-[32rem] min-h-[30rem] flex justify-center items-center overflow-hidden rounded-xl shadow-lg before:absolute before:w-2/5 before:h-[150%] before:bg-gradient-to-r before:from-orange-200 before:via-orange-500 before:to-orange-600 before:animate-glowing">
      <div className="absolute w-[95%] h-[95%] bg-black rounded-xl flex flex-col justify-center items-center text-white text-center p-6 cursor-pointer shadow-inner hover:shadow-lg transition-all duration-300 group">
        <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl font-extrabold opacity-50 group-hover:opacity-0 transition-opacity duration-300">
          Quality
        </h2>
        <div className="opacity-0 translate-y-full transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
          <p className="text-md md:text-lg lg:text-xl leading-7">
            At AEW,{" "}
            <strong>Quality is at the heart of everything we do.</strong> We go
            beyond just meeting standards—our commitment extends to meticulous
            testing, constant innovation, and a strong focus on customer
            satisfaction. Each product we deliver is not just a piece of
            equipment, but a testament to our dedication to durability,
            reliability, and peak performance. We believe quality is the
            foundation that drives our growth, ensuring that every solution we
            provide contributes to the continued success and advancement of our
            clients and industry.
          </p>
        </div>
      </div>
    </div>
  );
}
