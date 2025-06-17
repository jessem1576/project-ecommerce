import type { Metadata } from 'next';
import { ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Read the Aura Attire Privacy Policy to understand how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto py-12">
      <section className="text-center mb-10">
        <ShieldCheck size={48} className="text-primary mx-auto mb-4" />
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary mb-4">Privacy Policy</h1>
        <p className="text-sm text-muted-foreground">Last Updated: {new Date().toLocaleDateString()}</p>
      </section>

      <section className="max-w-3xl mx-auto prose prose-lg text-foreground/80">
        <p>Welcome to Aura Attire! Your privacy is critically important to us. This Privacy Policy document outlines the types of personal information that is received and collected by Aura Attire and how it is used.</p>

        <h2 className="font-headline">Information We Collect</h2>
        <p>We may collect personal identification information from Users in a variety of ways, including, but not limited to, when Users visit our site, register on the site, place an order, subscribe to the newsletter, respond to a survey, fill out a form, and in connection with other activities, services, features or resources we make available on our Site.</p>
        <p>Users may be asked for, as appropriate, name, email address, mailing address, phone number, credit card information.</p>

        <h2 className="font-headline">How We Use Collected Information</h2>
        <p>Aura Attire may collect and use Users personal information for the following purposes:</p>
        <ul>
          <li>To improve customer service: Information you provide helps us respond to your customer service requests and support needs more efficiently.</li>
          <li>To personalize user experience: We may use information in the aggregate to understand how our Users as a group use the services and resources provided on our Site.</li>
          <li>To process payments: We may use the information Users provide about themselves when placing an order only to provide service to that order. We do not share this information with outside parties except to the extent necessary to provide the service.</li>
          <li>To send periodic emails: We may use the email address to send User information and updates pertaining to their order. It may also be used to respond to their inquiries, questions, and/or other requests.</li>
        </ul>

        <h2 className="font-headline">How We Protect Your Information</h2>
        <p>We adopt appropriate data collection, storage and processing practices and security measures to protect against unauthorized access, alteration, disclosure or destruction of your personal information, username, password, transaction information and data stored on our Site.</p>

        <h2 className="font-headline">Sharing Your Personal Information</h2>
        <p>We do not sell, trade, or rent Users personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners, trusted affiliates and advertisers for the purposes outlined above.</p>
        
        <h2 className="font-headline">Changes to This Privacy Policy</h2>
        <p>Aura Attire has the discretion to update this privacy policy at any time. When we do, we will revise the updated date at the top of this page. We encourage Users to frequently check this page for any changes to stay informed about how we are helping to protect the personal information we collect. You acknowledge and agree that it is your responsibility to review this privacy policy periodically and become aware of modifications.</p>

        <h2 className="font-headline">Your Acceptance of These Terms</h2>
        <p>By using this Site, you signify your acceptance of this policy. If you do not agree to this policy, please do not use our Site. Your continued use of the Site following the posting of changes to this policy will be deemed your acceptance of those changes.</p>

        <h2 className="font-headline">Contacting Us</h2>
        <p>If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, please contact us at support@aurattire.com.</p>
        <p><em>This document is a template and should be reviewed by legal counsel.</em></p>
      </section>
    </div>
  );
}
