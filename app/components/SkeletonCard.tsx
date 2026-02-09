const SkeletonCard = () => {
  return (
    <div className="card shadow-sm p-3 placeholder-glow" style={{ height: "300px" }}>
      <div className="placeholder col-12" style={{ height: "150px" }}></div>
      <div className="placeholder col-10 mt-3"></div>
      <div className="placeholder col-6 mt-2"></div>
      <div className="placeholder col-4 mt-2"></div>
    </div>
  );
};

export default SkeletonCard;
