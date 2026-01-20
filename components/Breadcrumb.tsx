'use client';

interface BreadcrumbItem {
  name: string;
  href?: string;
  isCurrent?: boolean;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export const Breadcrumb = ({ items }: BreadcrumbProps) => {
  return (
    <nav className="bg-white/80 backdrop-blur-md py-4 border-b border-gray-200" aria-label="Breadcrumb">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ol className="flex items-center space-x-4">
          {items.map((item, index) => (
            <li key={index}>
              {item.isCurrent ? (
                <span className="text-brand-primary font-medium" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <>
                  <a
                    href={item.href || '#'}
                    className="text-gray-500 hover:text-brand-primary transition-colors"
                  >
                    {item.name}
                  </a>
                  <svg
                    className="h-5 w-5 text-gray-300 ml-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumb;