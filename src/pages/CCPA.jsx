import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const CCPA = () => {
  return (
    <>
      <section className="relative min-h-screen bg-black pt-24 pb-24 overflow-hidden text-white">
        {/* Background Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(37,99,255,0.18),transparent_50%)]" />

        <div className="relative z-10 mx-auto max-w-5xl px-6">
          {/* Header */}
          <div className="mb-16 text-center">
            <h1 className="mb-6 text-5xl font-bold md:text-6xl">
              <span className="bg-gradient-to-r from-blue-500 via-white to-blue-400 bg-clip-text text-transparent">
                CCPA &amp; CPRA Privacy Notice
              </span>
            </h1>

            <p className="text-lg text-zinc-400">
              California Residents | Last Updated: August 2026
            </p>
          </div>

          {/* Content */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl md:p-12">
            <div className="space-y-12">
              {/* 1 */}
              <div>
                <h2 className="mb-4 text-2xl font-semibold">1. Introduction</h2>

                <p className="leading-8 text-zinc-400">
                  This CCPA &amp; CPRA Privacy Notice ("Notice") applies to
                  California residents and explains how RA Marketer ("RA
                  Marketer", "we", "our", or "us") may collect, use, disclose,
                  retain, and otherwise process personal information as
                  described by the California Consumer Privacy Act of 2018
                  ("CCPA"), as amended by the California Privacy Rights Act
                  ("CPRA"), where applicable.
                </p>

                <p className="mt-4 leading-8 text-zinc-400">
                  This Notice supplements our Privacy Policy and applies to
                  personal information collected through our website,
                  communications, forms, service inquiries, and other
                  interactions with RA Marketer.
                </p>
              </div>

              {/* 2 */}
              <div>
                <h2 className="mb-4 text-2xl font-semibold">
                  2. Who This Notice Applies To
                </h2>

                <p className="leading-8 text-zinc-400">
                  This Notice is intended for California residents whose
                  personal information is processed by a business subject to the
                  CCPA. The CCPA applies only to businesses that meet the legal
                  requirements and applicable thresholds established under
                  California law.
                </p>

                <p className="mt-4 leading-8 text-zinc-400">
                  Even where a particular CCPA obligation does not apply to RA
                  Marketer, we may voluntarily provide privacy choices and
                  protections described in this Notice.
                </p>
              </div>

              {/* 3 */}
              <div>
                <h2 className="mb-4 text-2xl font-semibold">
                  3. Personal Information We May Collect
                </h2>

                <p className="mb-4 leading-8 text-zinc-400">
                  Depending on how you interact with us, we may collect the
                  following categories of personal information:
                </p>

                <h3 className="mb-3 text-xl font-medium text-white">
                  Identifiers
                </h3>

                <ul className="mb-6 space-y-2 text-zinc-400">
                  <li>• Name</li>
                  <li>• Email address</li>
                  <li>• Telephone or phone number</li>
                  <li>• Company name</li>
                  <li>• Online identifiers</li>
                </ul>

                <h3 className="mb-3 text-xl font-medium text-white">
                  Professional or Business Information
                </h3>

                <ul className="mb-6 space-y-2 text-zinc-400">
                  <li>• Job title</li>
                  <li>• Company or organization information</li>
                  <li>• Industry information</li>
                  <li>• Business requirements</li>
                  <li>• Service preferences</li>
                </ul>

                <h3 className="mb-3 text-xl font-medium text-white">
                  Internet or Network Information
                </h3>

                <ul className="mb-6 space-y-2 text-zinc-400">
                  <li>• IP address</li>
                  <li>• Browser type</li>
                  <li>• Device information</li>
                  <li>• Operating system</li>
                  <li>• Website activity and interaction data</li>
                </ul>

                <h3 className="mb-3 text-xl font-medium text-white">
                  Inferences
                </h3>

                <ul className="space-y-2 text-zinc-400">
                  <li>• Preferences inferred from website interactions</li>
                  <li>• Business interests or service preferences</li>
                </ul>
              </div>

              {/* 4 */}
              <div>
                <h2 className="mb-4 text-2xl font-semibold">
                  4. Sensitive Personal Information
                </h2>

                <p className="leading-8 text-zinc-400">
                  RA Marketer does not intentionally request sensitive personal
                  information from visitors for ordinary website inquiries or
                  business service requests.
                </p>

                <p className="mt-4 leading-8 text-zinc-400">
                  Sensitive personal information under California law can
                  include information such as government identifiers, account
                  login credentials, precise geolocation, certain financial
                  information, genetic or biometric information used for
                  identification, health information, and certain information
                  concerning racial or ethnic origin, religious or philosophical
                  beliefs, union membership, or sexual orientation.
                </p>
              </div>

              {/* 5 */}
              <div>
                <h2 className="mb-4 text-2xl font-semibold">
                  5. Sources of Personal Information
                </h2>

                <p className="mb-4 leading-8 text-zinc-400">
                  We may obtain personal information from the following
                  categories of sources:
                </p>

                <ul className="space-y-2 text-zinc-400">
                  <li>• Directly from you</li>
                  <li>• Forms and inquiries submitted through our website</li>
                  <li>• Communications with our team</li>
                  <li>• Your use of our website</li>
                  <li>• Cookies and similar technologies</li>
                  <li>• Analytics and technology providers</li>
                  <li>• Publicly available business information</li>
                </ul>
              </div>

              {/* 6 */}
              <div>
                <h2 className="mb-4 text-2xl font-semibold">
                  6. How We Use Personal Information
                </h2>

                <p className="mb-4 leading-8 text-zinc-400">
                  We may use personal information for legitimate business and
                  operational purposes, including:
                </p>

                <ul className="space-y-2 text-zinc-400">
                  <li>• Responding to inquiries and requests</li>
                  <li>• Providing and managing requested services</li>
                  <li>• Communicating with customers and prospects</li>
                  <li>• Scheduling meetings and consultations</li>
                  <li>• Sending requested business communications</li>
                  <li>• Improving our website and services</li>
                  <li>• Understanding website usage and performance</li>
                  <li>• Detecting security incidents and preventing fraud</li>
                  <li>• Maintaining business and operational records</li>
                  <li>• Complying with applicable legal obligations</li>
                </ul>
              </div>

              {/* 7 */}
              <div>
                <h2 className="mb-4 text-2xl font-semibold">
                  7. Sale and Sharing of Personal Information
                </h2>

                <p className="leading-8 text-zinc-400">
                  RA Marketer does not sell personal information for monetary
                  consideration.
                </p>

                <p className="mt-4 leading-8 text-zinc-400">
                  We also do not knowingly share personal information for
                  cross-context behavioral advertising. If our practices change
                  in a manner that constitutes a sale or sharing under the CCPA,
                  we will update this Notice and provide any legally required
                  opt-out mechanisms.
                </p>
              </div>

              {/* 8 */}
              <div>
                <h2 className="mb-4 text-2xl font-semibold">
                  8. Categories of Third Parties
                </h2>

                <p className="mb-4 leading-8 text-zinc-400">
                  Depending on our business operations, we may disclose
                  information to categories of recipients such as:
                </p>

                <ul className="space-y-2 text-zinc-400">
                  <li>• Website and hosting providers</li>
                  <li>• Email and communication providers</li>
                  <li>• Analytics and technology providers</li>
                  <li>• Business service providers</li>
                  <li>• Professional advisers</li>
                  <li>• Government authorities where legally required</li>
                </ul>

                <p className="mt-4 leading-8 text-zinc-400">
                  These disclosures are made for business and operational
                  purposes and are subject to applicable contractual and legal
                  requirements.
                </p>
              </div>

              {/* 9 */}
              <div>
                <h2 className="mb-4 text-2xl font-semibold">
                  9. Retention of Personal Information
                </h2>

                <p className="leading-8 text-zinc-400">
                  We retain personal information only for as long as reasonably
                  necessary for the purposes for which it was collected,
                  including providing services, maintaining business records,
                  resolving disputes, complying with legal obligations, and
                  protecting our legitimate business interests.
                </p>

                <p className="mt-4 leading-8 text-zinc-400">
                  Retention periods may vary depending on the category of
                  information and the purpose for which it is processed.
                </p>
              </div>

              {/* 10 */}
              <div>
                <h2 className="mb-4 text-2xl font-semibold">
                  10. Your California Privacy Rights
                </h2>

                <p className="mb-4 leading-8 text-zinc-400">
                  Subject to applicable legal requirements and exceptions,
                  California residents may have the following rights:
                </p>

                <ul className="space-y-3 text-zinc-400">
                  <li>
                    • <strong className="text-white">Right to Know:</strong>{" "}
                    Request information about the personal information we
                    collect, use, disclose, or otherwise process.
                  </li>

                  <li>
                    • <strong className="text-white">Right to Delete:</strong>{" "}
                    Request deletion of personal information we have collected,
                    subject to legal exceptions.
                  </li>

                  <li>
                    • <strong className="text-white">Right to Correct:</strong>{" "}
                    Request correction of inaccurate personal information.
                  </li>

                  <li>
                    • <strong className="text-white">Right to Opt-Out:</strong>{" "}
                    Request to opt out of the sale or sharing of personal
                    information where applicable.
                  </li>

                  <li>
                    • <strong className="text-white">Right to Limit:</strong>{" "}
                    Request to limit certain uses and disclosures of sensitive
                    personal information where applicable.
                  </li>

                  <li>
                    •{" "}
                    <strong className="text-white">
                      Right to Non-Discrimination:
                    </strong>{" "}
                    You have the right not to receive discriminatory treatment
                    for exercising CCPA rights.
                  </li>
                </ul>
              </div>

              {/* 11 */}
              <div>
                <h2 className="mb-4 text-2xl font-semibold">
                  11. Right to Opt Out of Sale or Sharing
                </h2>

                <p className="leading-8 text-zinc-400">
                  California residents have the right to opt out of the sale or
                  sharing of personal information when those activities are
                  applicable under the CCPA.
                </p>

                <p className="mt-4 leading-8 text-zinc-400">
                  RA Marketer currently does not sell personal information and
                  does not knowingly share personal information for
                  cross-context behavioral advertising.
                </p>

                <p className="mt-4 leading-8 text-zinc-400">
                  Where required by applicable law, we will honor a valid
                  opt-out preference signal, including the Global Privacy
                  Control (GPC).
                </p>
              </div>

              {/* 12 */}
              <div>
                <h2 className="mb-4 text-2xl font-semibold">
                  12. Right to Limit Sensitive Personal Information
                </h2>

                <p className="leading-8 text-zinc-400">
                  California residents may have the right to limit the use and
                  disclosure of sensitive personal information where the CCPA
                  provides that right.
                </p>

                <p className="mt-4 leading-8 text-zinc-400">
                  RA Marketer does not intentionally collect sensitive personal
                  information through ordinary website contact and service
                  inquiry forms.
                </p>
              </div>

              {/* 13 */}
              <div>
                <h2 className="mb-4 text-2xl font-semibold">
                  13. How to Submit a Privacy Request
                </h2>

                <p className="leading-8 text-zinc-400">
                  California residents may contact us to request access,
                  deletion, correction, or other privacy rights available under
                  applicable California law.
                </p>

                <p className="mt-4 leading-8 text-zinc-400">
                  Requests should include enough information for us to
                  reasonably verify your identity and understand the nature of
                  your request.
                </p>

                <div className="mt-6 rounded-2xl border border-blue-500/20 bg-blue-500/5 p-6">
                  <h3 className="mb-4 text-xl font-semibold text-white">
                    Privacy Requests
                  </h3>

                  <p className="text-zinc-400">Email: rahul@ramarketer.com</p>

                  <p className="mt-2 text-zinc-400">
                    Subject: California Privacy Rights Request
                  </p>
                </div>
              </div>

              {/* 14 */}
              <div>
                <h2 className="mb-4 text-2xl font-semibold">
                  14. Verification of Requests
                </h2>

                <p className="leading-8 text-zinc-400">
                  To protect personal information, we may need to verify the
                  identity of a person submitting a privacy request. The
                  verification process may depend on the nature and sensitivity
                  of the request and the information reasonably available to us.
                </p>

                <p className="mt-4 leading-8 text-zinc-400">
                  We will use personal information provided for verification
                  only as reasonably necessary to process and respond to the
                  request.
                </p>
              </div>

              {/* 15 */}
              <div>
                <h2 className="mb-4 text-2xl font-semibold">
                  15. Authorized Agents
                </h2>

                <p className="leading-8 text-zinc-400">
                  California residents may have the right to use an authorized
                  agent to submit certain privacy requests on their behalf,
                  subject to applicable verification and authorization
                  requirements.
                </p>

                <p className="mt-4 leading-8 text-zinc-400">
                  We may require proof that the agent has been authorized to act
                  on the consumer's behalf and may also require identity
                  verification as permitted by law.
                </p>
              </div>

              {/* 16 */}
              <div>
                <h2 className="mb-4 text-2xl font-semibold">
                  16. Response to Privacy Requests
                </h2>

                <p className="leading-8 text-zinc-400">
                  We will review and respond to verified consumer requests
                  within the time periods required by applicable law. If we need
                  additional time where legally permitted, we will communicate
                  the reason and any applicable extension.
                </p>

                <p className="mt-4 leading-8 text-zinc-400">
                  Certain requests may be denied or limited where an exception
                  under the CCPA applies.
                </p>
              </div>

              {/* 17 */}
              <div>
                <h2 className="mb-4 text-2xl font-semibold">
                  17. Children's Privacy
                </h2>

                <p className="leading-8 text-zinc-400">
                  Our services are intended for businesses and business
                  professionals. We do not knowingly collect personal
                  information from children under 13 through our website.
                </p>

                <p className="mt-4 leading-8 text-zinc-400">
                  If you believe that a child has provided personal information
                  to us, please contact us so that we can review and take
                  appropriate action.
                </p>
              </div>

              {/* 18 */}
              <div>
                <h2 className="mb-4 text-2xl font-semibold">
                  18. Changes to This Notice
                </h2>

                <p className="leading-8 text-zinc-400">
                  We may update this CCPA &amp; CPRA Privacy Notice from time to
                  time to reflect changes in our services, technology, legal
                  requirements, or privacy practices.
                </p>

                <p className="mt-4 leading-8 text-zinc-400">
                  When changes are made, we will update the "Last Updated" date
                  displayed at the top of this Notice.
                </p>
              </div>

              {/* Contact */}
              <div>
                <h2 className="mb-6 text-2xl font-semibold">Contact Us</h2>

                <div className="rounded-2xl border border-blue-500/20 bg-blue-500/5 p-6">
                  <h3 className="mb-4 text-xl font-semibold text-white">
                    RA Marketer
                  </h3>

                  <p className="text-zinc-400">Email: rahul@ramarketer.com</p>

                  <p className="mt-2 text-zinc-400">Phone: +91 95183 82824</p>

                  <p className="mt-2 text-zinc-400">
                    Website: www.ramarketer.com
                  </p>

                  <p className="mt-4 text-sm leading-7 text-zinc-500">
                    For California privacy requests, please use the subject
                    "California Privacy Rights Request" when contacting us by
                    email.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CCPA;
