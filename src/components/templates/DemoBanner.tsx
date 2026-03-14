export default function DemoBanner({ niche, slug }: { niche: string; slug: string }) {
  return (
    <div className="bg-blue-600 text-white py-3 px-6 text-center text-sm">
      <span className="font-semibold">DEMO — {niche} Template</span>
      <span className="mx-3 opacity-60">|</span>
      <span>This is a demo website by </span>
      <a href="/" className="font-bold underline">Atlas Web Agency</a>
      <span> · </span>
      <a
        href={`https://wa.me/17864353507?text=Hi!%20I%20saw%20the%20${encodeURIComponent(niche)}%20demo%20and%20I%27d%20like%20a%20website%20for%20my%20business.`}
        className="font-bold underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        Get this for your business →
      </a>
    </div>
  )
}
