export const fixtures = {
  '135 pilkington avenue, birmingham': {
    body: {
      info: {
        statuscode: 0,
        copyright: {
          text: '© 2021 MapQuest, Inc.',
          imageUrl: 'http://api.mqcdn.com/res/mqlogo.gif',
          imageAltText: '© 2021 MapQuest, Inc.'
        },
        messages: []
      },
      options: { maxResults: -1, thumbMaps: true, ignoreLatLngInput: false },
      results: [
        {
          providedLocation: { location: '135 pilkington avenue, birmingham' },
          locations: [
            {
              street: '135 Pilkington Avenue',
              adminArea6: 'Sutton Coldfield',
              adminArea6Type: 'Neighborhood',
              adminArea5: 'Birmingham',
              adminArea5Type: 'City',
              adminArea4: 'West Midlands Combined Authority',
              adminArea4Type: 'County',
              adminArea3: 'England',
              adminArea3Type: 'State',
              adminArea1: 'GB',
              adminArea1Type: 'Country',
              postalCode: 'B72 1LH',
              geocodeQualityCode: 'P1AAX',
              geocodeQuality: 'POINT',
              dragPoint: false,
              sideOfStreet: 'N',
              linkId: '0',
              unknownInput: '',
              type: 's',
              latLng: { lat: 52.548792, lng: -1.816431 },
              displayLatLng: { lat: 52.548792, lng: -1.816431 },
              mapUrl: 'http://open.mapquestapi.com/staticmap/v5/map?key=OtzCBEWGtk1UBGpIYYdo14TjixGis0NZ&type=map&size=225,160&locations=52.5487921,-1.8164308339635|marker-sm-50318A-1&scalebar=true&zoom=15&rand=-1945814624'
            }
          ]
        }
      ]
    },
    expResults: [
      {
        formattedAddress: '135 Pilkington Avenue, Birmingham, England B72 1LH, GB',
        latitude: 52.548792,
        longitude: -1.816431,
        country: undefined,
        countryCode: 'GB',
        state: 'England',
        county: 'West Midlands Combined Authority',
        city: 'Birmingham',
        zipcode: 'B72 1LH',
        streetName: '135 Pilkington Avenue',
        neighbourhood: 'Sutton Coldfield',
        extra: { id: '0', sideOfStreet: 'N' }
      }
    ]
  },
  '40.714232,-73.9612889': {
    body: {
      info: {
        statuscode: 0,
        copyright: {
          text: '© 2021 MapQuest, Inc.',
          imageUrl: 'http://api.mqcdn.com/res/mqlogo.gif',
          imageAltText: '© 2021 MapQuest, Inc.'
        },
        messages: []
      },
      options: { maxResults: 1, thumbMaps: true, ignoreLatLngInput: false },
      results: [
        {
          providedLocation: { latLng: { lat: 40.714232, lng: -73.9612889 } },
          locations: [
            {
              street: '279 Bedford Avenue',
              adminArea6: '',
              adminArea6Type: 'Neighborhood',
              adminArea5: 'New York City',
              adminArea5Type: 'City',
              adminArea4: '',
              adminArea4Type: 'County',
              adminArea3: 'NY',
              adminArea3Type: 'State',
              adminArea1: 'US',
              adminArea1Type: 'Country',
              postalCode: '11211',
              geocodeQualityCode: 'P1AAA',
              geocodeQuality: 'POINT',
              dragPoint: false,
              sideOfStreet: 'N',
              linkId: '0',
              unknownInput: '',
              type: 's',
              latLng: { lat: 40.714205, lng: -73.961315 },
              displayLatLng: { lat: 40.714205, lng: -73.961315 },
              mapUrl: 'http://open.mapquestapi.com/staticmap/v5/map?key=OtzCBEWGtk1UBGpIYYdo14TjixGis0NZ&type=map&size=225,160&locations=40.714205,-73.96131509274764|marker-sm-50318A-1&scalebar=true&zoom=15&rand=2023995533'
            }
          ]
        }
      ]
    },
    expResults: [
      {
        formattedAddress: '279 Bedford Avenue, New York City, NY 11211, US',
        latitude: 40.714205,
        longitude: -73.961315,
        country: undefined,
        countryCode: 'US',
        state: 'NY',
        county: undefined,
        city: 'New York City',
        zipcode: '11211',
        streetName: '279 Bedford Avenue',
        neighbourhood: undefined,
        extra: { id: '0', sideOfStreet: 'N' }
      }
    ]
  }
}