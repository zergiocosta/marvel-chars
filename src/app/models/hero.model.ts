import {
  HeroMeta,
  HeroMetaUrls,
  Thumbnail
} from '@models'

export interface Hero  {
  id: number
  name: string
  description: string
  modified: string
  thumbnail: Thumbnail,
  resourceURI: string
  comics: HeroMeta,
  series: HeroMeta,
  stories: HeroMeta,
  events: HeroMeta,
  urls: HeroMetaUrls[]
}
