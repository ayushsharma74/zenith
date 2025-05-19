import { ChevronRight } from 'lucide-react';
import Link from 'next/link'; // Optional: if you're using React Router


type BreadcrumbProps = {
  items: {
    label: string;
    href?: string;
  }[];
}

const Breadcrumb = ({ items }: BreadcrumbProps) => {
  return (
    <nav className="flex items-center space-x-2 text-sm  pb-5">
      {items.map((item, index) => (
        <div key={index} className="flex items-center space-x-2">
          {index !== 0 && <ChevronRight size={16} />}
          {item.href ? (
            <Link
              href={item.href}
              className=" hover:underline cursor-pointer"
            >
              {item.label}
            </Link>
          ) : (
            <span className="">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
};


export default Breadcrumb;
