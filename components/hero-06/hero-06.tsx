import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Send } from "lucide-react";
import { BackgroundPattern } from "./background-pattern";
import Link from "next/link";

const Hero06 = () => {
  return (
    <div className="relative overflow-hidden flex items-center justify-center px-12 py-24 sm:py-32">
      <BackgroundPattern />

      <div className="relative z-10 text-center max-w-2xl">
        <Badge variant="outline" className="rounded-full py-1">
          Powered by Groq & Llama 3.1
        </Badge>
        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold !leading-[1.2] tracking-tight">
          Cody: Your Intelligent AI Companion on Telegram
        </h1>
        <p className="mt-6 text-[17px] md:text-lg">
          Cody is a smart, extensible Telegram bot that uses the Groq API to generate fast and intelligent responses. Get started in minutes.
        </p>
        <div className="mt-12 flex items-center justify-center gap-4">
          <Link href="https://t.me/paircoderbot" target="_blank">
            <Button size="lg" className="rounded-full text-base">
              <Send className="!h-5 !w-5 mr-2" /> Try on Telegram
            </Button>
          </Link>
          <Link href="https://github.com/itsjonathankalu/paircoderbot" target="_blank">
            <Button
              variant="outline"
              size="lg"
              className="rounded-full text-base shadow-none"
            >
              <Github className="!h-5 !w-5 mr-2" /> View on GitHub
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero06;
