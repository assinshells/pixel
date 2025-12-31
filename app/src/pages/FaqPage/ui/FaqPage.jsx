// src/pages/FaqPage/ui/FaqPage.jsx
import React, { useState } from "react";
import { Header } from "@/widgets/Header/ui/Header";
import { Footer } from "@/widgets/Footer/ui/Footer";
import { PurchaseModal } from "@/features/purchase/ui/PurchaseModal";

export const FaqPage = () => {
  const [showModal, setShowModal] = useState(false);

  const faqData = [
    {
      question: "What is BlockStorm?",
      answer:
        "BlockStorm is an innovative advertising platform with a 1000×1000 pixel grid divided into 10,000 blocks of 10×10 pixels each. Each block is an advertising space for placing a banner with an active link to your website. The concept is inspired by the famous Million Dollar Homepage project.",
    },
    {
      question: "How much does it cost and is there a free trial?",
      answer:
        "Each block costs $100. Every new advertiser gets a free 5-day trial placement to evaluate the format's effectiveness. After the free period ends, you can purchase blocks for permanent placement.",
    },
    {
      question: "How does the purchase and placement process work?",
      answer:
        "The process is simple: select the desired number of free blocks on the grid, click the cart icon, fill out the form (email, company name, website URL, description), upload your banner, and submit. The banner is published immediately after submission or after a brief moderation (usually within 1-2 hours).",
    },
    {
      question: "What happens after the free trial ends?",
      answer:
        "After the 5-day free trial, you'll receive an email notification with an offer to pay for the blocks to continue placement. If payment is not received within 3 days, your banner will be temporarily hidden, but the data will be saved. You can resume placement anytime after payment.",
    },
    {
      question: "Can I buy multiple blocks and are there any limitations?",
      answer:
        "Yes, you can purchase any number of available blocks — from one to several hundred. Minimum purchase is 1 block ($100), maximum is unlimited (if blocks are available). Blocks can be arranged as a rectangle or arbitrarily across the entire grid.",
    },
    {
      question: "What are the banner requirements?",
      answer:
        "The banner must be in PNG, JPG, or GIF format, no larger than 5MB. The image size must match the selected number of blocks (1 block = 10×10 pixels). Prohibited: pornography, gambling, violence propaganda, illegal activities, fraudulent schemes. The banner must be high quality and readable.",
    },
    {
      question:
        "Can I change the banner, link, or description after placement?",
      answer:
        "Yes, you can change the banner, target link, or description at any time. Contact our support team with the email used during registration. The first change is free, subsequent changes cost $20 per update.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major online payment methods: credit and debit cards (Visa, Mastercard, American Express), PayPal, cryptocurrencies (Bitcoin, Ethereum, USDT), bank transfers for corporate clients. Choose your payment method by clicking 'Pay' after filling out the form.",
    },
    {
      question: "Will I get statistics on clicks and impressions?",
      answer:
        "Yes, each advertiser gets access to a personal dashboard displaying detailed statistics: impressions, clicks, CTR (click-through rate), visitor geography, devices (desktop/mobile), peak activity times. Statistics are updated in real-time.",
    },
    {
      question: "For how long are blocks purchased?",
      answer:
        "Blocks are purchased forever — it's a one-time payment with no subscription fees. After payment, your banner stays on the site permanently as long as the platform operates. This makes BlockStorm a profitable long-term advertising investment.",
    },
    {
      question: "Is a refund possible?",
      answer:
        "Refunds are possible within 7 days of purchase if your banner hasn't been published yet or if there was a technical error on our side. After banner publication, no refunds are given as the advertising space is considered used.",
    },
    {
      question: "Are there restrictions on website topics?",
      answer:
        "We accept advertising for most legal topics: business, technology, education, entertainment, goods and services. Prohibited: adult sites, gambling (in jurisdictions where illegal), pirated content, fraudulent schemes, illegal goods sales, extremist content.",
    },
    {
      question: "How do I know which blocks are available?",
      answer:
        "The main page displays an interactive grid where: gray blocks are available for purchase, green blocks are selected by you (added to cart), colored blocks with images are already sold. You can click on free blocks to add them to your cart.",
    },
    {
      question: "What if my website changes address?",
      answer:
        "You can update your website URL for free once. Subsequent URL changes cost $20 per update. Contact support via the contact form or email with your old and new address.",
    },
    {
      question: "How do I contact support?",
      answer:
        "Support is available via email: support@blockstorm.com (response within 24 hours). You can also use the contact form in the 'Contact' section. For urgent questions, online chat is available (icon in the bottom right corner), operating from 9:00 AM to 9:00 PM Kyiv time.",
    },
    {
      question: "Will I receive an invoice and contract?",
      answer:
        "Yes, after payment you'll automatically receive via email: electronic receipt, invoice, offer agreement. For legal entities, bilateral contracts are available — contact us for details.",
    },
    {
      question: "Can I sell or transfer my blocks to someone else?",
      answer:
        "Yes, you can transfer block ownership to another person. Submit a request to support with the new owner's details (email, company name). The transfer procedure takes 2-3 business days and costs $50.",
    },
  ];

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header onPurchaseClick={() => setShowModal(true)} />

      <main className="flex-grow-1 py-5" style={{ backgroundColor: "#f8f9fa" }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="text-center mb-5">
                <h1 className="display-4 fw-bold mb-3">
                  Frequently Asked Questions
                </h1>
                <p className="lead text-muted">
                  Everything you need to know about advertising on BlockStorm
                </p>
              </div>

              <div className="accordion" id="faqAccordion">
                {faqData.map((item, index) => (
                  <div
                    className="accordion-item border-0 shadow-sm mb-3"
                    key={index}
                  >
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed fw-semibold"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse${index}`}
                        aria-expanded="false"
                        aria-controls={`collapse${index}`}
                        style={{
                          backgroundColor: "#fff",
                          fontSize: "1.1rem",
                        }}
                      >
                        <span className="text-success me-2">Q{index + 1}.</span>
                        {item.question}
                      </button>
                    </h2>
                    <div
                      id={`collapse${index}`}
                      className="accordion-collapse collapse"
                      data-bs-parent="#faqAccordion"
                    >
                      <div
                        className="accordion-body"
                        style={{
                          fontSize: "1rem",
                          lineHeight: "1.7",
                        }}
                      >
                        {item.answer}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Contact Support Card */}
              <div className="card border-0 shadow-sm mt-5">
                <div className="card-body p-4 text-center">
                  <h3 className="h4 fw-bold mb-3">
                    Didn't find the answer to your question?
                  </h3>
                  <p className="text-muted mb-4">
                    Our support team is ready to help you anytime
                  </p>
                  <div className="d-flex gap-3 justify-content-center flex-wrap">
                    <a
                      href="mailto:support@blockstorm.com"
                      className="btn btn-success"
                    >
                      Contact Support
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <PurchaseModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
};
