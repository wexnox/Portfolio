import React from 'react';
import { Link } from 'react-router-dom';
import { DISPLAY_EMAIL } from '../contact.js';

function ContactBand() {
    return (
        <section className="px-4 pb-24">
            <div className="max-w-4xl mx-auto p-6 sm:p-10 rounded-3xl bg-blue-900/95 text-white shadow-2xl [--focus-ring:white] flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Let&apos;s talk</h2>
                    <p className="mt-2 text-blue-100">
                        Have a project or a role you would like to discuss? Send me a message.
                    </p>
                    <p className="mt-2 font-medium break-words">{DISPLAY_EMAIL}</p>
                </div>
                <Link
                    to="/contact"
                    className="shrink-0 px-8 py-4 bg-white text-gray-900 font-bold rounded-2xl shadow-md hover:bg-blue-50 transition-colors text-center"
                >
                    Get in touch
                </Link>
            </div>
        </section>
    );
}

export default ContactBand;
