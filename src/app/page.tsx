import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center cursor-pointer">
        <Button variant="link" className="hover:no-underline text-3xl">ttOS</Button>
        <div className="text-sm text-muted-foreground mt-0.2">tech transfer Operating System</div>
        <div className="text-muted-foreground text-xs">
          Launching December 13, 2025
        </div>
      </div>
    </div>
  );
}