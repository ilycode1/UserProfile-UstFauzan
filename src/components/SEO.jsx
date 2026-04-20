import { Helmet } from 'react-helmet-async'

const SITE = 'Ustadz Fauzan Sugiyono'
const DEFAULT_DESCRIPTION =
  "Website dakwah Ustadz Fauzan Sugiyono - Pengkaji Fikih Muamalah dan Tafsir Al-Qur'an."
const DEFAULT_IMAGE = '/assets/images/foto-profil.jpg'

export default function SEO({ title, description, image, url, type = 'website' }) {
  const fullTitle = title ? `${title} | ${SITE}` : SITE
  const desc = description || DEFAULT_DESCRIPTION
  const img = image || DEFAULT_IMAGE

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />

      <meta property="og:site_name" content={SITE} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:image" content={img} />
      <meta property="og:type" content={type} />
      {url && <meta property="og:url" content={url} />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={img} />
    </Helmet>
  )
}
