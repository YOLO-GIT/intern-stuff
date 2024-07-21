import React from "react";
import Header from "./header";
import Socials from "./socials";
import Footer from "./footer";

const Documents = () => {
  return (
    <>
      <Header />
      <section className="bg-white dark:bg-slate-500 min-h-screen p-8">
        <div className="max-w-screen-lg mx-auto">
          <h1 className="text-4xl font-extrabold mb-4 dark:text-white text-gray-900">
            Intern Documents
          </h1>
          <ul className="list-disc pl-5 space-y-2 dark:text-gray-200 text-gray-800">
            <li>Document 1: Description or link</li>
            <li>Document 2: Description or link</li>
            <li>Document 3: Description or link</li>
            <li>Document 4: Description or link</li>
            <li>Document 5: Description or link</li>
          </ul>
        </div>
      </section>

      <Socials />
      <Footer />
    </>
  );
};

export default Documents;
