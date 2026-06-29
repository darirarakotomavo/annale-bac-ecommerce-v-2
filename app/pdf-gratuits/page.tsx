// app/pdf-gratuits/page.tsx
import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/layout/Footer";
import { Card, CardBody } from "@/app/components/ui/Card";
import { FileDown, BookOpen, CheckCircle } from "lucide-react";

const pdfList = [
  // === MATHÉMATIQUES ===
  {
    id: "maths-sujet",
    title: "📐 Sujet Mathématiques - Bac S 2025",
    description:
      "Sujet officiel de l'épreuve de Mathématiques (3 exercices + 2 problèmes).",
    fileName: "sujet-maths-2025.pdf",
    fileSize: "~ 1.2 Mo",
    icon: <BookOpen className="w-5 h-5" />,
  },
  {
    id: "maths-corrige",
    title: "📐 Corrigé Mathématiques - Bac S 2025",
    description: "Corrigé complet de l'épreuve de Mathématiques (10 pages).",
    fileName: "corrige-maths-2025.pdf",
    fileSize: "~ 2.5 Mo",
    icon: <CheckCircle className="w-5 h-5" />,
  },
  // === PHYSIQUE ===
  {
    id: "physique-sujet",
    title: "⚡ Sujet Sciences Physiques - Bac S 2025",
    description:
      "Sujet officiel de l'épreuve de Sciences Physiques (5 exercices).",
    fileName: "sujet-physique-2025.pdf",
    fileSize: "~ 1.5 Mo",
    icon: <BookOpen className="w-5 h-5" />,
  },
  {
    id: "physique-corrige",
    title: "⚡ Corrigé Sciences Physiques - Bac S 2025",
    description:
      "Corrigé complet de l'épreuve de Sciences Physiques (9 pages).",
    fileName: "corrige-physique-2025.pdf",
    fileSize: "~ 3.1 Mo",
    icon: <CheckCircle className="w-5 h-5" />,
  },
];

export default function PdfGratuitsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen py-16 bg-gray-50">
        <div className="container-custom max-w-5xl">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            📄 PDF Gratuits
          </h1>
          <p className="text-center text-gray-500 mb-4 max-w-2xl mx-auto">
            Téléchargez gratuitement les sujets et corrigés des épreuves du Bac
            Madagascar 2025 Séries (L , S , A , C, D).
          </p>
          <div className="flex justify-center gap-6 mb-12">
            <span className="inline-flex items-center gap-2 text-sm text-gray-600">
              <BookOpen className="w-4 h-4" /> Sujet
            </span>
            <span className="inline-flex items-center gap-2 text-sm text-gray-600">
              <CheckCircle className="w-4 h-4 text-emerald-500" /> Corrigé
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pdfList.map((pdf) => (
              <Card key={pdf.id} hover>
                <CardBody className="flex flex-col items-start gap-3">
                  <div className="flex items-center gap-3 w-full">
                    <div className="text-3xl">{pdf.title.split(" ")[0]}</div>
                    <div className="text-gray-400">{pdf.icon}</div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800">
                    {pdf.title}
                  </h3>
                  <p className="text-sm text-gray-500 flex-1">
                    {pdf.description}
                  </p>
                  <div className="flex items-center justify-between w-full mt-2 pt-2 border-t border-gray-100">
                    <span className="text-xs text-gray-400">
                      {pdf.fileSize}
                    </span>
                    <a
                      href={`/pdfs/${pdf.fileName}`}
                      download={pdf.fileName}
                      type="application/pdf"
                      className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg font-semibold transition shadow hover:shadow-lg text-sm"
                    >
                      <FileDown size={16} />
                      Télécharger
                    </a>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>

          <div className="mt-12 bg-emerald-50 border border-emerald-200 rounded-xl p-6 text-center">
            <p className="text-sm text-gray-700">
              📚 Ces documents sont offerts gratuitement pour vous aider à
              préparer le Bac. N&apos;hésitez pas à les partager avec vos
              camarades !
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
