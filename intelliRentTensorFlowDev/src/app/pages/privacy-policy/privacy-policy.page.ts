import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.page.html',
  styleUrls: ['./privacy-policy.page.scss'],
})
export class PrivacyPolicyPage implements OnInit {

  privacyPoliciesList = [
    'Privacy Policy',
    'This Privacy Policy describes how intelliRent ("we", "us", or "our") collects, uses, and shares information about you when you use our mobile rental application (intelliRent).',
    'Information We Collect',
    'We collect information you provide directly to us when you use the App, such as when you create an account, make a rental reservation, or communicate with us. The types of information we may collect include:',
    '- Personal Information: Name, email address, phone number, and payment information.',
    '- Rental Information: Details about the rentals you make through the App, including pickup and drop-off locations and rental duration.',
    '- Usage Information: Information about how you use the App, such as your interactions with the app features and functionalities.',
    'How We Use Your Information',
    'We may use the information we collect for various purposes, including to:',
    'Provide, maintain, and improve the App.',
    'Process your rental reservations and transactions.',
    'Communicate with you about your account and rentals.',
    'Send you promotional messages, marketing materials, and other information that may be of interest to you.',
    'Monitor and analyze trends, usage, and activities in connection with the App.',
    'Information Sharing',
    'We may share your information as follows:',
    'With rental partners: We may share your information with our rental partners to facilitate your rental reservations and transactions.',
    'With service providers: We may share your information with third-party service providers who perform services on our behalf, such as payment processing, data analysis, and customer support.',
    'With affiliates: We may share your information with our affiliates for marketing and promotional purposes.',
    'With law enforcement and others: We may share your information when we believe it is necessary to comply with legal obligations, protect our rights and interests, or prevent fraud or other illegal activities.',
    'Data Security',
    'We take reasonable measures to protect the information we collect from loss, misuse, unauthorized access, disclosure, alteration, and destruction.',
    'Your Choices',
    'You may opt-out of receiving promotional messages from us by following the instructions provided in those messages. Please note that even if you opt-out, we may still send you non-promotional messages, such as those related to your account or rental reservations.',
    'Changes to This Privacy Policy',
    'We may update this Privacy Policy from time to time. If we make any material changes, we will notify you by posting the updated Privacy Policy on this page.',
    'Contact Us',
    'If you have any questions or concerns about this Privacy Policy, please contact us at [management@intellirent.com].',


  ];


  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  goBack() {
    this.navCtrl.back()
  }

}
