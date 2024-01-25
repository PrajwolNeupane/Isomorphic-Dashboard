'use client';

import cn from '@/utils/class-names';
import FlightFeed from './flight-feed';
import FlightFilterSidebar from './flight-filter-sidebar';

export default function ListingFilters({ className }: { className?: string }) {
  return (
    <div className={cn('grid grid-cols-12 gap-5 @7xl:gap-10', className)}>
      <FlightFeed />
      <FlightFilterSidebar className="hidden @5xl:block" />
    </div>
  );
}
