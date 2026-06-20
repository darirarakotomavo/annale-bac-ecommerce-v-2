export default function ContactSection() {
    return (
        <section id="contact" className="py-16 bg-gray-50">
            <div className="container-custom">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">📞 Contact</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                    <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition">
                        <h4 className="font-semibold text-gray-800">📱 Orange Money</h4>
                        <p className="text-xl font-bold text-orange-500">+261 32 24 622 74</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition">
                        <h4 className="font-semibold text-gray-800">📧 Email</h4>
                        <p>darirarakotomavo@gmail.com</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition">
                        <h4 className="font-semibold text-gray-800">🔒 GitHub</h4>
                        <p className="text-sm text-gray-500">Dépôt privé - Accès après achat</p>
                    </div>
                </div>
            </div>
        </section>
    );
}