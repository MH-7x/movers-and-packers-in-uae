import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  title: string;
  url: string;
}

interface BreadcrumbProps {
  list: BreadcrumbItem[];
}

export const Breadcrumb = ({ list }: BreadcrumbProps) => {
  if (!list || list.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className="w-full bg-slate-50 py-3 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ol className="flex items-center space-x-2 text-sm text-muted-foreground overflow-x-auto whitespace-nowrap scrollbar-hide">
          <li className="flex items-center">
            <Link href="/" className="hover:text-primary transition-colors flex items-center gap-1.5">
              <Home className="w-4 h-4" />
              <span>Home</span>
            </Link>
          </li>
          
          {list.map((item, index) => {
            const isLast = index === list.length - 1;
            
            return (
              <li key={index} className="flex items-center">
                <ChevronRight className="w-4 h-4 mx-1 text-slate-300 flex-shrink-0" />
                {isLast ? (
                  <span className="text-foreground font-medium truncate" aria-current="page">
                    {item.title}
                  </span>
                ) : (
                  <Link href={item.url} className="hover:text-primary transition-colors truncate">
                    {item.title}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
};
