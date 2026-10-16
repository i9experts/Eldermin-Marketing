import {
  LayoutGrid, BookOpen, Users, ShieldCheck, BarChart3, Wallet, Clock,
  MessageSquare, CheckCircle2, ArrowRight, Heart, Building2, FileText, Sparkles,
  type LucideIcon,
} from 'lucide-react'

/** Maps the design mockup's icon-name strings onto the closest lucide-react icon. */
export const ICONS: Record<string, LucideIcon> = {
  grid: LayoutGrid,
  book: BookOpen,
  people: Users,
  shield: ShieldCheck,
  chart: BarChart3,
  wallet: Wallet,
  clock: Clock,
  message: MessageSquare,
  check: CheckCircle2,
  arrow: ArrowRight,
  heart: Heart,
  building: Building2,
  doc: FileText,
  spark: Sparkles,
}

export function Icon({ name, ...props }: { name: string } & React.ComponentProps<LucideIcon>) {
  const Cmp = ICONS[name] || LayoutGrid
  return <Cmp {...props} />
}
