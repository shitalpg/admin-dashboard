import { ReactNode } from 'react';

// Cards
export default function SummaryCard({
  title,
  value,
  icon,
}: {
  title: string;
  value: string;
  icon: ReactNode;
}) {
  return (
    <div className="bg-gradient-to-br from-white via-gray-50 to-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center gap-5 border border-gray-100">
      <div className="p-3 rounded-full bg-blue-100 text-blue-700 shadow-inner flex items-center justify-center">
        {icon}
      </div>
      <div>
        <div className="text-sm text-gray-500 font-medium">{title}</div>
        <div className="text-2xl font-bold text-gray-800">{value}</div>
      </div>
    </div>
  );
}
