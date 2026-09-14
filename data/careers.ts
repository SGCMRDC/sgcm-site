export type JobContent = {
  title: string;
  experience: string;
  employmentType: string;
  location: string;
  roleIntro: string[];
  responsibilities: string[];
  qualifications: string[];
  niceToHave: string[];
  process: string;
};

export type Job = {
  slug: string;
  en: JobContent;
  fr: JobContent;
};

export const CAREERS_INTRO = {
  en: {
    heading: "Careers",
    body: "SGCM is strengthening its engineering team. We are building the platform behind the Certified Cooperative Readiness Program (CRP™), serving compliance and traceability across mining supply chains. We are looking for engineers for whom production rigour and security by default are second nature, and who want direct responsibility within a small team.",
  },
  fr: {
    heading: "Carrières",
    body: "SGCM renforce son équipe d'ingénierie. Nous construisons la plateforme du programme Certified Cooperative Readiness (CRP™), au service de la conformité et de la traçabilité des chaînes d'approvisionnement du secteur minier. Nous recherchons des ingénieurs pour qui la rigueur de production et la sécurité par défaut sont des réflexes, et qui souhaitent exercer une responsabilité directe au sein d'une équipe restreinte.",
  },
};

export const JOBS: Job[] = [
  {
    slug: "tech-lead",
    en: {
      title: "Tech Lead / Full-Stack Architect",
      experience: "6 to 8 years",
      employmentType: "Full-time",
      location: "Kinshasa, Democratic Republic of the Congo",
      roleIntro: [
        "You are the technical reference for the platform. You define its architecture, you guarantee the quality of what ships to production, and you help the team grow.",
        "This is an anchor role: in the event of a major change or an incident, the team turns to you. You will have real autonomy over technical decisions and direct responsibility for their consequences.",
      ],
      responsibilities: [
        "Define and evolve the platform architecture.",
        "Set the quality standard: code review, automated testing, delivery discipline.",
        "Mentor the other engineers and structure their growth.",
        "Ensure technical continuity and incident resolution.",
        "Translate compliance requirements into defensible technical decisions.",
      ],
      qualifications: [
        "6 to 8 years of experience in modern web development, in TypeScript, both server and interface side.",
        "Command of relational databases and data modelling.",
        "Proven experience with systems you have not only launched but maintained in production over time.",
        "Solid engineering discipline: code reviews, protected main branch, automated tests.",
        "Ability to explain technical choices clearly to a non-technical leadership.",
      ],
      niceToHave: [
        "Experience with platforms subject to high security or compliance requirements.",
        "Experience leading or structuring a small technical team.",
        "Interest in supply chain traceability.",
      ],
      process: "An introductory conversation over Microsoft Teams, a technical interview also on Teams, followed by an in-person meeting in Kinshasa.",
    },
    fr: {
      title: "Tech Lead / Architecte Full-Stack",
      experience: "6 à 8 ans",
      employmentType: "Temps plein",
      location: "Kinshasa, République Démocratique du Congo",
      roleIntro: [
        "Vous êtes le référent technique de la plateforme. Vous en définissez l'architecture, vous garantissez la qualité de ce qui part en production et vous faites monter l'équipe en compétence.",
        "C'est un poste d'ancrage : en cas d'évolution majeure ou d'incident, c'est vers vous que l'équipe se tourne. Vous disposerez d'une autonomie réelle sur les décisions techniques et d'une responsabilité directe sur leurs conséquences.",
      ],
      responsibilities: [
        "Définir et faire évoluer l'architecture de la plateforme.",
        "Fixer le standard de qualité : revue de code, tests automatisés, discipline de livraison.",
        "Encadrer les autres ingénieurs et structurer leur montée en compétence.",
        "Assurer la continuité technique et la résolution des incidents.",
        "Traduire des exigences de conformité en décisions techniques défendables.",
      ],
      qualifications: [
        "6 à 8 ans d'expérience en développement web moderne, en TypeScript, côté serveur comme côté interface.",
        "Maîtrise des bases de données relationnelles et de la modélisation de données.",
        "Expérience confirmée de systèmes que vous avez non seulement lancés, mais maintenus en production dans la durée.",
        "Discipline d'ingénierie éprouvée : revues de code, branche principale protégée, tests automatisés.",
        "Capacité à expliquer clairement des choix techniques à une direction non technique.",
      ],
      niceToHave: [
        "Expérience de plateformes soumises à de fortes exigences de sécurité ou de conformité.",
        "Expérience d'encadrement ou de structuration d'une petite équipe technique.",
        "Intérêt pour les enjeux de traçabilité des chaînes d'approvisionnement.",
      ],
      process: "Premier échange en visioconférence sur Microsoft Teams, entretien technique également sur Teams, puis rencontre en présentiel à Kinshasa.",
    },
  },
  {
    slug: "database-security-engineer",
    en: {
      title: "Database and Security Engineer",
      experience: "4 to 6 years",
      employmentType: "Full-time",
      location: "Kinshasa, Democratic Republic of the Congo",
      roleIntro: [
        "You are responsible for what makes our work defensible: the rigour of the data model, the precision of access rights, and the reliability of the records we produce.",
        "In our field, poorly protected data or a questionable record cannot be undone. This role carries that requirement and has the means to uphold it.",
      ],
      responsibilities: [
        "Design and stress-test fine-grained access control over data.",
        "Guarantee the integrity and reliability of the data the platform produces.",
        "Uphold a strict separation of roles and responsibilities.",
        "Oversee the management of sensitive access and authentication.",
        "Ensure disciplined, versioned and reversible schema changes.",
      ],
      qualifications: [
        "4 to 6 years of experience in data engineering or application security.",
        "Advanced command of relational databases: modelling, constraints, database-side automation.",
        "Real experience with fine-grained access control and restrictive default security models.",
        "Experience with modern authentication and the management of sensitive access.",
        "Ability to reason in terms of threats, not only features.",
      ],
      niceToHave: [
        "Experience with regulated data or data subject to external audit.",
        "Experience with reliable logging and system auditability.",
      ],
      process: "An introductory conversation over Microsoft Teams, a technical interview also on Teams, followed by an in-person meeting in Kinshasa.",
    },
    fr: {
      title: "Ingénieur Base de Données et Sécurité",
      experience: "4 à 6 ans",
      employmentType: "Temps plein",
      location: "Kinshasa, République Démocratique du Congo",
      roleIntro: [
        "Vous êtes responsable de ce qui rend notre travail opposable : la rigueur du modèle de données, la finesse des droits d'accès et la fiabilité des traces que nous produisons.",
        "Dans notre métier, une donnée mal protégée ou une trace contestable ne se rattrape pas. Ce poste porte cette exigence et dispose des moyens de la tenir.",
      ],
      responsibilities: [
        "Concevoir et éprouver un contrôle d'accès fin aux données.",
        "Garantir l'intégrité et la fiabilité des données produites par la plateforme.",
        "Veiller à une séparation stricte des rôles et des responsabilités.",
        "Encadrer la gestion des accès sensibles et de l'authentification.",
        "Assurer des évolutions de schéma disciplinées, versionnées et réversibles.",
      ],
      qualifications: [
        "4 à 6 ans d'expérience en ingénierie de données ou en sécurité applicative.",
        "Maîtrise avancée des bases de données relationnelles : modélisation, contraintes, automatismes côté base.",
        "Expérience réelle du contrôle d'accès fin et des modèles de sécurité par défaut restrictifs.",
        "Expérience de l'authentification moderne et de la gestion des accès sensibles.",
        "Capacité à raisonner en termes de menaces, pas seulement de fonctionnalités.",
      ],
      niceToHave: [
        "Expérience de données réglementées ou soumises à audit externe.",
        "Expérience de la journalisation fiable et de l'auditabilité des systèmes.",
      ],
      process: "Premier échange en visioconférence sur Microsoft Teams, entretien technique également sur Teams, puis rencontre en présentiel à Kinshasa.",
    },
  },
  {
    slug: "frontend-developer",
    en: {
      title: "Frontend Developer",
      experience: "3 to 5 years",
      employmentType: "Full-time",
      location: "Kinshasa, Democratic Republic of the Congo",
      roleIntro: [
        "Our users make consequential decisions based on what they see on screen. Your work is to make dense information immediately understandable, without ever distorting its meaning.",
        "You build the dashboards, the document submission flows and the presentation of assessments, as well as the institutional presence of the company.",
      ],
      responsibilities: [
        "Design and maintain the platform dashboards.",
        "Implement the presentation of assessments according to strict display rules.",
        "Develop and maintain the bilingual institutional website.",
        "Ensure a smooth, responsive and accessible experience.",
      ],
      qualifications: [
        "3 to 5 years of experience in web interface development.",
        "Good command of React and development in TypeScript.",
        "Comfort with utility-first styling and component systems.",
        "Attention to detail on interface, readability and accessibility.",
        "Ability to faithfully implement an approved design.",
      ],
      niceToHave: [
        "Experience with bilingual French / English interfaces.",
        "Sensibility for institutional design and visual restraint.",
        "Experience with data visualisation.",
      ],
      process: "An introductory conversation over Microsoft Teams, a technical interview also on Teams, followed by an in-person meeting in Kinshasa.",
    },
    fr: {
      title: "Développeur Frontend",
      experience: "3 à 5 ans",
      employmentType: "Temps plein",
      location: "Kinshasa, République Démocratique du Congo",
      roleIntro: [
        "Nos utilisateurs prennent des décisions engageantes à partir de ce qu'ils voient à l'écran. Votre travail consiste à rendre une information dense immédiatement compréhensible, sans jamais en trahir le sens.",
        "Vous construisez les tableaux de bord, les parcours de dépôt documentaire et la restitution des évaluations, ainsi que la présence institutionnelle de l'entreprise.",
      ],
      responsibilities: [
        "Concevoir et maintenir les tableaux de bord de la plateforme.",
        "Mettre en œuvre la restitution des évaluations selon des règles d'affichage strictes.",
        "Développer et entretenir le site institutionnel bilingue.",
        "Garantir une expérience fluide, responsive et accessible.",
      ],
      qualifications: [
        "3 à 5 ans d'expérience en développement d'interfaces web.",
        "Bonne maîtrise de React et du développement en TypeScript.",
        "Aisance avec les approches de style utilitaire et les systèmes de composants.",
        "Sens du détail sur l'interface, la lisibilité et l'accessibilité.",
        "Capacité à respecter fidèlement une maquette validée.",
      ],
      niceToHave: [
        "Expérience d'interfaces bilingues français / anglais.",
        "Sensibilité au design institutionnel et à la sobriété visuelle.",
        "Expérience de la visualisation de données.",
      ],
      process: "Premier échange en visioconférence sur Microsoft Teams, entretien technique également sur Teams, puis rencontre en présentiel à Kinshasa.",
    },
  },
  {
    slug: "devops-infrastructure",
    en: {
      title: "DevOps / Infrastructure",
      experience: "Senior",
      employmentType: "Contract",
      location: "Kinshasa, Democratic Republic of the Congo",
      roleIntro: [
        "You prepare and secure the move to production, then put in place what makes the platform reliable to operate: delivery automation, backups, monitoring and secret management.",
        "The role is scoped as an engagement, with a clear perimeter and identified deliverables.",
      ],
      responsibilities: [
        "Set up continuous integration and delivery.",
        "Structure the management of environments, secrets and backups.",
        "Install monitoring, logging and alerting.",
        "Secure the move from development to production.",
      ],
      qualifications: [
        "Senior profile in infrastructure engineering or DevOps.",
        "Proven experience with delivery automation.",
        "Command of modern cloud hosting environments.",
        "Experience with backups, restoration and recovery procedures.",
        "Good operational security and secret management practices.",
      ],
      niceToHave: [
        "Experience with end-to-end secured production rollouts on sensitive systems.",
        "Experience with application monitoring and incident response.",
      ],
      process: "An introductory conversation over Microsoft Teams, followed by a technical interview also on Teams.",
    },
    fr: {
      title: "DevOps / Infrastructure",
      experience: "Profil senior",
      employmentType: "Mission",
      location: "Kinshasa, République Démocratique du Congo",
      roleIntro: [
        "Vous préparez et sécurisez la mise en production, puis vous mettez en place ce qui permet d'exploiter la plateforme sereinement : automatisation des livraisons, sauvegardes, surveillance et gestion des secrets.",
        "Le poste est dimensionné en mission, avec un périmètre clair et des livrables identifiés.",
      ],
      responsibilities: [
        "Mettre en place l'intégration et le déploiement continus.",
        "Structurer la gestion des environnements, des secrets et des sauvegardes.",
        "Installer la surveillance, la journalisation et les alertes.",
        "Sécuriser le passage du développement à la production.",
      ],
      qualifications: [
        "Profil senior en ingénierie d'infrastructure ou DevOps.",
        "Expérience confirmée de l'automatisation des livraisons.",
        "Maîtrise des environnements d'hébergement cloud modernes.",
        "Expérience des sauvegardes, de la restauration et des procédures de reprise.",
        "Bonnes pratiques de sécurité opérationnelle et de gestion des secrets.",
      ],
      niceToHave: [
        "Expérience de mises en production sécurisées de bout en bout sur des systèmes sensibles.",
        "Expérience de la surveillance applicative et de la réponse à incident.",
      ],
      process: "Premier échange en visioconférence sur Microsoft Teams, puis entretien technique également sur Teams.",
    },
  },
];
