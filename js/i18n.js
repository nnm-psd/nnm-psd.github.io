/* ===========================================================
   TRANSLATIONS
   Edit the strings below to change site copy.
   Keys map to data-i18n="..." attributes in index.html.
=========================================================== */

const translations = {

  en: {
    meta: {
      title: "Minh — Quantitative Risk Analyst",
      description: "Quantitative risk analyst and independent builder of finance tools."
    },
    nav: {
      education: "Education", experience: "Experience", projects: "Projects",
      certifications: "Certifications", competitions: "Competitions",
      theme_dark: "Dark", theme_light: "Light"
    },
    hero: {
      greeting: "Hey, I'm Minh!",
      bio: "I'm a quantitative risk analyst based in Bordeaux, France. Outside of work, I build independent finance tools — backtesting engines and portfolio risk dashboards. This page tracks my education, experience, and the things I've built.",
      link_email: "Email", link_github: "GitHub", link_linkedin: "LinkedIn"
    },
    education: {
      title: "Education",
      date3: "Feb 2023 – Jun 2023",
      entry1: "Coursework in quantitative finance, risk management, and financial econometrics. Thesis on Machine Learning in French stock markets under the supervision of Mr. Souleymane LAMINOU ABDOU.",
      entry2: "Coursework in applied mathematics, numerical methods, and optimization. Thesis on the application of Applied Mathematics in Model Risk Management at BNP Paribas.",
      entry3: "Coursework in Business Intelligence, Data Science, and Bayesian Statistics. GPA: 90.33/100.",
      school4: "High School for Gifted Students, Hanoi University of Education — Hanoi, Vietnam",
      honors1: "Ranked first in class, graduated with the mention Très Bien (highest honors).",
      honors4: "Highest Baccalauréat score among all students in Hanoi."
    },
    experience: {
      title: "Experience",
      role1_title: "Quantitative Risk Analyst",
      role1_date: "Nov 2024 – Present",
      role1_b1: "Lead the monthly IFRS 9 provisions reporting, ensuring reliability and on-time delivery.",
      role1_b2: "Analyze the Retail portfolio (exposure above €100M), identifying the main risk concentrations.",
      role1_b3: "Run impact simulations on EAD, LGD, and PD.",
      role1_b4: "Optimize existing reporting tools, making the provisioning process more efficient.",
      role1_b5: "Study the risk factors driving PD changes across customer segments.",
      role1_stack: "Tech stack: SAS, Python, VBA, Power BI.",
      role2_title: "Model Risk Analyst",
      role2_date: "May 2024 – Oct 2024",
      role2: "Developed a Model Risk Rating (MRR) model: data collection, machine learning, hyper-parameter tuning, and continuous optimization.",
      role3_date: "Jun 2023 – Sep 2023"
    },
    projects: {
      title: "Projects",
      sub: "Projects, marked live as they ship."
    },
    positions: {
      sym: "Sym", name: "Name", type: "Type", status: "Status",
      live: "LIVE", source: "SOURCE",
      next_note: "Next position opening soon — every project above links to a live app or its source code."
    },
    card: { live: "Demo", source: "Source" },
    proj: {
      sandbox: { title: "Strategy Simulation", tagline: "Market data + strategy testing — DCA, momentum, and Monte Carlo backtests.", type: "Strategy / Backtesting", desc: "Backtesting and Monte Carlo simulation for DCA, momentum, and dual-momentum strategies, using block-bootstrap resampling to preserve cross-asset correlation, with a fan-chart view and probability-of-target output.", stack: "Python · Streamlit · Monte Carlo · pandas" },
      pea: { title: "PEA Risk Lab", tagline: "Market data + risk management for French equities and UCITS ETFs.", type: "Risk / Portfolio Management", desc: "Market and counterparty risk analysis for French equities and UCITS ETFs — VaR, CVaR, beta, Sharpe ratio, max drawdown, a minimum-variance optimizer, and a diversification-ratio readout as the focal view.", stack: "Python · SLSQP · yfinance" },
      pulse: { title: "France Economic Pulse", tagline: "Open-data nowcast of French industrial production, refit and published daily.", type: "Macro / Nowcasting", desc: "A nowcast of French industrial production from open data (RTE electricity, INSEE, ECB, BODACC, Open-Meteo), validated by walk-forward backtest and rebuilt every day by GitHub Actions into a bilingual FR/EN site.", stack: "Python · uv · GitHub Actions" },
      distribution: { title: "Distribution Lab", tagline: "16 probability distributions to explore, fit to data by MLE, and run through Monte Carlo VaR scenarios.", type: "Probability / Statistics", desc: "An interactive site for probability distributions in quant work: 16 tunable distributions, 20 relationships checked by simulation, maximum-likelihood fitting ranked by AIC/BIC, Monte Carlo VaR / expected-shortfall scenarios, and hypothesis-test planning with power analysis.", stack: "JavaScript · SVG · KaTeX" },
      stochastic: { title: "Visual Stochastic Calculus", tagline: "From Brownian motion to Black–Scholes, Heston, and diffusion models — 11 interactive chapters with runnable Python.", type: "Stochastic Calculus / Learning", desc: "An interactive introduction to stochastic calculus: Brownian motion, the Itô integral and lemma, SDEs, Black–Scholes, Girsanov, Feynman–Kac, Heston, and diffusion models, with a simulation for every idea, in-browser Python (Pyodide), and 30 quant interview questions.", stack: "JavaScript · Canvas · Pyodide · KaTeX" },
      credit: { title: "PD Credit Scorecard", tagline: "WOE-binned logistic scorecard on 150k Kaggle loans — test AUC 0.85, Gini 0.70.", type: "Credit Risk / Scoring", desc: "A probability-of-default scorecard on Kaggle's Give Me Some Credit data: WOE binning with IV-based feature selection, a logistic regression scaled to points (PDO 20, 600 at 50:1 odds), calibration checks, and a Streamlit app to explore bins and simulate scores.", stack: "Python · scikit-learn · Streamlit" },
      sentiment: { title: "Financial Sentiment Dashboard", tagline: "Market data + financial news, scored locally with VADER & FinBERT — no API cost.", type: "NLP / Markets", desc: "A cost-free sentiment analysis tool combining local FinBERT inference with VADER, fed by free RSS feeds and market data, deployed on Hugging Face Spaces.", stack: "FinBERT · VADER · Hugging Face" }
    },
    certifications: {
      title: "Certifications",
      date1: "Dec 2024", date2: "Jul 2024", date3: "Nov 2023", date4: "Apr 2023",
      amf: "AMF Certification"
    },
    competitions: {
      title: "Competitions",
      codinsa: "Programming competition between the schools of the INSA Group in France",
      homc_title: "Hanoi Open Mathematics Competition (HOMC)",
      homc_prize: "First Prize"
    },
    contact: {
      title: "Contact",
      sub: "Open to conversations about quantitative finance, risk tooling, or collaboration."
    },
    footer: { note: "Made by Minh. View source on GitHub." }
  },

  fr: {
    meta: {
      title: "Minh — Analyste Quantitatif des Risques",
      description: "Analyste quantitatif des risques et créateur indépendant d'outils financiers."
    },
    nav: {
      education: "Formation", experience: "Expérience", projects: "Projets",
      certifications: "Certifications", competitions: "Concours",
      theme_dark: "Sombre", theme_light: "Clair"
    },
    hero: {
      greeting: "Salut, je suis Minh !",
      bio: "Je suis analyste quantitatif des risques basé à Bordeaux. En dehors du travail, je développe des outils financiers indépendants — moteurs de backtesting et tableaux de bord de risque de portefeuille. Cette page retrace ma formation, mon expérience et ce que j'ai construit.",
      link_email: "Email", link_github: "GitHub", link_linkedin: "LinkedIn"
    },
    education: {
      title: "Formation",
      date3: "févr. 2023 – juin 2023",
      entry1: "Cours de finance quantitative, gestion des risques et économétrie financière. Mémoire sur le Machine Learning appliqué aux marchés actions français, sous la direction de M. Souleymane LAMINOU ABDOU.",
      entry2: "Cours de mathématiques appliquées, méthodes numériques et optimisation. Mémoire sur l'application des mathématiques appliquées à la gestion du risque de modèle chez BNP Paribas.",
      entry3: "Cours de Business Intelligence, science des données et statistiques bayésiennes. Moyenne : 90,33/100.",
      school4: "Lycée d'excellence de l'École Normale Supérieure de Hanoï — Hanoï, Vietnam",
      honors1: "Major de promotion, diplômé avec la mention Très Bien.",
      honors4: "Meilleur score au baccalauréat parmi tous les élèves de Hanoï."
    },
    experience: {
      title: "Expérience",
      role1_title: "Analyste Risque Quantitatif",
      role1_date: "nov. 2024 – aujourd'hui",
      role1_b1: "Pilotage du reporting mensuel des provisions IFRS 9, garantissant fiabilité et respect des délais.",
      role1_b2: "Analyse du portefeuille Retail (exposition supérieure à 100 M€), avec identification des principales concentrations de risque.",
      role1_b3: "Réalisation de simulations d'impact sur l'EAD, la LGD et la PD.",
      role1_b4: "Optimisation des outils de reporting existants, améliorant l'efficacité du processus de provisionnement.",
      role1_b5: "Étude des facteurs de risque expliquant l'évolution de la PD selon les segments de clientèle.",
      role1_stack: "Outils : SAS, Python, VBA, Power BI.",
      role2_title: "Analyste Risque de Modèle",
      role2_date: "mai 2024 – oct. 2024",
      role2: "Développement d'un modèle de Model Risk Rating (MRR) : collecte des données, machine learning, optimisation des hyperparamètres et amélioration continue.",
      role3_date: "juin 2023 – sept. 2023"
    },
    projects: {
      title: "Projets",
      sub: "Projets, mis en ligne au fur et à mesure."
    },
    positions: {
      sym: "Sym", name: "Nom", type: "Type", status: "Statut",
      live: "EN LIGNE", source: "CODE SOURCE",
      next_note: "Prochaine position en préparation — chaque projet ci-dessus renvoie vers une application en ligne ou son code source."
    },
    card: { live: "Démo", source: "Code source" },
    proj: {
      sandbox: { title: "Strategy Simulation", tagline: "Données de marché + tests de stratégie — DCA, momentum et backtests Monte Carlo.", type: "Stratégie / Backtesting", desc: "Backtesting et simulation Monte Carlo pour les stratégies DCA, momentum et dual-momentum, avec un block-bootstrap préservant la corrélation entre actifs, une vue en éventail et une probabilité d'atteindre un objectif.", stack: "Python · Streamlit · Monte Carlo · pandas" },
      pea: { title: "PEA Risk Lab", tagline: "Données de marché + gestion des risques pour actions françaises et ETF UCITS.", type: "Risque / Gestion de portefeuille", desc: "Analyse du risque de marché et de contrepartie pour les actions françaises et ETF UCITS — VaR, CVaR, bêta, ratio de Sharpe, drawdown maximal, un optimiseur de variance minimale et un ratio de diversification comme indicateur principal.", stack: "Python · SLSQP · yfinance" },
      pulse: { title: "France Economic Pulse", tagline: "Nowcast en open data de la production industrielle française, réestimé et publié chaque jour.", type: "Macro / Nowcasting", desc: "Un nowcast de la production industrielle française à partir de données ouvertes (RTE, INSEE, BCE, BODACC, Open-Meteo), validé par backtest walk-forward et reconstruit chaque jour par GitHub Actions en un site bilingue FR/EN.", stack: "Python · uv · GitHub Actions" },
      distribution: { title: "Distribution Lab", tagline: "16 lois de probabilité à explorer, ajuster aux données par maximum de vraisemblance et soumettre à des scénarios Monte Carlo de VaR.", type: "Probabilités / Statistiques", desc: "Un site interactif sur les lois de probabilité en finance quantitative : 16 lois paramétrables, 20 relations vérifiées par simulation, ajustement par maximum de vraisemblance classé par AIC/BIC, scénarios Monte Carlo de VaR / expected shortfall et planification de tests d'hypothèse avec analyse de puissance.", stack: "JavaScript · SVG · KaTeX" },
      stochastic: { title: "Visual Stochastic Calculus", tagline: "Du mouvement brownien à Black–Scholes, Heston et aux modèles de diffusion — 11 chapitres interactifs avec du Python exécutable.", type: "Calcul stochastique / Pédagogie", desc: "Une introduction interactive au calcul stochastique : mouvement brownien, intégrale et lemme d'Itô, EDS, Black–Scholes, Girsanov, Feynman–Kac, Heston et modèles de diffusion, avec une simulation pour chaque notion, du Python exécutable dans le navigateur (Pyodide) et 30 questions d'entretien quant.", stack: "JavaScript · Canvas · Pyodide · KaTeX" },
      credit: { title: "Scorecard de crédit PD", tagline: "Scorecard logistique avec binning WOE sur 150 000 prêts Kaggle — AUC test 0,85, Gini 0,70.", type: "Risque de crédit / Scoring", desc: "Une scorecard de probabilité de défaut sur les données Kaggle Give Me Some Credit : binning WOE avec sélection des variables par IV, régression logistique convertie en points (PDO 20, 600 à une cote de 50:1), contrôles de calibration et une application Streamlit pour explorer les classes et simuler des scores.", stack: "Python · scikit-learn · Streamlit" },
      sentiment: { title: "Tableau de bord de sentiment financier", tagline: "Données de marché + actualités financières, analysées localement avec VADER et FinBERT — sans coût d'API.", type: "NLP / Marchés", desc: "Un outil d'analyse de sentiment gratuit combinant FinBERT en local et VADER, alimenté par des flux RSS gratuits et des données de marché, déployé sur Hugging Face Spaces.", stack: "FinBERT · VADER · Hugging Face" }
    },
    certifications: {
      title: "Certifications",
      date1: "déc. 2024", date2: "juil. 2024", date3: "nov. 2023", date4: "avr. 2023",
      amf: "Certification AMF"
    },
    competitions: {
      title: "Concours",
      codinsa: "Concours de programmation entre les écoles du Groupe INSA",
      homc_title: "Hanoi Open Mathematics Competition (HOMC)",
      homc_prize: "Premier prix"
    },
    contact: {
      title: "Contact",
      sub: "Ouvert aux échanges sur la finance quantitative, les outils de gestion des risques ou la collaboration."
    },
    footer: { note: "Conçu par Minh. Voir le code source sur GitHub." }
  },

  vi: {
    meta: {
      title: "Minh — Chuyên Viên Phân Tích Rủi Ro Định Lượng",
      description: "Chuyên viên phân tích rủi ro định lượng và người xây dựng độc lập các công cụ tài chính."
    },
    nav: {
      education: "Học Vấn", experience: "Kinh Nghiệm", projects: "Dự Án",
      certifications: "Chứng Chỉ", competitions: "Cuộc Thi",
      theme_dark: "Tối", theme_light: "Sáng"
    },
    hero: {
      greeting: "Chào, tôi là Minh!",
      bio: "Tôi là chuyên viên phân tích rủi ro định lượng, sống tại Bordeaux, Pháp. Ngoài công việc, tôi xây dựng các công cụ tài chính độc lập — công cụ backtest và bảng điều khiển rủi ro danh mục. Trang này ghi lại học vấn, kinh nghiệm, và những gì tôi đã xây dựng.",
      link_email: "Email", link_github: "GitHub", link_linkedin: "LinkedIn"
    },
    education: {
      title: "Học Vấn",
      date3: "02/2023 – 06/2023",
      entry1: "Các môn học về tài chính định lượng, quản trị rủi ro và kinh tế lượng tài chính. Luận văn về Machine Learning trên thị trường chứng khoán Pháp dưới sự hướng dẫn của ông Souleymane LAMINOU ABDOU.",
      entry2: "Các môn học về toán ứng dụng, phương pháp số và tối ưu hóa. Luận văn về ứng dụng toán học trong quản trị rủi ro mô hình tại BNP Paribas.",
      entry3: "Các môn học về Business Intelligence, Khoa học dữ liệu và Thống kê Bayes. Điểm trung bình (GPA): 90,33/100.",
      school4: "Chuyên Đại học Sư phạm Hà Nội — Hà Nội, Việt Nam",
      honors1: "Thủ khoa của khóa, tốt nghiệp loại Xuất sắc (mention Très Bien).",
      honors4: "Thủ khoa kỳ thi tốt nghiệp THPT toàn thành phố Hà Nội."
    },
    experience: {
      title: "Kinh Nghiệm",
      role1_title: "Chuyên Viên Phân Tích Rủi Ro Định Lượng",
      role1_date: "11/2024 – nay",
      role1_b1: "Phụ trách báo cáo dự phòng IFRS 9 hằng tháng, đảm bảo độ tin cậy và đúng hạn.",
      role1_b2: "Phân tích danh mục bán lẻ (dư nợ trên 100 triệu €), xác định các điểm tập trung rủi ro chính.",
      role1_b3: "Thực hiện mô phỏng tác động lên EAD, LGD và PD.",
      role1_b4: "Tối ưu hóa các công cụ báo cáo hiện có, nâng cao hiệu quả quy trình trích lập dự phòng.",
      role1_b5: "Nghiên cứu các yếu tố rủi ro giải thích biến động PD theo từng phân khúc khách hàng.",
      role1_stack: "Công nghệ: SAS, Python, VBA, Power BI.",
      role2_title: "Chuyên Viên Phân Tích Rủi Ro Mô Hình",
      role2_date: "05/2024 – 10/2024",
      role2: "Xây dựng mô hình Model Risk Rating (MRR): thu thập dữ liệu, học máy, tinh chỉnh siêu tham số và tối ưu hóa liên tục.",
      role3_date: "06/2023 – 09/2023"
    },
    projects: {
      title: "Dự Án",
      sub: "Các dự án, được đánh dấu hoạt động khi ra mắt."
    },
    positions: {
      sym: "Mã", name: "Tên", type: "Loại", status: "Trạng Thái",
      live: "ĐANG HOẠT ĐỘNG", source: "MÃ NGUỒN",
      next_note: "Vị trí tiếp theo sắp ra mắt — mỗi dự án ở trên đều dẫn đến ứng dụng đang hoạt động hoặc mã nguồn."
    },
    card: { live: "Demo", source: "Mã nguồn" },
    proj: {
      sandbox: { title: "Strategy Simulation", tagline: "Dữ liệu thị trường + kiểm thử chiến lược — DCA, momentum và backtest Monte Carlo.", type: "Chiến Lược / Backtest", desc: "Backtest và mô phỏng Monte Carlo cho các chiến lược DCA, momentum và dual-momentum, dùng block-bootstrap để giữ tương quan giữa tài sản, kèm biểu đồ quạt và xác suất đạt mục tiêu.", stack: "Python · Streamlit · Monte Carlo · pandas" },
      pea: { title: "PEA Risk Lab", tagline: "Dữ liệu thị trường + quản trị rủi ro cho cổ phiếu Pháp và ETF UCITS.", type: "Rủi Ro / Quản Lý Danh Mục", desc: "Phân tích rủi ro thị trường và đối tác cho cổ phiếu Pháp và ETF UCITS — VaR, CVaR, beta, hệ số Sharpe, mức sụt giảm tối đa, bộ tối ưu hóa phương sai tối thiểu và chỉ số đa dạng hóa làm trọng tâm.", stack: "Python · SLSQP · yfinance" },
      pulse: { title: "France Economic Pulse", tagline: "Dự báo tức thời (nowcast) sản xuất công nghiệp Pháp từ dữ liệu mở, cập nhật hằng ngày.", type: "Vĩ Mô / Dự Báo Tức Thời", desc: "Mô hình nowcast sản xuất công nghiệp Pháp từ dữ liệu mở (RTE, INSEE, ECB, BODACC, Open-Meteo), được kiểm định bằng backtest walk-forward và tự động xây dựng lại mỗi ngày bằng GitHub Actions thành trang web song ngữ Pháp/Anh.", stack: "Python · uv · GitHub Actions" },
      distribution: { title: "Distribution Lab", tagline: "16 phân phối xác suất để khám phá, khớp với dữ liệu bằng MLE và chạy các kịch bản VaR Monte Carlo.", type: "Xác Suất / Thống Kê", desc: "Trang web tương tác về phân phối xác suất trong tài chính định lượng: 16 phân phối với tham số tùy chỉnh, 20 mối quan hệ được kiểm chứng bằng mô phỏng, khớp dữ liệu bằng ước lượng hợp lý cực đại xếp hạng theo AIC/BIC, kịch bản Monte Carlo cho VaR / expected shortfall, và thiết kế kiểm định giả thuyết với phân tích độ mạnh.", stack: "JavaScript · SVG · KaTeX" },
      stochastic: { title: "Visual Stochastic Calculus", tagline: "Từ chuyển động Brown đến Black–Scholes, Heston và mô hình khuếch tán — 11 chương tương tác kèm mã Python chạy được.", type: "Giải Tích Ngẫu Nhiên / Học Tập", desc: "Giới thiệu trực quan về giải tích ngẫu nhiên: chuyển động Brown, tích phân và bổ đề Itô, phương trình vi phân ngẫu nhiên, Black–Scholes, Girsanov, Feynman–Kac, Heston và mô hình khuếch tán, mỗi khái niệm đều có mô phỏng, Python chạy ngay trên trình duyệt (Pyodide) và 30 câu hỏi phỏng vấn quant.", stack: "JavaScript · Canvas · Pyodide · KaTeX" },
      credit: { title: "Thẻ Điểm Tín Dụng PD", tagline: "Thẻ điểm hồi quy logistic với phân nhóm WOE trên 150.000 khoản vay Kaggle — AUC kiểm tra 0,85, Gini 0,70.", type: "Rủi Ro Tín Dụng / Chấm Điểm", desc: "Thẻ điểm xác suất vỡ nợ trên dữ liệu Kaggle Give Me Some Credit: phân nhóm WOE với lựa chọn biến theo IV, hồi quy logistic quy đổi ra điểm (PDO 20, 600 điểm ở tỷ lệ 50:1), kiểm tra hiệu chuẩn, và ứng dụng Streamlit để khám phá các nhóm và mô phỏng điểm.", stack: "Python · scikit-learn · Streamlit" },
      sentiment: { title: "Bảng Điều Khiển Tâm Lý Thị Trường", tagline: "Dữ liệu thị trường + tin tức tài chính, phân tích cục bộ bằng VADER và FinBERT — không tốn chi phí API.", type: "NLP / Thị Trường", desc: "Công cụ phân tích tâm lý miễn phí kết hợp FinBERT cục bộ và VADER, dùng dữ liệu RSS miễn phí và dữ liệu thị trường, triển khai trên Hugging Face Spaces.", stack: "FinBERT · VADER · Hugging Face" }
    },
    certifications: {
      title: "Chứng Chỉ",
      date1: "12/2024", date2: "07/2024", date3: "11/2023", date4: "04/2023",
      amf: "Chứng Chỉ AMF"
    },
    competitions: {
      title: "Cuộc Thi",
      codinsa: "Cuộc thi lập trình giữa các trường thuộc hệ thống INSA tại Pháp",
      homc_title: "Kỳ thi Olympic Toán học Hà Nội mở rộng (HOMC)",
      homc_prize: "Giải Nhất"
    },
    contact: {
      title: "Liên Hệ",
      sub: "Luôn sẵn sàng trao đổi về tài chính định lượng, công cụ quản trị rủi ro, hoặc hợp tác."
    },
    footer: { note: "Được xây dựng bởi Minh. Xem mã nguồn trên GitHub." }
  }

};

