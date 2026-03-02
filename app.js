/* ====================================
   SURVEY APP - VANILLA JAVASCRIPT
   Core Application Logic
   ==================================== */

// ====================================
// STATE MANAGEMENT & LOCALSTORAGE
// ====================================

const AppState = {
  currentUser: null,
  returnUrl: null,
  currentStep: 0,
  surveyResponses: [],

  // Initialize app state from localStorage
  init() {
    this.currentUser = JSON.parse(localStorage.getItem('auth_user')) || null;
    this.surveyResponses = JSON.parse(localStorage.getItem('surveyResponses')) || [];
    this.returnUrl = sessionStorage.getItem('returnUrl') || null;
  },

  // Save user to localStorage
  setUser(user) {
    this.currentUser = user;
    localStorage.setItem('auth_user', JSON.stringify(user));
  },

  // Clear user (logout)
  clearUser() {
    this.currentUser = null;
    localStorage.removeItem('auth_user');
  },

  // Add survey response
  addSurveyResponse(response) {
    this.surveyResponses.push({
      ...response,
      timestamp: new Date().toISOString(),
    });
    localStorage.setItem('surveyResponses', JSON.stringify(this.surveyResponses));
  },

  // Get all responses
  getResponses() {
    return this.surveyResponses;
  },

  // Get response stats
  getStats() {
    const responses = this.surveyResponses;
    if (responses.length === 0) {
      return {
        totalResponses: 0,
        completedSurveys: 0,
        averageRating: 0,
      };
    }

    const ratings = responses
      .filter((r) => r.rating)
      .map((r) => parseInt(r.rating));
    const avgRating = ratings.length > 0 ? ratings.reduce((a, b) => a + b, 0) / ratings.length : 0;

    return {
      totalResponses: responses.length,
      completedSurveys: responses.length,
      averageRating: avgRating.toFixed(1),
    };
  },
};

// ====================================
// AUTHENTICATION
// ====================================

const Auth = {
  // Check if user is authenticated
  isAuthenticated() {
    return AppState.currentUser !== null;
  },

  // Require authentication (redirect if not authenticated)
  requireAuth() {
    if (!this.isAuthenticated()) {
      // Save current URL to return after login
      AppState.returnUrl = window.location.href.split('/').pop() || 'index.html';
      sessionStorage.setItem('returnUrl', AppState.returnUrl);
      window.location.href = 'auth.html';
      return false;
    }
    return true;
  },

  // Sign up
  signup(fullName, email, password) {
    const errors = this.validateSignup(fullName, email, password);
    if (Object.keys(errors).length > 0) {
      return { success: false, errors };
    }

    const user = {
      name: fullName,
      email: email,
      createdAt: new Date().toISOString(),
    };

    AppState.setUser(user);
    return { success: true, user };
  },

  // Sign in
  signin(email, password) {
    const errors = this.validateSignin(email, password);
    if (Object.keys(errors).length > 0) {
      return { success: false, errors };
    }

    // For demo: any valid email/password combination works
    // In production, this would validate against a backend
    const user = {
      name: email.split('@')[0], // Extract name from email
      email: email,
      createdAt: new Date().toISOString(),
    };

    AppState.setUser(user);
    return { success: true, user };
  },

  // Validate signup
  validateSignup(fullName, email, password) {
    const errors = {};

    if (!fullName.trim()) {
      errors.fullName = 'Full name is required';
    }

    if (!this.isValidEmail(email)) {
      errors.email = 'Please enter a valid email address';
    }

    if (password.length < 8) {
      errors.password = 'Password must be at least 8 characters';
    }

    return errors;
  },

  // Validate signin
  validateSignin(email, password) {
    const errors = {};

    if (!this.isValidEmail(email)) {
      errors.email = 'Please enter a valid email address';
    }

    if (password.length < 8) {
      errors.password = 'Password must be at least 8 characters';
    }

    return errors;
  },

  // Email validation
  isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  },

  // Get password strength
  getPasswordStrength(password) {
    if (password.length < 8) return 'weak';
    if (password.length < 12) return 'fair';
    if (/[A-Z]/.test(password) && /[0-9]/.test(password) && /[^A-Za-z0-9]/.test(password))
      return 'strong';
    return 'fair';
  },
};

