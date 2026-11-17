import React, { useRef, useState } from 'react';
import {Helmet} from 'react-helmet-async';
import { FaEnvelope, FaPhone } from 'react-icons/fa';

const CONTACT_EMAIL = 'email@example.com';
const MESSAGE_MAX_LENGTH = 1500;
const FIELD_ORDER = ['firstName', 'lastName', 'email', 'message'];
const EMPTY_VALUES = { firstName: '', lastName: '', email: '', message: '' };

const inputClass = 'w-full px-4 py-3 rounded-xl border border-gray-500 placeholder:text-gray-500 focus:border-blue-700 aria-invalid:border-red-700 transition-colors';

function validate(values) {
    const errors = {};
    if (!values.firstName.trim()) errors.firstName = 'Skriv inn fornavnet ditt.';
    if (!values.lastName.trim()) errors.lastName = 'Skriv inn etternavnet ditt.';
    if (!values.email.trim()) {
        errors.email = 'Skriv inn e-postadressen din.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
        errors.email = 'E-postadressen ser ikke riktig ut. Sjekk at den har @ og et domene, for eksempel navn@example.com.';
    }
    if (!values.message.trim()) errors.message = 'Skriv en melding.';
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

        // No backend yet: hand the message over to the visitor's own e-mail program
        const name = `${values.firstName.trim()} ${values.lastName.trim()}`;
        const subject = encodeURIComponent(`Henvendelse fra ${name}`);
        const body = encodeURIComponent(`${values.message.trim()}\n\n${name}\n${values.email.trim()}`);
        window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
        setStatus(`Meldingen skal nå ligge klar i e-postprogrammet ditt. Skjedde det ingenting? Send den til ${CONTACT_EMAIL}.`);
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
                <title>Kontakt | Lasse Rønningen</title>
                <meta name="description" content="Ta kontakt med Lasse Rønningen for spørsmål eller samarbeid." />
            </Helmet>

            <div className="max-w-4xl w-full mx-auto px-6 py-24 sm:py-32 flex flex-col md:flex-row gap-8 sm:gap-12">
                <div className="flex-1 text-white bg-blue-900/95 p-6 sm:p-10 rounded-3xl backdrop-blur-xl border border-blue-200/20 shadow-2xl [--focus-ring:white]">
                    <h1 className="mb-6 sm:mb-8 text-3xl sm:text-4xl font-extrabold tracking-tight">La oss ta en prat</h1>

                    <div className="space-y-8">
                        <p className="text-blue-100 text-lg">
                            Har du et prosjekt i tankene eller vil bare si hei? Send meg en melding, så svarer jeg så fort jeg kan!
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center gap-4 group">
                                <div className="p-3 bg-blue-500/20 rounded-xl group-hover:bg-blue-500/40 transition-colors">
                                    <FaEnvelope aria-hidden="true" className="text-2xl" />
                                </div>
                                <div className="min-w-0">
                                    <p className="text-xs font-bold uppercase tracking-wider text-blue-200">E-post</p>
                                    <a href={`mailto:${CONTACT_EMAIL}`} className="inline-block py-0.5 text-lg font-medium break-words hover:text-blue-200 transition-colors">{CONTACT_EMAIL}</a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 group">
                                <div className="p-3 bg-blue-500/20 rounded-xl group-hover:bg-blue-500/40 transition-colors">
                                    <FaPhone aria-hidden="true" className="text-2xl" />
                                </div>
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-wider text-blue-200">Telefon</p>
                                    <a href="tel:1234567890" className="inline-block py-0.5 text-lg font-medium hover:text-blue-200 transition-colors">123-456-7890</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex-1 bg-white p-6 sm:p-10 rounded-3xl shadow-2xl border border-gray-100">
                    <form className="space-y-6" noValidate onSubmit={handleSubmit}>
                        <p className="text-sm text-gray-700">Alle felt må fylles ut.</p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-700 ml-1" htmlFor="first-name">Fornavn</label>
                                <input
                                    className={inputClass}
                                    id="first-name" name="firstName" type="text" autoComplete="given-name" placeholder="Kari"
                                    {...fieldProps('firstName')}/>
                                <FieldError id="firstName-error" message={errors.firstName} />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-700 ml-1" htmlFor="last-name">Etternavn</label>
                                <input
                                    className={inputClass}
                                    id="last-name" name="lastName" type="text" autoComplete="family-name" placeholder="Nordmann"
                                    {...fieldProps('lastName')}/>
                                <FieldError id="lastName-error" message={errors.lastName} />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-700 ml-1" htmlFor="email">E-post</label>
                            <input
                                className={inputClass}
                                id="email" name="email" type="email" autoComplete="email" placeholder="kari@example.com"
                                {...fieldProps('email')}/>
                            <FieldError id="email-error" message={errors.email} />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-700 ml-1" htmlFor="message">Melding</label>
                            <textarea
                                className={`${inputClass} min-h-[150px] resize-none`}
                                id="message" name="message" maxLength={MESSAGE_MAX_LENGTH} placeholder="Hva kan jeg hjelpe deg med?"
                                {...fieldProps('message')}></textarea>
                            <FieldError id="message-error" message={errors.message} />
                        </div>

                        <button
                            className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-200 hover:shadow-blue-300 transition-all transform active:scale-[0.98]"
                            type="submit">Åpne meldingen i e-post
                        </button>

                        <p className="text-sm text-gray-700">Du sender den fra din egen e‑post.</p>

                        <p role="status" className="text-sm text-gray-700 empty:hidden">{status}</p>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
