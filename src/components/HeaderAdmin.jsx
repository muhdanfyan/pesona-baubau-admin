import { Bell, HelpCircle, ChevronDown } from 'lucide-react';

export default function HeaderAdmin({ title, subtitle }) {
  return (
    <header className="fixed top-0 right-0 w-[calc(100%-260px)] h-16 bg-surface shadow-sm z-40 flex justify-between items-center px-lg">
      {/* Left section */}
      <div className="flex items-center gap-md">
        <span className="text-on-surface-variant font-body-md text-body-md">
          Dashboard
        </span>
        <span className="text-outline">
          <ChevronRight size={16} />
        </span>
        <span className="text-primary font-bold font-body-md text-body-md">
          {title || 'Statistik Pariwisata'}
        </span>
      </div>

      {/* Right section */}
      <div className="flex items-center gap-lg">
        {/* Notification */}
        <div className="relative group cursor-pointer">
          <Bell size={20} className="text-on-surface-variant hover:text-primary transition-all" />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-error rounded-full"></span>
        </div>

        {/* Help */}
        <HelpCircle size={20} className="text-on-surface-variant hover:text-primary transition-all cursor-pointer" />

        {/* Divider */}
        <div className="h-8 w-[1px] bg-outline-variant mx-sm" />

        {/* Brand */}
        <div className="flex items-center gap-sm cursor-pointer">
          <span className="text-on-surface font-semibold text-body-md">
            Baubau Digital Hub
          </span>
          <ChevronDown size={16} className="text-on-surface-variant" />
        </div>
      </div>
    </header>
  );
}
