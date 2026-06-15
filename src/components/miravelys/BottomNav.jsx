import { Link, useLocation } from 'react-router-dom';
import SymbolIcon from '@/components/miravelys/SymbolIcon';

const navItems = [
  { path: '/', icon: 'truthline', label: 'Home' },
  { path: '/clarity', icon: 'lens', label: 'Get Clear' },
  { path: '/calm', icon: 'bloom', label: 'Calm' },
  { path: '/sleep', icon: 'moon', label: 'Sleep' },
  { path: '/mirror', icon: 'mirror', label: 'Mirror' },
];

const seaGlass = 'hsl(175 50% 55%)';

export default function BottomNav() {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 px-4 pb-4">
      <div className="mx-auto max-w-lg nav-glass rounded-2xl px-1 py-2">
        <div className="flex items-center justify-around">
          {navItems.map((item) => {
            const isActive =
              location.pathname === item.path ||
              (item.path !== '/' && location.pathname.startsWith(item.path));
            return (
              <Link
                key={item.path}
                to={item.path}
                className="flex flex-col items-center gap-1 py-1.5 px-3 rounded-xl transition-all duration-200 min-w-[56px]"
                style={{
                  color: isActive ? seaGlass : 'rgba(140,165,200,0.45)',
                  textDecoration: 'none',
                }}
              >
                <div className="relative">
                  <SymbolIcon name={item.icon} size={22} style={{ color: 'inherit' }} />
                  {isActive && (
                    <div
                      className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                      style={{ background: seaGlass, boxShadow: '0 0 6px rgba(60,185,165,0.8)' }}
                    />
                  )}
                </div>
                <span className="text-[10px] font-medium tracking-wide">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
