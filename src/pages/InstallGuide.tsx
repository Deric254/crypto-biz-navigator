
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Download, Monitor, Terminal, FileCode, Settings, Check, Laptop } from "lucide-react";
import { Link } from "react-router-dom";

const InstallGuide = () => {
  return (
    <div className="min-h-screen bg-background text-foreground p-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <Link to="/" className="flex items-center text-primary hover:underline">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Dashboard
          </Link>
        </div>
        
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-2xl flex items-center">
              <Download className="h-5 w-5 mr-2 text-primary" />
              Installation Guide for Crypto Biz Navigator
            </CardTitle>
            <CardDescription>
              Follow these steps to set up your standalone Windows application
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold flex items-center">
                  <Laptop className="h-5 w-5 mr-2 text-crypto-bitcoin" />
                  System Requirements
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Windows 10 or higher (64-bit)</li>
                  <li>Minimum 4GB RAM (8GB recommended)</li>
                  <li>At least 500MB of free disk space</li>
                  <li>Internet connection for real-time data updates</li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-semibold flex items-center">
                  <Download className="h-5 w-5 mr-2 text-crypto-ethereum" />
                  Step 1: Download the Application
                </h3>
                <div className="pl-7 space-y-3">
                  <p>Download the application installer from our official release page:</p>
                  <Button className="bg-primary hover:bg-primary/90 flex items-center">
                    <Download className="h-4 w-4 mr-2" />
                    Download Crypto Biz Navigator
                  </Button>
                  <p className="text-sm text-muted-foreground">
                    SHA-256 checksum: 3a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-semibold flex items-center">
                  <Monitor className="h-5 w-5 mr-2 text-crypto-trend" />
                  Step 2: Install the Application
                </h3>
                <ol className="pl-7 space-y-3 list-decimal">
                  <li>Run the downloaded installer file (CryptoBizNavigator-Setup.exe)</li>
                  <li>If prompted by Windows security, click "More info" and then "Run anyway"</li>
                  <li>Follow the installation wizard prompts</li>
                  <li>Choose your installation location or leave as default</li>
                  <li>Wait for the installation to complete</li>
                </ol>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-semibold flex items-center">
                  <Settings className="h-5 w-5 mr-2 text-blue-500" />
                  Step 3: Configure the Application
                </h3>
                <ol className="pl-7 space-y-3 list-decimal">
                  <li>Launch the application from your Start menu or desktop shortcut</li>
                  <li>On first launch, the application will prompt for initial setup</li>
                  <li>Select the data sources you're interested in (crypto, business, tech)</li>
                  <li>Configure your update frequency preferences</li>
                  <li>Enter any API keys if you have premium data subscriptions (optional)</li>
                </ol>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-semibold flex items-center">
                  <Terminal className="h-5 w-5 mr-2 text-purple-500" />
                  Advanced Installation (for Developers)
                </h3>
                <div className="pl-7 space-y-3">
                  <p>If you prefer to build from source:</p>
                  <div className="bg-black text-white p-3 rounded font-mono text-sm overflow-x-auto">
                    <pre>
{`# Clone the repository
git clone https://github.com/crypto-biz-navigator/app.git

# Navigate to the project directory
cd app

# Install dependencies
npm install

# Build the application
npm run build

# Package the application for Windows
npm run package-win

# The packaged application will be in the dist folder`}
                    </pre>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-semibold flex items-center">
                  <Check className="h-5 w-5 mr-2 text-green-500" />
                  Verification & Troubleshooting
                </h3>
                <div className="pl-7 space-y-3">
                  <p>After installation, verify that:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>The application launches without errors</li>
                    <li>Data is being fetched and displayed correctly</li>
                    <li>Scraping functionality works when you enter a URL</li>
                  </ul>
                  
                  <p className="mt-4">Common issues and solutions:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Application won't start:</strong> Make sure you meet system requirements and try running as administrator</li>
                    <li><strong>No data appears:</strong> Check your internet connection and firewall settings</li>
                    <li><strong>Scraping not working:</strong> Some websites may block automated scraping</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-secondary/50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold flex items-center mb-3">
                  <FileCode className="h-5 w-5 mr-2 text-primary" />
                  Next Steps
                </h3>
                <p>After installation, explore these features:</p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Analyze trending topics to identify emerging opportunities</li>
                  <li>Review monetization ideas to find your niche</li>
                  <li>Stay updated on technology trends for competitive advantage</li>
                  <li>Track market insights to time your business initiatives</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default InstallGuide;
