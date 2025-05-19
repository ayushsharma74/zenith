import DocsWrapper from "@/components/DocsWrapper";
import { montserrat } from "@/fonts/font";

export default function DocumentationLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    
    return <div className={`${montserrat.className}`}>
        <DocsWrapper>{children}</DocsWrapper>
    </div>;
}