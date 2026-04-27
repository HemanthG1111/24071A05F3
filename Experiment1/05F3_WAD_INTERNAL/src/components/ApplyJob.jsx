function ApplyJob() {
  const handleApply = (e) => {
    e.preventDefault();
    alert("Applied Successfully!");
    window.location.href = "/";
  };

  return (
    <div className="mt-5">
      <h2>Apply for Job</h2>
      <form onSubmit={handleApply} className="mt-4">
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" className="form-control" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Resume Link</label>
          <input type="text" className="form-control" required />
        </div>
        <button type="submit" className="btn btn-success">Submit Application</button>
      </form>
    </div>
  );
}

export default ApplyJob;