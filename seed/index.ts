import { connectToDatabase } from "@/app/lib/mongodb";
import { Product } from "@/app/models/Product";
import { Course } from "@/app/models/Course";

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

  console.log("📋 Liste des produits :");
  products.forEach((p) =>
    console.log(`  - ${p.icon} ${p.name} (${p.price} €)`)
  );

  console.log("📋 Liste des cours :");
  courses.forEach((c) => console.log(`  - 🎓 ${c.title} (${c.price} €)`));

  console.log("✅ Seed terminé avec succès !");
  process.exit(0);
}

seed().catch((error) => {
  console.error("❌ Erreur lors du seed :", error);
  process.exit(1);
});
