export type Locale = "en" | "fr";

export const locales: Locale[] = ["en", "fr"];

/**
 * All short, static UI copy — navigation, buttons, section headings, labels.
 * Content that comes from lib/data.ts (project descriptions, etc.) is
 * translated separately in projectText below, keyed by slug.
 */
export const ui = {
  en: {
    nav: { work: "Projects", about: "About", skills: "Skills", contact: "Contact", resume: "Resume" },
    hero: {
      title: "Data Engineer",
      tagline:
        "I help build reliable data systems that turn raw, disconnected information into something a team can actually act on.",
      viewWork: "View Projects",
      getInTouch: "Work with me",
    },
    sectionLabels: {
      work: "Selected work",
      about: "About",
      skills: "Skills",
      contact: "Contact",
    },
    work: {
      heading: "A few systems, each built for a different data problem.",
      viewCaseStudy: "View case study",
      viewGithub: "GitHub",
      viewLive: "Live site",
      allWork: "All work",
      overview: "Overview",
      approach: "Approach",
      contribution: "My contribution",
      architecture: "Architecture",
      pipeline: "Pipeline",
      results: "Results",
      source: "Source",
      liveDemo: "Live demo",
    },
    skills: { heading: "My stack." },
    about: {
      heading: "Here's more about me.",
      paragraphs: [
        "Data engineer passionate about building reliable data solutions that make it seamless to access and work with data across the different facets of a business, from reporting and analytics to machine learning and AI-powered applications.",
        "Interested in big data, cloud services, AI/ML, GenAI, distributed computing, blockchain, data science, and platform security.",
      ],
    },
    contact: {
      heading: "You can contact me directly here.",
      orEmail: "or send me an email at",
      formName: "Name",
      formEmail: "Email",
      formMessage: "Message",
      formSubmit: "Send message",
      formSending: "Sending...",
formSuccess: "Thanks, your message was sent.",
formError: "Something went wrong. Please try again or email me directly.",
    },
    footer: { email: "Email" },
  },
  fr: {
    nav: { work: "Projets", about: "À propos", skills: "Compétences", contact: "Contact", resume: "CV" },
    hero: {
      title: "Ingénieur Data",
      tagline:
        "J'aide à construire des systèmes de données fiables qui transforment une information brute et disparate en quelque chose qu'une équipe peut réellement exploiter.",
      viewWork: "Voir les projets",
      getInTouch: "Travaillons ensemble",
    },
    sectionLabels: {
      work: "Projets sélectionnés",
      about: "À propos",
      skills: "Compétences",
      contact: "Contact",
    },
    work: {
      heading: "Quelques systèmes, chacun conçu pour un problème de données différent.",
      viewCaseStudy: "Voir l'étude de cas",
      viewGithub: "GitHub",
      viewLive: "Site en ligne",
      allWork: "Tous les projets",
      overview: "Aperçu",
      approach: "Approche",
      contribution: "Ma contribution",
      architecture: "Architecture",
      pipeline: "Pipeline",
      results: "Résultats",
      source: "Source",
      liveDemo: "Démo en ligne",
    },
    skills: { heading: "Ma stack." },
    about: {
      heading: "En savoir plus sur moi.",
      paragraphs: [
        "Ingénieur data passionné par la création de solutions fiables qui facilitent l'accès aux données et leur exploitation dans tous les domaines d'une entreprise, du reporting et de l'analyse aux applications de machine learning et d'intelligence artificielle.",
        "Je m'intéresse au big data, aux services cloud, à l'IA et au machine learning, à l'IA générative, au calcul distribué, à la blockchain, à la science des données et à la sécurité des plateformes.",
      ],
    },
    contact: {
      heading: "Vous pouvez me contacter directement ici.",
      orEmail: "ou écrivez-moi directement à",
      formName: "Nom",
      formEmail: "E-mail",
      formMessage: "Message",
      formSubmit: "Envoyer le message",
      formSending: "Envoi en cours...",
formSuccess: "Merci, votre message a bien été envoyé.",
formError: "Une erreur s'est produite. Réessayez ou écrivez-moi directement.",
    },
    footer: { email: "E-mail" },
  },
} as const;

