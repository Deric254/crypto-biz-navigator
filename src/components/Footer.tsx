
import { Github, Package, Database } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-card border-t border-border px-6 py-4">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="text-sm text-muted-foreground mb-2 md:mb-0">
          © {new Date().getFullYear()} Crypto Biz Navigator | Standalone App for Windows
        </div>
        <div className="flex items-center space-x-4">
          <a 
            href="#" 
            className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center"
          >
            <Package className="h-4 w-4 mr-1" />
            <span>Installation Guide</span>
          </a>
          <a 
            href="#" 
            className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center"
          >
            <Database className="h-4 w-4 mr-1" />
            <span>Update Database</span>
          </a>
          <a 
            href="#" 
            className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center"
          >
            <Github className="h-4 w-4 mr-1" />
            <span>Source Code</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
