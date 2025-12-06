import * as React from "react"
import { cn } from "@/lib/utils"

const badgeVariants = {
  default: "border-transparent bg-primary text-white hover:bg-primary/80",
  secondary: "border-transparent bg-secondary text-white hover:bg-secondary/80",
  destructive: "border-transparent bg-red-500 text-white hover:bg-red-500/80",
  outline: "text-foreground border-border",
}

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: keyof typeof badgeVariants
  asChild?: boolean
}

function Badge({ className, variant = "default", asChild = false, ...props }: BadgeProps) {
  const Comp = asChild ? "span" : "div"
  return (
    <Comp
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors",
        badgeVariants[variant],
        className
      )}
      {...props}
    />
  )
}

export { Badge }

