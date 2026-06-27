/* ===========================================================
   TRANSLATIONS
   Edit the strings below to change site copy.
   Keys map to data-i18n="..." attributes in index.html.
=========================================================== */

const translations = {

  en: {
    meta: {
      title: "Minh — Quantitative Risk Analyst",
      description: "Portfolio of quantitative finance tools, risk analytics, and engineering projects."
    },
    nav: {
      role: "Quant Risk Analyst",
      education: "Education",
      experience: "Experience",
      projects: "Projects",
      portfolio: "Portfolio",
      contact: "Contact"
    },
    hero: {
      eyebrow: "Quantitative Risk Analyst — Paris, France",
      title: "Building precise tools for risk, return, and decision-making.",
      sub: "I design and ship quantitative finance applications — backtesting engines, options pricing libraries, and portfolio risk dashboards — alongside a full-time role in risk analysis.",
      cta_projects: "View projects",
      cta_contact: "Get in touch"
    },
    ticker: {
      shipped: "7 TOOLS SHIPPED",
      route: "PARIS → HO CHI MINH CITY"
    },
    education: {
      title: "Education",
      entry1: "Replace with focus area, thesis topic, or relevant coursework — quantitative methods, derivatives pricing, statistics.",
      entry2: "Replace with a short description — honors, relevant projects, or exchange programs."
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
      sub: "Independent tools built outside working hours — most deployed on Streamlit Community Cloud or Hugging Face Spaces."
    },
    card: {
      live: "Live demo →",
      source: "Source →"
    },
    proj: {
      sandbox: { title: "Portfolio Strategy Sandbox", desc: "A backtesting and Monte Carlo simulation tool for DCA, momentum, and dual-momentum strategies. Uses block-bootstrap resampling to preserve cross-asset correlation, with a fan-chart view and probability-of-target output." },
      pea: { title: "PEA Risk Lab", desc: "Market and counterparty risk analysis for French equities and UCITS ETFs. Computes VaR, CVaR, beta, Sharpe ratio, and max drawdown, with a minimum-variance optimizer and a diversification-ratio readout as the focal view." },
      options: { title: "Options Analytics Lab", desc: "A four-layer options pricing platform: Black-Scholes-Merton, Cox-Ross-Rubinstein binomial trees with escrowed dividends, and Bjerksund-Stensland 2002, plus a diagnostics and attribution layer on top." },
      valuation: { title: "European IB Valuation Pipeline", desc: "A no-LLM valuation pipeline that parses ESEF / iXBRL filings directly with Arelle and runs DCF, comparable companies, LBO, and precedent transaction models, storing results in SQLite." },
      macro: { title: "Macro-to-Sector Rotation Pipeline", desc: "A sector-rotation signal built on free FRED macro series, with walk-forward backtesting that handles publication lag and block-bootstrap significance testing on the resulting Sharpe ratio." },
      cpp: { title: "C++ Performance Engine", desc: "In progress — a pybind11 port of the backtest and Monte Carlo core to C++, with a Streamlit toggle to switch between the Python and C++ engines and benchmark them side by side." },
      sentiment: { title: "Financial Sentiment Dashboard", desc: "A cost-free sentiment analysis tool combining local FinBERT inference with VADER, fed by free RSS feeds and market data, deployed on Hugging Face Spaces." }
    },
    portfolio: {
      title: "Financial Portfolio",
      sub: "A closer look at three flagship tools — the problem each one solves, the method behind it, and what it produces."
    },
    case: {
      label_problem: "Problem",
      label_approach: "Approach",
      label_result: "Result",
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
    footer: {
      note: "Built and deployed from scratch — view source on GitHub."
    }
  },

  fr: {
    meta: {
      title: "Minh — Analyste Quantitatif des Risques",
      description: "Portfolio d'outils de finance quantitative, d'analyse des risques et de projets d'ingénierie."
    },
    nav: {
      role: "Analyste Quant",
      education: "Formation",
      experience: "Expérience",
      projects: "Projets",
      portfolio: "Portfolio",
      contact: "Contact"
    },
    hero: {
      eyebrow: "Analyste Quantitatif des Risques — Paris, France",
      title: "Construire des outils précis pour le risque, le rendement et la décision.",
      sub: "Je conçois et déploie des applications de finance quantitative — moteurs de backtesting, bibliothèques de pricing d'options, tableaux de bord de risque de portefeuille — en parallèle d'un poste à temps plein en analyse des risques.",
      cta_projects: "Voir les projets",
      cta_contact: "Me contacter"
    },
    ticker: {
      shipped: "7 OUTILS DÉPLOYÉS",
      route: "PARIS → HÔ-CHI-MINH-VILLE"
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
      sub: "Outils développés en dehors des heures de travail — la plupart déployés sur Streamlit Community Cloud ou Hugging Face Spaces."
    },
    card: {
      live: "Démo en ligne →",
      source: "Code source →"
    },
    proj: {
      sandbox: { title: "Portfolio Strategy Sandbox", desc: "Un outil de backtesting et de simulation Monte Carlo pour les stratégies DCA, momentum et dual-momentum. Utilise un block-bootstrap pour préserver la corrélation entre actifs, avec une vue en éventail et une probabilité d'atteindre un objectif." },
      pea: { title: "PEA Risk Lab", desc: "Analyse du risque de marché et de contrepartie pour les actions françaises et ETF UCITS. Calcule VaR, CVaR, bêta, ratio de Sharpe et drawdown maximal, avec un optimiseur de variance minimale et un ratio de diversification comme indicateur principal." },
      options: { title: "Options Analytics Lab", desc: "Une plateforme de pricing d'options à quatre couches : Black-Scholes-Merton, arbres binomiaux Cox-Ross-Rubinstein avec dividendes en dépôt, et Bjerksund-Stensland 2002, avec une couche de diagnostic et d'attribution." },
      valuation: { title: "Pipeline de valorisation IB européen", desc: "Un pipeline de valorisation sans IA générative qui analyse directement les dépôts ESEF / iXBRL avec Arelle et exécute des modèles DCF, comparables boursiers, LBO et transactions précédentes, avec stockage SQLite." },
      macro: { title: "Pipeline de rotation macro-sectorielle", desc: "Un signal de rotation sectorielle basé sur des séries macroéconomiques FRED gratuites, avec un backtesting walk-forward gérant le décalage de publication et un test de significativité du ratio de Sharpe par block-bootstrap." },
      cpp: { title: "Moteur de performance C++", desc: "En cours — un portage en C++ via pybind11 du cœur de backtesting et de Monte Carlo, avec un bouton Streamlit pour basculer entre les moteurs Python et C++ et les comparer." },
      sentiment: { title: "Tableau de bord de sentiment financier", desc: "Un outil d'analyse de sentiment gratuit combinant FinBERT en local et VADER, alimenté par des flux RSS gratuits et des données de marché, déployé sur Hugging Face Spaces." }
    },
    portfolio: {
      title: "Portfolio Financier",
      sub: "Un regard approfondi sur trois outils phares — le problème que chacun résout, la méthode utilisée, et ce qu'il produit."
    },
    case: {
      label_problem: "Problème",
      label_approach: "Approche",
      label_result: "Résultat",
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
    footer: {
      note: "Conçu et déployé de A à Z — voir le code source sur GitHub."
    }
  },

  vi: {
    meta: {
      title: "Minh — Chuyên Viên Phân Tích Rủi Ro Định Lượng",
      description: "Danh mục các công cụ tài chính định lượng, phân tích rủi ro và dự án kỹ thuật."
    },
    nav: {
      role: "Chuyên Viên Rủi Ro Định Lượng",
      education: "Học Vấn",
      experience: "Kinh Nghiệm",
      projects: "Dự Án",
      portfolio: "Danh Mục",
      contact: "Liên Hệ"
    },
    hero: {
      eyebrow: "Chuyên Viên Phân Tích Rủi Ro Định Lượng — Paris, Pháp",
      title: "Xây dựng công cụ chính xác cho rủi ro, lợi nhuận và quyết định đầu tư.",
      sub: "Tôi thiết kế và triển khai các ứng dụng tài chính định lượng — công cụ backtest, thư viện định giá quyền chọn, và bảng điều khiển rủi ro danh mục — song song với công việc toàn thời gian trong lĩnh vực phân tích rủi ro.",
      cta_projects: "Xem dự án",
      cta_contact: "Liên hệ"
    },
    ticker: {
      shipped: "7 CÔNG CỤ ĐÃ RA MẮT",
      route: "PARIS → THÀNH PHỐ HỒ CHÍ MINH"
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
      sub: "Các công cụ độc lập được xây dựng ngoài giờ làm việc — hầu hết được triển khai trên Streamlit Community Cloud hoặc Hugging Face Spaces."
    },
    card: {
      live: "Xem demo →",
      source: "Mã nguồn →"
    },
    proj: {
      sandbox: { title: "Portfolio Strategy Sandbox", desc: "Công cụ backtest và mô phỏng Monte Carlo cho các chiến lược DCA, momentum và dual-momentum. Sử dụng phương pháp block-bootstrap để giữ nguyên tương quan giữa các tài sản, kèm biểu đồ quạt và xác suất đạt mục tiêu." },
      pea: { title: "PEA Risk Lab", desc: "Phân tích rủi ro thị trường và rủi ro đối tác cho cổ phiếu Pháp và ETF UCITS. Tính VaR, CVaR, beta, hệ số Sharpe và mức sụt giảm tối đa, kèm bộ tối ưu hóa phương sai tối thiểu và chỉ số đa dạng hóa làm trọng tâm." },
      options: { title: "Options Analytics Lab", desc: "Nền tảng định giá quyền chọn bốn lớp: Black-Scholes-Merton, cây nhị thức Cox-Ross-Rubinstein với cổ tức ký quỹ, và Bjerksund-Stensland 2002, cùng lớp chẩn đoán và phân tích đóng góp." },
      valuation: { title: "Pipeline Định Giá IB Châu Âu", desc: "Pipeline định giá không dùng AI tạo sinh, phân tích trực tiếp hồ sơ ESEF / iXBRL bằng Arelle và chạy các mô hình DCF, công ty so sánh, LBO và giao dịch tiền lệ, lưu trữ bằng SQLite." },
      macro: { title: "Pipeline Xoay Vòng Ngành Theo Vĩ Mô", desc: "Tín hiệu xoay vòng ngành dựa trên dữ liệu vĩ mô FRED miễn phí, kèm backtest walk-forward xử lý độ trễ công bố dữ liệu và kiểm định ý nghĩa hệ số Sharpe bằng block-bootstrap." },
      cpp: { title: "Bộ Xử Lý Hiệu Năng C++", desc: "Đang phát triển — chuyển phần lõi backtest và Monte Carlo sang C++ qua pybind11, kèm nút chuyển đổi Streamlit giữa bộ xử lý Python và C++ để so sánh hiệu năng." },
      sentiment: { title: "Bảng Điều Khiển Tâm Lý Thị Trường", desc: "Công cụ phân tích tâm lý miễn phí kết hợp FinBERT chạy cục bộ và VADER, sử dụng dữ liệu RSS miễn phí và dữ liệu thị trường, triển khai trên Hugging Face Spaces." }
    },
    portfolio: {
      title: "Danh Mục Tài Chính",
      sub: "Phân tích sâu hơn về ba công cụ chủ lực — vấn đề mỗi công cụ giải quyết, phương pháp thực hiện, và kết quả tạo ra."
    },
    case: {
      label_problem: "Vấn Đề",
      label_approach: "Phương Pháp",
      label_result: "Kết Quả",
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
    footer: {
      note: "Được xây dựng và triển khai từ đầu — xem mã nguồn trên GitHub."
    }
  }

};

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

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('is-active', btn.getAttribute('data-lang') === lang);
  });

  try { localStorage.setItem('preferred-lang', lang); } catch (e) { /* ignore */ }
}

function initLanguage() {
  let lang = 'en';
  try {
    const saved = localStorage.getItem('preferred-lang');
    if (saved && translations[saved]) lang = saved;
  } catch (e) { /* ignore */ }

  applyLanguage(lang);

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyLanguage(btn.getAttribute('data-lang')));
  });
}

document.addEventListener('DOMContentLoaded', initLanguage);
