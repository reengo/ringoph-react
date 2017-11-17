import React from 'react';

class Contact extends React.Component {
  render() {
    return (

		<section id="contact" class="footer-block dark text-left" data-step="5">
      <div class="container">
        <div class="footer-content row">
          <div class="col-lg-12"><h2>Contact Ringo</h2></div>
          <div class="col-lg-6 col-md-6">
            <p class="emphasis">A little message could start something great. so why not send me one? </p>
            <p>Give me your thoughts on my work, request for a quote or better yet, ask me anything you could ever think of.</p>
          </div>

          <div class="col-lg-6 col-md-6">
            <div class="alert alert-success" style={{display:"none"}}><strong>Message Sent!</strong><br />Thank you for sending your inquiries. I'll get to you as soon as I can</div>
            <form id="contact" method="post">
              <label>Send Me Message:</label>
              <div class="form-group">
                <input type="email" class="input-lg form-control" id="email" name="email" placeholder="Your Email" />
              </div>
              <div class="form-group">
                <input type="text" class="input-lg form-control" id="name" name="name" placeholder="Your Name" />
              </div>
              <label>Your Message:</label>
              <textarea id="message" class="form-control" rows="4"></textarea>
              <input type="submit" class="btn btn-primary" value="SEND"></input>
            </form>
          </div>
        </div>
      </div>
    </section>
	);
}
}

export default Contact




