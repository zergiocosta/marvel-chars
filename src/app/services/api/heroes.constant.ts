export const heroesMock = {
  code: 200,
  status: "Ok",
  copyright: "© 2020 MARVEL",
  attributionText: "Data provided by Marvel. © 2020 MARVEL",
  attributionHTML: "<a href=\"http://marvel.com\">Data provided by Marvel. © 2020 MARVEL</a>",
  etag: "8ef10925a0ccac5193c47f8adf2a7aff8bb34dbc",
  data: {
    offset: 0,
    limit: 1,
    total: 1493,
    count: 1,
    results: [
      {
        id: 1011334,
        name: "3-D Man",
        description: "",
        modified: "2014-04-29T14:18:17-0400",
        thumbnail: {
          path: "http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784",
          extension: "jpg"
        },
        resourceURI: "http://gateway.marvel.com/v1/public/characters/1011334",
        comics: {
          available: 12,
          collectionURI: "http://gateway.marvel.com/v1/public/characters/1011334/comics",
          items: [
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/21366",
              name: "Avengers: The Initiative (2007) #14"
            }
          ],
          returned: 12
        },
        series: {
          available: 3,
          collectionURI: "http://gateway.marvel.com/v1/public/characters/1011334/series",
          items: [
            {
              resourceURI: "http://gateway.marvel.com/v1/public/series/1945",
              name: "Avengers: The Initiative (2007 - 2010)"
            }
          ],
          returned: 3
        },
        stories: {
          available: 21,
          collectionURI: "http://gateway.marvel.com/v1/public/characters/1011334/stories",
          items: [
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/19947",
              name: "Cover #19947",
              type: "cover"
            }
          ],
          returned: 20
        },
        events: {
          available: 1,
          collectionURI: "http://gateway.marvel.com/v1/public/characters/1011334/events",
          items: [
            {
              resourceURI: "http://gateway.marvel.com/v1/public/events/269",
              name: "Secret Invasion"
            }
          ],
          returned: 1
        },
        urls: [
          {
            type: "detail",
            url: "http://marvel.com/comics/characters/1011334/3-d_man?utm_campaign=apiRef&utm_source=d65a32dafb6952363d8e505d8b490e04"
          }
        ]
      }
    ]
  }
}
