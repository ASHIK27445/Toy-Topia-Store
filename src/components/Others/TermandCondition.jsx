const TermandCondition = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <article className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 sm:p-8">
        <header className="border-b border-gray-200 pb-6 mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text">
            Terms & Conditions
          </h1>
          <time className="text-sm text-gray-500 uppercase tracking-wider font-medium">
            November 10, 2025
          </time>
        </header>

        <div className="space-y-8">
          <section className="group p-6 rounded-xl border border-gray-100 hover:border-blue-200 transition-all duration-300 hover:shadow-md bg-linear-to-r from-white to-blue-50/30">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
              Agreement
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              By using Toy Topia Store, you agree to these terms. We connect
              families with local toy sellers.
            </p>
          </section>

          <section className="group p-6 rounded-xl border border-gray-100 hover:border-green-200 transition-all duration-300 hover:shadow-md bg-linear-to-r from-white to-green-50/30">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
              Platform
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              We're a marketplace connecting buyers and sellers. Sellers handle
              products and customer service independently.
            </p>
          </section>

          <section className="group p-6 rounded-xl border border-gray-100 hover:border-amber-200 transition-all duration-300 hover:shadow-md bg-linear-to-r from-white to-amber-50/30">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <span className="w-2 h-2 bg-amber-500 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
              User Rules
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              Must be 18+ or have consent. Provide accurate info. No fraud or
              abuse.
            </p>
          </section>

          <section className="group p-6 rounded-xl border border-gray-100 hover:border-purple-200 transition-all duration-300 hover:shadow-md bg-linear-to-r from-white to-purple-50/30">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
              Purchases
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              All sales are between you and sellers. We facilitate but don't
              guarantee products.
            </p>
          </section>

          <section className="group p-6 rounded-xl border border-gray-100 hover:border-red-200 transition-all duration-300 hover:shadow-md bg-linear-to-r from-white to-red-50/30">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <span className="w-2 h-2 bg-red-500 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
              Liability
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              We're not liable for product issues or disputes. Contact sellers
              directly for resolution.
            </p>
          </section>
        </div>

        <footer className="mt-12 pt-8 border-t border-gray-200">
          <div className="bg-gray-50 rounded-lg p-6 text-center">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Legal Contact
            </h3>
            <p className="text-gray-600 mb-4">
              For any legal inquiries or questions about these terms:
            </p>
            <a 
              href="mailto:legal@toytopiastore.com" 
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-sm hover:shadow-md"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              legal@toytopiastore.com
            </a>
          </div>
        </footer>
      </article>
    </div>
  );
};

export default TermandCondition;