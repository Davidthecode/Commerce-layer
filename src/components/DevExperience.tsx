import book from "../assets/book.png";
import menu from "../assets/menu.png";
import rightArrow from "../assets/right-chevron.png";

function DevExperience() {
  return (
    <div className="bg-black mt-8 pb-10 xl:px-8">
      <div className="mx-8 alg:mx-16">
        <h1 className="text-white text-4xl font-medium pt-20 mb-8 opacity-2 alg:text-7xl">
          It all starts with a great developer experience.
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 alg:mt-24 alg:pb-12">
          <div className="bg-[#272828] text-white p-6 rounded-lg alg:px-10 xl:h-[30rem]">
            <div className="mb-8">
              <img src={menu} alt="image" className="w-8 h-8" />
            </div>
            <h1 className="text-xl font-medium alg:text-2xl">Micro frontends</h1>
            <p className="mt-2 opacity-50 alg:text-lg alg:mt-4">
              The fastest and simplest way to make any website shoppable. Start
              with our micro frontends to build a successful proof of concept,
              even inside your existing monolith. Ship code in minutes, not
              weeks, and see how a composable, headless approach can work for
              you.
            </p>
            <p className="mt-2 opacity-50 alg:mt-6 alg:text-lg alg:font-medium">Learn more {'->'}</p>
          </div>

          <div className="bg-[#272828] text-white p-6 rounded-lg">
            <div className="mb-8">
              <img src={book} alt="image" className="w-8 h-8" />
            </div>
            <h2 className="text-xl font-medium alg:text-2xl">API reference</h2>
            <p className="mt-2 opacity-50 alg:text-lg alg:mt-4">
              Explore our developer documentation and learn how to build any
              business model. With hundreds of API resources and webhooks, you
              have all the flexibility you need. A recipe-like collection of
              step-by-step tutorials will guide you through the most common
              scenarios.
            </p>
            <p className="mt-2 opacity-50 alg:mt-12 alg:text-lg alg:font-medium">Learn more {'->'}</p>
          </div>

          <div className="bg-[#272828] text-white p-6 rounded-lg">
            <div className="mb-4">
              <img src={rightArrow} alt="image" className="w-12 h-12" />
            </div>
            <h2 className="text-xl font-medium alg:text-2xl">CLI</h2>
            <p className="mt-2 opacity-50 alg:text-lg alg:mt-4">
              Use our super-handy Command Line Interface to build a complete
              ecommerce experience straight from the terminal. Manage all your
              API resources and webhooks, bulk import/export data, generate
              checkout URLs, fulfill orders, and more without leaving the
              command line.
            </p>
            <p className="mt-2 opacity-50 alg:mt-6 alg:text-lg alg:font-medium">Learn more {'->'}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DevExperience;
