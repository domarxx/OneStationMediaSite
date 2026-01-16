import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Registra plugins uma única vez
gsap.registerPlugin(useGSAP, ScrollTrigger);

/**
 * Hook para animar elementos com FadeIn e Slide Up ao entrarem na tela.
 */
export const useFadeIn = (
    options: {
        delay?: number;
        duration?: number;
        y?: number;
        threshold?: number; // Posição do scroll trigger
    } = {}
) => {
    const elementRef = useRef<HTMLDivElement>(null);
    const { delay = 0, duration = 0.8, y = 30, threshold = 0.2 } = options;

    useGSAP(
        () => {
            const el = elementRef.current;
            if (!el) return;

            gsap.fromTo(
                el,
                {
                    autoAlpha: 0,
                    y: y,
                },
                {
                    autoAlpha: 1,
                    y: 0,
                    duration: duration,
                    delay: delay,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: el,
                        start: `top ${100 - threshold * 100}%`, // ex: top 80%
                        toggleActions: "play none none reverse", // play ao entrar, reverse ao sair (opcional)
                    },
                }
            );
        },
        { scope: elementRef }
    );

    return elementRef;
};

/**
 * Hook para animar listas de elementos em cascata (Stagger).
 * O pai deve receber o ref retornado por este hook.
 * Os filhos devem ter a classe CSS especificada em `childSelector`.
 */
export const useStaggerList = (
    childSelector: string = ".stagger-item",
    options: {
        delay?: number;
        stagger?: number;
        y?: number;
    } = {}
) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { delay = 0.2, stagger = 0.1, y = 30 } = options;

    useGSAP(
        () => {
            const el = containerRef.current;
            if (!el) return;

            // Seleciona os filhos dentro do container
            const items = el.querySelectorAll(childSelector);

            if (items.length === 0) return;

            gsap.fromTo(
                items,
                {
                    autoAlpha: 0,
                    y: y,
                },
                {
                    autoAlpha: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: stagger,
                    delay: delay,
                    ease: "back.out(1.2)", // Um leve "bounce" para dar vida
                    scrollTrigger: {
                        trigger: el,
                        start: "top 85%",
                    },
                }
            );
        },
        { scope: containerRef }
    );

    return containerRef;
};

/**
 * Hook para criar um efeito de "pulso" contínuo ou periódico em um elemento.
 * Útil para CTAs e botões de destaque.
 */
export const usePulse = (
    options: {
        scale?: number;
        duration?: number;
        repeatDelay?: number;
    } = {}
) => {
    const elementRef = useRef<HTMLAnchorElement>(null);
    const { scale = 1.1, duration = 0.4, repeatDelay = 2.5 } = options;

    useGSAP(
        () => {
            const el = elementRef.current;
            if (!el) return;

            // Cria uma timeline que repete infinitamente com delay entre as repetições
            const tl = gsap.timeline({ repeat: -1, repeatDelay: repeatDelay });

            tl.to(el, {
                scale: scale,
                duration: duration,
                ease: "power2.inOut",
                yoyo: true,
                repeat: 3, // Pulsa 3 vezes (ida e volta conta como uma iteração do yoyo?)
                // Na verdade, yoyo repete a animação invertida.
                // Vamos fazer simples: escala, volta, escala, volta.
            });
        },
        { scope: elementRef }
    );

    return elementRef;
};