// ====================================
// FORM VALIDATION
// ====================================

const FormValidator = {
  // Show error
  showError(fieldName, message) {
    const field = document.querySelector(`[data-field="${fieldName}"]`);
    if (!field) return;

    field.classList.add('error');
    const errorEl = field.nextElementSibling;
    if (errorEl && errorEl.classList.contains('form-error')) {
      errorEl.textContent = message;
      errorEl.classList.add('show');
    }
  },

  // Show success
  showSuccess(fieldName) {
    const field = document.querySelector(`[data-field="${fieldName}"]`);
    if (!field) return;

    field.classList.remove('error');
    const errorEl = field.nextElementSibling;
    if (errorEl && errorEl.classList.contains('form-error')) {
      errorEl.classList.remove('show');
    }
  },

  // Clear errors
  clearErrors() {
    document.querySelectorAll('.form-error').forEach((el) => {
      el.classList.remove('show');
    });
    document.querySelectorAll('[data-field]').forEach((el) => {
      el.classList.remove('error');
    });
  },

  // Validate password match
  validatePasswordMatch(password, confirmPassword) {
    return password === confirmPassword;
  },
};

// ====================================
// TOAST NOTIFICATIONS
// ====================================

const Toast = {
  // Show toast notification
  show(message, type = 'info', duration = 3000) {
    const container = document.getElementById('toast-container');
    if (!container) {
      const newContainer = document.createElement('div');
      newContainer.id = 'toast-container';
      newContainer.className = 'toast-container';
      document.body.appendChild(newContainer);
    }

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;

    document.getElementById('toast-container').appendChild(toast);

    setTimeout(() => {
      toast.style.animation = 'fadeOut 0.3s ease-out';
      setTimeout(() => toast.remove(), 300);
    }, duration);
  },

  success(message) {
    this.show(message, 'success', 3000);
  },

  error(message) {
    this.show(message, 'error', 4000);
  },

  info(message) {
    this.show(message, 'info', 3000);
  },
};

// ====================================
// MODALS
// ====================================

const Modal = {
  // Show modal
  show(title, message, icon = '✓', actions = null) {
    const overlay = document.getElementById('modal-overlay');
    const modal = document.getElementById('modal');

    if (!overlay) {
      this.createModal();
      return this.show(title, message, icon, actions);
    }

    const modalTitle = modal.querySelector('.modal-title');
    const modalMessage = modal.querySelector('.modal-message');
    const modalIcon = modal.querySelector('.modal-icon');
    const modalActions = modal.querySelector('.modal-actions');

    modalTitle.textContent = title;
    modalMessage.textContent = message;
    modalIcon.textContent = icon;

    // Clear previous actions
    modalActions.innerHTML = '';

    if (actions) {
      actions.forEach((action) => {
        const btn = document.createElement('button');
        btn.className = `btn ${action.class || 'btn-primary'}`;
        btn.textContent = action.text;
        btn.onclick = () => {
          action.callback();
          this.hide();
        };
        modalActions.appendChild(btn);
      });
    } else {
      const btn = document.createElement('button');
      btn.className = 'btn btn-primary';
      btn.textContent = 'Close';
      btn.onclick = () => this.hide();
      modalActions.appendChild(btn);
    }

    overlay.classList.add('show');
  },

  // Hide modal
  hide() {
    const overlay = document.getElementById('modal-overlay');
    if (overlay) {
      overlay.classList.remove('show');
    }
  },

  // Create modal HTML
  createModal() {
    const overlay = document.createElement('div');
    overlay.id = 'modal-overlay';
    overlay.className = 'modal-overlay';

    const modal = document.createElement('div');
    modal.id = 'modal';
    modal.className = 'modal';
    modal.innerHTML = `
      <div class="modal-icon">✓</div>
      <h3 class="modal-title">Success</h3>
      <p class="modal-message">Operation completed successfully</p>
      <div class="modal-actions">
        <button class="btn btn-primary">Close</button>
      </div>
    `;

    overlay.appendChild(modal);
    document.body.appendChild(overlay);

    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        this.hide();
      }
    });
  },
};

