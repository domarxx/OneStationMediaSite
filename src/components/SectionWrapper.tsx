import { ReactNode } from "react";
import { useFadeIn } from "@/hooks/use-gsap-animations";

interface SectionWrapperProps {
    children: ReactNode;
    id?: string;
    className?: string;
    delay?: number;
    threshold?: number;
}

const SectionWrapper = ({ children, id, className = "", delay = 0, threshold = 0.1 }: SectionWrapperProps) => {
    const ref = useFadeIn({ delay, threshold, y: 0 });

    return (
        <section id={id} ref={ref} className={`invisible ${className}`}>
            {children}
        </section>
    );
};

export default SectionWrapper;
