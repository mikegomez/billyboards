import React from "react";
import { Footer, Navbar } from "../components";




function ContactPage() {
  function handleSubmit(event) {
  event.preventDefault(); // Prevent the form from actually submitting

  const formData = new FormData(event.target);
  const name = formData.get('Name');
  const email = formData.get('Email');
  const message = formData.get('Message');
  
  const data = {
    name,
    email,
    message
  };

      // Log the data to the console
     console.log('Data to be sent:', data);

}

return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Contact Us</h1>
        <hr />
        <div className="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
          <form onSubmit={handleSubmit}>
              <div className="form my-3">
                <label htmlFor="Name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="Name"
                  name="Name"
                  placeholder="Enter your name"
                />
              </div>
              <div className="form my-3">
                <label htmlFor="Email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="Email"
                  name="Email"
                  placeholder="name@example.com"
                />
              </div>
              <div className="form  my-3">
                <label htmlFor="Password">Message</label>
                <textarea
                  rows={5}
                  className="form-control"
                  id="Password"
                  name="Message"
                  placeholder="Enter your message"
                />
              </div>
              <div className="text-center">
                <button
                  className="my-2 px-4 mx-auto btn btn-dark"
                  type="submit"
                 disabled
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
