"use client";

import {
  AppPagination,
  AppPaginationContent,
  AppPaginationEllipsis,
  AppPaginationItem,
  AppPaginationLink,
  AppPaginationNext,
  AppPaginationPrevious,
} from "@viana/ui";

export function PaginationIconsOnlyPreview() {
  return (
    <AppPagination>
      <AppPaginationContent>
        <AppPaginationItem>
          <AppPaginationPrevious href="#" />
        </AppPaginationItem>
        <AppPaginationItem>
          <AppPaginationNext href="#" />
        </AppPaginationItem>
      </AppPaginationContent>
    </AppPagination>
  );
}

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
          <AppPaginationLink href="#" isActive>2</AppPaginationLink>
        </AppPaginationItem>
        <AppPaginationItem>
          <AppPaginationLink href="#">3</AppPaginationLink>
        </AppPaginationItem>
        <AppPaginationItem>
          <AppPaginationEllipsis />
        </AppPaginationItem>
        <AppPaginationItem>
          <AppPaginationLink href="#">10</AppPaginationLink>
        </AppPaginationItem>
        <AppPaginationItem>
          <AppPaginationNext href="#" />
        </AppPaginationItem>
      </AppPaginationContent>
    </AppPagination>
  );
}
