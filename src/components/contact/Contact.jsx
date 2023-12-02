import React from "react"
import Back from "../common/back/Back"
import "./contact.css"

const Contact = () => {
  const map = 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d904726.6131739549!2d85.24565535!3d27.65273865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1652535615693!5m2!1sen!2snp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" '
  return (
    <>
      <Back title='Contact us' />
      <section className='contacts padding'>
        <div className='container shadow flexSB'>
          <div className='left row'>
            <iframe title="location" src={map}></iframe>
          </div>
          <div className='right row'>
            <h1>Contact us</h1>
            <p>We're open for any suggestion or just to have a chat</p>

            <div className='items grid2'>
              <div className='box'>
                <h4>ADDRESS:</h4>
                <p>198 West 21th Street, Suite 721 New York NY 10016</p>
              </div>
              <div className='box'>
                <h4>EMAIL:</h4>
                <p> info@yoursite.com</p>
              </div>
              <div className='box'>
                <h4>PHONE:</h4>
                <p> + 1235 2355 98</p>
              </div>
            </div>

            <form action=''>
              <div className='flexSB'>
                <input type='text' placeholder='Name' />
                <input type='email' placeholder='Email' />
              </div>
              <input type='text' placeholder='Subject' />
              <textarea cols='30' rows='10'>
                Create a message here...
              </textarea>
              <button className='primary-btn'>SEND MESSAGE</button>
            </form>

          {/* new not sure which to add rn*/}

          {/* <div class="Container">
                <form id="signup-form">
                        <p class="info" for="username">Username:</p>
                        <input type="text" id="username" name="username"/>
                        <div class="error" id="username-error"></div>

                        <p class="info" for="email">Email:</p>
                        <input type="email" id="email" name="email"/>
                        <div class="error" id="email-error"></div>

                        <p class="info" for="password">Password:</p>
                        <input type="password" id="password" name="password"/>
                        <div class="error" id="password-error"></div>

                        <p class="info" for="confirm-password">Confirm Password:</p>
                        <input type="password" id="confirm-password" name="confirm-password" placeholder="Reenter your password"/>
                        <div class="error" id="confirm-password-error"></div>
                    <button id="button" type="submit">SIGN UP</button>
                </form>
            </div> */}


            <h3>Follow us here</h3>
            <span>FACEBOOK TWITTER INSTAGRAM DRIBBBLE</span>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
