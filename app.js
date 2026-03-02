/* ====================================
   SURVEY APP - VANILLA JAVASCRIPT
   Core Application Logic with i18n & User Management
   ==================================== */

// ====================================
// INTERNATIONALIZATION (i18n)
// ====================================

const i18n = {
  en: {
    // Navbar
    navbar: {
      brand: '🎯 Sorovnoma',
      home: 'Home',
      survey: 'Survey',
      dashboard: 'Dashboard',
      login: 'Login',
      logout: 'Logout',
    },
    // Home page
    home: {
      heroTitle: 'Share Your Voice Through Surveys',
      heroDescription: 'Join our premium survey platform to share your opinions, influence decisions, and earn rewards. Your feedback matters!',
      startSurvey: '✨ Start Survey',
      goDashboard: '📊 Go to Dashboard',
      whyChoose: 'Why Choose Sorovnoma?',
      secureTitle: 'Secure Access',
      secureDesc: 'Your data is encrypted and protected with industry-standard security measures. We prioritize your privacy.',
      fastTitle: 'Fast Responses',
      fastDesc: 'Complete surveys in minutes. Our intuitive interface makes it quick and easy to share your feedback.',
      resultsTitle: 'Real-Time Results',
      resultsDesc: 'Track survey results instantly with live analytics. See insights as responses come in from participants.',
      responsiveTitle: 'Fully Responsive',
      responsiveDesc: 'Works seamlessly on all devices. Take surveys anywhere, anytime - desktop, tablet, or mobile.',
      activeSurveys: 'Active Surveys',
      surveyComplete: '% Complete',
      startSurveyBtn: 'Start Survey →',
      ready: 'Ready to Make an Impact?',
      readyDesc: 'Join thousands of users who are already sharing their feedback and shaping the future of great products.',
      getStarted: 'Get Started Now ✨',
      footerCopyright: '© 2024 Sorovnoma. All rights reserved. Built with premium care.',
    },
    // Auth page
    auth: {
      login: 'Login',
      signup: 'Sign Up',
      welcomeBack: 'Welcome Back',
      createAccount: 'Create Account',
      email: 'Email Address',
      emailPlaceholder: 'you@example.com',
      password: 'Password',
      passwordPlaceholder: '••••••••',
      fullName: 'Full Name',
      fullNamePlaceholder: 'John Doe',
      confirmPassword: 'Confirm Password',
      rememberMe: 'Remember me',
      forgotPassword: 'Forgot password?',
      createOne: 'Create one',
      dontHaveAccount: "Don't have an account?",
      alreadyHave: 'Already have an account?',
      signIn: 'Sign In',
      agreeTerms: 'I agree to the Terms of Service and Privacy Policy',
      passwordWeak: 'Password is weak',
      passwordFair: 'Password is fair - add numbers or symbols for stronger password',
      passwordStrong: 'Password is strong',
      passwordMin: 'At least 8 characters',
      backToHome: 'Back to Home',
      secure: '🔐 Secure',
      fast: '🚀 Fast',
      reliable: '📊 Reliable',
    },
    // Errors
    errors: {
      fullNameRequired: 'Full name is required',
      emailInvalid: 'Please enter a valid email address',
      passwordMin: 'Password must be at least 8 characters',
      passwordMismatch: 'Passwords do not match',
      emailExists: 'This email is already registered. Please login instead.',
      userNotFound: 'User not found. Please check your email or sign up.',
      passwordIncorrect: 'Incorrect password. Please try again.',
      answerQuestion: 'Please answer this question before continuing',
      agreeTerms: 'Please agree to the Terms of Service',
    },
    // Survey page
    survey: {
      title: 'Customer Feedback Survey',
      intro: 'Your feedback is invaluable! Please take 3-5 minutes to answer these questions. Your honest responses help us improve our services.',
      progress: 'Progress',
      of: 'of',
      back: '← Back',
      next: 'Next →',
      submit: '✓ Submit Survey',
      anonymous: '💡 This survey is completely anonymous and will take about 3-5 minutes.',
      q1: 'How satisfied are you with our service?',
      q1Opt1: 'Very Satisfied',
      q1Opt2: 'Satisfied',
      q1Opt3: 'Neutral',
      q1Opt4: 'Dissatisfied',
      q2: 'Which features do you use most? (Select all that apply)',
      q2Opt1: 'Data Analysis',
      q2Opt2: 'Real-time Updates',
      q2Opt3: 'Mobile App',
      q2Opt4: 'Reporting',
      q3: 'Rate your overall experience (1-5 stars)',
      q4: 'What could we improve?',
      q4Placeholder: 'Your feedback here...',
      q5: 'How often do you use our service?',
      q5Opt1: 'Daily',
      q5Opt2: 'Weekly',
      q5Opt3: 'Monthly',
      q5Opt4: 'Occasionally',
      satisfaction: 'Satisfaction',
      features: 'Features',
      rating: 'Rating',
      feedback: 'Feedback',
      frequency: 'Frequency',
    },
    // Dashboard page
    dashboard: {
      title: 'Your Dashboard',
      subtitle: 'Track your survey responses and insights',
      takeNewSurvey: '✨ Take New Survey',
      overview: 'Overview',
      totalResponses: 'Total Responses',
      completedSurveys: 'Completed Surveys',
      averageRating: 'Average Rating',
      trends: 'Response Trends',
      responsesOverTime: 'Responses Over Time (Demo Data)',
      recentResponses: 'Recent Responses',
      noResponses: 'No survey responses yet.',
      takeSurvey: 'Take your first survey →',
      profile: 'Profile Settings',
      fullName: 'Full Name',
      email: 'Email',
      accountCreated: 'Account Created',
      back: '← Back to Dashboard',
      dashboardNav: '👤 Dashboard',
      surveysNav: '📊 Surveys',
      resultsNav: '📈 Results',
      profileNav: '👤 Profile',
      logoutNav: '🚪 Logout',
    },
    // Toast messages
    toast: {
      loggedIn: 'Logged in successfully! Redirecting...',
      accountCreated: 'Account created successfully! Redirecting...',
      loggedOut: 'Logged out successfully',
      surveyCompleted: 'Survey submitted successfully!',
    },
  },

  uz: {
    // Navbar
    navbar: {
      brand: '🎯 Sorovnoma',
      home: 'Asosiy',
      survey: 'Anketa',
      dashboard: 'Boshqaruv paneli',
      login: 'Kirish',
      logout: 'Chiqish',
    },
    // Home page
    home: {
      heroTitle: 'O\'z ovozingizni anketalar orqali eshiting',
      heroDescription: 'Bizning premium anketa platformasiga qo\'shiling, o\'z fikringizni baham ko\'ring, qarorlarni ta\'sirchas qiling va mukofot oling. Sizning fikringiz muhim!',
      startSurvey: '✨ Anketani boshlash',
      goDashboard: '📊 Boshqaruv paneliga o\'tish',
      whyChoose: 'Nega Sorovnomani tanlang?',
      secureTitle: 'Xavfsiz kirish',
      secureDesc: 'Sizning ma\'lumotlaringiz shifrlashtirilgan va sanoat standartlari bilan himoyalangan. Biz sizning maxfiylixingizni birinchi o\'ringa qo\'yamiz.',
      fastTitle: 'Tez javoblar',
      fastDesc: 'Anketalarni bir necha daqiqada yakunlang. Bizning intuitiv interfeysi fikringizni baham ko\'rishni oson qiladi.',
      resultsTitle: 'Real vaqtda natijalar',
      resultsDesc: 'Anketa natijalarini darhol kuzatib boring. Ishtirokchilardan javoblar kelib tushadigan sayin tushunchalarni ko\'ring.',
      responsiveTitle: 'To\'liq responsive',
      responsiveDesc: 'Barcha qurilmalarda muammosiz ishlaydi. Anketalarni istalgan vaqtda va joyda to\'ldiring - ish stoli, plansheti yoki mobil telefonda.',
      activeSurveys: 'Faol anketalar',
      surveyComplete: '% bajarildi',
      startSurveyBtn: 'Anketani boshlash →',
      ready: 'Ta\'sirchas qila olasizmi?',
      readyDesc: 'O\'z fikringizni baham koradigan va ajoyib mahsulotlarning kelajagini shakllantriraydigan minglab foydalanuvchiga qo\'shiling.',
      getStarted: 'Boshlashni boshlang ✨',
      footerCopyright: '© 2024 Sorovnoma. Barcha huquqlar saqlanib qoladi. Premium ehtiyot bilan tuzilgan.',
    },
    // Auth page
    auth: {
      login: 'Kirish',
      signup: 'Ro\'yxatdan o\'tish',
      welcomeBack: 'Qaytib kelganingizdan xursand',
      createAccount: 'Akkaunt yaratish',
      email: 'Email manzili',
      emailPlaceholder: 'siz@example.com',
      password: 'Parol',
      passwordPlaceholder: '••••••••',
      fullName: 'To\'liq ismi',
      fullNamePlaceholder: 'John Doe',
      confirmPassword: 'Parolni tasdiqlash',
      rememberMe: 'Meni eslab qol',
      forgotPassword: 'Parolni unutdingizmi?',
      createOne: 'Birini yaratish',
      dontHaveAccount: 'Akkauntingiz yo\'qmi?',
      alreadyHave: 'Allaqachon akkauntingiz bormi?',
      signIn: 'Kirish',
      agreeTerms: 'Men Xizmati shartlari va Maxfiylixlik siyosatiga roziман',
      passwordWeak: 'Parol kuch yetarli emas',
      passwordFair: 'Parol o\'rtacha - kuchli parol uchun raqamlar yoki belgilar qo\'shing',
      passwordStrong: 'Parol kuch li',
      passwordMin: 'Kamida 8 ta belgi',
      backToHome: 'Asosiyga qaytish',
      secure: '🔐 Xavfsiz',
      fast: '🚀 Tez',
      reliable: '📊 Ishonchli',
    },
    // Errors
    errors: {
      fullNameRequired: 'To\'liq ismi talab qilinadi',
      emailInvalid: 'Iltimos, to\'g\'ri email manzilini kiriting',
      passwordMin: 'Parol kamida 8 ta belgidan iborat bo\'lishi kerak',
      passwordMismatch: 'Parollar mos kelmadi',
      emailExists: 'Bu email allaqachon ro\'yxatdan o\'tgan. Iltimos, kirish uchun urinib ko\'ring.',
      userNotFound: 'Foydalanuvchi topilmadi. Iltimos, email-ni tekshiring yoki ro\'yxatdan o\'ting.',
      passwordIncorrect: 'Parol noto\'g\'ri. Iltimos, qayta urinib ko\'ring.',
      answerQuestion: 'Iltimos, davom etishdan oldin bu savolga javob bering',
      agreeTerms: 'Iltimos, Xizmati shartlari va Maxfiylixlik siyosatiga roziман bo\'ling',
    },
    // Survey page
    survey: {
      title: 'Mijoz fikri anketa',
      intro: 'Sizning fikringiz dafoctir! Iltimos, bu savollarga javob berish uchun 3-5 daqiqa vaqt bering. Sizning qanday ki javoblaringiz bizga xizmatni yaxshilashga yordam beradi.',
      progress: 'Taraqqiyot',
      of: 'dan',
      back: '← Orqaga',
      next: 'Keyingi →',
      submit: '✓ Anketani yuborish',
      anonymous: '💡 Bu anketa to\'lik anonimdir va taxminan 3-5 daqiqa davom etadi.',
      q1: 'Bizning xizmatdan qanchalik qoniqasiz?',
      q1Opt1: 'Juda qoniqaman',
      q1Opt2: 'Qoniqaman',
      q1Opt3: 'Neytral',
      q1Opt4: 'Qoniqmaman',
      q2: 'Qaysi xususiyatlardan ko\'proq foydalanasiz? (Barcha tegishli narsalarni tanlang)',
      q2Opt1: 'Ma\'lumot tahlili',
      q2Opt2: 'Real vaqt yangiliklari',
      q2Opt3: 'Mobile ilova',
      q2Opt4: 'Hisobot',
      q3: 'O\'zaro tajribangizni baholang (1-5 yulduz)',
      q4: 'Nima yaxshilash mumkin?',
      q4Placeholder: 'Sizning fikringiz bu yerda...',
      q5: 'Bizning xizmatdan qanchalik tez-tez foydalanasiz?',
      q5Opt1: 'Kundalik',
      q5Opt2: 'Haftalik',
      q5Opt3: 'Oylik',
      q5Opt4: 'Ba\'zi vaqt',
      satisfaction: 'Qoniqish',
      features: 'Xususiyatlar',
      rating: 'Reyting',
      feedback: 'Fikri',
      frequency: 'Chastota',
    },
    // Dashboard page
    dashboard: {
      title: 'Sizning boshqaruv panelingiz',
      subtitle: 'Anketa javoblaringiz va tushunchalarini kuzatib boring',
      takeNewSurvey: '✨ Yangi anketa to\'ldirish',
      overview: 'Umumiy ko\'rinish',
      totalResponses: 'Jami javoblar',
      completedSurveys: 'Yakunlangan anketalar',
      averageRating: 'O\'rtacha reyting',
      trends: 'Javoblar tendensiyalari',
      responsesOverTime: 'Vaqt bo\'yicha javoblar (Demo ma\'lumotlar)',
      recentResponses: 'So\'nggi javoblar',
      noResponses: 'Hali anketa javoblari yo\'q.',
      takeSurvey: 'Birinchi anketangizni to\'ldiring →',
      profile: 'Profil sozlamallari',
      fullName: 'To\'liq ismi',
      email: 'Email',
      accountCreated: 'Akkaunt yaratildi',
      back: '← Boshqaruv paneliga qaytish',
      dashboardNav: '👤 Boshqaruv paneli',
      surveysNav: '📊 Anketalar',
      resultsNav: '📈 Natijalar',
      profileNav: '👤 Profil',
      logoutNav: '🚪 Chiqish',
    },
    // Toast messages
    toast: {
      loggedIn: 'Muvaffaqiyatli kirish! Yo\'naltirilmoqda...',
      accountCreated: 'Muvaffaqiyatli akkaunt yaratildi! Yo\'naltirilmoqda...',
      loggedOut: 'Muvaffaqiyatli chiqish',
      surveyCompleted: 'Anketa muvaffaqiyatli yuborildi!',
    },
  },

  ru: {
    // Navbar
    navbar: {
      brand: '🎯 Sorovnoma',
      home: 'Главная',
      survey: 'Опрос',
      dashboard: 'Панель управления',
      login: 'Вход',
      logout: 'Выход',
    },
    // Home page
    home: {
      heroTitle: 'Поделитесь своим мнением через опросы',
      heroDescription: 'Присоединяйтесь к нашей премиум-платформе опросов, чтобы поделиться своим мнением, повлиять на решения и получать награды. Ваше мнение имеет значение!',
      startSurvey: '✨ Начать опрос',
      goDashboard: '📊 Перейти на панель',
      whyChoose: 'Почему выбрать Sorovnoma?',
      secureTitle: 'Безопасный доступ',
      secureDesc: 'Ваши данные зашифрованы и защищены стандартами отрасли. Мы ставим вашу конфиденциальность на первое место.',
      fastTitle: 'Быстрые ответы',
      fastDesc: 'Заполните опросы за несколько минут. Наш интуитивный интерфейс облегчает обмен вашим мнением.',
      resultsTitle: 'Результаты в реальном времени',
      resultsDesc: 'Отслеживайте результаты опроса мгновенно с помощью прямой аналитики. Смотрите информацию по мере поступления ответов.',
      responsiveTitle: 'Полная адаптивность',
      responsiveDesc: 'Работает без проблем на всех устройствах. Заполняйте опросы в любое время и в любом месте - на настольном ПК, планшете или мобильном телефоне.',
      activeSurveys: 'Активные опросы',
      surveyComplete: '% завершено',
      startSurveyBtn: 'Начать опрос →',
      ready: 'Готовы оказать влияние?',
      readyDesc: 'Присоединяйтесь к тысячам пользователей, которые уже делятся своим мнением и формируют будущее отличных продуктов.',
      getStarted: 'Начните прямо сейчас ✨',
      footerCopyright: '© 2024 Sorovnoma. Все права защищены. Создано с заботой.',
    },
    // Auth page
    auth: {
      login: 'Вход',
      signup: 'Регистрация',
      welcomeBack: 'Добро пожаловать!',
      createAccount: 'Создать учетную запись',
      email: 'Электронная почта',
      emailPlaceholder: 'вы@example.com',
      password: 'Пароль',
      passwordPlaceholder: '••••••••',
      fullName: 'Полное имя',
      fullNamePlaceholder: 'Иван Петров',
      confirmPassword: 'Подтвердить пароль',
      rememberMe: 'Запомнить меня',
      forgotPassword: 'Забыли пароль?',
      createOne: 'Создать',
      dontHaveAccount: 'Нет учетной записи?',
      alreadyHave: 'Уже есть учетная запись?',
      signIn: 'Вход',
      agreeTerms: 'Я согласен с Условиями обслуживания и Политикой конфиденциальности',
      passwordWeak: 'Пароль слабый',
      passwordFair: 'Пароль среднего уровня - добавьте цифры или символы для более надежного пароля',
      passwordStrong: 'Пароль надежный',
      passwordMin: 'Не менее 8 символов',
      backToHome: 'Вернуться на главную',
      secure: '🔐 Безопасно',
      fast: '🚀 Быстро',
      reliable: '📊 Надежно',
    },
    // Errors
    errors: {
      fullNameRequired: 'Требуется полное имя',
      emailInvalid: 'Пожалуйста, введите действительный адрес электронной почты',
      passwordMin: 'Пароль должен содержать не менее 8 символов',
      passwordMismatch: 'Пароли не совпадают',
      emailExists: 'Эта электронная почта уже зарегистрирована. Пожалуйста, войдите.',
      userNotFound: 'Пользователь не найден. Пожалуйста, проверьте свой адрес электронной почты или зарегистрируйтесь.',
      passwordIncorrect: 'Неверный пароль. Пожалуйста, попробуйте снова.',
      answerQuestion: 'Пожалуйста, ответьте на этот вопрос перед продолжением',
      agreeTerms: 'Пожалуйста, согласитесь с Условиями обслуживания',
    },
    // Survey page
    survey: {
      title: 'Опрос о мнении клиента',
      intro: 'Ваше мнение очень важно! Пожалуйста, ответьте на эти вопросы за 3-5 минут. Ваши честные ответы помогают нам улучшить наши услуги.',
      progress: 'Прогресс',
      of: 'из',
      back: '← Назад',
      next: 'Далее →',
      submit: '✓ Отправить опрос',
      anonymous: '💡 Этот опрос полностью анонимен и займет примерно 3-5 минут.',
      q1: 'Насколько вы довольны нашим сервисом?',
      q1Opt1: 'Очень доволен',
      q1Opt2: 'Доволен',
      q1Opt3: 'Нейтрально',
      q1Opt4: 'Недоволен',
      q2: 'Какие функции вы используете чаще всего? (Выберите все применяемые)',
      q2Opt1: 'Анализ данных',
      q2Opt2: 'Обновления в реальном времени',
      q2Opt3: 'Мобильное приложение',
      q2Opt4: 'Отчетность',
      q3: 'Оцените ваш общий опыт (1-5 звезд)',
      q4: 'Что можно улучшить?',
      q4Placeholder: 'Ваше мнение здесь...',
      q5: 'Как часто вы используете наш сервис?',
      q5Opt1: 'Ежедневно',
      q5Opt2: 'Еженедельно',
      q5Opt3: 'Ежемесячно',
      q5Opt4: 'Иногда',
      satisfaction: 'Удовлетворение',
      features: 'Функции',
      rating: 'Оценка',
      feedback: 'Отзыв',
      frequency: 'Частота',
    },
    // Dashboard page
    dashboard: {
      title: 'Ваша панель управления',
      subtitle: 'Отслеживайте ответы на опросы и аналитику',
      takeNewSurvey: '✨ Пройти новый опрос',
      overview: 'Обзор',
      totalResponses: 'Всего ответов',
      completedSurveys: 'Завершенных опросов',
      averageRating: 'Средняя оценка',
      trends: 'Тенденции ответов',
      responsesOverTime: 'Ответы во времени (демо-данные)',
      recentResponses: 'Последние ответы',
      noResponses: 'Пока нет ответов на опросы.',
      takeSurvey: 'Пройти первый опрос →',
      profile: 'Параметры профиля',
      fullName: 'Полное имя',
      email: 'Электронная почта',
      accountCreated: 'Аккаунт создан',
      back: '← Вернуться на панель',
      dashboardNav: '👤 Панель управления',
      surveysNav: '📊 Опросы',
      resultsNav: '📈 Результаты',
      profileNav: '👤 Профиль',
      logoutNav: '🚪 Выход',
    },
    // Toast messages
    toast: {
      loggedIn: 'Вход выполнен успешно! Перенаправление...',
      accountCreated: 'Учетная запись создана успешно! Перенаправление...',
      loggedOut: 'Выход выполнен успешно',
      surveyCompleted: 'Опрос отправлен успешно!',
    },
  },
};

