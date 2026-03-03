/* ====================================
   SOROVNOMA - Survey Platform
   Vanilla JS with i18n, Auth, & Survey Management
   ==================================== */

// ====================================
// INTERNATIONALIZATION (i18n)
// ====================================

const i18n = {
  en: {
    navbar: {
      brand: '🎯 Sorovnoma',
      home: 'Home',
      survey: 'Survey',
      dashboard: 'Dashboard',
      login: 'Login',
      logout: 'Logout',
    },
    home: {
      heroTitle: 'Create & Share Surveys Instantly',
      heroDescription: 'Build surveys, share invite links, gather responses in real-time. Perfect for educators, researchers, and teams.',
      startSurvey: '✨ Create Survey',
      goDashboard: '📊 Go to Dashboard',
      whyChoose: 'Why Choose Sorovnoma?',
      secureTitle: 'Secure Access',
      secureDesc: 'Your data is encrypted and protected with industry-standard security measures. We prioritize your privacy.',
      fastTitle: 'Fast Responses',
      fastDesc: 'Create surveys in minutes. Share with a simple link and gather responses instantly.',
      resultsTitle: 'Real-Time Results',
      resultsDesc: 'Track responses instantly with live analytics. See insights as participants respond.',
      responsiveTitle: 'Fully Responsive',
      responsiveDesc: 'Works seamlessly on all devices. Create and take surveys anywhere, anytime.',
      activeSurveys: 'Active Surveys',
      surveyComplete: '% Complete',
      startSurveyBtn: 'Start Survey →',
      ready: 'Ready to Get Started?',
      readyDesc: 'Create your first survey today and start gathering insights from your audience.',
      getStarted: 'Create Your First Survey ✨',
      footerCopyright: '© 2024 Sorovnoma. All rights reserved. Built with premium care.',
    },
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
      surveyNotFound: 'Survey not found. Please check the invite link.',
      surveyTitle: 'Survey title is required',
      atLeastOneQuestion: 'Add at least one question to your survey',
    },
    survey: {
      title: 'Survey',
      intro: 'Thank you for participating! Please answer all questions.',
      progress: 'Progress',
      of: 'of',
      back: '← Back',
      next: 'Next →',
      submit: '✓ Submit Survey',
      anonymous: '💡 Your responses are valuable. Thank you!',
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
      lobby: 'Waiting for survey to start...',
      waitingParticipants: 'Waiting for participants...',
      participants: 'Participants',
      participantsJoined: 'Participants joined',
      startSurvey: 'Start Survey',
      surveyLive: 'Survey is live!',
      inviteLink: 'Invite Link',
      copyLink: 'Copy Link',
      linkCopied: 'Link copied to clipboard!',
      myResults: 'My Results',
      viewResults: 'View Results',
      submissions: 'Submissions',
      noSubmissions: 'No submissions yet',
      submitted: 'Submitted',
      averageRating: 'Average Rating',
      inviteCode: 'Invite Code',
      copyCode: 'Copy Code',
      joinByCode: 'Join by Code',
      joinByCodeDesc: 'Enter the invite code to join',
      codeInput: 'Enter invite code',
      joinButton: 'Join',
      invalidCode: 'Invalid invite code',
      ready: 'I\'m Ready',
      notReady: 'Not Ready',
      readyCount: 'Ready',
      out_of: '/',
      startAnyway: 'Start Anyway',
      endSurvey: 'End Survey',
      confirmStart: 'Start Survey',
      confirmEnd: 'End Survey',
      alreadySubmittedMsg: 'You already submitted this survey',
      viewMyResults: 'View My Results',
      resultsStatus: 'Results',
      exportJSON: 'Export JSON',
      exportCSV: 'Export CSV',
      participantName: 'Participant Name',
      participantEmail: 'Email',
      submittedAt: 'Submitted At',
      choiceDistribution: 'Choice Distribution',
      ratingDistribution: 'Rating Distribution',
      average: 'Average',
      commonWords: 'Most Mentioned Words',
      statusOpen: 'Open',
      statusClosed: 'Closed',
      noParticipants: 'No participants yet',
      surveyClosed: 'This survey is closed',
      surveyClosedMsg: 'You can no longer submit responses',
    },
    dashboard: {
      title: 'Your Dashboard',
      subtitle: 'Manage your surveys and results',
      createSurvey: '✨ Create New Survey',
      mySurveys: 'My Surveys',
      noSurveys: 'No surveys created yet. Create your first survey!',
      surveyTitle: 'Survey Title',
      surveyDescription: 'Description',
      questions: 'Questions',
      participants: 'Participants',
      status: 'Status',
      actions: 'Actions',
      openLobby: 'Open Lobby',
      viewResults: 'View Results',
      delete: 'Delete',
      edit: 'Edit',
      draft: 'Draft',
      lobby: 'Lobby',
      live: 'Live',
      closed: 'Closed',
      profile: 'Profile Settings',
      fullName: 'Full Name',
      email: 'Email',
      accountCreated: 'Account Created',
      back: '← Back',
      dashboardNav: '👤 Dashboard',
      surveysNav: '📊 Surveys',
      resultsNav: '📈 Results',
      profileNav: '👤 Profile',
      logoutNav: '🚪 Logout',
      createSurveyModal: 'Create New Survey',
      surveyTitleLabel: 'Survey Title',
      surveyDescLabel: 'Description (optional)',
      addQuestion: '+ Add Question',
      questionText: 'Question',
      questionType: 'Type',
      removeQuestion: 'Remove',
      create: 'Create Survey',
      cancel: 'Cancel',
      multipleChoice: 'Multiple Choice',
      checkboxes: 'Checkboxes',
      rating: 'Rating (1-5)',
      shortText: 'Short Text',
      dropdown: 'Dropdown',
      totalSubmissions: 'Total Submissions',
      totalParticipants: 'Total Participants',
      avgRating: 'Average Rating',
    },
    toast: {
      loggedIn: 'Logged in successfully! Redirecting...',
      accountCreated: 'Account created successfully! Redirecting...',
      loggedOut: 'Logged out successfully',
      surveyCompleted: 'Survey submitted successfully!',
      surveyCreated: 'Survey created successfully!',
      linkCopied: 'Invite link copied to clipboard!',
      alreadySubmitted: 'You already submitted this survey',
      inviteCodeCopied: 'Invite code copied!',
      draftRestored: 'Draft restored successfully',
      draftDiscarded: 'Draft discarded',
      jsonExported: 'Results exported as JSON',
      csvExported: 'Results exported as CSV',
      readyStatusUpdated: 'Ready status updated',
    },
  },
  uz: {
    navbar: {
      brand: '🎯 Sorovnoma',
      home: 'Asosiy',
      survey: 'Anketa',
      dashboard: 'Boshqaruv',
      login: 'Kirish',
      logout: 'Chiqish',
    },
    home: {
      heroTitle: 'Foydalanuvchi Anketa Yaratish Platformasi',
      heroDescription: 'Anketalarni yaratın, taklifnomalar ulashing, real vaqtda javoblarni to\'pling. O\'qituvchilar, tadqiqotchilar va jamalar uchun ideal.',
      startSurvey: '✨ Anketa Yaratish',
      goDashboard: '📊 Boshqaruvga O\'tish',
      whyChoose: 'Nega Sorovnomani Tanlang?',
      secureTitle: 'Xavfsiz Kirish',
      secureDesc: 'Sizning ma\'lumotlaringiz shifrlangan va himoyalangan.',
      fastTitle: 'Tez Javoblar',
      fastDesc: 'Anketalarni daqiqalarda yarating. Oddiy havola bilan baham korishni boshlang.',
      resultsTitle: 'Real Vaqtda Natijalar',
      resultsDesc: 'Javoblarni foydalanuvchilar yo\'llagan sayin kuzatib boring.',
      responsiveTitle: 'To\'liq Responsive',
      responsiveDesc: 'Barcha qurilmalarda ishlaydi.',
      activeSurveys: 'Faol Anketalar',
      surveyComplete: '% bajarildi',
      startSurveyBtn: 'Anketani Boshlash →',
      ready: 'Boshlashga Tayyormi?',
      readyDesc: 'Bugun birinchi anketangizni yarating va ma\'lumot to\'plashni boshlang.',
      getStarted: 'Birinchi Anketangizni Yarating ✨',
      footerCopyright: '© 2024 Sorovnoma. Barcha huquqlar saqlanib qoladi.',
    },
    auth: {
      login: 'Kirish',
      signup: 'Ro\'yxatdan O\'tish',
      welcomeBack: 'Qaytib Kelganingizdan Xursand',
      createAccount: 'Akkaunt Yaratish',
      email: 'Email Manzili',
      emailPlaceholder: 'siz@example.com',
      password: 'Parol',
      passwordPlaceholder: '••••••••',
      fullName: 'To\'liq Ismi',
      fullNamePlaceholder: 'Ism Familya',
      confirmPassword: 'Parolni Tasdiqlash',
      rememberMe: 'Meni Eslab Qol',
      forgotPassword: 'Parolni Unutdingizmi?',
      createOne: 'Yaratish',
      dontHaveAccount: 'Akkauntingiz Yo\'qmi?',
      alreadyHave: 'Allaqachon Akkauntingiz Bormi?',
      signIn: 'Kirish',
      agreeTerms: 'Men Shartlarga Roziман',
      passwordWeak: 'Parol Kuch Yetarli Emas',
      passwordFair: 'Parol O\'rtacha',
      passwordStrong: 'Parol Kuchli',
      passwordMin: 'Kamida 8 Ta Belgi',
      backToHome: 'Asosiyga Qaytish',
      secure: '🔐 Xavfsiz',
      fast: '🚀 Tez',
      reliable: '📊 Ishonchli',
    },
    errors: {
      fullNameRequired: 'To\'liq ismi talab qilinadi',
      emailInvalid: 'To\'g\'ri email kiriting',
      passwordMin: 'Parol 8 ta belgidan iborat bo\'lishi kerak',
      passwordMismatch: 'Parollar mos kelmadi',
      emailExists: 'Bu email allaqachon ro\'yxatdan o\'tgan',
      userNotFound: 'Foydalanuvchi topilmadi',
      passwordIncorrect: 'Parol noto\'g\'ri',
      answerQuestion: 'Savolga javob bering',
      agreeTerms: 'Shartlarga roziман bo\'ling',
      surveyNotFound: 'Anketa topilmadi',
      surveyTitle: 'Anketa sarlavhasini kiriting',
      atLeastOneQuestion: 'Kamida bir savol qo\'shing',
    },
    survey: {
      title: 'Anketa',
      intro: 'Javob berishingiz uchun rahmat!',
      progress: 'Taraqqiyot',
      of: 'dan',
      back: '← Orqaga',
      next: 'Keyingi →',
      submit: '✓ Anketani Yuborish',
      anonymous: '💡 Sizning javoblaringiz qimmatli!',
      participants: 'Ishtirokchilar',
      participantsJoined: 'Ishtirokchilar Qo\'shildi',
      startSurvey: 'Anketani Boshlash',
      lobby: 'Anketaning boshlashini kutmoqda...',
      waitingParticipants: 'Ishtirokchilarning qo\'shilishini kutmoqda...',
      surveyLive: 'Anketa Faol!',
      inviteLink: 'Taklifnoma Havolasi',
      copyLink: 'Havolani Nusxalash',
      linkCopied: 'Havolasiga nusxa ko\'chirildi!',
      myResults: 'Mening Natijalarim',
      viewResults: 'Natijalarni Ko\'rish',
      submissions: 'Topshirilmalar',
      noSubmissions: 'Hali topshirilmalar yo\'q',
      submitted: 'Topshirilgan',
      averageRating: 'O\'rtacha Reyting',
      q1: 'Hizmatdan qanchalik qoniqasiz?',
      q1Opt1: 'Juda qoniqaman',
      q1Opt2: 'Qoniqaman',
      q1Opt3: 'Neytral',
      q1Opt4: 'Qoniqmaman',
      q2: 'Qaysi xususiyatlardan ko\'proq foydalanasiz?',
      q2Opt1: 'Ma\'lumot Tahlili',
      q2Opt2: 'Real Vaqt Yangiliklari',
      q2Opt3: 'Mobile Ilova',
      q2Opt4: 'Hisobot',
      q3: 'O\'zaro tajribangizni baholang (1-5 yulduz)',
      q4: 'Nima yaxshilash mumkin?',
      q4Placeholder: 'Sizning fikringiz...',
      q5: 'Qanchalik tez-tez foydalanasiz?',
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
    dashboard: {
      title: 'Sizning Boshqaruv Panelingiz',
      subtitle: 'Anketalaringizni va natijalaringizni boshqaring',
      createSurvey: '✨ Yangi Anketa Yaratish',
      mySurveys: 'Mening Anketalarim',
      noSurveys: 'Hali anketa yaratilmagani. Birinchi anketangizni yarating!',
      surveyTitle: 'Anketa Sarlavhasi',
      surveyDescription: 'Tavsifi',
      questions: 'Savollar',
      participants: 'Ishtirokchilar',
      status: 'Holati',
      actions: 'Harakatlar',
      openLobby: 'Lobbyni Ochish',
      viewResults: 'Natijalarni Ko\'rish',
      delete: 'O\'chirish',
      edit: 'Tahrir',
      draft: 'Loyiha',
      lobby: 'Lobby',
      live: 'Faol',
      closed: 'Yopilgan',
      profile: 'Profil Sozlamalari',
      fullName: 'To\'liq Ismi',
      email: 'Email',
      accountCreated: 'Akkaunt Yaratilgan',
      back: '← Orqaga',
      dashboardNav: '👤 Boshqaruv',
      surveysNav: '📊 Anketalar',
      resultsNav: '📈 Natijalar',
      profileNav: '👤 Profil',
      logoutNav: '🚪 Chiqish',
      createSurveyModal: 'Yangi Anketa Yaratish',
      surveyTitleLabel: 'Anketa Sarlavhasi',
      surveyDescLabel: 'Tavsifi (ixtiyoriy)',
      addQuestion: '+ Savol Qo\'shing',
      questionText: 'Savol',
      questionType: 'Turi',
      removeQuestion: 'O\'chirish',
      create: 'Anketa Yaratish',
      cancel: 'Bekor Qilish',
      multipleChoice: 'Bir Javob',
      checkboxes: 'Ko\'p Javob',
      rating: 'Reyting (1-5)',
      shortText: 'Qisqa Matn',
      dropdown: 'Pastki Menyu',
      totalSubmissions: 'Jami Topshirilmalar',
      totalParticipants: 'Jami Ishtirokchilar',
      avgRating: 'O\'rtacha Reyting',
    },
    toast: {
      loggedIn: 'Muvaffaqiyatli kirish! Yo\'naltirilmoqda...',
      accountCreated: 'Akkaunt yaratildi! Yo\'naltirilmoqda...',
      loggedOut: 'Muvaffaqiyatli chiqish',
      surveyCompleted: 'Anketa muvaffaqiyatli yuborildi!',
      surveyCreated: 'Anketa muvaffaqiyatli yaratildi!',
      linkCopied: 'Havolasiga nusxa ko\'chirildi!',
    },
  },
  ru: {
    navbar: {
      brand: '🎯 Sorovnoma',
      home: 'Главная',
      survey: 'Опрос',
      dashboard: 'Панель',
      login: 'Вход',
      logout: 'Выход',
    },
    home: {
      heroTitle: 'Создавайте и делитесь опросами мгновенно',
      heroDescription: 'Создавайте опросы, делитесь ссылками приглашения, собирайте ответы в реальном времени. Идеально для преподавателей, исследователей и команд.',
      startSurvey: '✨ Создать опрос',
      goDashboard: '📊 Перейти на панель',
      whyChoose: 'Почему выбрать Sorovnoma?',
      secureTitle: 'Безопасный доступ',
      secureDesc: 'Ваши данные зашифрованы и защищены.',
      fastTitle: 'Быстрые ответы',
      fastDesc: 'Создавайте опросы за считанные минуты.',
      resultsTitle: 'Результаты в реальном времени',
      resultsDesc: 'Отслеживайте ответы по мере их поступления.',
      responsiveTitle: 'Полная адаптивность',
      responsiveDesc: 'Работает на всех устройствах.',
      activeSurveys: 'Активные опросы',
      surveyComplete: '% завершено',
      startSurveyBtn: 'Начать опрос →',
      ready: 'Готовы начать?',
      readyDesc: 'Создайте свой первый опрос сегодня и начните собирать данные.',
      getStarted: 'Создайте свой первый опрос ✨',
      footerCopyright: '© 2024 Sorovnoma. Все права защищены.',
    },
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
      agreeTerms: 'Я согласен с условиями',
      passwordWeak: 'Пароль слабый',
      passwordFair: 'Пароль среднего уровня',
      passwordStrong: 'Пароль надежный',
      passwordMin: 'Не менее 8 символов',
      backToHome: 'Вернуться на главную',
      secure: '🔐 Безопасно',
      fast: '🚀 Быстро',
      reliable: '📊 Надежно',
    },
    errors: {
      fullNameRequired: 'Требуется полное имя',
      emailInvalid: 'Введите действительный адрес электронной почты',
      passwordMin: 'Пароль должен быть не менее 8 символов',
      passwordMismatch: 'Пароли не совпадают',
      emailExists: 'Эта электронная почта уже зарегистрирована',
      userNotFound: 'Пользователь не найден',
      passwordIncorrect: 'Неверный пароль',
      answerQuestion: 'Ответьте на вопрос',
      agreeTerms: 'Согласитесь с условиями',
      surveyNotFound: 'Опрос не найден',
      surveyTitle: 'Введите название опроса',
      atLeastOneQuestion: 'Добавьте хотя бы один вопрос',
    },
    survey: {
      title: 'Опрос',
      intro: 'Спасибо за участие!',
      progress: 'Прогресс',
      of: 'из',
      back: '← Назад',
      next: 'Далее →',
      submit: '✓ Отправить опрос',
      anonymous: '💡 Ваши ответы ценны!',
      participants: 'Участники',
      participantsJoined: 'Присоединились участники',
      startSurvey: 'Начать опрос',
      lobby: 'Ожидание начала опроса...',
      waitingParticipants: 'Ожидание участников...',
      surveyLive: 'Опрос открыт!',
      inviteLink: 'Ссылка приглашения',
      copyLink: 'Копировать ссылку',
      linkCopied: 'Ссылка скопирована!',
      myResults: 'Мои результаты',
      viewResults: 'Просмотреть результаты',
      submissions: 'Ответы',
      noSubmissions: 'Нет ответов',
      submitted: 'Отправлено',
      averageRating: 'Средняя оценка',
      q1: 'Насколько вы довольны?',
      q1Opt1: 'Очень доволен',
      q1Opt2: 'Доволен',
      q1Opt3: 'Нейтрально',
      q1Opt4: 'Недоволен',
      q2: 'Какие функции вы используете больше всего?',
      q2Opt1: 'Анализ данных',
      q2Opt2: 'Обновления в реальном времени',
      q2Opt3: 'Мобильное приложение',
      q2Opt4: 'Отчетность',
      q3: 'Оцените ваш опыт (1-5 звезд)',
      q4: 'Что можно улучшить?',
      q4Placeholder: 'Ваш ответ здесь...',
      q5: 'Как часто вы используете?',
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
    dashboard: {
      title: 'Ваша панель управления',
      subtitle: 'Управляйте вашими опросами и результатами',
      createSurvey: '✨ Создать новый опрос',
      mySurveys: 'Мои опросы',
      noSurveys: 'Вы еще не создали ни одного опроса. Создайте свой первый!',
      surveyTitle: 'Название опроса',
      surveyDescription: 'Описание',
      questions: 'Вопросы',
      participants: 'Участники',
      status: 'Статус',
      actions: 'Действия',
      openLobby: 'Открыть лобби',
      viewResults: 'Просмотреть результаты',
      delete: 'Удалить',
      edit: 'Редактировать',
      draft: 'Черновик',
      lobby: 'Лобби',
      live: 'Активный',
      closed: 'Завершен',
      profile: 'Параметры профиля',
      fullName: 'Полное имя',
      email: 'Электронная почта',
      accountCreated: 'Аккаунт создан',
      back: '← Назад',
      dashboardNav: '👤 Панель',
      surveysNav: '📊 Опросы',
      resultsNav: '📈 Результаты',
      profileNav: '👤 Профиль',
      logoutNav: '🚪 Выход',
      createSurveyModal: 'Создать новый опрос',
      surveyTitleLabel: 'Название опроса',
      surveyDescLabel: 'Описание (необязательно)',
      addQuestion: '+ Добавить вопрос',
      questionText: 'Вопрос',
      questionType: 'Тип',
      removeQuestion: 'Удалить',
      create: 'Создать опрос',
      cancel: 'Отмена',
      multipleChoice: 'Один выбор',
      checkboxes: 'Несколько выборов',
      rating: 'Оценка (1-5)',
      shortText: 'Короткий текст',
      dropdown: 'Выпадающее меню',
      totalSubmissions: 'Всего ответов',
      totalParticipants: 'Всего участников',
      avgRating: 'Средняя оценка',
    },
    toast: {
      loggedIn: 'Вход выполнен успешно! Перенаправление...',
      accountCreated: 'Учетная запись создана! Перенаправление...',
      loggedOut: 'Выход выполнен успешно',
      surveyCompleted: 'Опрос отправлен успешно!',
      surveyCreated: 'Опрос создан успешно!',
      linkCopied: 'Ссылка скопирована!',
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
      return key;
    }
  }

  return value || key;
}

