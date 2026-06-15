import { Link } from 'react-router-dom';
import HarborBackground from '@/components/design/HarborBackground';
import GlassPanel from '@/components/design/GlassPanel';
import { Button } from '@/components/ui/button';

export default function PageNotFound() {
  return (
    <HarborBackground showHorizon>
      <div className="min-h-screen flex items-center justify-center px-5">
        <GlassPanel className="max-w-sm w-full text-center space-y-4">
          <h1 className="text-2xl font-display font-light text-foreground">Page not found</h1>
          <p className="text-sm font-body text-muted-foreground">This route does not exist in Miravelys yet.</p>
          <Link to="/">
            <Button className="w-full bg-primary/20 hover:bg-primary/30 text-foreground border border-primary/20 font-body">
              Return home
            </Button>
          </Link>
        </GlassPanel>
      </div>
    </HarborBackground>
  );
}