// ====================================
// LANGUAGE MANAGEMENT
// ====================================

let currentLanguage = localStorage.getItem('lang') || 'en';

function setLanguage(lang) {
  if (i18n[lang]) {
    currentLanguage = lang;
    localStorage.setItem('lang', lang);
    applyTranslations(lang);
  }
}

function getTranslation(key) {
  const keys = key.split('.');
  let value = i18n[currentLanguage];

  for (const k of keys) {
    if (value && typeof value === 'object') {
      value = value[k];
    } else {
      return key; // Fallback to key if not found
    }
  }

  return value || key;
}

function applyTranslations(lang) {
  // Fade out effect
  document.querySelectorAll('[data-i18n], [data-i18n-placeholder]').forEach((el) => {
    el.style.opacity = '0.7';
  });

  // Apply translations with slight delay for fade effect
  setTimeout(() => {
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      el.textContent = getTranslation(key);
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      const key = el.getAttribute('data-i18n-placeholder');
      el.placeholder = getTranslation(key);
    });

    document.querySelectorAll('[data-i18n-title]').forEach((el) => {
      const key = el.getAttribute('data-i18n-title');
      el.title = getTranslation(key);
    });

    document.querySelectorAll('[data-i18n], [data-i18n-placeholder]').forEach((el) => {
      el.style.opacity = '1';
    });

    // Update survey questions if on survey page
    if (window.Survey && Survey.questions) {
      updateSurveyQuestions();
    }
  }, 100);
}

