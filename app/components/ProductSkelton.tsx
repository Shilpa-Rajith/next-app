export default function ProductSkeleton() {
  return (
    <div className="container py-5 placeholder-glow">
      <div className="row g-5">

        <div className="col-md-5">
          <div className="placeholder col-12" style={{ height: "350px", borderRadius: "10px" }}></div>
        </div>

        <div className="col-md-7">
          <h4 className="placeholder col-8"></h4>
          <p className="placeholder col-3 mt-2"></p>
          <hr />
          <p className="placeholder col-5"></p>
          <p className="placeholder col-12 mt-3"></p>
          <p className="placeholder col-10"></p>
          <button className="btn btn-secondary disabled placeholder col-4 mt-3"></button>
        </div>

      </div>
    </div>
  );
}
