function Registration() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Registration Successful!");
    window.location.href = "/login";
  };

  return (
    <div className="mt-5">
      <h2>New Registration</h2>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" className="form-control" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Skills</label>
          <input type="text" className="form-control" required />
        </div>
        <button type="submit" className="btn btn-primary w-100">Register</button>
      </form>
    </div>
  );
}

export default Registration;