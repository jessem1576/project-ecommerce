import type { Metadata } from 'next';
import { FileText } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'Read the ShopWave Terms and Conditions governing the use of our website and services.',
};

export default function TermsConditionsPage() {
  return (
    <div className="container mx-auto py-12">
      <section className="text-center mb-10">
        <FileText size={48} className="text-primary mx-auto mb-4" />
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary mb-4">Terms & Conditions</h1>
        <p className="text-sm text-muted-foreground">Last Updated: {new Date().toLocaleDateString()}</p>
      </section>

      <section className="max-w-3xl mx-auto prose prose-lg text-foreground/80">
        <p>Welcome to ShopWave! These terms and conditions outline the rules and regulations for the use of ShopWave's Website, located at [YourWebsiteURL.com] (replace with actual URL).</p>
        <p>By accessing this website we assume you accept these terms and conditions. Do not continue to use ShopWave if you do not agree to take all of the terms and conditions stated on this page.</p>

        <h2 className="font-headline">Cookies</h2>
        <p>We employ the use of cookies. By accessing ShopWave, you agreed to use cookies in agreement with the ShopWave's Privacy Policy. Most interactive websites use cookies to let us retrieve the user's details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.</p>

        <h2 className="font-headline">License</h2>
        <p>Unless otherwise stated, ShopWave and/or its licensors own the intellectual property rights for all material on ShopWave. All intellectual property rights are reserved. You may access this from ShopWave for your own personal use subjected to restrictions set in these terms and conditions.</p>
        <p>You must not:</p>
        <ul>
          <li>Republish material from ShopWave</li>
          <li>Sell, rent or sub-license material from ShopWave</li>
          <li>Reproduce, duplicate or copy material from ShopWave</li>
          <li>Redistribute content from ShopWave</li>
        </ul>
        <p>This Agreement shall begin on the date hereof.</p>

        <h2 className="font-headline">User Comments</h2>
        <p>Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. ShopWave does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of ShopWave,its agents and/or affiliates. Comments reflect the views and opinions of the person who post their views and opinions.</p>
        <p>ShopWave reserves the right to monitor all Comments and to remove any Comments which can be considered inappropriate, offensive or causes breach of these Terms and Conditions.</p>

        <h2 className="font-headline">Hyperlinking to our Content</h2>
        <p>The following organizations may link to our Website without prior written approval: Government agencies; Search engines; News organizations; Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses.</p>

        <h2 className="font-headline">Disclaimer</h2>
        <p>To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. Nothing in this disclaimer will: limit or exclude our or your liability for death or personal injury; limit or exclude our or your liability for fraud or fraudulent misrepresentation; limit any of our or your liabilities in any way that is not permitted under applicable law; or exclude any of our or your liabilities that may not be excluded under applicable law.</p>
        <p>The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort and for breach of statutory duty.</p>
        <p>As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.</p>
        <p><em>This document is a template and should be reviewed by legal counsel. Please replace [YourWebsiteURL.com] with your actual domain.</em></p>
      </section>
    </div>
  );
}