// ====================================
// SURVEY NAVIGATION
// ====================================

const Survey = {
  questions: [
    {
      id: 'q1',
      type: 'radio',
      question: 'How satisfied are you with our service?',
      options: ['Very Satisfied', 'Satisfied', 'Neutral', 'Dissatisfied'],
    },
    {
      id: 'q2',
      type: 'checkbox',
      question: 'Which features do you use most? (Select all that apply)',
      options: ['Data Analysis', 'Real-time Updates', 'Mobile App', 'Reporting'],
    },
    {
      id: 'q3',
      type: 'rating',
      question: 'Rate your overall experience (1-5 stars)',
    },
    {
      id: 'q4',
      type: 'text',
      question: 'What could we improve?',
      placeholder: 'Your feedback here...',
    },
    {
      id: 'q5',
      type: 'dropdown',
      question: 'How often do you use our service?',
      options: ['Daily', 'Weekly', 'Monthly', 'Occasionally'],
    },
  ],

  // Initialize survey
  init() {
    AppState.currentStep = 0;
    this.renderStep();
  },

  // Render current step
  renderStep() {
    const container = document.getElementById('survey-container');
    if (!container) return;

    const step = this.questions[AppState.currentStep];
    const progress = ((AppState.currentStep + 1) / this.questions.length) * 100;

    let questionHTML = `
      <div class="survey-step" data-step="${AppState.currentStep}">
        <h2>${step.question}</h2>
    `;

    switch (step.type) {
      case 'radio':
        questionHTML += `<div class="radio-group">`;
        step.options.forEach((option) => {
          questionHTML += `
            <label class="radio-item">
              <input type="radio" name="${step.id}" value="${option}" />
              <span>${option}</span>
            </label>
          `;
        });
        questionHTML += `</div>`;
        break;

      case 'checkbox':
        questionHTML += `<div class="checkbox-group">`;
        step.options.forEach((option) => {
          questionHTML += `
            <label class="checkbox-item">
              <input type="checkbox" name="${step.id}" value="${option}" />
              <span>${option}</span>
            </label>
          `;
        });
        questionHTML += `</div>`;
        break;

      case 'rating':
        questionHTML += `
          <div class="star-rating" id="star-rating">
            ${[1, 2, 3, 4, 5].map((i) => `<span class="star" data-value="${i}">★</span>`).join('')}
          </div>
        `;
        break;

      case 'text':
        questionHTML += `
          <textarea 
            name="${step.id}" 
            placeholder="${step.placeholder || ''}"
            rows="4"
          ></textarea>
        `;
        break;

      case 'dropdown':
        questionHTML += `
          <select name="${step.id}">
            <option value="">Select an option</option>
            ${step.options.map((opt) => `<option value="${opt}">${opt}</option>`).join('')}
          </select>
        `;
        break;
    }

    questionHTML += `</div>`;

    // Update progress
    document.querySelector('.progress-fill').style.width = `${progress}%`;

    // Update stepper
    this.updateStepper();

    // Render question
    container.innerHTML = questionHTML;

    // Update survey controls
    this.updateControls();

    // Add event listeners for rating stars
    if (step.type === 'rating') {
      document.querySelectorAll('.star').forEach((star) => {
        star.addEventListener('click', (e) => {
          document.querySelectorAll('.star').forEach((s) => s.classList.remove('active'));
          star.classList.add('active');
          // Set value for all stars up to this one
          const value = e.target.dataset.value;
          document.querySelectorAll('.star').forEach((s) => {
            if (parseInt(s.dataset.value) <= value) {
              s.classList.add('active');
            }
          });
        });
      });
    }
  },

  // Update stepper
  updateStepper() {
    document.querySelectorAll('.step').forEach((step, index) => {
      step.classList.remove('active', 'completed');
      if (index < AppState.currentStep) {
        step.classList.add('completed');
      } else if (index === AppState.currentStep) {
        step.classList.add('active');
      }
    });
  },

  // Update controls
  updateControls() {
    const backBtn = document.getElementById('btn-back');
    const nextBtn = document.getElementById('btn-next');
    const submitBtn = document.getElementById('btn-submit');

    if (backBtn) {
      backBtn.style.display = AppState.currentStep > 0 ? 'block' : 'none';
    }

    if (AppState.currentStep === this.questions.length - 1) {
      if (nextBtn) nextBtn.style.display = 'none';
      if (submitBtn) submitBtn.style.display = 'block';
    } else {
      if (nextBtn) nextBtn.style.display = 'block';
      if (submitBtn) submitBtn.style.display = 'none';
    }
  },

  // Get answer
  getAnswer() {
    const step = this.questions[AppState.currentStep];
    let answer;

    if (step.type === 'checkbox') {
      answer = Array.from(document.querySelectorAll(`input[name="${step.id}"]:checked`)).map(
        (el) => el.value
      );
    } else if (step.type === 'rating') {
      const activeStar = document.querySelector('.star.active');
      answer = activeStar ? activeStar.dataset.value : null;
    } else {
      const input = document.querySelector(`input[name="${step.id}"], select[name="${step.id}"], textarea[name="${step.id}"]`);
      answer = input ? input.value : null;
    }

    return answer;
  },

  // Next step
  next() {
    const answer = this.getAnswer();
    if (!answer || (Array.isArray(answer) && answer.length === 0)) {
      Toast.error('Please answer this question before continuing');
      return;
    }

    AppState.currentStep++;
    if (AppState.currentStep >= this.questions.length) {
      AppState.currentStep = this.questions.length - 1;
    }
    this.renderStep();
  },

  // Back step
  back() {
    AppState.currentStep--;
    if (AppState.currentStep < 0) {
      AppState.currentStep = 0;
    }
    this.renderStep();
  },

  // Submit survey
  submit() {
    const answer = this.getAnswer();
    if (!answer || (Array.isArray(answer) && answer.length === 0)) {
      Toast.error('Please answer this question before submitting');
      return;
    }

    // Collect all responses
    const responses = {};
    this.questions.forEach((q) => {
      const input = document.querySelector(`input[name="${q.id}"], select[name="${q.id}"], textarea[name="${q.id}"]`);
      if (input) {
        if (q.type === 'checkbox') {
          responses[q.id] = Array.from(
            document.querySelectorAll(`input[name="${q.id}"]:checked`)
          ).map((el) => el.value);
        } else if (q.type === 'rating') {
          const activeStar = document.querySelector('.star.active');
          responses[q.id] = activeStar ? activeStar.dataset.value : null;
          responses.rating = activeStar ? activeStar.dataset.value : null;
        } else {
          responses[q.id] = input.value;
        }
      }
    });

    AppState.addSurveyResponse(responses);

    Modal.show('Survey Completed! ✓', 'Thank you for completing the survey. Your feedback is valuable to us.', '✓', [
      {
        text: 'View Results',
        class: 'btn-primary',
        callback: () => {
          window.location.href = 'dashboard.html';
        },
      },
      {
        text: 'Back to Home',
        class: 'btn-secondary',
        callback: () => {
          window.location.href = 'index.html';
        },
      },
    ]);
  },
};

