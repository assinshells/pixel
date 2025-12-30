import React, { useState } from "react";
import { Header } from "@/widgets/Header/ui/Header";
import { Footer } from "@/widgets/Footer/ui/Footer";
import { PurchaseModal } from "@/features/purchase/ui/PurchaseModal";
import { useLanguage } from "@/app/providers/LanguageProvider";

export const FaqPage = () => {
  const [showModal, setShowModal] = useState(false);
  const { t } = useLanguage();

  const questions = Array.from({ length: 17 }, (_, i) => ({
    question: t(`faq.questions.q${i + 1}.question`),
    answer: t(`faq.questions.q${i + 1}.answer`),
  }));

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header onPurchaseClick={() => setShowModal(true)} />

      <main className="flex-grow-1 py-5" style={{ backgroundColor: "#f8f9fa" }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="text-center mb-5">
                <h1 className="display-4 fw-bold mb-3">{t("faq.title")}</h1>
                <p className="lead text-muted">{t("faq.subtitle")}</p>
              </div>

              <div className="accordion" id="faqAccordion">
                {questions.map((item, index) => (
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
                  <div className="mb-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="48"
                      height="48"
                      fill="currentColor"
                      className="bi bi-question-circle text-success"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                      <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z" />
                    </svg>
                  </div>
                  <h3 className="h4 fw-bold mb-3">{t("faq.noAnswerTitle")}</h3>
                  <p className="text-muted mb-4">{t("faq.noAnswerText")}</p>
                  <div className="d-flex gap-3 justify-content-center flex-wrap">
                    <a
                      href="mailto:support@blockstorm.com"
                      className="btn btn-success"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-envelope me-2"
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                      </svg>
                      {t("faq.contactSupport")}
                    </a>
                    <a href="/" className="btn btn-outline-success">
                      {t("faq.backHome")}
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
