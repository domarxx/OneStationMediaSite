import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const WhatsAppIcon = ({ className }: { className?: string }) => (
    <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
);

const WhatsAppButton = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLAnchorElement>(null);
    const labelRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({ repeat: -1, repeatDelay: 15 });

        // 1. Label aparece (usando maxWidth para evitar o "pulo" do width: auto)
        tl.to(labelRef.current, {
            maxWidth: 200, // Valor suficiente para caber o texto + padding
            opacity: 1,
            paddingLeft: 16,
            paddingRight: 27,
            duration: 0.8,
            ease: "power2.out"
        })
            // 2. Botão pulsa
            .to(buttonRef.current, {
                scale: 1.15,
                duration: 0.3,
                ease: "power2.inOut",
                yoyo: true,
                repeat: 3
            }, "-=0.2")
            // 3. Label some
            .to(labelRef.current, {
                maxWidth: 0,
                opacity: 0,
                paddingLeft: 0,
                paddingRight: 0,
                duration: 0.5,
                ease: "power2.in",
                delay: 3.0
            });

    }, { scope: containerRef });

    return (
        <div
            ref={containerRef}
            className="fixed bottom-6 right-6 z-50 flex items-center justify-end"
        >
            {/* LABEL "Fale Conosco" */}
            <div
                ref={labelRef}
                className="bg-white text-primary font-bold text-sm rounded-l-full shadow-lg h-10 flex items-center overflow-hidden w-auto max-w-0 opacity-0 whitespace-nowrap -mr-4 pr-8 relative z-0"
            >
                Fale Conosco
            </div>

            {/* BOTÃO */}
            <a
                ref={buttonRef}
                href="https://wa.me/5511941485853?text=Olá,%20gostaria%20de%20mais%20informações."
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-10 origin-center"
            >
                <div className="bg-primary p-3 md:p-4 rounded-full shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:bg-primary/90 flex items-center justify-center">
                    <WhatsAppIcon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
            </a>
        </div>
    );
};

export default WhatsAppButton;
