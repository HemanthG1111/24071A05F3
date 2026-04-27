function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent!");
    window.location.href = "/";
  };

  return (
    <div className="mt-5">
      <h2>Contact Support</h2>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-3">
          <input type="email" className="form-control" placeholder="Email" required />
        </div>
        <div className="mb-3">
          <textarea className="form-control" rows="4" placeholder="Message" required></textarea>
        </div>
        <button type="submit" className="btn btn-info w-100">Send</button>
      </form>
    </div>
  );
}

export default Contact;