function updateSurveyQuestions() {
  Survey.questions = [
    {
      id: 'q1',
      type: 'radio',
      question: getTranslation('survey.q1'),
      options: [
        getTranslation('survey.q1Opt1'),
        getTranslation('survey.q1Opt2'),
        getTranslation('survey.q1Opt3'),
        getTranslation('survey.q1Opt4'),
      ],
    },
    {
      id: 'q2',
      type: 'checkbox',
      question: getTranslation('survey.q2'),
      options: [
        getTranslation('survey.q2Opt1'),
        getTranslation('survey.q2Opt2'),
        getTranslation('survey.q2Opt3'),
        getTranslation('survey.q2Opt4'),
      ],
    },
    {
      id: 'q3',
      type: 'rating',
      question: getTranslation('survey.q3'),
    },
    {
      id: 'q4',
      type: 'text',
      question: getTranslation('survey.q4'),
      placeholder: getTranslation('survey.q4Placeholder'),
    },
    {
      id: 'q5',
      type: 'dropdown',
      question: getTranslation('survey.q5'),
      options: [
        getTranslation('survey.q5Opt1'),
        getTranslation('survey.q5Opt2'),
        getTranslation('survey.q5Opt3'),
        getTranslation('survey.q5Opt4'),
      ],
    },
  ];

  // Re-render current step if on survey page
  if (window.Survey && AppState !== undefined) {
    Survey.renderStep();
  }
}

