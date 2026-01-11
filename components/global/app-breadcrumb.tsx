import Link from 'next/link';

import { SlashIcon } from 'lucide-react';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

export type BreadcrumbItemType = {
  label: string;
  href?: string;
};

const AppBreadcrumb = ({ items }: { items: BreadcrumbItemType[] }) => {
  return (
    <Breadcrumb>
      <BreadcrumbList className="flex items-center gap-2 overflow-hidden whitespace-nowrap">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <div
              key={index}
              className="flex items-center gap-2 shrink-0 overflow-hidden text-ellipsis"
              title={item.label} // hover show full
            >
              <BreadcrumbItem className="overflow-hidden text-ellipsis">
                {isLast ? (
                  <BreadcrumbPage className="overflow-hidden text-ellipsis">
                    {item.label}
                  </BreadcrumbPage>
                ) : (
                  <BreadcrumbLink asChild>
                    <Link
                      href={item.href!}
                      className="overflow-hidden text-ellipsis"
                    >
                      {item.label}
                    </Link>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>

              {!isLast && (
                <BreadcrumbSeparator>
                  <SlashIcon />
                </BreadcrumbSeparator>
              )}
            </div>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default AppBreadcrumb;
