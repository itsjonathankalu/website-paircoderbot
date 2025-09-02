import {
  Blocks,
  Bot,
  Send,
  Settings2,
} from "lucide-react";
import React from "react";

const features = [
  {
    icon: Send,
    title: "Telegram Integration",
    description:
      "Connects directly to the Telegram Bot API using webhooks for real-time communication.",
  },
  {
    icon: Bot,
    title: "AI-Powered Responses",
    description:
      "Uses the Groq API with the Llama 3.1 model to generate intelligent and context-aware responses.",
  },
  {
    icon: Settings2,
    title: "Easy to Set Up",
    description:
      "Get your bot running in a few simple steps with minimal configuration.",
  },
  {
    icon: Blocks,
    title: "Extensible",
    description:
      "The code is simple and modular, allowing you to easily add new features and integrations.",
  },
];

const Features01Page = () => {
  return (
    <div className="py-16 sm:py-24">
      <div>
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-center">
          Core Features
        </h2>
        <div className="mt-10 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-screen-md mx-auto px-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col border rounded-xl py-6 px-5"
            >
              <div className="mb-3 h-10 w-10 flex items-center justify-center bg-muted rounded-full">
                <feature.icon className="h-6 w-6" />
              </div>
              <span className="text-lg font-semibold">{feature.title}</span>
              <p className="mt-1 text-foreground/80 text-[15px]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features01Page;