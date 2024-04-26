import { Component, OnInit } from '@angular/core';

import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-terms-use',
  templateUrl: './terms-use.page.html',
  styleUrls: ['./terms-use.page.scss'],
})
export class TermsUsePage implements OnInit {

  termsOfUseList = [
    'Terms of Use',
    'These Terms of Use govern your access to and use of the intelliRent mobile rental application ("intelliRent"). By accessing or using the App, you agree to be bound by these Terms and our Privacy Policy',
    'Use of the App',
    '- You must be at least 18 years old to use the App.',
    '- You agree to provide accurate and complete information when creating an account and making rental reservations.',
    '- You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.',
    '- You agree not to use the App for any illegal or unauthorized purpose or to engage in any activity that violates these Terms or any applicable laws.',
    'Rental Agreements',
    '- Rental agreements made through the App are subject to availability and confirmation by our rental partners.',
    '- You agree to abide by the terms and conditions of the rental agreement provided by the rental partner.',
    '- You are responsible for complying with all laws, bye-laws and regulations related to the occupation of the rental property.',
    'Intellectual Property',
    '- The App and its content, including text, graphics, logos, and images, are owned by intelliRent or its licensors and are protected by copyright and other intellectual property laws.',
    '- You may not modify, reproduce, distribute, or create derivative works based on the App or its content without our prior written consent.',
    'Disclaimer of Warranties',
    '- The App is provided on an "as is" and "as available" basis, without warranties of any kind, either express or implied.',
    '- We do not warrant that the App will be uninterrupted or error-free, or that any defects will be corrected.',
    'Limitation of Liability',
    '- To the fullest extent permitted by law, we will not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenue, arising out of or in connection with your use of the App.',
    '- Our total liability for any claim arising out of or relating to these Terms or the App will not exceed the amount paid by you, if any, for accessing or using the App',
    'Changes to These Terms',
    '- We may update these Terms from time to time. If we make any material changes, we will notify you by posting the updated Terms on this page.',
    '- Your continued use of the App after the effective date of the updated Terms constitutes your acceptance of the changes.',
    'Governing Law',
    '- These Terms are governed by the laws of the Republic of Ireland, without regard to its conflict of laws principles.',
    'Contact Us',
    'If you have any questions or concerns about these Terms, please contact us at [management@intellirent.com].',
    
  ];

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  goBack() {
    this.navCtrl.back()
  }

}


