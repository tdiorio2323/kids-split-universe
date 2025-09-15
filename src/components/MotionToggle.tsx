import { useReduceMotion } from "@/hooks/use-reduce-motion";
import { Button } from "@/components/ui/button";
import { Zap, PauseCircle } from "lucide-react";

export default function MotionToggle() {
  const { reduceMotion, setReduceMotion } = useReduceMotion();

  return (
    <div className="fixed bottom-4 right-4 z-[100]">
      <Button
        variant="secondary"
        className="backdrop-blur-sm bg-white/60 hover:bg-white/80 shadow-md"
        onClick={() => setReduceMotion(!reduceMotion)}
        aria-pressed={reduceMotion}
        aria-label={reduceMotion ? "Enable animations" : "Reduce motion"}
        title={reduceMotion ? "Enable animations" : "Reduce motion"}
      >
        {reduceMotion ? (
          <>
            <PauseCircle className="w-4 h-4 mr-2" />
            Animations Off
          </>
        ) : (
          <>
            <Zap className="w-4 h-4 mr-2" />
            Animations On
          </>
        )}
      </Button>
    </div>
  );
}

