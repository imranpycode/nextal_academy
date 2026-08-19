import React, { useState } from 'react';
import { X, CheckCircle } from 'lucide-react';

export default function EnrollModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    batch: 'weekday'
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const message = `Hello Nextal Academy, I would like to submit my enrollment application:
Name: ${formData.fullName}
Phone: ${formData.phone}
Email: ${formData.email}
Preferred Batch: ${formData.batch === 'weekday' ? 'Weekday Batches (Mon - Fri)' : 'Weekend Batches (Sat & Sun)'}`;

    const whatsappUrl = `https://wa.me/919487167617?text=${encodeURIComponent(message)}`;

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      window.open(whatsappUrl, '_blank');
    }, 800);
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className={`modal-overlay ${isOpen ? 'active' : ''}`} onClick={handleClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={handleClose} aria-label="Close modal">
          <X size={20} />
        </button>

        {!submitted ? (
          <div>
            <h3 style={{ fontSize: '1.6rem', marginBottom: '0.5rem', textAlign: 'center' }}>Enrollment Application</h3>
            <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: '1.75rem' }}>
              Fill out the form below to reserve your seat in the upcoming batch at Nextal Academy.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  className="form-control"
                  placeholder="Enter your full name"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone / WhatsApp Number</label>
                <input
                  type="tel"
                  id="phone"
                  className="form-control"
                  placeholder="e.g. +91 98765 43210"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  placeholder="e.g. name@example.com"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label htmlFor="batch">Preferred Batch</label>
                <select
                  id="batch"
                  className="form-control"
                  value={formData.batch}
                  onChange={(e) => setFormData({ ...formData, batch: e.target.value })}
                >
                  <option value="weekday">Weekday Regular Batch (Mon - Fri)</option>
                  <option value="weekend">Weekend Special Batch (Sat - Sun)</option>
                  <option value="online">Online / Hybrid Batch</option>
                </select>
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }} disabled={loading}>
                {loading ? 'Submitting...' : 'Submit Application'}
              </button>
            </form>
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '2rem 0' }}>
            <div style={{ width: '64px', height: '64px', backgroundColor: 'var(--accent-coral-light)', color: 'var(--accent-coral)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto' }}>
              <CheckCircle size={36} />
            </div>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>Application Received!</h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>
              Thank you for registering. Our academic counseling team at Nextal Academy Nagercoil will call you shortly with batch schedules and fee details.
            </p>
            <button className="btn btn-outline-navy" style={{ marginTop: '1.5rem' }} onClick={handleClose}>
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
