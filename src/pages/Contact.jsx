import React from 'react';
import {Helmet} from 'react-helmet-async';

function Contact() {

    return (
        <div className="flex min-h-screen flex-col items-center justify-center">

            <Helmet>
                <title>Portfolio | Kontakt</title>
                <meta name="description" content="Ta kontakt med Lasse Rønningen for spørsmål eller samarbeid." />
            </Helmet>

            <div className="max-w-4xl w-full mx-auto px-6 py-32 flex flex-col md:flex-row gap-12">
                <div className="flex-1 text-white bg-blue-900/40 p-10 rounded-3xl backdrop-blur-xl border border-blue-200/20 shadow-2xl">
                    <h1 className="mb-8 text-4xl font-extrabold tracking-tight">La oss ta en prat</h1>

                    <div className="space-y-8">
                        <p className="text-blue-100 text-lg">
                            Har du et prosjekt i tankene eller vil bare si hei? Send meg en melding, så svarer jeg så fort jeg kan!
                        </p>
                        
                        <div className="space-y-4">
                            <div className="flex items-center gap-4 group">
                                <div className="p-3 bg-blue-500/20 rounded-xl group-hover:bg-blue-500/40 transition-colors">
                                    <span role="img" aria-label="E-post" className="text-2xl">📧</span>
                                </div>
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-wider text-blue-300">E-post</p>
                                    <a href="mailto:email@example.com" className="text-lg font-medium hover:text-blue-300 transition-colors">email@example.com</a>
                                </div>
                            </div>
                            
                            <div className="flex items-center gap-4 group">
                                <div className="p-3 bg-blue-500/20 rounded-xl group-hover:bg-blue-500/40 transition-colors">
                                    <span role="img" aria-label="Telefon" className="text-2xl">📞</span>
                                </div>
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-wider text-blue-300">Telefon</p>
                                    <a href="tel:12345678" className="text-lg font-medium hover:text-blue-300 transition-colors">123-456-7890</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex-1 bg-white p-10 rounded-3xl shadow-2xl border border-gray-100">
                    <form className="space-y-6" noValidate>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-700 ml-1" htmlFor="first-name">Fornavn</label>
                                <input
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                                    id="first-name" type="text" placeholder="Jane" required aria-required="true"/>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-700 ml-1" htmlFor="last-name">Etternavn</label>
                                <input
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                                    id="last-name" type="text" placeholder="Doe" required aria-required="true"/>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-700 ml-1" htmlFor="email">E-post</label>
                            <input
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                                id="email" type="email" placeholder="jane@example.com" required aria-required="true"/>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-700 ml-1" htmlFor="message">Melding</label>
                            <textarea
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all min-h-[150px] resize-none"
                                id="message" placeholder="Hva kan jeg hjelpe deg med?" required aria-required="true"></textarea>
                        </div>

                        <button
                            className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-200 hover:shadow-blue-300 transition-all transform active:scale-[0.98]"
                            type="submit">Send melding
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;