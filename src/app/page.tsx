// app/page.tsx
import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import { SignInButton } from "@clerk/nextjs";
import { ArrowRight, Cloud, Upload, Check, ShieldCheck } from "lucide-react";

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-primary/20 p-3 rounded-full">
              <Cloud className="h-8 w-8 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Share Your Dreams With The World
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Upload your dream videos, connect with others, and share your imagination across social media.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <SignInButton mode="modal">
              <Button size="lg" className="gap-2">
                Get Started <ArrowRight className="h-4 w-4" />
              </Button>
            </SignInButton>
            <Button variant="outline" size="lg" asChild>
              <Link href="#how-it-works">
                How It Works
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-muted-foreground">
              Sharing your dreams with the world has never been easier. Follow these simple steps to get started.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-background rounded-lg p-6 shadow-sm">
              <div className="bg-primary/10 h-12 w-12 rounded-full flex items-center justify-center mb-4">
                <Upload className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">1. Upload Your Dream</h3>
              <p className="text-muted-foreground">
                Record and upload a 1-minute video about your dream. Make it creative and engaging!
              </p>
            </div>

            <div className="bg-background rounded-lg p-6 shadow-sm">
              <div className="bg-primary/10 h-12 w-12 rounded-full flex items-center justify-center mb-4">
                <Check className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">2. Wait for Approval</h3>
              <p className="text-muted-foreground">
                Our team reviews each submission to ensure it meets our community guidelines.
              </p>
            </div>

            <div className="bg-background rounded-lg p-6 shadow-sm">
              <div className="bg-primary/10 h-12 w-12 rounded-full flex items-center justify-center mb-4">
                <ShieldCheck className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">3. Share with the World</h3>
              <p className="text-muted-foreground">
                Once approved, your dream video can be shared across various social media platforms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Share Your Dreams?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Join our growing community of dreamers and share your imagination with the world.
          </p>
          <SignInButton mode="modal">
            <Button size="lg" className="gap-2">
              Get Started Today <ArrowRight className="h-4 w-4" />
            </Button>
          </SignInButton>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Cloud className="h-5 w-5" />
              <span className="font-bold">Dream Share</span>
            </div>
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Dream Share. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
