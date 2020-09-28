import {
  ResourceItem
} from '@models'

export interface HeroMeta {
  available: number
  collectionURI: string
  items: ResourceItem[],
  returned: number
}

export interface HeroMetaUrls {
  type: string
  url: string
}
