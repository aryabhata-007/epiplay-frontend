import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What is EpiPlay Drama App?",
      answer: "EpiPlay is a free short drama app designed for viewers in Southeast Asia. It offers high-quality Asian dramas with episodes perfectly sized at 10-20 minutes, making it ideal for busy schedules."
    },
    {
      question: "Is EpiPlay App free to use?",
      answer: "Yes, EpiPlay is completely free to download and use. You can enjoy all our content without any subscription fees."
    },
    {
      question: "Where is EpiPlay available?",
      answer: "EpiPlay is currently available in Indonesia and Philippines, with plans to expand across Southeast Asia. You can download it from Google Play Store or through APK."
    },
    {
      question: "Can I watch dramas offline?",
      answer: "Yes, Melolo supports offline viewing. Simply download your favorite episodes when you have internet connection, and watch them later without using data."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 text-center mb-16 text-lg">
          Everything you need to know about Melolo Drama App
        </p>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg">
                <AccordionTrigger className="px-6 text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="px-6 text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;