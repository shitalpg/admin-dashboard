import SummaryCard from './components/SummaryCard';
import { User, Settings, Users } from 'lucide-react';

const data = [
  { title: 'Total Users', value: '1,500', icon: <Users /> },
  { title: 'Active Users', value: '870', icon: <User /> },
  { title: 'Settings Updated', value: '32', icon: <Settings /> },
  { title: 'New Signups', value: '215', icon: <Users /> },
];

export default function DashboardPage() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {data.map((card, idx) => (
        <SummaryCard key={idx} {...card} />
      ))}
    </div>
  );
}