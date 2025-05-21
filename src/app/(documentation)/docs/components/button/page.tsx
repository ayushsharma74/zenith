import Breadcrumb from "@/components/Breadcrumb";

const items = [
  { label: "Documentation", href: "/docs" },
  { label: "Components", href: "/docs/components" },
  { label: "Button", href: "/docs/components/button" },
]

export default function Page() {

    return (
        <div>
            <Breadcrumb items={items} />
            hi button
        </div>
    );
}