// ====================================
// CHART RENDERING
// ====================================

const Chart = {
  // Simple bar chart using canvas
  renderBarChart(canvasId, data, labels) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    const barWidth = width / (data.length * 1.5);
    const maxValue = Math.max(...data);
    const padding = 40;

    // Clear canvas
    ctx.fillStyle = 'rgba(30, 41, 59, 0.5)';
    ctx.fillRect(0, 0, width, height);

    // Draw grid
    ctx.strokeStyle = 'rgba(148, 163, 184, 0.1)';
    ctx.lineWidth = 1;
    for (let i = 0; i <= 5; i++) {
      const y = padding + (i * (height - padding * 2)) / 5;
      ctx.beginPath();
      ctx.moveTo(padding, y);
      ctx.lineTo(width - padding, y);
      ctx.stroke();
    }

    // Draw bars
    data.forEach((value, index) => {
      const barHeight = ((value / maxValue) * (height - padding * 2)) || 0;
      const x = padding + index * (barWidth * 1.5) + barWidth * 0.25;
      const y = height - padding - barHeight;

      // Gradient
      const gradient = ctx.createLinearGradient(0, y, 0, height - padding);
      gradient.addColorStop(0, '#6366f1');
      gradient.addColorStop(1, '#8b5cf6');

      ctx.fillStyle = gradient;
      ctx.fillRect(x, y, barWidth, barHeight);

      // Label
      ctx.fillStyle = '#cbd5e1';
      ctx.font = '12px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(labels[index], x + barWidth / 2, height - padding + 20);

      // Value
      ctx.fillText(value, x + barWidth / 2, y - 5);
    });

    // Y-axis label
    ctx.save();
    ctx.rotate(-Math.PI / 2);
    ctx.fillStyle = '#94a3b8';
    ctx.font = '12px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('Responses', -height / 2, 15);
    ctx.restore();
  },
};