window.translations = translations;

function getNested(obj, path) {
  return path.split('.').reduce((acc, key) => (acc && acc[key] !== undefined) ? acc[key] : null, obj);
}

function applyLanguage(lang) {
  const dict = translations[lang] || translations.en;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const value = getNested(dict, key);
    if (value !== null) el.textContent = value;
  });

  document.querySelectorAll('[data-i18n-attr]').forEach(el => {
    const [attr, key] = el.getAttribute('data-i18n-attr').split(':');
    const value = getNested(dict, key);
    if (value !== null) el.setAttribute(attr, value);
  });

  document.documentElement.lang = lang;

  document.querySelectorAll('.lang-toggle .toggle-btn').forEach(btn => {
    btn.classList.toggle('is-active', btn.getAttribute('data-lang') === lang);
  });

  // Keep the theme button label in sync with the new language
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    themeToggle.textContent = isDark ? dict.nav.theme_light : dict.nav.theme_dark;
  }

  try { localStorage.setItem('preferred-lang', lang); } catch (e) { /* ignore */ }
}

function initLanguage() {
  let lang = 'en';
  try {
    const saved = localStorage.getItem('preferred-lang');
    if (saved && translations[saved]) lang = saved;
  } catch (e) { /* ignore */ }

  applyLanguage(lang);

  document.querySelectorAll('.lang-toggle .toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => applyLanguage(btn.getAttribute('data-lang')));
  });
}

document.addEventListener('DOMContentLoaded', initLanguage);