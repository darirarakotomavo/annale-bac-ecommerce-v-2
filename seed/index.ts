import { connectToDatabase } from "@/app/lib/mongodb";
import { Product } from "@/app/models/Product";
import { Course } from "@/app/models/Course";
import { JournalPost } from "@/app/models/JournalPost";

const productsData = [
  {
    id: "maths",
    name: "Mathématiques",
    subject: "Maths",
    description: "Corrigé complet de l'épreuve de Mathématiques",
    price: 8,
    pages: 10,
    icon: "📐",
    features: [
      "3 exercices + 2 problèmes",
      "Solutions détaillées",
      "Format PDF",
    ],
  },
  {
    id: "physique",
    name: "Sciences Physiques",
    subject: "Physique",
    description: "Corrigé complet de l'épreuve de Sciences Physiques",
    price: 8,
    pages: 9,
    icon: "⚡",
    features: ["5 exercices corrigés", "Solutions détaillées", "Format PDF"],
  },
  {
    id: "pack",
    name: "Pack Complet",
    subject: "Maths + Physique",
    description: "Les deux matières pour réussir le Bac",
    price: 12,
    pages: 19,
    icon: "🎯",
    isPopular: true,
    features: [
      "Mathématiques + Physique",
      "19 pages de corrigés",
      "Économisez 4 €",
    ],
  },
  {
    id: "code-source",
    name: "Code Source LaTeX",
    subject: "Enseignant",
    description: "Code source complet des corrigés",
    price: 25,
    pages: 0,
    icon: "📦",
    isEnseignant: true,
    features: [
      "Code source complet",
      "Modifiable à volonté",
      "Accès dépôt privé",
    ],
  },
  {
    id: "video-informatique-1",
    name: "Cours Informatique - Débutant",
    subject: "Vidéo",
    description: "Vidéo complète pour débuter en informatique",
    price: 5,
    pages: 0,
    icon: "🎬",
    features: [
      "Durée : 45 min",
      "Téléchargement possible",
      "Lien YouTube inclus",
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
];

const coursesData = [
  {
    title: "Maîtrisez le développement Web avec Next.js",
    slug: "developpement-web-nextjs",
    category: "informatique",
    level: "intermediaire",
    description:
      "Apprenez à créer des applications web modernes avec Next.js 15, TypeScript et Tailwind CSS.",
    objectives: [
      "Comprendre l'architecture de Next.js",
      "Créer des pages statiques et dynamiques",
      "Utiliser l'API Routes",
      "Connecter une base de données MongoDB",
      "Déployer sur Vercel",
    ],
    prerequisites: [
      "Connaissances de base en HTML/CSS",
      "Notions de JavaScript",
    ],
    price: 25,
    discountPrice: 19,
    duration: 12,
    lessons: [
      { title: "Introduction à Next.js", duration: 15, content: "..." },
      { title: "Créer votre premier composant", duration: 20, content: "..." },
    ],
    isPublished: true,
  },
  {
    title: "Physique-Chimie : Maîtrisez les bases du Bac S",
    slug: "physique-chimie-bac-s",
    category: "physique-chimie",
    level: "debutant",
    description:
      "Préparez efficacement l'épreuve de Physique-Chimie du Bac S avec des exercices et corrigés.",
    objectives: [
      "Maîtriser les notions clés du programme",
      "Savoir résoudre les exercices types",
      "Réussir les épreuves pratiques",
    ],
    prerequisites: ["Niveau Bac S"],
    price: 15,
    duration: 10,
    lessons: [
      { title: "Mécanique", duration: 30, content: "..." },
      { title: "Électricité", duration: 25, content: "..." },
    ],
    isPublished: true,
  },
];

// === DONNÉES DU JOURNAL (UN SEUL BLOC) ===
const journalPostsData = [
  {
    title: "📘 Plan de révision accélérée pour le Bac 2026",
    slug: "plan-revision-acceleree-bac-2026",
    excerpt:
      "Découvrez mon planning de révision sur 2 mois pour maximiser vos chances de réussite au Bac 2026.",
    content: `# Plan de révision accélérée - Bac 2026

## Semaine 1-2 : Évaluation et diagnostic
- Faire un test complet de chaque matière
- Identifier les points faibles
- Établir un planning personnalisé

## Semaine 3-4 : Renforcement des bases
- Revoir les notions fondamentales
- Faire des exercices d'application
- Utiliser les vidéos YouTube

## Semaine 5-6 : Approfondissement
- Traiter les exercices types
- Analyser les sujets des années précédentes
- Travail sur la méthodologie

## Semaine 7-8 : Révision intensive
- Enchaîner les sujets complets
- Simulation d'examen
- Gestion du stress

## Conseils clés
- 2h de révision par jour minimum
- Alterner les matières
- Ne pas négliger le sommeil`,
    tags: ["révision", "bac2026", "planning"],
  },
  {
    title: "🎯 Les 5 erreurs à éviter en révision",
    slug: "erreurs-a-eviter-revision",
    excerpt:
      "Voici les erreurs les plus fréquentes que font les élèves en révision et comment les éviter.",
    content: `# Les 5 erreurs à éviter en révision

## 1. La passivité
Ne vous contentez pas de lire vos cours. Prenez des notes, faites des schémas, expliquez à voix haute.

## 2. La procrastination
Ne remettez pas à demain ce que vous pouvez faire aujourd'hui. Commencez par les sujets que vous maîtrisez le moins.

## 3. Le manque de sommeil
Un cerveau fatigué n'apprend pas. Dormez au moins 7h par nuit.

## 4. L'isolement
Réviser seul, c'est bien. Réviser en groupe avec les bons camarades, c'est mieux.

## 5. L'absence de pause
Le cerveau a besoin de pauses pour assimiler. Méthode Pomodoro : 25 min de travail, 5 min de pause.`,
    tags: ["conseils", "révision", "méthodologie"],
  },
  {
    title: "📚 Les meilleures ressources pour le Bac 2026",
    slug: "ressources-bac-2026",
    excerpt:
      "Une sélection des meilleures ressources (PDF, vidéos, sites) pour préparer le Bac 2026.",
    content: `# Les meilleures ressources pour le Bac 2026

## Ressources gratuites
- Annales des années précédentes
- Les corrigés que je partage sur ce site
- Les vidéos YouTube de préparation

## Ressources payantes (recommandées)
- Les cours particuliers (contactez-moi)
- Les packs de révision complets

## À venir
- Une série de vidéos exclusives
- Des sessions de révision en direct sur Facebook`,
    tags: ["ressources", "bac2026", "recommandations"],
  },
];

async function seed() {
  console.log("🔗 Connexion à MongoDB...");
  await connectToDatabase();

  console.log("🗑️ Suppression des anciens produits...");
  await Product.deleteMany({});

  console.log("📦 Insertion des produits...");
  const products = await Product.insertMany(productsData);
  console.log(`✅ ${products.length} produits insérés`);

  console.log("🗑️ Suppression des anciens cours...");
  await Course.deleteMany({});

  console.log("📦 Insertion des cours...");
  const courses = await Course.insertMany(coursesData);
  console.log(`✅ ${courses.length} cours insérés`);

  // === JOURNAL POSTS ===
  console.log("🗑️ Suppression des anciens articles du journal...");
  await JournalPost.deleteMany({});

  console.log("📦 Insertion des articles du journal...");
  const journalPosts = await JournalPost.insertMany(journalPostsData);
  console.log(`✅ ${journalPosts.length} articles du journal insérés`);

  console.log("📋 Liste des produits :");
  products.forEach((p) =>
    console.log(`  - ${p.icon} ${p.name} (${p.price} €)`)
  );

  console.log("📋 Liste des cours :");
  courses.forEach((c) => console.log(`  - 🎓 ${c.title} (${c.price} €)`));

  console.log("📋 Liste des articles du journal :");
  journalPosts.forEach((post) =>
    console.log(`  - 📖 ${post.title} (${post.slug})`)
  );

  console.log("✅ Seed terminé avec succès !");
  process.exit(0);
}

seed().catch((error) => {
  console.error("❌ Erreur lors du seed :", error);
  process.exit(1);
});