// ====================================
// USER DATABASE MANAGEMENT
// ====================================

const UserDB = {
  // Get all users
  getAllUsers() {
    return JSON.parse(localStorage.getItem('users_db')) || [];
  },

  // Save users
  saveUsers(users) {
    localStorage.setItem('users_db', JSON.stringify(users));
  },

  // Find user by email
  findByEmail(email) {
    const users = this.getAllUsers();
    return users.find((u) => u.email.toLowerCase() === email.toLowerCase());
  },

  // Check if email exists
  emailExists(email) {
    return this.findByEmail(email) !== undefined;
  },

  // Add new user
  addUser(name, email, password) {
    if (this.emailExists(email)) {
      return { success: false, error: 'emailExists' };
    }

    const users = this.getAllUsers();
    const newUser = {
      id: Date.now().toString(),
      name,
      email,
      password, // In production, this should be hashed
      createdAt: new Date().toISOString(),
    };

    users.push(newUser);
    this.saveUsers(users);
    return { success: true, user: newUser };
  },

  // Verify login
  verifyLogin(email, password) {
    const user = this.findByEmail(email);

    if (!user) {
      return { success: false, error: 'userNotFound' };
    }

    if (user.password !== password) {
      return { success: false, error: 'passwordIncorrect' };
    }

    return { success: true, user };
  },
};

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

    // Apply saved language
    applyTranslations(currentLanguage);
  },

  // Save user to localStorage
  setUser(user) {
    this.currentUser = {
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: user.createdAt,
    };
    localStorage.setItem('auth_user', JSON.stringify(this.currentUser));
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

    const result = UserDB.addUser(fullName, email, password);
    if (!result.success) {
      return { success: false, errors: { email: getTranslation(`errors.${result.error}`) } };
    }

    AppState.setUser(result.user);
    return { success: true, user: result.user };
  },

  // Sign in
  signin(email, password) {
    const errors = this.validateSignin(email, password);
    if (Object.keys(errors).length > 0) {
      return { success: false, errors };
    }

    const result = UserDB.verifyLogin(email, password);
    if (!result.success) {
      return { success: false, errors: { email: getTranslation(`errors.${result.error}`) } };
    }

    AppState.setUser(result.user);
    return { success: true, user: result.user };
  },

  // Validate signup
  validateSignup(fullName, email, password) {
    const errors = {};

    if (!fullName.trim()) {
      errors.fullName = getTranslation('errors.fullNameRequired');
    }

    if (!this.isValidEmail(email)) {
      errors.email = getTranslation('errors.emailInvalid');
    }

    if (password.length < 8) {
      errors.password = getTranslation('errors.passwordMin');
    }

    return errors;
  },

  // Validate signin
  validateSignin(email, password) {
    const errors = {};

    if (!this.isValidEmail(email)) {
      errors.email = getTranslation('errors.emailInvalid');
    }

    if (password.length < 8) {
      errors.password = getTranslation('errors.passwordMin');
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
      Toast.error(getTranslation('errors.answerQuestion'));
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
      Toast.error(getTranslation('errors.answerQuestion'));
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
      Toast.success(getTranslation('toast.loggedOut'));
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
        <button class="btn btn-primary btn-small" id="nav-logout">${getTranslation('navbar.logout')}</button>
      `;
      document.getElementById('nav-logout')?.addEventListener('click', (e) => {
        e.preventDefault();
        AppState.clearUser();
        Toast.success(getTranslation('toast.loggedOut'));
        setTimeout(() => {
          window.location.href = 'index.html';
        }, 500);
      });
    } else {
      navAuthContainer.innerHTML = `
        <button class="btn btn-secondary btn-small" id="nav-login">${getTranslation('navbar.login')}</button>
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
window.setLanguage = setLanguage;
window.getTranslation = getTranslation;
window.applyTranslations = applyTranslations;
window.UserDB = UserDB;
