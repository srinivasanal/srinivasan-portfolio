import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  Download,
  Send,
  CheckCircle2,
  AlertCircle,
  ExternalLink
} from 'lucide-react';
import { profile } from '../data/portfolioData';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // 'idle' | 'composing' | 'sent'
  const [gmailComposeUrl, setGmailComposeUrl] = useState('');
  const [lastSubject, setLastSubject] = useState('');

  useEffect(() => {
    if (status !== 'composing') return;

    const handleReturnToPortfolio = () => {
      if (document.visibilityState === 'visible') {
        setStatus('sent');
        setForm({ name: '', email: '', subject: '', message: '' });
      }
    };

    window.addEventListener('focus', handleReturnToPortfolio);
    document.addEventListener('visibilitychange', handleReturnToPortfolio);
    return () => {
      window.removeEventListener('focus', handleReturnToPortfolio);
      document.removeEventListener('visibilitychange', handleReturnToPortfolio);
    };
  }, [status]);

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = 'Please enter your name.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      next.email = 'Please enter a valid email address.';
    }
    if (!form.subject.trim()) next.subject = 'Please add a short subject.';
    if (form.message.trim().length < 10) {
      next.message = 'Please enter a message of at least 10 characters.';
    }
    return next;
  };

  const handleComposeInGmail = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    const formattedBody = [
      'Hi Srinivasan,',
      '',
      form.message.trim(),
      '',
      '---',
      `From: ${form.name.trim()}`,
      `Email: ${form.email.trim()}`
    ].join('\n');

    const url =
      `https://mail.google.com/mail/?view=cm&fs=1` +
      `&to=${encodeURIComponent(profile.email)}` +
      `&su=${encodeURIComponent(form.subject.trim())}` +
      `&body=${encodeURIComponent(formattedBody)}`;

    setGmailComposeUrl(url);
    setLastSubject(form.subject.trim());
    setStatus('composing');
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#22D3EE]">
            07 // Connect
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Get In Touch
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-[#C2D4E8] sm:text-base">
            Open to Cloud Engineer, AWS Cloud Engineer, DevOps Engineer, and Junior Cloud Infrastructure Engineer roles.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="glass-card flex flex-col justify-between rounded-2xl p-7 lg:col-span-5">
            <div className="space-y-5">
              <div>
                <h3 className="text-xl font-bold text-white">{profile.displayName}</h3>
                <p className="text-sm text-[#22D3EE]">{profile.title}</p>
              </div>

              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-3.5 rounded-xl border border-white/10 bg-[#071426]/70 p-4 transition hover:border-[#22D3EE]/50"
              >
                <Mail className="h-5 w-5 text-[#22D3EE]" />
                <div>
                  <span className="block text-xs text-[#C2D4E8]/75">Email</span>
                  <span className="text-sm font-medium text-white">{profile.email}</span>
                </div>
              </a>

              <a
                href={profile.phoneHref}
                className="flex items-center gap-3.5 rounded-xl border border-white/10 bg-[#071426]/70 p-4 transition hover:border-[#22D3EE]/50"
              >
                <Phone className="h-5 w-5 text-[#22D3EE]" />
                <div>
                  <span className="block text-xs text-[#C2D4E8]/75">Phone</span>
                  <span className="text-sm font-medium text-white">{profile.phone}</span>
                </div>
              </a>
            </div>

            <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <a
                href={`mailto:${profile.email}`}
                className="btn-glow inline-flex items-center justify-center gap-2 rounded-xl bg-[#2563EB] px-4 py-3 text-sm font-semibold text-white"
              >
                <Mail className="h-4 w-4" />
                Email Me
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#22D3EE]/40 bg-[#102C50]/70 px-4 py-3 text-sm font-semibold text-white transition hover:border-[#22D3EE]"
              >
                <Linkedin className="h-4 w-4 text-[#22D3EE]" />
                LinkedIn
              </a>

              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#22D3EE]/40 bg-[#102C50]/70 px-4 py-3 text-sm font-semibold text-white transition hover:border-[#22D3EE]"
              >
                <Github className="h-4 w-4 text-[#22D3EE]" />
                GitHub
              </a>

              <a
                href={`${import.meta.env.BASE_URL}resume.pdf`}
download="Srinivasan_Cloud_DevOps_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#22D3EE]/35 bg-[#071426] px-4 py-3 text-sm font-semibold text-[#22D3EE] transition hover:bg-[#102C50]"
              >
                <Download className="h-4 w-4" />
                Resume PDF
              </a>
            </div>
          </div>

          <form
            onSubmit={handleComposeInGmail}
            noValidate
            className="glass-card rounded-2xl p-7 lg:col-span-7"
          >
            <h3 className="text-lg font-bold text-white">Send a Message</h3>
            <p className="mt-1 text-xs text-[#C2D4E8]">
              Fill in your details and click Compose to open Gmail pre-filled with your message.
            </p>

            {status === 'composing' && (
              <div className="mt-5 rounded-xl border border-[#2563EB]/50 bg-[#2563EB]/15 p-4 text-sm text-[#C2D4E8]">
                <div className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-[#22D3EE]" />
                  <div className="flex-1">
                    <p className="font-semibold text-white">Gmail Compose Opened</p>
                    <p className="mt-1 text-xs text-[#C2D4E8]">
                      Review your pre-filled email in Gmail and click Send. When you return to this portfolio page, your send confirmation will appear automatically.
                    </p>
                    <div className="mt-3 flex flex-wrap items-center gap-3">
                      <a
                        href={gmailComposeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-lg border border-[#22D3EE]/40 bg-[#071426] px-3 py-1.5 text-xs font-semibold text-[#22D3EE] hover:bg-[#102C50]"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                        Open Gmail Again
                      </a>
                      <button
                        type="button"
                        onClick={() => {
                          setStatus('sent');
                          setForm({ name: '', email: '', subject: '', message: '' });
                        }}
                        className="inline-flex items-center gap-1.5 rounded-lg bg-[#2563EB] px-3 py-1.5 text-xs font-semibold text-white hover:bg-[#1D4ED8]"
                      >
                        <CheckCircle2 className="h-3.5 w-3.5" />
                        I&apos;ve Sent the Email
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {status === 'sent' && (
              <div className="mt-5 flex items-start gap-3 rounded-xl border border-emerald-400/40 bg-emerald-500/10 p-4 text-sm text-emerald-300">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />
                <div>
                  <p className="font-semibold text-white">Message Sent Notification</p>
                  <p className="mt-0.5 text-xs text-emerald-200/90">
                    Your email{lastSubject ? ` ("${lastSubject}")` : ''} to {profile.email} has been composed and sent via Gmail. Thank you for reaching out!
                  </p>
                </div>
              </div>
            )}

            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="contact-name" className="block text-xs font-medium text-[#C2D4E8]">
                  Your Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Recruiter or Hiring Manager"
                  className="mt-1.5 w-full rounded-xl border border-white/15 bg-[#071426]/90 px-4 py-3 text-sm text-white placeholder-[#C2D4E8]/40 focus:border-[#22D3EE] focus:outline-none"
                />
                {errors.name && (
                  <p className="mt-1 flex items-center gap-1 text-xs text-rose-400">
                    <AlertCircle className="h-3.5 w-3.5" /> {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-xs font-medium text-[#C2D4E8]">
                  Email Address
                </label>
                <input
                  id="contact-email"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="name@company.com"
                  className="mt-1.5 w-full rounded-xl border border-white/15 bg-[#071426]/90 px-4 py-3 text-sm text-white placeholder-[#C2D4E8]/40 focus:border-[#22D3EE] focus:outline-none"
                />
                {errors.email && (
                  <p className="mt-1 flex items-center gap-1 text-xs text-rose-400">
                    <AlertCircle className="h-3.5 w-3.5" /> {errors.email}
                  </p>
                )}
              </div>
            </div>

            <div className="mt-4">
              <label htmlFor="contact-subject" className="block text-xs font-medium text-[#C2D4E8]">
                Subject
              </label>
              <input
                id="contact-subject"
                type="text"
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                placeholder="Cloud / DevOps Engineer Opportunity"
                className="mt-1.5 w-full rounded-xl border border-white/15 bg-[#071426]/90 px-4 py-3 text-sm text-white placeholder-[#C2D4E8]/40 focus:border-[#22D3EE] focus:outline-none"
              />
              {errors.subject && (
                <p className="mt-1 flex items-center gap-1 text-xs text-rose-400">
                  <AlertCircle className="h-3.5 w-3.5" /> {errors.subject}
                </p>
              )}
            </div>

            <div className="mt-4">
              <label htmlFor="contact-message" className="block text-xs font-medium text-[#C2D4E8]">
                Message
              </label>
              <textarea
                id="contact-message"
                rows="4"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Share role details, interview availability, or project questions..."
                className="mt-1.5 w-full rounded-xl border border-white/15 bg-[#071426]/90 px-4 py-3 text-sm text-white placeholder-[#C2D4E8]/40 focus:border-[#22D3EE] focus:outline-none"
              />
              {errors.message && (
                <p className="mt-1 flex items-center gap-1 text-xs text-rose-400">
                  <AlertCircle className="h-3.5 w-3.5" /> {errors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="btn-glow mt-6 inline-flex items-center gap-2 rounded-xl bg-[#2563EB] px-6 py-3.5 text-sm font-semibold text-white hover:bg-[#1D4ED8]"
            >
              <Send className="h-4 w-4" />
              Compose in Gmail
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
