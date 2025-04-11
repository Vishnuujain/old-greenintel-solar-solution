
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted">
      <div className="text-center p-8 max-w-md">
        <div className="mx-auto w-16 h-16 bg-greenintel-light rounded-full flex items-center justify-center mb-6">
          <AlertCircle size={32} className="text-greenintel-primary" />
        </div>
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Oops! This page seems to have gone off the grid.
        </p>
        <div className="space-y-4">
          <Button className="btn-primary w-full" asChild>
            <Link to="/">Back to Home</Link>
          </Button>
          <Button variant="outline" className="w-full" asChild>
            <Link to="/contact">Contact Support</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
