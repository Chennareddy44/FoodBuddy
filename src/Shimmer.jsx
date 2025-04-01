const Shimmer = () => {
  return (
    <div className="flex flex-wrap justify-center gap-5 p-5 mt-16">
      {Array(8)
        .fill("")
        .map((_, index) => (
          <div
            key={index}
            className="w-54 h-62 bg-gradient-to-r from-[#edd1d1] via-[#f1caca] to-[#f4d2d2] bg-[length:200%_100%] animate-shimmer rounded-lg shadow-lg m-5"
          ></div>
        ))}
    </div>
  );
};

export default Shimmer;