/** French names for skill categories from lib/data.ts (`skills[].category`). Tool names in `items` stay in English — they're product names. */
export const skillCategoryFr: Record<string, string> = {
  Programming: "Programmation",
  "Data Engineering": "Ingénierie des données",
  "Data Orchestration": "Orchestration des données",
  "Data Processing": "Traitement des données",
  "Databases & Warehousing": "Bases de données et entreposage",
  "Cloud & DevOps": "Cloud & DevOps",
  "Analytics & Visualization": "Analyse & visualisation",
  "AI & Data Systems": "IA & systèmes de données",
  "Data Extraction": "Extraction de données",
  "Web Scraping": "Web scraping",
};

interface ProjectText {
  oneLiner: string;
  problem: string;
  approach: string;
  architecture: string;
  contribution: string;
  results: string[];
}

/**
 * French translations of the per-project prose from lib/data.ts, keyed by
 * `slug`. Technology names and architectureFlow labels are left in English
 * throughout the site since they're product/tool names, not prose.
 */
export const projectTextFr: Record<string, ProjectText> = {
  "flight-operations-pipeline": {
    oneLiner:
      "Un pipeline ETL automatisé qui transforme des données de suivi de vols en direct en tables Snowflake prêtes pour l'analyse.",
    problem:
      "Les données brutes d'opérations aériennes issues d'une API publique de suivi arrivent en continu, non structurées et impropres à l'analyse directe — il fallait un chemin reproductible du flux en direct vers quelque chose qu'un utilisateur métier puisse interroger.",
    approach:
      "Construction d'un pipeline de bout en bout orchestré avec Apache Airflow, qui ingère les données de vol depuis l'API OpenSky Network selon un planning, puis les nettoie, les normalise et les agrège progressivement pour un usage analytique.",
    architecture:
      "Une architecture en médaillon Bronze → Silver → Gold dans Snowflake : Bronze conserve les données brutes ingérées, Silver applique le nettoyage et la normalisation, et Gold produit des agrégats prêts pour l'analyse métier.",
    contribution:
      "Conception et implémentation du pipeline complet — DAGs Airflow, logique de transformation et schéma en médaillon dans Snowflake — et conteneurisation du système avec Docker pour un déploiement local reproductible.",
    results: [],
  },
  "ai-data-retrieval-pipeline": {
    oneLiner:
      "Un système de recherche qui répond à des questions sur des rapports financiers 10-K en combinant SQL et recherche sémantique.",
    problem:
      "Les documents financiers mêlent chiffres structurés et longues sections narratives non structurées — répondre à une vraie question nécessite souvent à la fois un chiffre précis et son contexte, ce qu'une base de données seule ou un moteur de recherche seul ne gère pas.",
    approach:
      "Construction d'un pipeline extraction → nettoyage → découpage → vectorisation → stockage pour les rapports 10-K, indexant le texte non structuré dans Qdrant tout en conservant les données financières structurées dans SQLite, puis utilisation de LangGraph pour orchestrer un flux qui route chaque requête vers SQL, la recherche vectorielle, ou les deux.",
    architecture:
      "Un flux basé sur LangGraph se place entre les deux magasins de données : il détermine si une requête nécessite une recherche structurée, une récupération sémantique sur le texte vectorisé, ou une combinaison des deux, puis assemble le résultat.",
    contribution:
      "Construction du pipeline d'ingestion, de la logique d'orchestration LangGraph, de la couche de service FastAPI, et du dispositif d'évaluation RAGAS utilisé pour mesurer la qualité de la récupération.",
    results: [
      "0,80 de fidélité (RAGAS)",
      "0,70 de pertinence des réponses (RAGAS)",
      "0,75 de score RAGAS global",
      "0,0002 $ de coût moyen par requête",
    ],
  },
  "sustainability-analysis": {
    oneLiner:
      "Des jeux de données de durabilité prêts pour l'analyse, livrés via des tableaux de bord Power BI interactifs.",
    problem:
      "Les indicateurs de durabilité ne sont utiles que s'ils sont propres, validés et faciles à explorer — les données brutes ne suffisent rarement à elles seules à la prise de décision.",
    approach:
      "Nettoyage, validation et transformation des données pour construire des jeux de données prêts pour l'analyse, puis connexion à des tableaux de bord Power BI interactifs pour l'exploration.",
    architecture:
      "Une couche de transformation en SQL alimente un ensemble de tableaux de bord Power BI construits directement sur les données nettoyées, visualisant les indicateurs de durabilité pour la prise de décision.",
    contribution:
      "Prise en charge de bout en bout du pipeline de préparation des données — nettoyage, validation et transformation — et construction des tableaux de bord Power BI connectés.",
    results: [],
  },
  trackback: {
    oneLiner:
      "Un pipeline de deep learning qui relie un extrait de paroles à sa chanson d'origine, bâti sur une architecture combinant transfer learning et classifieur sur mesure.",
    problem:
      "Faire correspondre un court extrait de texte, bruité, au document exact dont il provient est un problème de recherche sémantique — une simple correspondance par mots-clés échoue dès que la requête est un fragment plutôt qu'un titre complet.",
    approach:
      "Construction d'un pipeline hybride : des embeddings de phrases pour l'extraction de caractéristiques, alimentant un classifieur entraîné sur mesure pour la prédiction finale, plutôt que de s'appuyer uniquement sur les embeddings ou d'entraîner un classifieur à partir de texte brut.",
    architecture:
      "Le texte est d'abord converti en embeddings denses de 384 dimensions à l'aide du SentenceTransformer Hugging Face all-MiniLM-L6-v2. Ces embeddings alimentent un réseau feed-forward PyTorch sur mesure — une couche d'entrée avec bruit gaussien pour la régularisation, une couche cachée de 128 unités avec normalisation par lots et ReLU, une couche de dropout, et une couche de sortie dimensionnée selon le nombre de documents sources. L'entraînement utilise l'optimiseur Adam avec weight decay, un scheduler ReduceLROnPlateau, une répartition 80/20 entraînement/test, et un arrêt anticipé basé sur la précision Top-5.",
    contribution:
      "Construction du pipeline complet — le script de collecte de données par scraping de paroles, le pipeline d'embedding et d'entraînement en PyTorch, et l'application Streamlit utilisée pour la démonstration. Le backend est volontairement généralisé : la démo actuelle est centrée sur des extraits de paroles, mais la même architecture s'applique à tout problème d'association texte-document source.",
    results: [],
  },
  "distributed-systems-docker-k8s": {
    oneLiner:
      "Une API REST Flask conteneurisée avec Docker et déployée sur un cluster Kubernetes local, conçue pour démontrer tout le cycle de vie du conteneur jusqu'au cluster.",
    problem:
      "Mettre un service en conteneur n'est qu'une première étape — le faire tourner de façon fiable à l'échelle suppose de prouver qu'il peut être découvert, mis à l'échelle, auto-réparé, mis à jour et annulé au sein d'un véritable orchestrateur, pas seulement lancé avec `docker run`.",
    approach:
      "Conteneurisation d'une petite API Flask de gestion d'articles, durcissement de l'image et de la configuration d'exécution, publication sur Docker Hub, puis déploiement sur un cluster Kubernetes local à trois nœuds (kind) exécutant trois répliques derrière un service ClusterIP.",
    architecture:
      "L'application Flask est packagée en image Docker versionnée puis poussée sur Docker Hub, avant d'être déployée sur un cluster kind à trois nœuds (un plan de contrôle, deux workers) sous forme de trois pods répliqués derrière un service ClusterIP, avec une NetworkPolicy restreignant le trafic.",
    contribution:
      "Rédaction du Dockerfile et de la configuration Compose, durcis autour d'un utilisateur non-root, de capacités Linux réduites, d'un système de fichiers racine en lecture seule et d'un health check ; rédaction des manifestes Kubernetes (déploiement, service, NetworkPolicy, limites de ressources, sondes readiness/liveness) ; validation de la mise à l'échelle, de l'auto-réparation, des mises à jour progressives et du rollback sur le cluster réel.",
    results: [
      "3 répliques de pod derrière un service ClusterIP",
      "Zéro vulnérabilité critique dans l'image finale analysée",
    ],
  },
};
