import DocsWrapper from "@/components/DocsWrapper";

export default function DocumentationLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    
    return <div>
        <DocsWrapper>{children}</DocsWrapper>
    </div>;
}