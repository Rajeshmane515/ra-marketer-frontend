import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const TermsAndConditions = () => {
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
                Terms & Conditions
              </span>
            </h1>

            <p className="text-lg text-zinc-400">Last Updated: June 2026</p>
          </div>

          {/* Content */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl md:p-12">
            <div className="space-y-12">
              <div>
                <h2 className="mb-4 text-2xl font-semibold">
                  1. Acceptance of Terms
                </h2>

                <p className="leading-8 text-zinc-400">
                  Welcome to RA Marketer. These Terms and Conditions govern your
                  access to and use of our website, services, content, tools,
                  marketing solutions, lead generation services, and all related
                  offerings provided by RA Marketer.
                </p>

                <p className="mt-4 leading-8 text-zinc-400">
                  By accessing, browsing, or using our website and services, you
                  acknowledge that you have read, understood, and agree to be
                  bound by these Terms and Conditions. If you do not agree with
                  any part of these terms, you should discontinue use of our
                  website and services immediately.
                </p>
              </div>

              <div>
                <h2 className="mb-4 text-2xl font-semibold">
                  2. About RA Marketer
                </h2>

                <p className="leading-8 text-zinc-400">
                  RA Marketer provides business-to-business marketing,
                  lead-generation, demand-generation, consulting, campaign
                  management, audience targeting, digital marketing, and other
                  related growth services. The information available on this
                  website is provided for informational and business purposes
                  only.
                </p>
              </div>

              <div>
                <h2 className="mb-4 text-2xl font-semibold">3. Eligibility</h2>

                <p className="leading-8 text-zinc-400">
                  You must be at least 18 years old and capable of entering into
                  legally binding agreements to use our services. By using this
                  website, you represent and warrant that you satisfy these
                  eligibility requirements.
                </p>
              </div>

              <div>
                <h2 className="mb-4 text-2xl font-semibold">
                  4. Use of Website
                </h2>

                <p className="mb-4 text-zinc-400">
                  You agree to use this website only for lawful purposes and in
                  accordance with these Terms and Conditions.
                </p>

                <ul className="space-y-2 text-zinc-400">
                  <li>• Do not violate any applicable laws or regulations.</li>
                  <li>• Do not attempt unauthorized access to systems.</li>
                  <li>• Do not distribute malware or harmful code.</li>
                  <li>• Do not interfere with website operations.</li>
                  <li>• Do not misuse content or intellectual property.</li>
                  <li>• Do not engage in fraudulent activities.</li>
                </ul>
              </div>

              <div>
                <h2 className="mb-4 text-2xl font-semibold">
                  5. Intellectual Property Rights
                </h2>

                <p className="leading-8 text-zinc-400">
                  All content on this website, including but not limited to
                  text, graphics, logos, icons, designs, software, source code,
                  images, videos, documents, branding materials, and marketing
                  assets, is the property of RA Marketer or its licensors and is
                  protected under applicable intellectual property laws.
                </p>

                <p className="mt-4 leading-8 text-zinc-400">
                  You may not copy, reproduce, distribute, modify, publish,
                  transmit, display, sell, or exploit any content without prior
                  written permission from RA Marketer.
                </p>
              </div>

              <div>
                <h2 className="mb-4 text-2xl font-semibold">
                  6. Service Engagements
                </h2>

                <p className="leading-8 text-zinc-400">
                  Any service agreement, proposal, statement of work, campaign
                  agreement, quotation, or project engagement entered into with
                  RA Marketer may include additional terms that supplement these
                  Terms and Conditions. In the event of a conflict, the
                  applicable service agreement shall prevail.
                </p>
              </div>

              <div>
                <h2 className="mb-4 text-2xl font-semibold">
                  7. User Submissions
                </h2>

                <p className="leading-8 text-zinc-400">
                  By submitting information, inquiries, feedback, testimonials,
                  or other materials through our website, you grant RA Marketer
                  a non-exclusive, royalty-free, worldwide license to use,
                  reproduce, store, and process such content for business
                  purposes.
                </p>

                <p className="mt-4 leading-8 text-zinc-400">
                  You represent that you have the necessary rights to provide
                  such content and that it does not violate the rights of any
                  third party.
                </p>
              </div>

              <div>
                <h2 className="mb-4 text-2xl font-semibold">
                  8. Payments and Billing
                </h2>

                <p className="leading-8 text-zinc-400">
                  Fees for services provided by RA Marketer shall be governed by
                  the applicable proposal, agreement, invoice, or contract.
                  Clients are responsible for ensuring timely payment of all
                  fees and charges associated with services rendered.
                </p>

                <p className="mt-4 leading-8 text-zinc-400">
                  Failure to make payments may result in suspension,
                  cancellation, or termination of services.
                </p>
              </div>

              <div>
                <h2 className="mb-4 text-2xl font-semibold">
                  9. Confidentiality
                </h2>

                <p className="leading-8 text-zinc-400">
                  Both parties agree to maintain the confidentiality of
                  proprietary, confidential, or sensitive information exchanged
                  during the course of business engagements. Confidential
                  information shall not be disclosed to third parties without
                  prior authorization except where required by law.
                </p>
              </div>

              <div>
                <h2 className="mb-4 text-2xl font-semibold">
                  10. Disclaimer of Warranties
                </h2>

                <p className="leading-8 text-zinc-400">
                  The website and services are provided on an "as is" and "as
                  available" basis. RA Marketer makes no warranties, express or
                  implied, regarding the accuracy, completeness, reliability,
                  availability, or suitability of the website, services, or
                  content.
                </p>

                <p className="mt-4 leading-8 text-zinc-400">
                  We do not guarantee specific business outcomes, revenue
                  increases, lead volumes, conversion rates, or marketing
                  performance unless explicitly agreed upon in writing.
                </p>
              </div>

              <div>
                <h2 className="mb-4 text-2xl font-semibold">
                  11. Limitation of Liability
                </h2>

                <p className="leading-8 text-zinc-400">
                  To the maximum extent permitted by law, RA Marketer shall not
                  be liable for any indirect, incidental, special,
                  consequential, or punitive damages arising from your use of
                  the website or services.
                </p>

                <p className="mt-4 leading-8 text-zinc-400">
                  This includes loss of profits, loss of business opportunities,
                  loss of data, interruption of operations, or any other
                  commercial damages.
                </p>
              </div>

              <div>
                <h2 className="mb-4 text-2xl font-semibold">
                  12. Third-Party Services
                </h2>

                <p className="leading-8 text-zinc-400">
                  Our website may contain links to third-party websites,
                  software, tools, and services. RA Marketer does not control
                  and is not responsible for the content, policies, or practices
                  of any third-party platforms.
                </p>
              </div>

              <div>
                <h2 className="mb-4 text-2xl font-semibold">
                  13. Indemnification
                </h2>

                <p className="leading-8 text-zinc-400">
                  You agree to indemnify, defend, and hold harmless RA Marketer,
                  its officers, employees, contractors, affiliates, and partners
                  from any claims, liabilities, damages, losses, expenses, or
                  costs arising from your violation of these Terms and
                  Conditions or misuse of our services.
                </p>
              </div>

              <div>
                <h2 className="mb-4 text-2xl font-semibold">14. Termination</h2>

                <p className="leading-8 text-zinc-400">
                  We reserve the right to suspend, restrict, or terminate access
                  to our website or services at any time without prior notice if
                  we reasonably believe that a user has violated these Terms and
                  Conditions or engaged in unlawful conduct.
                </p>
              </div>

              <div>
                <h2 className="mb-4 text-2xl font-semibold">
                  15. Changes to Terms
                </h2>

                <p className="leading-8 text-zinc-400">
                  RA Marketer reserves the right to update, revise, or modify
                  these Terms and Conditions at any time. Updated versions will
                  be posted on this page with a revised effective date.
                </p>

                <p className="mt-4 leading-8 text-zinc-400">
                  Continued use of our website after modifications constitutes
                  acceptance of the revised Terms and Conditions.
                </p>
              </div>

              <div>
                <h2 className="mb-6 text-2xl font-semibold">
                  Contact Information
                </h2>

                <div className="rounded-2xl border border-blue-500/20 bg-blue-500/5 p-6">
                  <h3 className="mb-4 text-xl font-semibold">RA Marketer</h3>

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

export default TermsAndConditions;
