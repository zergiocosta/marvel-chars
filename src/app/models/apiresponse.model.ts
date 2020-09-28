export interface ApiResponse {
  code: number
  status: string
  copyright: string
  attributionText: string
  attributionHTML: string
  etag: string
  data: HeroesList
}

interface HeroesList {
  offset: number
  limit: number
  total: number
  count: number
  results: any
}
