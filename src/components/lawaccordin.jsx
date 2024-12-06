import { useState } from "react";

export default function LawsList() {
  const [open, setOpen] = useState(null);

  // Function to toggle accordion section
  const toggleAccordion = (index) => {
    setOpen(open === index ? null : index);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <section className="py-16 w-full  px-6">
        <div className="flex flex-col items-center justify-center rounded-3xl">
          <h2 className="text-4xl font-bold mb-16 text-[#fe5811]">Laws Protecting Women in Morocco</h2>

          {/* Accordion container */}
          <div className="w-full max-w-4xl mx-auto">
            {/* Accordion 1 */}
            <button
              onClick={() => toggleAccordion(0)}
              className="w-full py-6 px-6 border-t text-white font-semibold bg-[#2a1110] rounded-2xl shadow-md hover:bg-[#160908e0] focus:outline-none flex items-center justify-between transition-colors"
            >
              The Law on Combating Violence Against Women (2018)
              <span>{open === 0 ? '-' : '+'}</span>
            </button>
            {open === 0 && (
              <div className="px-4 md:px-6 py-4 bg-[#fcd7c16e] rounded-lg mt-4">
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Criminalization of domestic violence, including psychological, physical, and sexual violence within the family.</li>
                  <li>Introduction of protective measures like restraining orders and police intervention.</li>
                  <li>Provisions for shelter, legal assistance, and medical care for victims of domestic violence.</li>
                </ul>
              </div>
            )}

            {/* Accordion 2 */}
            <button
              onClick={() => toggleAccordion(1)}
              className="w-full mt-2 py-6 px-6 border-t text-white font-semibold bg-[#2a1110] rounded-2xl shadow-md hover:bg-[#160908e0] focus:outline-none flex items-center justify-between transition-colors"
            >
              The Penal Code Amendments (2014)
              <span>{open === 1 ? '-' : '+'}</span>
            </button>
            {open === 1 && (
              <div className="px-4 md:px-6 py-4 bg-[#fcd7c16e] rounded-lg mt-4">
                <ul className=" list-disc list-inside space-y-2 mt-1 pl-6  text-gray-700">
                  <li>Rape and sexual violence were made punishable by harsher sentences, with a focus on ensuring justice for survivors.</li>
                  <li>The law extended the legal framework to include harassment, and laws against 'honor' crimes were strengthened.</li>
                </ul>
              </div>
            )}

            {/* Accordion 3 */}
            <button
              onClick={() => toggleAccordion(2)}
              className="w-full py-6 mt-2 px-6 border-t text-white font-semibold bg-[#2a1110] rounded-2xl shadow-md hover:bg-[#160908e0] focus:outline-none flex items-center justify-between transition-colors"
            >
              Law No. 103-13 on Combating Domestic Violence (2018)
              <span>{open === 2 ? '-' : '+'}</span>
            </button>
            {open === 2 && (
              <div className="px-4 md:px-6 py-4 bg-[#fcd7c16e] rounded-lg mt-4">
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Provides for protective measures for victims, such as temporary restraining orders and immediate access to shelters.</li>
                  <li>Strengthens penalties for abusers, including prison sentences and fines for domestic violence.</li>
                  <li>Requires the establishment of social programs to support women and children affected by violence.</li>
                </ul>
              </div>
            )}

            {/* Accordion 4 */}
            <button
              onClick={() => toggleAccordion(3)}
              className="w-full py-6 mt-2 px-6 border-t text-white font-semibold bg-[#2a1110] rounded-2xl shadow-md hover:bg-[#160908e0] focus:outline-none flex items-center justify-between transition-colors"
            >
              The Anti-Trafficking Law (2016)
              <span>{open === 3 ? '-' : '+'}</span>
            </button>
            {open === 3 && (
              <div className="px-4 md:px-6 py-4 bg-[#fcd7c16e] rounded-lg mt-4">
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Defines human trafficking and sets penalties for traffickers, including imprisonment and fines.</li>
                  <li>Establishes legal mechanisms to support victims of trafficking, including providing shelter, rehabilitation, and legal assistance.</li>
                </ul>
              </div>
            )}

            {/* Accordion 5 */}
            <button
              onClick={() => toggleAccordion(4)}
              className="w-full py-6 mt-2 px-6 border-t text-white font-semibold bg-[#2a1110] rounded-2xl shadow-md hover:bg-[#160908e0] focus:outline-none flex items-center justify-between transition-colors"
            >
              The Labor Code and Sexual Harassment (2018)
              <span>{open === 4 ? '-' : '+'}</span>
            </button>
            {open === 4 && (
              <div className="px-4 md:px-6 py-4 bg-[#fcd7c16e] rounded-lg mt-4">
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Employers are required to adopt measures to prevent sexual harassment and provide a safe working environment for women.</li>
                  <li>Sexual harassment is criminalized, with penalties for perpetrators, including fines and dismissal from employment.</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
