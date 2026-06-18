import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const PrivacyPolicy = () => {
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
                Privacy Policy
              </span>
            </h1>

            <p className="text-lg text-zinc-400">Last Updated: June 2026</p>
          </div>

          {/* Content */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl md:p-12">
            <div className="space-y-12">
              <div>
                <h2 className="mb-4 text-2xl font-semibold">1. Introduction</h2>

                <p className="leading-8 text-zinc-400">
                  At RA Marketer ("we", "our", or "us"), we respect your privacy
                  and are committed to protecting the personal information you
                  share with us. This Privacy Policy explains how we collect,
                  use, process, store, and protect your information when you
                  visit our website, interact with our content, request our
                  services, or communicate with our team.
                </p>

                <p className="mt-4 leading-8 text-zinc-400">
                  By using our website and services, you agree to the practices
                  described in this Privacy Policy. If you do not agree with
                  this policy, please discontinue use of our website and
                  services.
                </p>
              </div>

              <div>
                <h2 className="mb-4 text-2xl font-semibold">
                  2. Information We Collect
                </h2>

                <p className="mb-4 text-zinc-400">
                  We may collect various categories of information to provide,
                  improve, and personalize our services.
                </p>

                <h3 className="mb-3 text-xl font-medium text-white">
                  Personal Information
                </h3>

                <ul className="mb-6 space-y-2 text-zinc-400">
                  <li>• Full Name</li>
                  <li>• Email Address</li>
                  <li>• Phone Number</li>
                  <li>• Company Name</li>
                  <li>• Job Title</li>
                  <li>• Business Contact Information</li>
                </ul>

                <h3 className="mb-3 text-xl font-medium text-white">
                  Business Information
                </h3>

                <ul className="mb-6 space-y-2 text-zinc-400">
                  <li>• Company Size</li>
                  <li>• Industry Type</li>
                  <li>• Marketing Goals</li>
                  <li>• Business Requirements</li>
                  <li>• Service Preferences</li>
                </ul>

                <h3 className="mb-3 text-xl font-medium text-white">
                  Technical Information
                </h3>

                <ul className="space-y-2 text-zinc-400">
                  <li>• IP Address</li>
                  <li>• Browser Type</li>
                  <li>• Device Information</li>
                  <li>• Operating System</li>
                  <li>• Website Usage Data</li>
                  <li>• Analytics Information</li>
                </ul>
              </div>

              <div>
                <h2 className="mb-4 text-2xl font-semibold">
                  3. How We Use Your Information
                </h2>

                <p className="mb-4 text-zinc-400">
                  We use collected information for legitimate business purposes,
                  including:
                </p>

                <ul className="space-y-2 text-zinc-400">
                  <li>• Providing and managing our services</li>
                  <li>• Responding to inquiries and support requests</li>
                  <li>• Scheduling meetings and consultations</li>
                  <li>• Improving website performance and functionality</li>
                  <li>• Sending updates, newsletters, and announcements</li>
                  <li>• Personalizing user experiences</li>
                  <li>• Analyzing trends and user behavior</li>
                  <li>• Enhancing security and preventing fraud</li>
                  <li>• Complying with legal obligations</li>
                </ul>
              </div>

              <div>
                <h2 className="mb-4 text-2xl font-semibold">
                  4. Legal Basis for Processing
                </h2>

                <p className="leading-8 text-zinc-400">
                  We process personal information only when we have a valid
                  legal basis to do so. These bases may include your consent,
                  contractual necessity, legitimate business interests,
                  compliance with legal obligations, and protection of rights
                  and security.
                </p>
              </div>

              <div>
                <h2 className="mb-4 text-2xl font-semibold">
                  5. Information Sharing
                </h2>

                <p className="leading-8 text-zinc-400">
                  RA Marketer does not sell personal information. We may share
                  information with trusted service providers that help us
                  operate our website, provide customer support, host services,
                  perform analytics, send communications, and improve user
                  experiences.
                </p>

                <p className="mt-4 leading-8 text-zinc-400">
                  Information may also be disclosed when required by law,
                  regulatory authorities, court orders, or to protect our
                  rights, users, systems, and business operations.
                </p>
              </div>

              <div>
                <h2 className="mb-4 text-2xl font-semibold">
                  6. Data Security
                </h2>

                <p className="leading-8 text-zinc-400">
                  We implement appropriate administrative, technical, and
                  organizational safeguards to protect personal information from
                  unauthorized access, disclosure, alteration, misuse, or loss.
                  These measures may include secure servers, encryption,
                  monitoring systems, access controls, and regular maintenance
                  procedures.
                </p>

                <p className="mt-4 leading-8 text-zinc-400">
                  While we strive to protect information, no method of
                  electronic transmission or storage can be guaranteed to be
                  completely secure.
                </p>
              </div>

              <div>
                <h2 className="mb-4 text-2xl font-semibold">
                  7. Data Retention
                </h2>

                <p className="leading-8 text-zinc-400">
                  We retain information only for as long as necessary to provide
                  services, maintain records, comply with legal obligations,
                  resolve disputes, and enforce agreements. When information is
                  no longer required, it is securely deleted, anonymized, or
                  archived according to applicable regulations.
                </p>
              </div>

              <div>
                <h2 className="mb-4 text-2xl font-semibold">
                  8. Cookies & Tracking Technologies
                </h2>

                <p className="leading-8 text-zinc-400">
                  Our website may use cookies, analytics tools, tracking
                  technologies, and similar mechanisms to improve website
                  functionality, measure performance, understand visitor
                  behavior, and enhance user experiences.
                </p>

                <p className="mt-4 leading-8 text-zinc-400">
                  Most browsers allow users to manage or disable cookies through
                  browser settings. Disabling cookies may affect certain website
                  features and functionality.
                </p>
              </div>

              <div>
                <h2 className="mb-4 text-2xl font-semibold">
                  9. Third-Party Services
                </h2>

                <p className="leading-8 text-zinc-400">
                  Our website may contain links to third-party platforms,
                  websites, software, and services. We do not control these
                  external services and are not responsible for their privacy
                  practices. Users should review the privacy policies of any
                  third-party websites they visit.
                </p>
              </div>

              <div>
                <h2 className="mb-4 text-2xl font-semibold">
                  10. International Data Transfers
                </h2>

                <p className="leading-8 text-zinc-400">
                  Depending on your location and our service providers, personal
                  information may be transferred to and processed in countries
                  outside your jurisdiction. By using our services, you consent
                  to such transfers where permitted by applicable law.
                </p>
              </div>

              <div>
                <h2 className="mb-4 text-2xl font-semibold">11. Your Rights</h2>

                <ul className="space-y-2 text-zinc-400">
                  <li>• Access your personal information</li>
                  <li>• Correct inaccurate information</li>
                  <li>• Request deletion of your information</li>
                  <li>• Restrict processing activities</li>
                  <li>• Withdraw consent where applicable</li>
                  <li>• Request data portability</li>
                  <li>• Object to certain processing activities</li>
                </ul>
              </div>

              <div>
                <h2 className="mb-4 text-2xl font-semibold">
                  12. Children's Privacy
                </h2>

                <p className="leading-8 text-zinc-400">
                  Our services are intended for business professionals and
                  organizations. We do not knowingly collect personal
                  information from individuals under the age of 18.
                </p>
              </div>

              <div>
                <h2 className="mb-4 text-2xl font-semibold">
                  13. Changes to This Policy
                </h2>

                <p className="leading-8 text-zinc-400">
                  We may update this Privacy Policy periodically to reflect
                  changes in our services, technology, legal requirements, or
                  business practices. Updates will be posted on this page with a
                  revised "Last Updated" date.
                </p>
              </div>

              <div>
                <h2 className="mb-6 text-2xl font-semibold">Contact Us</h2>

                <div className="rounded-2xl border border-blue-500/20 bg-blue-500/5 p-6">
                  <h3 className="mb-4 text-xl font-semibold text-white">
                    RA Marketer
                  </h3>

                  <p className="text-zinc-400">Email: info@ramarketer.com</p>

                  <p className="text-zinc-400">Phone: +1 332 242 6637</p>

                  <p className="text-zinc-400">Website: www.ramarketer.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;
