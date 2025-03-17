const Shimmer = () => {
  return (
    <div className="shimmer-layout">
      {Array(8)
        .fill("")
        .map((e) => (
          <div className="shimmer-cards"></div>
        ))}
    </div>
  );
};

export default Shimmer;
