"use client";

import { AppPagination, AppPaginationContent, AppPaginationItem, AppPaginationLink, AppPaginationNext, AppPaginationPrevious } from "@viana/ui";

export function PaginationDefaultPreview() {
  return (
    <AppPagination>
      <AppPaginationContent>
        <AppPaginationItem>
          <AppPaginationPrevious href="#" />
        </AppPaginationItem>
        <AppPaginationItem>
          <AppPaginationLink href="#">1</AppPaginationLink>
        </AppPaginationItem>
        <AppPaginationItem>
          <AppPaginationLink href="#">2</AppPaginationLink>
        </AppPaginationItem>
        <AppPaginationItem>
          <AppPaginationLink href="#">3</AppPaginationLink>
        </AppPaginationItem>
        <AppPaginationItem>
          <AppPaginationNext href="#" />
        </AppPaginationItem>
      </AppPaginationContent>
    </AppPagination>
  );
}
