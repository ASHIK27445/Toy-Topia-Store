const Policy = () => {
    return(
        <div className="max-w-3xl mx-auto px-4 py-6">
            <article className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
                <header className="border-b border-gray-100 pb-4 mb-6">
                    <h1 className="text-2xl font-bold mb-2 bg-linear-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                        Privacy Policy
                    </h1>
                    <time className="text-xs text-gray-400 uppercase tracking-wide font-medium">
                        November 10, 2025
                    </time>
                </header>

                <div className="space-y-5">
                    <section className="p-4 rounded-lg border-l-4 border-blue-500 bg-blue-50/50">
                        <h2 className="text-lg font-semibold text-gray-800 mb-2">Data Collection</h2>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            We collect name, email, address, payment info, and browsing data to operate our marketplace.
                        </p>
                    </section>

                    <section className="p-4 rounded-lg border-l-4 border-green-500 bg-green-50/50">
                        <h2 className="text-lg font-semibold text-gray-800 mb-2">Usage</h2>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            We use your data to process orders, connect you with sellers, improve service, and prevent fraud.
                        </p>
                    </section>

                    <section className="p-4 rounded-lg border-l-4 border-amber-500 bg-amber-50/50">
                        <h2 className="text-lg font-semibold text-gray-800 mb-2">Children</h2>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Platform is for adults buying toys. We don't collect data from users under 13.
                        </p>
                    </section>

                    <section className="p-4 rounded-lg border-l-4 border-purple-500 bg-purple-50/50">
                        <h2 className="text-lg font-semibold text-gray-800 mb-2">Sharing</h2>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            We share info only with sellers (shipping), payment processors, and when legally required. Never sold.
                        </p>
                    </section>

                    <section className="p-4 rounded-lg border-l-4 border-emerald-500 bg-emerald-50/50">
                        <h2 className="text-lg font-semibold text-gray-800 mb-2">Security</h2>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Protected via encryption, secure payments, and limited access.
                        </p>
                    </section>

                    <section className="p-4 rounded-lg border-l-4 border-indigo-500 bg-indigo-50/50">
                        <h2 className="text-lg font-semibold text-gray-800 mb-2">Your Rights</h2>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Access, correct, or delete your data. Opt out of marketing. Control cookies.
                        </p>
                    </section>
                </div>

                <footer className="mt-6 pt-5 border-t border-gray-100">
                    <div className="bg-gray-50 rounded-lg p-4 text-center">
                        <h3 className="text-sm font-semibold text-gray-700 mb-1">Privacy Questions?</h3>
                        <a 
                            href="mailto:privacy@toytopiastore.com" 
                            className="inline-flex items-center text-sm px-4 py-2 bg-gray-900 text-white font-medium rounded-md hover:bg-gray-800 transition-colors duration-200"
                        >
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            privacy@toytopiastore.com
                        </a>
                    </div>
                </footer>
            </article>
        </div>
    )
}
export default Policy