import { Separator } from "@/components/ui/separator";
import {
  GithubIcon,
  Send,
} from "lucide-react";
import Link from "next/link";

const Footer05Page = () => {
  return (
    <div className="bg-muted">
      <footer>
        <div className="max-w-screen-xl mx-auto">
          <Separator />
          <div className="py-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6 xl:px-0">
            {/* Copyright */}
            <span className="text-muted-foreground">
              &copy; {new Date().getFullYear()}{" "}
              <Link href="/" target="_blank">
                Cody
              </Link>
              . All rights reserved.
            </span>

            <div className="flex items-center gap-5 text-muted-foreground">
              <Link href="https://github.com/itsjonathankalu/paircoderbot" target="_blank">
                <GithubIcon className="h-5 w-5" />
              </Link>
              <Link href="https://t.me/paircoderbot" target="_blank">
                <Send className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer05Page;
