import React, { useRef, useState } from 'react';
import {Helmet} from 'react-helmet-async';
import { FaEnvelope, FaGithub, FaPhone } from 'react-icons/fa';
import { DISPLAY_EMAIL, GITHUB_URL, contactEmail } from '../contact.js';

const MESSAGE_MAX_LENGTH = 1500;
const FIELD_ORDER = ['name', 'message'];
const EMPTY_VALUES = { name: '', message: '' };

const inputClass = 'w-full px-4 py-3 rounded-xl border border-gray-500 placeholder:text-gray-500 focus:border-blue-700 aria-invalid:border-red-700 transition-colors';

function validate(values) {
    const errors = {};
    if (!values.name.trim()) errors.name = 'Enter your name.';
    if (!values.message.trim()) errors.message = 'Write a message.';
    return errors;
}

function FieldError({ id, message }) {
    if (!message) return null;
    return (
        <p id={id} className="ml-1 text-sm font-medium text-red-700">
            {message}
        </p>
    );
}

function Contact() {
    const [values, setValues] = useState(EMPTY_VALUES);
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState('');
    const fieldRefs = useRef({});

    const handleChange = (field) => (event) => {
        setValues({ ...values, [field]: event.target.value });
        if (errors[field]) setErrors({ ...errors, [field]: undefined });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const nextErrors = validate(values);
        setErrors(nextErrors);

        const firstInvalid = FIELD_ORDER.find((field) => nextErrors[field]);
        if (firstInvalid) {
            setStatus('');
            fieldRefs.current[firstInvalid]?.focus();
            return;
        }

        // No backend by design: hand the message over to the visitor's own e-mail program
        const name = values.name.trim();
        const subject = encodeURIComponent(`Enquiry from ${name}`);
        const body = encodeURIComponent(`${values.message.trim()}\n\n${name}`);
        window.location.href = `mailto:${contactEmail()}?subject=${subject}&body=${body}`;
        setStatus('Did your e-mail program not open? Copy the address with the button above and send the message from your own e-mail.');
    };

    const copyEmail = async () => {
        try {
            await navigator.clipboard.writeText(contactEmail());
            setStatus('E-mail address copied.');
        } catch {
            setStatus(`Could not copy. The address is ${DISPLAY_EMAIL}.`);
        }
    };

    const fieldProps = (field) => ({
        ref: (element) => { fieldRefs.current[field] = element; },
        value: values[field],
        onChange: handleChange(field),
        required: true,
        'aria-invalid': errors[field] ? 'true' : undefined,
        'aria-describedby': errors[field] ? `${field}-error` : undefined,
    });

    return (
        <div className="flex min-h-screen flex-col items-center justify-center">

            <Helmet>
                <title>Portfolio | Contact</title>
                <meta name="description" content="Get in touch with Lasse Rønningen about questions or collaboration." />
            </Helmet>

            <div className="max-w-4xl w-full mx-auto px-6 py-10 sm:py-24 flex flex-col md:flex-row gap-8 sm:gap-12">
                <div className="flex-1 text-white bg-blue-900/95 p-6 sm:p-10 rounded-3xl backdrop-blur-xl border border-blue-200/20 shadow-2xl [--focus-ring:white]">
                    <h1 className="mb-6 sm:mb-8 text-3xl sm:text-4xl font-extrabold tracking-tight">Let&apos;s talk</h1>

                    <div className="space-y-8">
                        <p className="text-blue-100 text-lg">
                            Have a project in mind or just want to say hi? Send me a message and I will reply as soon as I can!
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center gap-4 group">
                                <div className="p-3 bg-blue-500/20 rounded-xl group-hover:bg-blue-500/40 transition-colors">
                                    <FaEnvelope aria-hidden="true" className="text-2xl" />
                                </div>
                                <div className="min-w-0">
                                    <p className="text-xs font-bold uppercase tracking-wider text-blue-200">E-mail</p>
                                    <p className="py-0.5 text-lg font-medium break-words">{DISPLAY_EMAIL}</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 group">
                                <div className="p-3 bg-blue-500/20 rounded-xl group-hover:bg-blue-500/40 transition-colors">
                                    <FaPhone aria-hidden="true" className="text-2xl" />
                                </div>
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-wider text-blue-200">Phone</p>
                                    <a href="tel:1234567890" className="inline-block py-0.5 text-lg font-medium hover:text-blue-200 transition-colors">123-456-7890</a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 group">
                                <div className="p-3 bg-blue-500/20 rounded-xl group-hover:bg-blue-500/40 transition-colors">
                                    <FaGithub aria-hidden="true" className="text-2xl" />
                                </div>
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-wider text-blue-200">GitHub</p>
                                    <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="inline-block py-0.5 text-lg font-medium hover:text-blue-200 transition-colors">github.com/wexnox<span className="sr-only"> (opens in a new tab)</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex-1 bg-white p-6 sm:p-10 rounded-3xl shadow-2xl border border-gray-100">
                    <form className="space-y-6" noValidate onSubmit={handleSubmit}>
                        <p className="text-sm text-gray-700">
                            The button opens your e-mail program with the message filled in. You send it from there.
                        </p>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-700 ml-1" htmlFor="name">Name</label>
                            <input
                                className={inputClass}
                                id="name" name="name" type="text" autoComplete="name" placeholder="Jane Doe"
                                {...fieldProps('name')}/>
                            <FieldError id="name-error" message={errors.name} />
                        </div>

                        <div className="space-y-2">
                            <div className="flex items-baseline justify-between">
                                <label className="text-sm font-bold text-gray-700 ml-1" htmlFor="message">Message</label>
                                <span className="text-xs text-gray-600 tabular-nums">{values.message.length} / {MESSAGE_MAX_LENGTH}</span>
                            </div>
                            <textarea
                                className={`${inputClass} min-h-[150px] resize-none`}
                                id="message" name="message" maxLength={MESSAGE_MAX_LENGTH} placeholder="How can I help?"
                                {...fieldProps('message')}></textarea>
                            <FieldError id="message-error" message={errors.message} />
                        </div>

                        <button
                            className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-200 hover:shadow-blue-300 transition-all transform active:scale-[0.98]"
                            type="submit">Open the message in e-mail
                        </button>

                        <button
                            className="w-full py-3 text-sm font-semibold text-blue-700 rounded-xl hover:bg-blue-50 transition-colors"
                            type="button" onClick={copyEmail}>Copy e-mail address
                        </button>

                        <p role="status" className="text-sm text-gray-700 empty:hidden">{status}</p>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
