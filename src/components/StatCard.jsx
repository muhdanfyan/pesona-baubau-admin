export default function StatCard({ icon: Icon, label, value, trend, trendColor, iconBg, bgColor }) {
  return (
    <div className="bg-surface-container-lowest p-lg rounded-xl custom-shadow border border-surface-container-high hover:shadow-md transition-all hover:-translate-y-0.5 duration-300">
      <div className="flex justify-between items-start mb-md">
        <div className={`p-sm ${iconBg || 'bg-primary/10'} rounded-lg`}>
          <Icon size={24} className={bgColor || 'text-primary'} />
        </div>
        {trend && (
          <span className={`text-xs font-bold px-2 py-1 rounded-full ${
            trend.startsWith('+') 
              ? 'text-green-600 bg-green-50' 
              : trend.startsWith('-')
                ? 'text-error bg-error-container/20'
                : 'text-secondary bg-secondary-container/10'
          }`}>
            {trend}
          </span>
        )}
      </div>
      <p className="text-on-surface-variant text-label-md font-label-md">{label}</p>
      <p className="font-headline-md font-headline-md text-on-surface">{value}</p>
    </div>
  );
}
