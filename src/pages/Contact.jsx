import React from 'react';
import {Helmet} from 'react-helmet';

function Contact() {

    return (
        <div className="flex min-h-screen flex-col items-center justify-center">

            <Helmet>
                <title>Contact Us</title>
            </Helmet>

            <div className="rounded-lg bg-opacity-10 p-8 shadow-lg backdrop-blur-lg backdrop-filter">
                <div className="p-6 text-white">
                    <h1 className="mb-3 text-center text-4xl font-extrabold">Contact Me</h1>

                    <div className="mb-8">
                        <p>You can reach out to us via email or phone:</p>
                        <ul className="list-inside list-disc">
                            <li>📧 Email: email@example.com</li>
                            <li>📞 Phone: 123-456-7890</li>
                        </ul>
                        <p>Or, visit our office at:</p>
                        <p>123 Example Street, Example City, EX 12345</p>
                    </div>
                </div>

                <form className="w-full max-w-lg">
                    <div className="-mx-3 mb-6 flex flex-wrap">
                        <div className="mb-6 w-full px-3 md:mb-0 md:w-1/2">
                            <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-100"
                                   htmlFor="grid-first-name">First Name</label>
                            <input
                                className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:bg-white focus:outline-none"
                                id="grid-first-name" type="text" placeholder="Jane"/>
                        </div>
                        <div className="w-full px-3 md:w-1/2">
                            <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-100"
                                   htmlFor="grid-last-name">Last Name</label>
                            <input
                                className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:bg-white focus:outline-none"
                                id="grid-last-name" type="text" placeholder="Doe"/>
                        </div>
                    </div>
                    <div className="-mx-3 mb-6 flex flex-wrap">
                        <div className="w-full px-3">
                            <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-100"
                                   htmlFor="grid-email">Email</label>
                            <input
                                className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:bg-white focus:outline-none"
                                id="grid-email" type="email" placeholder="email@example.com"/>
                        </div>
                    </div>
                    <div className="-mx-3 mb-6 flex flex-wrap">
                        <div className="w-full px-3">
                            <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-100"
                                   htmlFor="grid-message">Message</label>
                            <textarea
                                className="block h-48 w-full resize-none appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 no-resize focus:bg-white focus:outline-none"
                                id="grid-message" defaultValue={''}/>
                        </div>
                    </div>
                    <div className="md:flex md:items-center">
                        <div className="md:w-1/3">
                            <button
                                className="rounded border-l-slate-500 px-4 py-2 font-bold text-white shadow hover:bg-green-700 focus:shadow-outline focus:outline-none"
                                type="button">Submit
                            </button>
                        </div>
                        <div className="md:w-2/3"/>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contact;