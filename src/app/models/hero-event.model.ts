import {
  HeroMeta,
  HeroMetaUrls,
  Thumbnail,
  ResourceItem
} from '@models'

export interface HeroEvent {
  id: number
  title: string
  description: string
  resourceURI: string
  urls: HeroMetaUrls[],
  modified: string
  start: string
  end: string
  thumbnail: Thumbnail,
  creators: HeroMeta,
  characters: HeroMeta,
  stories: HeroMeta,
  comics: HeroMeta,
  series: HeroMeta,
  next: ResourceItem,
  previous: ResourceItem
}
