
import { useState } from 'react';
import './App.css';
import { validateForm } from './validation';

function App() {
  const initialFormData = {
    fullName: '',
    email: '',
    phone: '',
    studentId: '',
    course: '',
    password: '',
    confirmPassword: '',
    agree: false,
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState('');

  // Handle input changes
  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: type === 'checkbox' ? checked : value,
    }));

    // Clear the error for the field being edited
    setErrors((previous) => ({
      ...previous,
      [name]: '',
    }));

    setSuccess('');
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Import validation logic from validation.js
    const validationErrors = validateForm(formData);

    setErrors(validationErrors);
    setSuccess('');

    // Show success only if there are no validation errors
    if (Object.keys(validationErrors).length === 0) {
      setSuccess(
        `Registration successful! Welcome, ${formData.fullName.trim()}.`
      );
    }
  };

  // Reset the form to register another student
  const resetForm = () => {
    setFormData({ ...initialFormData });
    setErrors({});
    setSuccess('');
  };

  return (
    <main className="page">
      {/* Navigation bar */}
      <header className="topbar">
        <a className="brand" href="#home">
          <span className="brand-icon">S</span>
          <span>
            Student<span className="brand-light">Portal</span>
          </span>
        </a>

        <span className="topbar-label">STUDENT REGISTRATION</span>
      </header>

      {/* Main content */}
      <section className="content" id="home">
        {/* Introduction section */}
        <div className="intro">
          <span className="eyebrow">YOUR FUTURE STARTS HERE</span>

          <h1>
            Create your student account<span>.</span>
          </h1>

          <p>
            Register your details to get started with your academic journey.
            Complete all fields to create your account.
          </p>

          <div className="feature">
            <span className="feature-icon">✓</span>
            <span>Simple and secure registration</span>
          </div>

          <div className="feature">
            <span className="feature-icon">✓</span>
            <span>Instant input validation</span>
          </div>

          <div className="feature">
            <span className="feature-icon">✓</span>
            <span>Immediate submission feedback</span>
          </div>
        </div>

        {/* Registration form card */}
        <section className="form-card">
          <div className="form-heading">
            <div>
              <h2>Student Registration</h2>
              <p>Enter your details below</p>
            </div>

            <span className="step-badge">01 / 01</span>
          </div>

          {/* Success message */}
          {success && (
            <div className="success-message" role="status">
              <strong>✓ Registration complete</strong>
              <p>{success}</p>

              <button
                type="button"
                className="text-button"
                onClick={resetForm}
              >
                Register another student
              </button>
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate>
            {/* Full name */}
            <div className="field">
              <label htmlFor="fullName">Full Name *</label>

              <input
                id="fullName"
                name="fullName"
                type="text"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="e.g. Krish Adate"
                autoComplete="name"
                aria-invalid={Boolean(errors.fullName)}
                aria-describedby={
                  errors.fullName ? 'fullName-error' : undefined
                }
              />

              {errors.fullName && (
                <small id="fullName-error" className="error">
                  {errors.fullName}
                </small>
              )}
            </div>

            {/* Email */}
            <div className="field">
              <label htmlFor="email">Email Address *</label>

              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                autoComplete="email"
                aria-invalid={Boolean(errors.email)}
                aria-describedby={
                  errors.email ? 'email-error' : undefined
                }
              />

              {errors.email && (
                <small id="email-error" className="error">
                  {errors.email}
                </small>
              )}
            </div>

            {/* Phone and student ID */}
            <div className="field-row">
              <div className="field">
                <label htmlFor="phone">Mobile Number *</label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="10-digit number"
                  maxLength={10}
                  autoComplete="tel"
                  aria-invalid={Boolean(errors.phone)}
                  aria-describedby={
                    errors.phone ? 'phone-error' : undefined
                  }
                />

                {errors.phone && (
                  <small id="phone-error" className="error">
                    {errors.phone}
                  </small>
                )}
              </div>

              <div className="field">
                <label htmlFor="studentId">Student ID *</label>

                <input
                  id="studentId"
                  name="studentId"
                  type="text"
                  value={formData.studentId}
                  onChange={handleChange}
                  placeholder="e.g. SE-102"
                  aria-invalid={Boolean(errors.studentId)}
                  aria-describedby={
                    errors.studentId ? 'studentId-error' : undefined
                  }
                />

                {errors.studentId && (
                  <small id="studentId-error" className="error">
                    {errors.studentId}
                  </small>
                )}
              </div>
            </div>

            {/* Course selection */}
            <div className="field">
              <label htmlFor="course">Course / Department *</label>

              <select
                id="course"
                name="course"
                value={formData.course}
                onChange={handleChange}
                aria-invalid={Boolean(errors.course)}
                aria-describedby={
                  errors.course ? 'course-error' : undefined
                }
              >
                <option value="">Select your course</option>
                <option value="Software Engineering">
                  Software Engineering
                </option>
                <option value="Computer Engineering">
                  Computer Engineering
                </option>
                <option value="Information Technology">
                  Information Technology
                </option>
                <option value="Artificial Intelligence and Data Science">
                  Artificial Intelligence and Data Science
                </option>
                <option value="Electronics and Telecommunication">
                  Electronics and Telecommunication
                </option>
                <option value="Mechanical Engineering">
                  Mechanical Engineering
                </option>
              </select>

              {errors.course && (
                <small id="course-error" className="error">
                  {errors.course}
                </small>
              )}
            </div>

            {/* Password */}
            <div className="field">
              <label htmlFor="password">Password *</label>

              <input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="At least 8 characters"
                autoComplete="new-password"
                aria-invalid={Boolean(errors.password)}
                aria-describedby={
                  errors.password ? 'password-error' : undefined
                }
              />

              {errors.password && (
                <small id="password-error" className="error">
                  {errors.password}
                </small>
              )}

              <small className="hint">
                Use uppercase, lowercase and numeric characters.
              </small>
            </div>

            {/* Confirm password */}
            <div className="field">
              <label htmlFor="confirmPassword">Confirm Password *</label>

              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Re-enter your password"
                autoComplete="new-password"
                aria-invalid={Boolean(errors.confirmPassword)}
                aria-describedby={
                  errors.confirmPassword
                    ? 'confirmPassword-error'
                    : undefined
                }
              />

              {errors.confirmPassword && (
                <small id="confirmPassword-error" className="error">
                  {errors.confirmPassword}
                </small>
              )}
            </div>

            {/* Confirmation checkbox */}
            <label className="checkbox-field">
              <input
                type="checkbox"
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
              />

              <span>
                I confirm that the information provided is correct.
              </span>
            </label>

            {errors.agree && (
              <small className="error checkbox-error">
                {errors.agree}
              </small>
            )}

            {/* Submit button */}
            <button className="submit-button" type="submit">
              Create Student Account <span aria-hidden="true">→</span>
            </button>

            <p className="form-note">* All fields are mandatory.</p>
          </form>
        </section>
      </section>

      {/* Footer */}
      <footer className="footer">
        <span>StudentPortal · ReactJS Practical No. 3</span>
        <span>Built with React &amp; CSS</span>
      </footer>
    </main>
  );
}

export default App;
