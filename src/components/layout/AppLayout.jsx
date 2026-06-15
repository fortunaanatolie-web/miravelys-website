import { Outlet } from 'react-router-dom';
import HarborBackground from '@/components/design/HarborBackground';
import BottomNav from '@/components/miravelys/BottomNav';

export default function AppLayout() {
  return (
    <HarborBackground>
      <div className="min-h-screen pb-32">
        <Outlet />
      </div>
      <BottomNav />
    </HarborBackground>
  );
}
