import { cn } from "../../lib/utils"
import { Input } from "../ui/input"

function AppInput({ className, ...props }: React.ComponentProps<typeof Input>) {
  return <Input className={cn("rounded-md bg-input", className)} {...props} />
}

export { AppInput }