function applyTranslations(lang) {
  document.querySelectorAll('[data-i18n], [data-i18n-placeholder]').forEach((el) => {
    el.style.opacity = '0.7';
  });

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

  if (window.Survey && AppState !== undefined) {
    Survey.renderStep();
  }
}

// ====================================
// USER DATABASE MANAGEMENT
// ====================================

const UserDB = {
  getAllUsers() {
    return JSON.parse(localStorage.getItem('users_db')) || [];
  },

  saveUsers(users) {
    localStorage.setItem('users_db', JSON.stringify(users));
  },

  findByEmail(email) {
    const users = this.getAllUsers();
    return users.find((u) => u.email.toLowerCase() === email.toLowerCase());
  },

  emailExists(email) {
    return this.findByEmail(email) !== undefined;
  },

  addUser(name, email, password) {
    if (this.emailExists(email)) {
      return { success: false, error: 'emailExists' };
    }

    const users = this.getAllUsers();
    const newUser = {
      id: Date.now().toString(),
      name,
      email,
      password,
      createdAt: new Date().toISOString(),
    };

    users.push(newUser);
    this.saveUsers(users);
    return { success: true, user: newUser };
  },

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
// SURVEY DATABASE MANAGEMENT
// ====================================

const SurveyDB = {
  getAllSurveys() {
    return JSON.parse(localStorage.getItem('surveys_db')) || [];
  },

  saveSurveys(surveys) {
    localStorage.setItem('surveys_db', JSON.stringify(surveys));
  },

  createSurvey(hostEmail, hostName, title, description, questions) {
    const surveys = this.getAllSurveys();
    const survey = {
      id: 'survey_' + Date.now(),
      hostEmail,
      hostName,
      title,
      description,
      questions,
      status: 'draft',
      participants: [],
      createdAt: new Date().toISOString(),
    };

    surveys.push(survey);
    this.saveSurveys(surveys);
    return survey;
  },

  getSurveyById(surveyId) {
    const surveys = this.getAllSurveys();
    return surveys.find((s) => s.id === surveyId);
  },

  getSurveysByHost(hostEmail) {
    const surveys = this.getAllSurveys();
    return surveys.filter((s) => s.hostEmail === hostEmail);
  },

  addParticipant(surveyId, participantEmail, participantName) {
    const surveys = this.getAllSurveys();
    const survey = surveys.find((s) => s.id === surveyId);

    if (survey) {
      const exists = survey.participants.some((p) => p.email === participantEmail);
      if (!exists) {
        survey.participants.push({
          email: participantEmail,
          name: participantName,
          joinedAt: new Date().toISOString(),
        });
        this.saveSurveys(surveys);
      }
    }

    return survey;
  },

  updateSurveyStatus(surveyId, status) {
    const surveys = this.getAllSurveys();
    const survey = surveys.find((s) => s.id === surveyId);

    if (survey) {
      survey.status = status;
      this.saveSurveys(surveys);
    }

    return survey;
  },

  deleteSurvey(surveyId) {
    const surveys = this.getAllSurveys().filter((s) => s.id !== surveyId);
    this.saveSurveys(surveys);
  },
};

// ====================================
// SUBMISSION DATABASE MANAGEMENT
// ====================================

const SubmissionDB = {
  getAllSubmissions() {
    return JSON.parse(localStorage.getItem('submissions_db')) || [];
  },

  saveSubmissions(submissions) {
    localStorage.setItem('submissions_db', JSON.stringify(submissions));
  },

  addSubmission(surveyId, participantEmail, participantName, answers, ratingValue) {
    const submissions = this.getAllSubmissions();
    const submission = {
      id: 'sub_' + Date.now(),
      surveyId,
      participantEmail,
      participantName,
      answers,
      ratingValue,
      createdAt: new Date().toISOString(),
    };

    submissions.push(submission);
    this.saveSubmissions(submissions);
    return submission;
  },

  getSubmissionsBySurvey(surveyId) {
    const submissions = this.getAllSubmissions();
    return submissions.filter((s) => s.surveyId === surveyId);
  },

  getSubmissionByParticipant(surveyId, participantEmail) {
    const submissions = this.getAllSubmissions();
    return submissions.find((s) => s.surveyId === surveyId && s.participantEmail === participantEmail);
  },

  getStats(surveyId) {
    const submissions = this.getSubmissionsBySurvey(surveyId);
    const ratings = submissions.filter((s) => s.ratingValue).map((s) => parseInt(s.ratingValue));
    const avgRating = ratings.length > 0 ? (ratings.reduce((a, b) => a + b, 0) / ratings.length).toFixed(1) : 0;

    return {
      totalSubmissions: submissions.length,
      averageRating: avgRating,
    };
  },
};

// ====================================
// APP STATE MANAGEMENT
// ====================================

const AppState = {
  currentUser: null,
  returnUrl: null,
  currentStep: 0,
  surveyResponses: [],

  init() {
    this.currentUser = JSON.parse(localStorage.getItem('auth_user')) || null;
    this.surveyResponses = JSON.parse(localStorage.getItem('surveyResponses')) || [];
    this.returnUrl = sessionStorage.getItem('returnUrl') || null;
    applyTranslations(currentLanguage);
  },

  setUser(user) {
    this.currentUser = {
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: user.createdAt,
    };
    localStorage.setItem('auth_user', JSON.stringify(this.currentUser));
  },

  clearUser() {
    this.currentUser = null;
    localStorage.removeItem('auth_user');
  },

  addSurveyResponse(response) {
    this.surveyResponses.push({
      ...response,
      timestamp: new Date().toISOString(),
    });
    localStorage.setItem('surveyResponses', JSON.stringify(this.surveyResponses));
  },

  getResponses() {
    return this.surveyResponses;
  },

  getStats() {
    const responses = this.surveyResponses;
    if (responses.length === 0) {
      return {
        totalResponses: 0,
        completedSurveys: 0,
        averageRating: 0,
      };
    }

    const ratings = responses.filter((r) => r.rating).map((r) => parseInt(r.rating));
    const avgRating = ratings.length > 0 ? (ratings.reduce((a, b) => a + b, 0) / ratings.length).toFixed(1) : 0;

    return {
      totalResponses: responses.length,
      completedSurveys: responses.length,
      averageRating: avgRating,
    };
  },
};

// ====================================
// AUTHENTICATION
// ====================================

const Auth = {
  isAuthenticated() {
    return AppState.currentUser !== null;
  },

  requireAuth() {
    if (!this.isAuthenticated()) {
      AppState.returnUrl = window.location.href.split('/').pop() || 'dashboard.html';
      sessionStorage.setItem('returnUrl', AppState.returnUrl);
      window.location.href = 'auth.html';
      return false;
    }
    return true;
  },

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

  isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  },

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

  showSuccess(fieldName) {
    const field = document.querySelector(`[data-field="${fieldName}"]`);
    if (!field) return;

    field.classList.remove('error');
    const errorEl = field.nextElementSibling;
    if (errorEl && errorEl.classList.contains('form-error')) {
      errorEl.classList.remove('show');
    }
  },

  clearErrors() {
    document.querySelectorAll('.form-error').forEach((el) => {
      el.classList.remove('show');
    });
    document.querySelectorAll('[data-field]').forEach((el) => {
      el.classList.remove('error');
    });
  },

  validatePasswordMatch(password, confirmPassword) {
    return password === confirmPassword;
  },
};

