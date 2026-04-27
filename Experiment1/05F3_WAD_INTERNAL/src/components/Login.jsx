function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Logged In Successfully!");
    window.location.href = "/";
  };

  return (
    <div className="mt-5">
      <h2>Candidate Login</h2>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" className="form-control" required />
        </div>
        <button type="submit" className="btn btn-info w-100">Login</button>
      </form>
    </div>
  );
}

export default Login;