import Breadcrumb from "@/components/Breadcrumb";
import ComponentPreview from "@/components/ComponentPreview";
import { TypographyH2, TypographyP } from "@/components/Typography";

const items = [
  { label: "Documentation", href: "/docs" },
  { label: "Components", href: "/docs/components" },
  { label: "Button", href: "/docs/components/button" },
]

export default function Page() {
    return (
        <div>
            <Breadcrumb items={items} />
            <TypographyH2>Button</TypographyH2>
            <TypographyP>A component that renders a button and animates on hover</TypographyP>
            <ComponentPreview />
        </div>
    );
}