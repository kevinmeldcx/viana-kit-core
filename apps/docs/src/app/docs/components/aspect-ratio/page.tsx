import { Metadata } from "next"
import { AppAspectRatio } from "@viana/ui"

export const metadata: Metadata = {
  title: "Aspect Ratio - Viana Kit",
  description: "A component that maintains aspect ratio for its content.",
}

export default function AspectRatioPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Aspect Ratio
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          A component that maintains aspect ratio for its content.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0">
          16:9 Aspect Ratio
        </h2>
        <div className="rounded-lg border p-8">
          <AppAspectRatio ratio={16 / 9} className="bg-muted">
            <img 
              src="https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?w=800&h=450&fit=crop" 
              alt="Demo image" 
              className="h-full w-full object-cover rounded-md" 
            />
          </AppAspectRatio>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0">
          4:3 Aspect Ratio
        </h2>
        <div className="rounded-lg border p-8">
          <AppAspectRatio ratio={4 / 3} className="bg-muted">
            <img 
              src="https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?w=800&h=600&fit=crop" 
              alt="Demo image" 
              className="h-full w-full object-cover rounded-md" 
            />
          </AppAspectRatio>
        </div>
      </div>
    </div>
  )
}