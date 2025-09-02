import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Terminal } from "lucide-react";
import Link from "next/link";

const GettingStarted = () => {
  return (
    <div className="py-16 sm:py-24 px-6">
      <div className="max-w-screen-lg mx-auto">
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            It&apos;s Open Source!
          </h2>
          <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
            Cody is open source and easy to set up. Follow these simple steps to get your own instance of Cody running from the GitHub repository.
          </p>
          <div className="mt-8">
            <Link href="https://github.com/itsjonathankalu/paircoderbot" target="_blank">
              <Button size="lg" variant="outline" className="rounded-full text-base">
                <Github className="!h-5 !w-5 mr-2" /> View on GitHub
              </Button>
            </Link>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <Badge variant="outline" className="rounded-full h-12 w-12 flex items-center justify-center">
              <span className="text-xl font-bold">1</span>
            </Badge>
            <h3 className="mt-4 text-xl font-semibold">Clone the Repo</h3>
            <p className="mt-2 text-foreground/80">
              Get the source code from GitHub.
            </p>
            <div className="mt-4 p-3 bg-muted rounded-lg text-sm font-mono text-left w-full overflow-x-auto whitespace-nowrap">
              <Terminal className="inline-block h-4 w-4 mr-2" />
              git clone https://github.com/itsjonathankalu/paircoderbot.git
            </div>
          </div>
          <div className="flex flex-col items-center text-center">
            <Badge variant="outline" className="rounded-full h-12 w-12 flex items-center justify-center">
              <span className="text-xl font-bold">2</span>
            </Badge>
            <h3 className="mt-4 text-xl font-semibold">Install & Configure</h3>
            <p className="mt-2 text-foreground/80">
              Install dependencies and add your API keys.
            </p>
            <div className="mt-4 p-3 bg-muted rounded-lg text-sm font-mono text-left w-full overflow-x-auto whitespace-nowrap">
              <Terminal className="inline-block h-4 w-4 mr-2" />
              npm install && cp .env.example .env
            </div>
          </div>
          <div className="flex flex-col items-center text-center">
            <Badge variant="outline" className="rounded-full h-12 w-12 flex items-center justify-center">
              <span className="text-xl font-bold">3</span>
            </Badge>
            <h3 className="mt-4 text-xl font-semibold">Run the Bot</h3>
            <p className="mt-2 text-foreground/80">
              Start the server and connect to Telegram.
            </p>
            <div className="mt-4 p-3 bg-muted rounded-lg text-sm font-mono text-left w-full overflow-x-auto whitespace-nowrap">
              <Terminal className="inline-block h-4 w-4 mr-2" />
              node index.js
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GettingStarted;