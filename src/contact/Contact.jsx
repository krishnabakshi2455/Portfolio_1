import React from 'react'

function Contact() {
    return (
        <>

            <section className="contact_section" id="contact">
                <div className="contact__container grid">
                    <div className="contact__data">
                        <h2 className="section__title-2">
                            <span>Contact Me</span>
                        </h2>

                        <p className="contact__description-1">
                            I will read all email. Send me any
                            message you want and I`ll get back to you
                        </p>

                        <p className="contact__description-2">
                            I need Your <b>Name</b> and <b>Email Address</b>, but
                            you won`t receive anything other than your reply
                        </p>

                        {/* <!-- <div className="geometric-box"></div> --> */}

                    </div>

                    <div className="contact__mail">
                        <h2 className="contact__title">
                            Send Me a Message
                        </h2>

                        <form action="" className="contact__form" id="contact-form">
                            <div className="contact__group">

                                <div className="contact__box">
                                    <input type="text" name="user_name" className="contact__input" id="name" required placeholder="Name" />
                                    <label for="name" className="contact__lable">Name</label>
                                </div>

                                <div className="contact__box">
                                    <input type="email" name="user_email" className="contact__input" id="email" required placeholder="Email Address" />
                                    <label for="email" className="contact__lable">Email Address</label>
                                </div>

                                <div className="contact__box">
                                    <input type="number" name="user_subject" className="contact__input" id="subject" required placeholder="Mobile Number" />
                                    <label for="subject" className="contact__lable">Moblie No</label>
                                </div>


                                <div className="contact__box contact__area">
                                    <textarea name="user_message" id="message" className="contact__input" placeholder="Message" ></textarea>
                                    <label for="message" className="contact__lable">Message</label>
                                </div>
                                <p className="contact__message" id="contact-message"></p>

                            </div>

                            <button type="submit" className="contact__button button">
                                <i className='bx bx-send'></i>Send
                            </button>
                        </form>

                    </div>

                    <div className="contact__social">
                        <img src="" alt="" className="contact__social-arrow" />

                        <div className="contact__social-data">
                            <div>
                                <p className="cotact__social-description-1">
                                    Does not send email
                                </p>

                                <p className="cotact__social-description-2">
                                    Write me on my social networks
                                </p>
                            </div>

                            <div className="contact__social-link">
                                <a href="" target="_blank" className="contact__social-link2">
                                    <i className='bx bxl-facebook'></i>
                                </a>

                                <a href="" target="_blank" className="contact__social-link2">
                                    <i className='bx bxl-instagram'></i>
                                </a>

                                <a href="" target="_blank" className="contact__social-link2">
                                    <i className='bx bxl-linkedin'></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Contact
