import { useEffect } from 'react'
import { updateSEO, type SEOData } from '@/lib/seo'

export function useSEO(data: SEOData) {
  useEffect(() => {
    updateSEO(data)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(data)])
}

