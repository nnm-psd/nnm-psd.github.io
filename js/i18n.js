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
      certifications: "Certifications", portfolio: "Portfolio",
      theme_dark: "Dark", theme_light: "Light"
    },
    hero: {
      greeting: "Hey, I'm Minh!",
      bio: "I'm a quantitative risk analyst based in France. Outside of work, I build independent finance tools — backtesting engines, options pricing libraries, and portfolio risk dashboards. This page tracks my education, experience, and the things I've built.",
      link_email: "Email", link_github: "GitHub", link_linkedin: "LinkedIn"
    },
    education: {
      title: "Education",
      entry1: "Coursework in quantitative finance, risk management, and financial econometrics. Thesis on Machine Learning in French stock markets under the supervision of Mr. Souleymane LAMINOU ABDOU.",
      entry2: "Coursework in applied mathematics, numerical methods, and optimization. Thesis on the application of Applied Mathematics in Model Risk Management at BNP Paribas.",
      entry3: "Coursework in Business Intelligence, Data Science, and Bayesian Statistics."
    },
    experience: {
      title: "Experience",
      role1_title: "Quantitative Risk Analyst",
      role1_b1: "Replace with a concrete responsibility — e.g. market or counterparty risk modeling, stress testing, reporting.",
      role1_b2: "Replace with a second achievement — tooling built, process improved, or model validated.",
      role2: "Replace with a short summary of this earlier position."
    },
    projects: {
      title: "Projects",
      sub: "Projects, marked live as they ship."
    },
    positions: {
      sym: "Sym", name: "Name", type: "Type", status: "Status",
      live: "LIVE", source: "SOURCE", in_progress: "IN PROGRESS",
      next_note: "Next position opening soon — open positions above are live, not screenshots."
    },
    card: { live: "Demo", source: "Source" },
    proj: {
      sandbox: { title: "Strategy Simulation", tagline: "Market data + strategy testing — DCA, momentum, and Monte Carlo backtests.", type: "Strategy / Backtesting", desc: "Backtesting and Monte Carlo simulation for DCA, momentum, and dual-momentum strategies, using block-bootstrap resampling to preserve cross-asset correlation, with a fan-chart view and probability-of-target output.", stack: "Python · Streamlit · Monte Carlo · pandas" },
      pea: { title: "PEA Risk Lab", tagline: "Market data + risk management for French equities and UCITS ETFs.", type: "Risk / Portfolio Management", desc: "Market and counterparty risk analysis for French equities and UCITS ETFs — VaR, CVaR, beta, Sharpe ratio, max drawdown, a minimum-variance optimizer, and a diversification-ratio readout as the focal view.", stack: "Python · SLSQP · yfinance" },
      options: { title: "Options Analytics Lab", tagline: "BSM, binomial trees, and Bjerksund-Stensland pricing, cross-checked.", type: "Derivatives Pricing", desc: "A four-layer options pricing platform: Black-Scholes-Merton, Cox-Ross-Rubinstein binomial trees with escrowed dividends, and Bjerksund-Stensland 2002, plus a diagnostics and attribution layer.", stack: "Python · BSM · Binomial trees · FRED API" },
      valuation: { title: "European IB Valuation Pipeline", tagline: "ESEF / iXBRL filings parsed directly into DCF, comps, LBO models.", type: "Valuation / IFRS", desc: "A no-LLM valuation pipeline that parses ESEF / iXBRL filings directly with Arelle, running DCF, comparable companies, LBO, and precedent transaction models, with results stored in SQLite.", stack: "Python · Arelle · SQLAlchemy" },
      macro: { title: "Macro-to-Sector Rotation Pipeline", tagline: "FRED macro signals driving a walk-forward sector rotation backtest.", type: "Macro / Sector Rotation", desc: "A sector-rotation signal built on free FRED macro series, with walk-forward backtesting that handles publication lag and block-bootstrap significance testing on the resulting Sharpe ratio.", stack: "Python · FRED · Sector ETFs" },
      cpp: { title: "C++ Performance Engine", tagline: "A pybind11 port of the backtest core, benchmarked against Python.", type: "Performance Engineering", desc: "A pybind11 port of the backtest and Monte Carlo core to C++, with a Streamlit toggle to switch between the Python and C++ engines and benchmark them side by side.", stack: "C++ · pybind11 · CMake" },
      sentiment: { title: "Financial Sentiment Dashboard", tagline: "Market data + financial news, scored locally with VADER & FinBERT — no API cost.", type: "NLP / Markets", desc: "A cost-free sentiment analysis tool combining local FinBERT inference with VADER, fed by free RSS feeds and market data, deployed on Hugging Face Spaces.", stack: "FinBERT · VADER · Hugging Face" }
    },
    certifications: {
      title: "Certifications",
      entry1: "Replace with what this certification covers, and a credential ID or verification link if you have one.",
      entry2: "Replace with what this certification covers, and a credential ID or verification link if you have one.",
      entry3: "Replace with what this certification covers, and a credential ID or verification link if you have one."
    },
    portfolio: {
      title: "Financial Portfolio",
      sub: "A closer look at three flagship tools — the problem each one solves, the method behind it, and what it produces."
    },
    case: {
      label_problem: "Problem", label_approach: "Approach", label_result: "Result",
      sandbox: {
        title: "Portfolio Strategy Sandbox",
        problem: "Comparing DCA, momentum, and dual-momentum strategies under realistic, correlated market conditions rather than idealized assumptions.",
        approach: "Block-bootstrap Monte Carlo simulation that preserves cross-asset correlation, instead of a standard geometric Brownian motion model.",
        result: "A fan chart of simulated outcomes with percentile bands and the probability of reaching a target value."
      },
      pea: {
        title: "PEA Risk Lab",
        problem: "Most retail dashboards show performance but not risk concentration across a French equity and ETF portfolio.",
        approach: "VaR, CVaR, beta, and a min-variance optimizer over a CAC 40 and UCITS ETF universe, solved via SLSQP.",
        result: "A single diversification-ratio score as the headline view, with full risk decomposition underneath."
      },
      options: {
        title: "Options Analytics Lab",
        problem: "Single-model option pricers can misprice American-style options around large discrete dividends.",
        approach: "Three pricing engines — BSM, CRR binomial trees, and Bjerksund-Stensland — cross-checked through a shared diagnostics layer.",
        result_label: "Known limit",
        result: "The escrowed-dividend method still understates early-exercise premium ahead of large dividends — documented as a next upgrade."
      }
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
      certifications: "Certifications", portfolio: "Portfolio",
      theme_dark: "Sombre", theme_light: "Clair"
    },
    hero: {
      greeting: "Salut, je suis Minh !",
      bio: "Je suis analyste quantitatif des risques basé à Paris. En dehors du travail, je développe des outils financiers indépendants — moteurs de backtesting, bibliothèques de pricing d'options, tableaux de bord de risque de portefeuille. Cette page retrace ma formation, mon expérience et ce que j'ai construit.",
      link_email: "Email", link_github: "GitHub", link_linkedin: "LinkedIn"
    },
    education: {
      title: "Formation",
      entry1: "À remplacer par le domaine d'étude, le sujet de mémoire ou les cours pertinents — méthodes quantitatives, pricing des produits dérivés, statistiques.",
      entry2: "À remplacer par une courte description — mentions, projets pertinents ou échanges universitaires."
    },
    experience: {
      title: "Expérience",
      role1_title: "Analyste Quantitatif des Risques",
      role1_b1: "À remplacer par une responsabilité concrète — par ex. modélisation du risque de marché ou de contrepartie, stress tests, reporting.",
      role1_b2: "À remplacer par une seconde réalisation — outil développé, processus amélioré ou modèle validé.",
      role2: "À remplacer par un court résumé de ce poste précédent."
    },
    projects: {
      title: "Projets",
      sub: "Projets, mis en ligne au fur et à mesure."
    },
    positions: {
      sym: "Sym", name: "Nom", type: "Type", status: "Statut",
      live: "EN LIGNE", source: "CODE SOURCE", in_progress: "EN COURS",
      next_note: "Prochaine position en préparation — les positions ci-dessus sont en ligne, pas de simples captures d'écran."
    },
    card: { live: "Démo", source: "Code source" },
    proj: {
      sandbox: { title: "Strategy Simulation", tagline: "Données de marché + tests de stratégie — DCA, momentum et backtests Monte Carlo.", type: "Stratégie / Backtesting", desc: "Backtesting et simulation Monte Carlo pour les stratégies DCA, momentum et dual-momentum, avec un block-bootstrap préservant la corrélation entre actifs, une vue en éventail et une probabilité d'atteindre un objectif.", stack: "Python · Streamlit · Monte Carlo · pandas" },
      pea: { title: "PEA Risk Lab", tagline: "Données de marché + gestion des risques pour actions françaises et ETF UCITS.", type: "Risque / Gestion de portefeuille", desc: "Analyse du risque de marché et de contrepartie pour les actions françaises et ETF UCITS — VaR, CVaR, bêta, ratio de Sharpe, drawdown maximal, un optimiseur de variance minimale et un ratio de diversification comme indicateur principal.", stack: "Python · SLSQP · yfinance" },
      options: { title: "Options Analytics Lab", tagline: "BSM, arbres binomiaux et pricing Bjerksund-Stensland, recoupés entre eux.", type: "Pricing de produits dérivés", desc: "Une plateforme de pricing d'options à quatre couches : Black-Scholes-Merton, arbres binomiaux Cox-Ross-Rubinstein avec dividendes en dépôt, et Bjerksund-Stensland 2002, avec une couche de diagnostic et d'attribution.", stack: "Python · BSM · Arbres binomiaux · FRED API" },
      valuation: { title: "Pipeline de valorisation IB européen", tagline: "Dépôts ESEF / iXBRL analysés directement en modèles DCF, comparables, LBO.", type: "Valorisation / IFRS", desc: "Un pipeline de valorisation sans IA générative qui analyse directement les dépôts ESEF / iXBRL avec Arelle, exécutant des modèles DCF, comparables boursiers, LBO et transactions précédentes, avec stockage SQLite.", stack: "Python · Arelle · SQLAlchemy" },
      macro: { title: "Pipeline de rotation macro-sectorielle", tagline: "Signaux macro FRED pilotant un backtest de rotation sectorielle walk-forward.", type: "Macro / Rotation sectorielle", desc: "Un signal de rotation sectorielle basé sur des séries macroéconomiques FRED gratuites, avec un backtesting walk-forward gérant le décalage de publication et un test de significativité du ratio de Sharpe par block-bootstrap.", stack: "Python · FRED · ETF sectoriels" },
      cpp: { title: "Moteur de performance C++", tagline: "Un portage en C++ via pybind11 du cœur de backtesting, comparé au Python.", type: "Ingénierie de performance", desc: "Un portage en C++ via pybind11 du cœur de backtesting et de Monte Carlo, avec un bouton Streamlit pour basculer entre les moteurs Python et C++ et les comparer.", stack: "C++ · pybind11 · CMake" },
      sentiment: { title: "Tableau de bord de sentiment financier", tagline: "Données de marché + actualités financières, analysées localement avec VADER et FinBERT — sans coût d'API.", type: "NLP / Marchés", desc: "Un outil d'analyse de sentiment gratuit combinant FinBERT en local et VADER, alimenté par des flux RSS gratuits et des données de marché, déployé sur Hugging Face Spaces.", stack: "FinBERT · VADER · Hugging Face" }
    },
    certifications: {
      title: "Certifications",
      entry1: "À remplacer par ce que couvre cette certification, avec un identifiant ou un lien de vérification si disponible.",
      entry2: "À remplacer par ce que couvre cette certification, avec un identifiant ou un lien de vérification si disponible.",
      entry3: "À remplacer par ce que couvre cette certification, avec un identifiant ou un lien de vérification si disponible."
    },
    portfolio: {
      title: "Portfolio Financier",
      sub: "Un regard approfondi sur trois outils phares — le problème que chacun résout, la méthode utilisée, et ce qu'il produit."
    },
    case: {
      label_problem: "Problème", label_approach: "Approche", label_result: "Résultat",
      sandbox: {
        title: "Portfolio Strategy Sandbox",
        problem: "Comparer les stratégies DCA, momentum et dual-momentum dans des conditions de marché réalistes et corrélées plutôt que sous des hypothèses idéalisées.",
        approach: "Simulation Monte Carlo par block-bootstrap préservant la corrélation entre actifs, plutôt qu'un modèle classique de mouvement brownien géométrique.",
        result: "Un graphique en éventail des résultats simulés avec bandes de percentiles et probabilité d'atteindre un objectif."
      },
      pea: {
        title: "PEA Risk Lab",
        problem: "La plupart des tableaux de bord grand public montrent la performance mais pas la concentration du risque d'un portefeuille d'actions et ETF français.",
        approach: "VaR, CVaR, bêta et un optimiseur de variance minimale sur un univers CAC 40 et ETF UCITS, résolu par SLSQP.",
        result: "Un score unique de ratio de diversification comme vue principale, avec la décomposition complète du risque en dessous."
      },
      options: {
        title: "Options Analytics Lab",
        problem: "Les pricers d'options à modèle unique peuvent mal évaluer les options américaines autour de dividendes discrets importants.",
        approach: "Trois moteurs de pricing — BSM, arbres binomiaux CRR et Bjerksund-Stensland — recoupés via une couche de diagnostic commune.",
        result_label: "Limite connue",
        result: "La méthode des dividendes en dépôt sous-estime encore la prime d'exercice anticipé avant de larges dividendes — documenté comme prochaine amélioration."
      }
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
      certifications: "Chứng Chỉ", portfolio: "Danh Mục",
      theme_dark: "Tối", theme_light: "Sáng"
    },
    hero: {
      greeting: "Chào, tôi là Minh!",
      bio: "Tôi là chuyên viên phân tích rủi ro định lượng, sống tại Paris. Ngoài công việc, tôi xây dựng các công cụ tài chính độc lập — công cụ backtest, thư viện định giá quyền chọn, và bảng điều khiển rủi ro danh mục. Trang này ghi lại học vấn, kinh nghiệm, và những gì tôi đã xây dựng.",
      link_email: "Email", link_github: "GitHub", link_linkedin: "LinkedIn"
    },
    education: {
      title: "Học Vấn",
      entry1: "Thay bằng hướng chuyên môn, đề tài luận văn, hoặc các môn học liên quan — phương pháp định lượng, định giá sản phẩm phái sinh, thống kê.",
      entry2: "Thay bằng mô tả ngắn — thành tích học tập, dự án liên quan, hoặc chương trình trao đổi."
    },
    experience: {
      title: "Kinh Nghiệm",
      role1_title: "Chuyên Viên Phân Tích Rủi Ro Định Lượng",
      role1_b1: "Thay bằng một trách nhiệm cụ thể — ví dụ: mô hình hóa rủi ro thị trường hoặc rủi ro đối tác, kiểm tra căng thẳng, báo cáo.",
      role1_b2: "Thay bằng một thành tích khác — công cụ đã xây dựng, quy trình đã cải thiện, hoặc mô hình đã được kiểm định.",
      role2: "Thay bằng mô tả ngắn cho vị trí trước đây."
    },
    projects: {
      title: "Dự Án",
      sub: "Các dự án, được đánh dấu hoạt động khi ra mắt."
    },
    positions: {
      sym: "Mã", name: "Tên", type: "Loại", status: "Trạng Thái",
      live: "ĐANG HOẠT ĐỘNG", source: "MÃ NGUỒN", in_progress: "ĐANG PHÁT TRIỂN",
      next_note: "Vị trí tiếp theo sắp ra mắt — các vị trí trên đều đang hoạt động thật, không phải ảnh chụp màn hình."
    },
    card: { live: "Demo", source: "Mã nguồn" },
    proj: {
      sandbox: { title: "Strategy Simulation", tagline: "Dữ liệu thị trường + kiểm thử chiến lược — DCA, momentum và backtest Monte Carlo.", type: "Chiến Lược / Backtest", desc: "Backtest và mô phỏng Monte Carlo cho các chiến lược DCA, momentum và dual-momentum, dùng block-bootstrap để giữ tương quan giữa tài sản, kèm biểu đồ quạt và xác suất đạt mục tiêu.", stack: "Python · Streamlit · Monte Carlo · pandas" },
      pea: { title: "PEA Risk Lab", tagline: "Dữ liệu thị trường + quản trị rủi ro cho cổ phiếu Pháp và ETF UCITS.", type: "Rủi Ro / Quản Lý Danh Mục", desc: "Phân tích rủi ro thị trường và đối tác cho cổ phiếu Pháp và ETF UCITS — VaR, CVaR, beta, hệ số Sharpe, mức sụt giảm tối đa, bộ tối ưu hóa phương sai tối thiểu và chỉ số đa dạng hóa làm trọng tâm.", stack: "Python · SLSQP · yfinance" },
      options: { title: "Options Analytics Lab", tagline: "BSM, cây nhị thức và định giá Bjerksund-Stensland, được đối chiếu với nhau.", type: "Định Giá Phái Sinh", desc: "Nền tảng định giá quyền chọn bốn lớp: Black-Scholes-Merton, cây nhị thức Cox-Ross-Rubinstein với cổ tức ký quỹ, và Bjerksund-Stensland 2002, cùng lớp chẩn đoán và phân tích đóng góp.", stack: "Python · BSM · Cây nhị thức · FRED API" },
      valuation: { title: "Pipeline Định Giá IB Châu Âu", tagline: "Hồ sơ ESEF / iXBRL được phân tích trực tiếp thành các mô hình DCF, so sánh, LBO.", type: "Định Giá / IFRS", desc: "Pipeline định giá không dùng AI tạo sinh, phân tích trực tiếp hồ sơ ESEF / iXBRL bằng Arelle, chạy các mô hình DCF, công ty so sánh, LBO và giao dịch tiền lệ, lưu bằng SQLite.", stack: "Python · Arelle · SQLAlchemy" },
      macro: { title: "Pipeline Xoay Vòng Ngành Theo Vĩ Mô", tagline: "Tín hiệu vĩ mô FRED dẫn dắt backtest xoay vòng ngành theo walk-forward.", type: "Vĩ Mô / Xoay Vòng Ngành", desc: "Tín hiệu xoay vòng ngành dựa trên dữ liệu vĩ mô FRED miễn phí, kèm backtest walk-forward xử lý độ trễ công bố và kiểm định ý nghĩa hệ số Sharpe bằng block-bootstrap.", stack: "Python · FRED · ETF ngành" },
      cpp: { title: "Bộ Xử Lý Hiệu Năng C++", tagline: "Phần lõi backtest được chuyển sang C++ qua pybind11, đối chiếu với Python.", type: "Kỹ Thuật Hiệu Năng", desc: "Chuyển phần lõi backtest và Monte Carlo sang C++ qua pybind11, kèm nút chuyển đổi Streamlit giữa Python và C++ để so sánh hiệu năng.", stack: "C++ · pybind11 · CMake" },
      sentiment: { title: "Bảng Điều Khiển Tâm Lý Thị Trường", tagline: "Dữ liệu thị trường + tin tức tài chính, phân tích cục bộ bằng VADER và FinBERT — không tốn chi phí API.", type: "NLP / Thị Trường", desc: "Công cụ phân tích tâm lý miễn phí kết hợp FinBERT cục bộ và VADER, dùng dữ liệu RSS miễn phí và dữ liệu thị trường, triển khai trên Hugging Face Spaces.", stack: "FinBERT · VADER · Hugging Face" }
    },
    certifications: {
      title: "Chứng Chỉ",
      entry1: "Thay bằng nội dung chứng chỉ này bao quát, kèm mã chứng chỉ hoặc liên kết xác minh nếu có.",
      entry2: "Thay bằng nội dung chứng chỉ này bao quát, kèm mã chứng chỉ hoặc liên kết xác minh nếu có.",
      entry3: "Thay bằng nội dung chứng chỉ này bao quát, kèm mã chứng chỉ hoặc liên kết xác minh nếu có."
    },
    portfolio: {
      title: "Danh Mục Tài Chính",
      sub: "Phân tích sâu hơn về ba công cụ chủ lực — vấn đề mỗi công cụ giải quyết, phương pháp thực hiện, và kết quả tạo ra."
    },
    case: {
      label_problem: "Vấn Đề", label_approach: "Phương Pháp", label_result: "Kết Quả",
      sandbox: {
        title: "Portfolio Strategy Sandbox",
        problem: "So sánh các chiến lược DCA, momentum và dual-momentum trong điều kiện thị trường thực tế, có tương quan, thay vì giả định lý tưởng hóa.",
        approach: "Mô phỏng Monte Carlo bằng block-bootstrap giữ nguyên tương quan giữa các tài sản, thay vì mô hình chuyển động Brown hình học thông thường.",
        result: "Biểu đồ quạt thể hiện các kết quả mô phỏng với dải phần trăm và xác suất đạt được giá trị mục tiêu."
      },
      pea: {
        title: "PEA Risk Lab",
        problem: "Hầu hết bảng điều khiển dành cho nhà đầu tư cá nhân chỉ hiển thị hiệu suất mà không cho thấy mức độ tập trung rủi ro trong danh mục cổ phiếu và ETF Pháp.",
        approach: "VaR, CVaR, beta và bộ tối ưu hóa phương sai tối thiểu trên bộ cổ phiếu CAC 40 và ETF UCITS, giải bằng SLSQP.",
        result: "Một chỉ số đa dạng hóa duy nhất làm điểm nhìn chính, kèm phân tích rủi ro chi tiết phía dưới."
      },
      options: {
        title: "Options Analytics Lab",
        problem: "Các công cụ định giá quyền chọn chỉ dùng một mô hình có thể định giá sai quyền chọn kiểu Mỹ khi có cổ tức rời rạc lớn.",
        approach: "Ba mô hình định giá — BSM, cây nhị thức CRR và Bjerksund-Stensland — được đối chiếu qua một lớp chẩn đoán chung.",
        result_label: "Hạn chế đã biết",
        result: "Phương pháp cổ tức ký quỹ vẫn đánh giá thấp phần bù thực hiện sớm trước các đợt chia cổ tức lớn — được ghi lại như hướng cải thiện tiếp theo."
      }
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