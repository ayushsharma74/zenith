import Breadcrumb from "@/components/Breadcrumb";


const items = [
  { label: "Documentation", href: "/docs" },
  { label: "Components", href: "/docs/components" },
  { label: "Card", href: "/docs/components/card" },
]

export default function Page() {
    return (
        <div>
            <Breadcrumb items={items} />
            hi card
        </div>
    );
}