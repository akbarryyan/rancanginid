import { useState, useEffect } from "react";

const FloatingSocialContact = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isBackToTopVisible, setIsBackToTopVisible] = useState(false);

    // Deteksi apakah BackToTop sedang visible
    useEffect(() => {
        const handleScroll = () => {
            setIsBackToTopVisible(window.pageYOffset > 1200);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);    }, []);

    const socialContacts = [        {
            name: "WhatsApp",
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.570-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787"/>
                </svg>
            ),
            link: "https://wa.me/6281234567890?text=Halo%20Rancangin,%20saya%20tertarik%20dengan%20layanan%20Anda",
            bgColor: "bg-green-500 hover:bg-green-600",
            label: "Chat WhatsApp"
        },        {
            name: "Instagram",
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
            ),
            link: "https://instagram.com/rancangin.id",
            bgColor: "bg-pink-500 hover:bg-pink-600",
            label: "Follow Instagram"
        },        {
            name: "Email",
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
            ),
            link: "mailto:hello@rancangin.com?subject=Inquiry%20from%20Website",
            bgColor: "bg-blue-500 hover:bg-blue-600",
            label: "Kirim Email"
        },        {
            name: "Telepon",
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
            ),
            link: "tel:+6281234567890",
            bgColor: "bg-gray-600 hover:bg-gray-700 dark:bg-gray-500 dark:hover:bg-gray-600",
            label: "Telepon Langsung"
        }
    ];

    const handleContactClick = (contact) => {
        window.open(contact.link, contact.name === 'Telepon' ? '_self' : '_blank');
        setIsOpen(false);
    };    return (
        <div className={`fixed right-8.5 z-50 transition-all duration-300 ${
            isBackToTopVisible ? 'bottom-24' : 'bottom-6'
        }`}>
            {/* Social Contact Buttons - Appear when main button is clicked */}
            <div className={`transition-all duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                <div className="flex flex-col space-y-3 mb-4">
                    {socialContacts.map((contact, index) => (
                        <div
                            key={contact.name}
                            className={`transform transition-all duration-300 ${
                                isOpen 
                                    ? 'translate-y-0 scale-100' 
                                    : 'translate-y-4 scale-75'
                            }`}
                            style={{ 
                                transitionDelay: isOpen ? `${index * 100}ms` : '0ms' 
                            }}
                        >                            <button
                                onClick={() => handleContactClick(contact)}
                                className={`${contact.bgColor} text-white w-12 h-12 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 group relative flex items-center justify-center`}
                                title={contact.label}
                            >
                                <div className="w-5 h-5">
                                    {contact.icon}
                                </div>
                                
                                {/* Tooltip */}
                                <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                                    {contact.label}
                                    <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
                                </div>
                            </button>
                        </div>
                    ))}
                </div>
            </div>            {/* Main Contact Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`w-12 h-12 bg-primary-600 hover:bg-primary-700 text-white rounded-full shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center ${
                    isOpen ? 'rotate-45' : 'rotate-0'
                }`}
                title={isOpen ? 'Tutup' : 'Hubungi Kami'}
            >                {isOpen ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                    </svg>
                )}
            </button>
        </div>
    );
};

export default FloatingSocialContact;