// ====================================
// INITIALIZATION
// ====================================

document.addEventListener('DOMContentLoaded', () => {
  AppState.init();

  // Set up navigation links
  setupNavigation();

  // Add fade-out animation for toast
  const style = document.createElement('style');
  style.textContent = `
    @keyframes fadeOut {
      from { opacity: 1; }
      to { opacity: 0; }
    }
  `;
  document.head.appendChild(style);
});

function setupNavigation() {
  // Home
  const homeLink = document.getElementById('nav-home');
  if (homeLink) {
    homeLink.addEventListener('click', (e) => {
      e.preventDefault();
      window.location.href = 'index.html';
    });
  }

  // Survey
  const surveyLink = document.getElementById('nav-survey');
  if (surveyLink) {
    surveyLink.addEventListener('click', (e) => {
      e.preventDefault();
      if (!Auth.requireAuth()) return;
      window.location.href = 'survey.html';
    });
  }

  // Dashboard
  const dashboardLink = document.getElementById('nav-dashboard');
  if (dashboardLink) {
    dashboardLink.addEventListener('click', (e) => {
      e.preventDefault();
      if (!Auth.requireAuth()) return;
      window.location.href = 'dashboard.html';
    });
  }

  // Login
  const loginLink = document.getElementById('nav-login');
  if (loginLink) {
    loginLink.addEventListener('click', (e) => {
      e.preventDefault();
      window.location.href = 'auth.html';
    });
  }

  // Logout
  const logoutLink = document.getElementById('nav-logout');
  if (logoutLink) {
    logoutLink.addEventListener('click', (e) => {
      e.preventDefault();
      AppState.clearUser();
      Toast.success('Logged out successfully');
      setTimeout(() => {
        window.location.href = 'index.html';
      }, 500);
    });
  }

  // Update navbar based on auth state
  updateNavbar();
}

function updateNavbar() {
  const isAuthenticated = Auth.isAuthenticated();
  const navAuthContainer = document.getElementById('nav-auth');

  if (navAuthContainer) {
    if (isAuthenticated) {
      navAuthContainer.innerHTML = `
        <span class="nav-link" style="color: var(--primary); cursor: default;">
          ${AppState.currentUser.name}
        </span>
        <button class="btn btn-primary btn-small" id="nav-logout">Logout</button>
      `;
      document.getElementById('nav-logout')?.addEventListener('click', (e) => {
        e.preventDefault();
        AppState.clearUser();
        Toast.success('Logged out successfully');
        setTimeout(() => {
          window.location.href = 'index.html';
        }, 500);
      });
    } else {
      navAuthContainer.innerHTML = `
        <button class="btn btn-secondary btn-small" id="nav-login">Login</button>
      `;
      document.getElementById('nav-login')?.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = 'auth.html';
      });
    }
  }
}

// Expose functions globally for inline event handlers
window.Survey = Survey;
window.Auth = Auth;
window.FormValidator = FormValidator;
window.Modal = Modal;
window.Toast = Toast;
window.Chart = Chart;
window.updateNavbar = updateNavbar;
