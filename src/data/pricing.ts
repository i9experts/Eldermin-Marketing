export interface PricingPlan {
  name: string
  tagline: string
  annual: string
  monthly: string
  priceNote: { annual: string; monthly: string }
  features: string[]
  cta: string
  featured?: boolean
}

export const plans: PricingPlan[] = [
  {
    name: 'Starter', tagline: 'For a focused school team', annual: '180,000', monthly: '15,000',
    priceNote: { annual: 'per year · annual billing', monthly: 'per month equivalent · PKR 180,000 billed annually' },
    features: ['Up to 300 students', '7 core modules', '2 admin users', 'Parent portal', 'Email support'],
    cta: 'Explore Starter',
  },
  {
    name: 'Growth', tagline: 'For a growing school', annual: '420,000', monthly: '35,000',
    priceNote: { annual: 'per year · annual billing', monthly: 'per month equivalent · PKR 420,000 billed annually' },
    features: ['Up to 1,200 students', '14 modules', '10 admin users', 'Parent portal', 'Advanced analytics & AI report insights', 'Priority support'],
    cta: 'Explore Growth', featured: true,
  },
  {
    name: 'Enterprise', tagline: 'For a connected school network', annual: 'Custom', monthly: 'Custom',
    priceNote: { annual: 'A proposal built around your institution', monthly: 'A proposal built around your institution' },
    features: ['Unlimited students', 'All 17 modules', 'Unlimited admin users', 'Multi-campus dashboard', 'Dedicated support', 'On-site setup assistance'],
    cta: 'Talk to our team',
  },
]

export const comparisonRows: { feature: string; starter: string | boolean; growth: string | boolean; enterprise: string | boolean }[] = [
  { feature: 'Students', starter: 'Up to 300', growth: 'Up to 1,200', enterprise: 'Unlimited' },
  { feature: 'Modules', starter: '7 core modules', growth: '14 modules', enterprise: 'All 17 modules' },
  { feature: 'Admin users', starter: '2', growth: '10', enterprise: 'Unlimited' },
  { feature: 'Parent portal', starter: true, growth: true, enterprise: true },
  { feature: 'AI report insights', starter: false, growth: true, enterprise: true },
  { feature: 'Multi-campus dashboard', starter: false, growth: false, enterprise: true },
  { feature: 'Support', starter: 'Email', growth: 'Priority', enterprise: 'Dedicated' },
  { feature: 'On-site setup assistance', starter: false, growth: false, enterprise: true },
]
