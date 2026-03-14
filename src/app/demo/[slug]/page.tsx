import { notFound } from 'next/navigation'
import ContractorTemplate from '../../../components/templates/ContractorTemplate'
import RestaurantTemplate from '../../../components/templates/RestaurantTemplate'
import MedicalTemplate from '../../../components/templates/MedicalTemplate'
import RealEstateTemplate from '../../../components/templates/RealEstateTemplate'
import LocalBusinessTemplate from '../../../components/templates/LocalBusinessTemplate'

const templates: Record<string, React.ComponentType> = {
  'contractor': ContractorTemplate,
  'restaurant': RestaurantTemplate,
  'medical': MedicalTemplate,
  'real-estate': RealEstateTemplate,
  'local-business': LocalBusinessTemplate,
}

export function generateStaticParams() {
  return Object.keys(templates).map((slug) => ({ slug }))
}

export default function DemoPage({ params }: { params: { slug: string } }) {
  const Template = templates[params.slug]
  if (!Template) notFound()
  return <Template />
}
