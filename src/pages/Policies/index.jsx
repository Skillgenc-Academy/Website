import { useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import styles from './Policies.module.css'

const RefundPolicy = () => (
  <>
    <p><strong>Last Updated: August 25, 2026</strong></p>
    <p>At Skillgenc, we want every parent to feel confident before committing to a learning program. That's why we offer a simple 7-Day, No-Questions-Asked Refund Policy.</p>
    
    <h3>1. 7-Day Refund</h3>
    <p>If you purchase a Skillgenc program and decide that it isn't the right fit for your child, you can request a refund within 7 calendar days of your purchase.</p>
    <ul>
      <li>No questions asked.</li>
      <li>You do not need to provide a reason for requesting the refund.</li>
    </ul>

    <h3>2. How to Request a Refund</h3>
    <p>To request a refund, contact us through our official support channel within 7 calendar days of the purchase.</p>
    <p>Please provide:</p>
    <ul>
      <li>Parent/guardian name</li>
      <li>Student name</li>
      <li>Registered email or phone number</li>
      <li>Payment details</li>
    </ul>
    <p>Once we receive your request, we will confirm the request and process the eligible refund.</p>

    <h3>3. Refund Processing</h3>
    <ul>
      <li>Approved refunds will be processed through the original payment method wherever possible.</li>
      <li>The time taken for the amount to appear in your account may depend on the payment gateway, bank or payment provider.</li>
      <li>Skillgenc is not responsible for delays caused by banks or third-party payment providers.</li>
    </ul>

    <h3>4. After the 7-Day Period</h3>
    <p>After the 7-day refund period has ended, payments are generally non-refundable.</p>
    <p>However, if there is an issue with the delivery of the program or another exceptional circumstance, you can contact us and we will review the situation fairly.</p>
    <p>Where appropriate, we may offer alternatives such as:</p>
    <ul>
      <li>Rescheduling</li>
      <li>Replacement classes</li>
      <li>Package extension</li>
      <li>Credit towards another program</li>
    </ul>

    <h3>5. Classes and Attendance</h3>
    <p>Not attending a class, missing a scheduled session or being unable to participate does not automatically extend the 7-day refund period.</p>
    <p>Parents are encouraged to contact us as soon as possible if there is a scheduling, technical or service-related issue.</p>

    <h3>6. Skillgenc Cancellation</h3>
    <p>If Skillgenc is unable to deliver a purchased program and cannot provide a reasonable alternative, we will work with the parent to provide an appropriate solution, which may include a refund for the undelivered portion where applicable.</p>

    <h3>7. Payment Issues</h3>
    <p>If you believe you have been charged incorrectly, charged more than once, or made an unauthorised payment, please contact us as soon as possible so that we can investigate and resolve the issue.</p>

    <h3>8. Changes to This Policy</h3>
    <p>Skillgenc may update this Refund Policy from time to time. Any changes will be published on this page with an updated date.</p>

    <h3>9. Contact Us</h3>
    <p>For refund-related questions or requests:</p>
    <ul>
      <li>Email: admin@skillgenc.com, skillgenc@gmail.com</li>
      <li>Phone/WhatsApp: +91 9008568002, +91 8074555644</li>
    </ul>
    <p>Our promise is simple: try Skillgenc with confidence. If you decide within 7 days that it's not the right fit, we'll refund your payment — no questions asked.</p>
  </>
);

const PrivacyPolicy = () => (
  <>
    <p><strong>Last Updated: August 25, 2026</strong></p>
    <p>At Skillgenc, we respect your privacy and are committed to protecting the personal information shared with us by parents, students and visitors to our website.</p>
    <p>This Privacy Policy explains what information we collect, why we collect it and how we use and protect it.</p>
    
    <h3>1. Information We Collect</h3>
    <p>Depending on how you interact with Skillgenc, we may collect information such as:</p>
    <ul>
      <li>Parent or guardian name</li>
      <li>Student name</li>
      <li>Email address</li>
      <li>Phone number</li>
      <li>Student's age or date of birth</li>
      <li>Information related to the student's chess level and learning requirements</li>
      <li>Class and enrolment information</li>
      <li>Payment and transaction information</li>
      <li>Feedback or communication shared with us</li>
      <li>Website usage information, such as browser, device and basic technical information</li>
    </ul>
    <p>We only collect information that is reasonably necessary to provide and improve our services.</p>

    <h3>2. How We Use Your Information</h3>
    <p>We may use the information we collect to:</p>
    <ul>
      <li>Provide chess classes and learning services</li>
      <li>Understand a student's learning requirements</li>
      <li>Manage enrolments and payments</li>
      <li>Communicate about classes, schedules and services</li>
      <li>Provide customer support</li>
      <li>Conduct assessments and track learning progress</li>
      <li>Maintain student and parent records</li>
      <li>Improve our website, programs and learning experience</li>
      <li>Send important service-related communications</li>
      <li>Send promotional or marketing communications where permitted</li>
      <li>Protect the security and integrity of our website and services</li>
      <li>Comply with applicable laws and legal requirements</li>
    </ul>

    <h3>3. Children's Information</h3>
    <p>Skillgenc provides learning services for children, so we take children's information and privacy seriously.</p>
    <p>We generally collect information about a student through their parent or legal guardian and use it for purposes connected with providing the learning services.</p>
    <p>Parents or legal guardians may contact us regarding the information we hold about their child and may request appropriate corrections or updates, subject to applicable law.</p>

    <h3>4. Payment Information</h3>
    <p>Payments may be processed through secure third-party payment providers.</p>
    <p>Skillgenc does not intend to store complete card, banking or other sensitive payment credentials when these are handled directly by the payment provider.</p>
    <p>Payment providers may process information according to their own privacy policies and terms.</p>

    <h3>5. Information Sharing</h3>
    <p>We do not sell your personal information.</p>
    <p>We may share limited information with trusted service providers when necessary to operate our services. These may include providers for:</p>
    <ul>
      <li>Payment processing</li>
      <li>Online classes and communication</li>
      <li>Website hosting and technology</li>
      <li>Analytics</li>
      <li>Customer support</li>
      <li>Communication services</li>
    </ul>
    <p>We may also disclose information where required by law or where reasonably necessary to protect the rights, safety or security of Skillgenc, our users or others.</p>

    <h3>6. Cookies and Website Technologies</h3>
    <p>Our website may use cookies and similar technologies to:</p>
    <ul>
      <li>Improve website functionality</li>
      <li>Remember preferences</li>
      <li>Understand website usage</li>
      <li>Improve performance</li>
      <li>Support analytics and marketing activities</li>
    </ul>
    <p>You can manage or disable cookies through your browser settings. Some website features may not function properly if certain cookies are disabled.</p>

    <h3>7. Communication</h3>
    <p>We may contact parents or users through email, phone, WhatsApp, SMS or other communication channels provided to us for purposes such as:</p>
    <ul>
      <li>Class information</li>
      <li>Schedule updates</li>
      <li>Payment confirmations</li>
      <li>Support</li>
      <li>Assessments</li>
      <li>Important service notifications</li>
    </ul>
    <p>Marketing communications may be sent separately where permitted by applicable law, and you may request to stop receiving promotional communications.</p>

    <h3>8. Data Security</h3>
    <p>We take reasonable measures to protect personal information from unauthorised access, misuse, loss or disclosure.</p>
    <p>However, no online system can be guaranteed to be completely secure.</p>

    <h3>9. Your Rights</h3>
    <p>Depending on applicable law, you may have rights regarding your personal information, including the ability to:</p>
    <ul>
      <li>Request access to information we hold about you</li>
      <li>Request correction of inaccurate information</li>
      <li>Request deletion where legally applicable</li>
      <li>Withdraw consent where applicable</li>
      <li>Ask questions about how your information is being used</li>
    </ul>
    <p>To make a privacy-related request, please contact us using the details below.</p>

    <h3>10. Third-Party Services</h3>
    <p>Skillgenc may use third-party platforms and services to provide certain parts of the learning experience.</p>
    <p>These services may have their own privacy policies and terms. We encourage parents to review those policies where relevant.</p>

    <h3>11. Changes to This Privacy Policy</h3>
    <p>We may update this Privacy Policy from time to time to reflect changes to our services, technology or legal requirements.</p>
    <p>Any updated version will be published on this page with a revised "Last Updated" date.</p>

    <h3>12. Contact Us</h3>
    <p>If you have questions, concerns or requests regarding this Privacy Policy, please contact us:</p>
    <ul>
      <li>Email: admin@skillgenc.com, skillgenc@gmail.com</li>
      <li>Phone/WhatsApp: +91 9008568002, +91 8074555644</li>
      <li>Address: 16th Main Rd, 4th T Block East, Pattabhirama Nagar, Jayanagar, Bengaluru, Karnataka 560041</li>
    </ul>
  </>
);

const TermsOfService = () => (
  <>
    <p><strong>Last Updated: August 25, 2026</strong></p>
    <p>Welcome to Skillgenc.</p>
    <p>These Terms of Service explain the terms that apply when you use the Skillgenc website, enroll in our programs, attend classes or use our learning services.</p>
    <p>By purchasing or using Skillgenc services, you agree to these Terms.</p>

    <h3>1. About Skillgenc</h3>
    <p>Skillgenc provides chess education and related learning services through online classes, digital learning tools, assessments, practice activities and other educational programs offered from time to time.</p>

    <h3>2. Parent or Guardian Responsibility</h3>
    <p>Our services may be used by children and minors.</p>
    <p>Where the student is under 18, enrollment and payment must be completed or authorised by a parent or legal guardian.</p>
    <p>The parent or guardian is responsible for:</p>
    <ul>
      <li>Providing accurate information</li>
      <li>Authorising the child's participation</li>
      <li>Making payments</li>
      <li>Ensuring the child has a suitable device and internet connection</li>
      <li>Supporting appropriate and respectful use of the learning platform</li>
    </ul>

    <h3>3. Our Services</h3>
    <p>Skillgenc may offer:</p>
    <ul>
      <li>Live online chess classes</li>
      <li>Group classes</li>
      <li>1-on-1 coaching</li>
      <li>Practice activities</li>
      <li>Chess puzzles</li>
      <li>Game analysis</li>
      <li>Assessments</li>
      <li>Level-based learning programs</li>
      <li>Certificates</li>
      <li>Tournament preparation</li>
      <li>Other chess-related educational programs</li>
    </ul>
    <p>The exact services included in a particular package will be communicated at the time of purchase.</p>

    <h3>4. Enrollment and Payment</h3>
    <p>Program fees, duration, number of sessions and other applicable details will be displayed or communicated before purchase.</p>
    <p>Payments must be made through the payment methods provided by Skillgenc or its authorised payment partners.</p>
    <p>By making a payment, you confirm that you are authorised to use the selected payment method.</p>

    <h3>5. 7-Day Refund</h3>
    <p>Skillgenc offers a 7-day, no-questions-asked refund on eligible program purchases.</p>
    <p>If you decide within 7 calendar days of purchase that the program is not right for your child, you may request a refund without providing a reason.</p>
    <p>For complete details, please refer to our Refund Policy.</p>
    <p>After the 7-day period, refunds are generally not available except where required by applicable law or where Skillgenc agrees otherwise.</p>

    <h3>6. Classes and Scheduling</h3>
    <p>Class schedules, duration and frequency will depend on the program purchased.</p>
    <p>Students are expected to attend classes on time.</p>
    <p>If a student misses a class, the session may be treated as delivered unless the applicable program specifically provides for a make-up session or another arrangement.</p>
    <p>If Skillgenc needs to cancel or reschedule a class, we will make reasonable efforts to provide an alternative arrangement.</p>

    <h3>7. Technical Requirements</h3>
    <p>Students are responsible for having:</p>
    <ul>
      <li>A suitable device (Laptop or a Tablet only)</li>
      <li>A stable internet connection</li>
      <li>A suitable environment for attending classes</li>
    </ul>
    <p>Skillgenc is not responsible for problems caused solely by a student's device, internet connection or local technical issues.</p>

    <h3>8. Student Conduct</h3>
    <p>Students are expected to behave respectfully towards coaches, staff and other students.</p>
    <p>The following are not permitted:</p>
    <ul>
      <li>Bullying or harassment</li>
      <li>Abusive or inappropriate behaviour</li>
      <li>Impersonation</li>
      <li>Disrupting classes</li>
      <li>Sharing another person's private information</li>
      <li>Unauthorised access to accounts or systems</li>
      <li>Any behaviour that compromises the safety or learning experience of others</li>
    </ul>
    <p>Skillgenc may restrict or suspend access to services in cases of serious or repeated misconduct.</p>

    <h3>9. Fair Play</h3>
    <p>Students are expected to play fairly during games, assessments and competitive activities.</p>
    <p>Unless specifically permitted for a learning activity, students must not use chess engines, outside assistance, another person's account or other tools to gain an unfair advantage.</p>
    <p>Skillgenc may take appropriate action if cheating or manipulation is identified.</p>

    <h3>10. Learning Results</h3>
    <p>Skillgenc is committed to providing quality chess education, but individual progress depends on factors such as attendance, practice, effort, prior experience and individual learning ability.</p>
    <p>We do not guarantee a specific chess rating, tournament result, title, ranking or other competitive outcome.</p>

    <h3>11. Assessments and Progression</h3>
    <p>Skillgenc may conduct assessments to evaluate a student's progress and readiness for the next stage of learning.</p>
    <p>Students who successfully complete the requirements of a level may receive a Level Completion Certificate and be recommended for progression to the next level.</p>
    <p>Assessment results and progression decisions are based on Skillgenc's learning framework and evaluation process.</p>
    <p>A certificate confirms completion of the applicable Skillgenc level and should not be interpreted as a guarantee of any external chess rating, title or tournament qualification.</p>

    <h3>12. Learning Materials and Intellectual Property</h3>
    <p>All Skillgenc content and materials, including:</p>
    <ul>
      <li>Lesson content</li>
      <li>Videos</li>
      <li>Worksheets</li>
      <li>Chess positions</li>
      <li>Puzzles</li>
      <li>Curriculum</li>
      <li>Assessments</li>
      <li>Graphics</li>
      <li>Website content</li>
      <li>Branding</li>
      <li>Other educational materials</li>
    </ul>
    <p>belong to Skillgenc or its respective licensors unless stated otherwise.</p>
    <p>These materials are provided for the student's personal educational use.</p>
    <p>They may not be copied, resold, redistributed, publicly uploaded, commercially used or reproduced without prior written permission.</p>

    <h3>13. Digital Platforms and Third-Party Services</h3>
    <p>Skillgenc may use third-party platforms and technologies to support classes, communication, chess games, practice and other learning activities.</p>
    <p>Use of such platforms may also be subject to their respective terms and policies.</p>
    <p>Skillgenc is not responsible for changes, outages or limitations caused solely by third-party services, although we will make reasonable efforts to provide an alternative where appropriate.</p>

    <h3>14. Privacy</h3>
    <p>Your use of Skillgenc is also subject to our Privacy Policy, which explains how we collect, use and protect personal information.</p>

    <h3>15. Changes to Programs</h3>
    <p>Skillgenc may make reasonable changes to class schedules, coaches, learning materials, platforms or program structures when necessary to maintain or improve the learning experience.</p>
    <p>We will make reasonable efforts to avoid significant disruption to enrolled students.</p>

    <h3>16. Suspension or Termination</h3>
    <p>Skillgenc may suspend or terminate access to its services if a user:</p>
    <ul>
      <li>Violates these Terms</li>
      <li>Engages in serious misconduct</li>
      <li>Attempts to misuse the platform</li>
      <li>Engages in fraudulent activity</li>
      <li>Repeatedly violates fair-play or safety requirements</li>
    </ul>
    <p>Any refund resulting from termination will be handled according to the Refund Policy and applicable law.</p>

    <h3>17. Limitation of Responsibility</h3>
    <p>Skillgenc will make reasonable efforts to provide reliable educational services.</p>
    <p>However, we cannot guarantee that the website, online platforms or services will always be uninterrupted or error-free.</p>
    <p>To the extent permitted by applicable law, Skillgenc will not be responsible for losses arising solely from circumstances outside our reasonable control, including third-party platform failures, internet outages or technical issues on the user's side.</p>
    <p>Nothing in these Terms limits any rights or protections that cannot legally be excluded under applicable law.</p>

    <h3>18. Changes to These Terms</h3>
    <p>We may update these Terms from time to time.</p>
    <p>The updated version will be published on this page with a revised "Last Updated" date.</p>
    <p>Your continued use of Skillgenc services after an update means that the updated Terms will apply, subject to applicable law.</p>

    <h3>19. Governing Law</h3>
    <p>These Terms will be governed by the laws applicable to Skillgenc's registered business entity, subject to any mandatory consumer-protection rights or jurisdictional requirements that apply to you.</p>

    <h3>20. Contact Us</h3>
    <p>If you have questions regarding these Terms, please contact us:</p>
    <ul>
      <li>Email: admin@skillgenc.com, skillgenc@gmail.com</li>
      <li>Phone/WhatsApp: +91 9008568002, +91 8074555644</li>
      <li>Address: 16th Main Rd, 4th T Block East, Pattabhirama Nagar, Jayanagar, Bengaluru, Karnataka 560041</li>
    </ul>
  </>
);

export default function Policies() {
  const { pathname } = useLocation()
  
  let title = "Legal Policies"
  let content = <p>This page is currently being updated. Please check back later.</p>

  if (pathname === '/privacy-policy') {
    title = "Privacy Policy"
    content = <PrivacyPolicy />
  } else if (pathname === '/terms') {
    title = "Terms of Service"
    content = <TermsOfService />
  } else if (pathname === '/refund-policy') {
    title = "Refund Policy"
    content = <RefundPolicy />
  }

  return (
    <div style={{ paddingTop: '120px', paddingBottom: '80px', minHeight: '80vh', backgroundColor: '#f8f9fc' }}>
      <Helmet>
        <title>{title} | Skillgenc Chess Academy</title>
      </Helmet>
      <div className="container">
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h1 className="hero-title" style={{ marginBottom: '40px', fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: '#013D96', textAlign: 'center' }}>
            {title}
          </h1>
          <div className={styles.policyContainer}>
            {content}
          </div>
        </div>
      </div>
    </div>
  )
}
