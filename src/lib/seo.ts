export interface SEOData {
  title?: string
  description?: string
  keywords?: string
  ogTitle?: string
  ogDescription?: string
  ogImage?: string
  ogUrl?: string
  ogSiteName?: string
  ogLocale?: string
  twitterCard?: string
  twitterTitle?: string
  twitterDescription?: string
  twitterImage?: string
  twitterCreator?: string
  canonical?: string
  author?: string
  robots?: string
}

export function updateSEO(data: SEOData) {
  // Update title
  if (data.title) {
    document.title = data.title
  }

  // Update or create meta tags
  const updateMetaTag = (name: string, content: string, attribute: string = 'name') => {
    let element = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement
    if (!element) {
      element = document.createElement('meta')
      element.setAttribute(attribute, name)
      document.head.appendChild(element)
    }
    element.content = content
  }

  // Update or create property meta tags (Open Graph)
  const updatePropertyTag = (property: string, content: string) => {
    updateMetaTag(property, content, 'property')
  }

  if (data.description) {
    updateMetaTag('description', data.description)
  }

  if (data.keywords) {
    updateMetaTag('keywords', data.keywords)
  }

  // Open Graph
  if (data.ogTitle) {
    updatePropertyTag('og:title', data.ogTitle)
  }
  if (data.ogDescription) {
    updatePropertyTag('og:description', data.ogDescription)
  }
  if (data.ogImage) {
    updatePropertyTag('og:image', data.ogImage)
  }
  if (data.ogUrl) {
    updatePropertyTag('og:url', data.ogUrl)
  }
  if (data.ogSiteName) {
    updatePropertyTag('og:site_name', data.ogSiteName)
  }
  if (data.ogLocale) {
    updatePropertyTag('og:locale', data.ogLocale)
  }
  updatePropertyTag('og:type', 'website')

  // Twitter Card
  if (data.twitterCard) {
    updateMetaTag('twitter:card', data.twitterCard)
  }
  if (data.twitterTitle) {
    updateMetaTag('twitter:title', data.twitterTitle)
  }
  if (data.twitterDescription) {
    updateMetaTag('twitter:description', data.twitterDescription)
  }
  if (data.twitterImage) {
    updateMetaTag('twitter:image', data.twitterImage)
  }
  if (data.twitterCreator) {
    updateMetaTag('twitter:creator', data.twitterCreator)
  }

  // Canonical URL
  if (data.canonical) {
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = data.canonical
  }

  // Author
  if (data.author) {
    updateMetaTag('author', data.author)
  }

  // Robots
  if (data.robots) {
    updateMetaTag('robots', data.robots)
  }
}

