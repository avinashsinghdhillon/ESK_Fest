import React from 'react';
import { Container } from '../Grid';
import '../Privacy/Privacy.css';

function Privacy() {
        return (
            <Container>
            <div id="privacy-div">
                        <h1>Privacy Notice</h1> 
                            <h5>
                                This privacy notice discloses the privacy practices for the Eastside Kings Festival website. This privacy notice applies solely to information collected by this website.
                                It will notify you of the following:
                            </h5>

                            <ol>
                                <li>What personally identifiable information is collected from you through the website, how it is used and with whom it may be shared.</li>
                                <li>What choices are available to you regarding the use of your data.</li>
                                <li>The security procedures in place to protect the misuse of your information.</li>
                                <li>Registering an account.</li>
                                <li>Information about cookies.</li>
                                <li>Information about Surveys and Contests.</li>
                                <li>How you can correct any inaccuracies in the information.</li>
                            </ol>
                        
                        <div className='privacy'>
                            <h6>Information Collection, Use, and Sharing </h6>
                            
                            <p>
                            We are the sole owners of the information collected on this site. We only have access to/collect information that you voluntarily give us via email or other direct contact from you. We will not sell or rent this information to anyone.  
                            We will use your information to respond to you, regarding the reason you contacted us. We will not share your information with any third party outside of our organization, other than as necessary to fulfill your request, e.g. to ship an order.
                            Unless you ask us not to, we may contact you via email in the future to tell you about specials, new products or services, or changes to this privacy policy.
                            </p>
                        </div>

                        <div className='privacy'>
                            <h6>Your Access to and Control Over Information</h6> 
                            <p>
                            You may opt out of any future contacts from us at any time. You can do the following at any time by contacting us via the email address or phone number given on our website:
                            </p>
                                <ol>
                                    <li>See what data we have about you, if any.</li>
                                    <li>Change/correct any data we have about you.</li>
                                    <li>Have us delete any data we have about you.</li>
                                    <li>Express any concern you have about our use of your data.</li>
                                </ol>
                        </div>

                        <div className='privacy'>
                            <h6>Security</h6> 
                            <p>
                            We take precautions to protect your information. When you submit sensitive information via the website, your information is protected both online and offline.

                            Wherever we collect sensitive information (such as credit card information), that information is encrypted and transmitted to us in a secure way. You can verify this by looking for a lock icon in the address bar and looking for "https" at the beginning of the address of the Web page.

                            While we use encryption to protect sensitive information transmitted online, we also protect your information offline. Only employees who need the information to perform a specific job (for example, billing or customer service) are granted access to personally identifiable information. The computers/servers in which we store personally identifiable information are kept in a secure environment.
                            </p>
                        </div>

                        <div className='privacy'>
                            <h6>Registration</h6>
                            <p>
                                In order to use certain features of this website, a user must first complete the registration form. During registration a user is required to give certain information (such as name and email address).
                                This information is used to contact you about the products/services on our site in which you have expressed interest. At your option, you may also provide demographic information (such as gender or age) about yourself, but it is not required.
                            </p>
                        </div>

                        <div className='privacy'>
                            <h6>Cookies</h6>
                            <p>
                            We use "cookies" on this site in order to provide you with a personalized service. A cookie is a piece of data stored on a site visitor's hard drive to help us improve your access to our site and identify repeat visitors to our site. For instance, when we use a cookie to identify you, you would not have to log in a password more than once, thereby saving time while on our site.
                            Cookies can also enable us to track and target the interests of our users to enhance the experience on our site. Usage of a cookie is in no way linked to any personally identifiable information on our site.
                            Want more information on cookies? <a href="https://www.cookiesandyou.com/" rel="noopener noreferrer" target="_blank">Learn More</a>
                            </p>
                        </div>

                        <div className='privacy'>
                            <h6>Surveys and Contests </h6>
                            <p>
                            From time-to-time our site requests information via surveys or contests. Participation in these surveys or contests is completely voluntary and you may choose whether or not to participate and therefore disclose this information. Information requested may include contact information (such as name and shipping address), and demographic information (such as zip code, age level). Contact information will be used to notify the winners and award prizes.
                            Survey information will be used to help our grantors understand the scope of our audience which in turn will help us with future grant applications.
                            </p>
                        </div>

                        <h6>If you feel that we are not abiding by this privacy policy, you should contact us immediately via telephone at 512 228-8434 or via email.</h6>
                    </div>
            </Container>
        )
    
};

export default Privacy;