// ====================================
// TOAST NOTIFICATIONS
// ====================================

const Toast = {
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

  hide() {
    const overlay = document.getElementById('modal-overlay');
    if (overlay) {
      overlay.classList.remove('show');
    }
  },

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
// SURVEY NAVIGATION & LOGIC
// ====================================

const Survey = {
  questions: [],

  init() {
    AppState.currentStep = 0;
    this.renderStep();
  },

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

    document.querySelector('.progress-fill').style.width = `${progress}%`;

    this.updateStepper();

    container.innerHTML = questionHTML;

    this.updateControls();

    if (step.type === 'rating') {
      document.querySelectorAll('.star').forEach((star) => {
        star.addEventListener('click', (e) => {
          document.querySelectorAll('.star').forEach((s) => s.classList.remove('active'));
          star.classList.add('active');
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

  getAnswer() {
    const step = this.questions[AppState.currentStep];
    let answer;

    if (step.type === 'checkbox') {
      answer = Array.from(document.querySelectorAll(`input[name="${step.id}"]:checked`)).map((el) => el.value);
    } else if (step.type === 'rating') {
      const activeStar = document.querySelector('.star.active');
      answer = activeStar ? activeStar.dataset.value : null;
    } else {
      const input = document.querySelector(
        `input[name="${step.id}"], select[name="${step.id}"], textarea[name="${step.id}"]`
      );
      answer = input ? input.value : null;
    }

    return answer;
  },

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

  back() {
    AppState.currentStep--;
    if (AppState.currentStep < 0) {
      AppState.currentStep = 0;
    }
    this.renderStep();
  },

  submit() {
    const answer = this.getAnswer();
    if (!answer || (Array.isArray(answer) && answer.length === 0)) {
      Toast.error(getTranslation('errors.answerQuestion'));
      return;
    }

    const responses = {};
    this.questions.forEach((q) => {
      const input = document.querySelector(
        `input[name="${q.id}"], select[name="${q.id}"], textarea[name="${q.id}"]`
      );
      if (input) {
        if (q.type === 'checkbox') {
          responses[q.id] = Array.from(document.querySelectorAll(`input[name="${q.id}"]:checked`)).map(
            (el) => el.value
          );
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

    Modal.show('Survey Completed! ✓', 'Thank you for completing the survey.', '✓', [
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
  renderBarChart(canvasId, data, labels) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    const barWidth = width / (data.length * 1.5);
    const maxValue = Math.max(...data);
    const padding = 40;

    ctx.fillStyle = 'rgba(30, 41, 59, 0.5)';
    ctx.fillRect(0, 0, width, height);

    ctx.strokeStyle = 'rgba(148, 163, 184, 0.1)';
    ctx.lineWidth = 1;
    for (let i = 0; i <= 5; i++) {
      const y = padding + (i * (height - padding * 2)) / 5;
      ctx.beginPath();
      ctx.moveTo(padding, y);
      ctx.lineTo(width - padding, y);
      ctx.stroke();
    }

    data.forEach((value, index) => {
      const barHeight = ((value / maxValue) * (height - padding * 2)) || 0;
      const x = padding + index * (barWidth * 1.5) + barWidth * 0.25;
      const y = height - padding - barHeight;

      const gradient = ctx.createLinearGradient(0, y, 0, height - padding);
      gradient.addColorStop(0, '#6366f1');
      gradient.addColorStop(1, '#8b5cf6');

      ctx.fillStyle = gradient;
      ctx.fillRect(x, y, barWidth, barHeight);

      ctx.fillStyle = '#cbd5e1';
      ctx.font = '12px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(labels[index], x + barWidth / 2, height - padding + 20);

      ctx.fillText(value, x + barWidth / 2, y - 5);
    });

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

  setupNavigation();

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
  const homeLink = document.getElementById('nav-home');
  if (homeLink) {
    homeLink.addEventListener('click', (e) => {
      e.preventDefault();
      window.location.href = 'index.html';
    });
  }

  const surveyLink = document.getElementById('nav-survey');
  if (surveyLink) {
    surveyLink.addEventListener('click', (e) => {
      e.preventDefault();
      if (!Auth.requireAuth()) return;
      window.location.href = 'dashboard.html';
    });
  }

  const dashboardLink = document.getElementById('nav-dashboard');
  if (dashboardLink) {
    dashboardLink.addEventListener('click', (e) => {
      e.preventDefault();
      if (!Auth.requireAuth()) return;
      window.location.href = 'dashboard.html';
    });
  }

  const loginLink = document.getElementById('nav-login');
  if (loginLink) {
    loginLink.addEventListener('click', (e) => {
      e.preventDefault();
      window.location.href = 'auth.html';
    });
  }

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

// Expose globals
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
window.SurveyDB = SurveyDB;
window.SubmissionDB = SubmissionDB;
window.AppState = AppState;
