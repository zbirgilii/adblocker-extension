chrome.declarativeNetRequest.updateDynamicRules({
  addRules: [
    // Block ad requests on YouTube
    {
      "id": 1,
      "priority": 1,
      "action": { "type": "block" },
      "condition": {
        "urlFilter": "youtube.com/get_video_info?adformat", // Matches ad-related requests on YouTube
        "resourceTypes": ["xmlhttprequest"]
      }
    },
    {
      "id": 2,
      "priority": 1,
      "action": { "type": "block" },
      "condition": {
        "urlFilter": "googlevideo.com/videoplayback?*", // Matches ads served by YouTube's video CDN
        "resourceTypes": ["media"]
      }
    },
    // Block ad requests on Spotify
    {
      "id": 3,
      "priority": 1,
      "action": { "type": "block" },
      "condition": {
        "urlFilter": "spotify.com/ad/", // Matches Spotify's ad endpoints
        "resourceTypes": ["xmlhttprequest"]
      }
    },
    {
      "id": 4,
      "priority": 1,
      "action": { "type": "block" },
      "condition": {
        "urlFilter": "ads.spotify.com", // Matches Spotify ad server
        "resourceTypes": ["script", "image", "xmlhttprequest"]
      }
    },
    // Block ad requests on HBO Max
    {
      "id": 5,
      "priority": 1,
      "action": { "type": "block" },
      "condition": {
        "urlFilter": "hbomax.com/ad", // Matches HBO Max ad endpoints
        "resourceTypes": ["xmlhttprequest", "media"]
      }
    },
    // Block ad requests on Netflix
    {
      "id": 6,
      "priority": 1,
      "action": { "type": "block" },
      "condition": {
        "urlFilter": "netflix.com/ad", // Matches Netflix ad endpoints
        "resourceTypes": ["xmlhttprequest", "media"]
      }
    },
    // Block ad requests on Twitch
    {
      "id": 7,
      "priority": 1,
      "action": { "type": "block" },
      "condition": {
        "urlFilter": "gql.twitch.tv", // Matches Twitch ad endpoints
        "resourceTypes": ["xmlhttprequest"]
      }
    },
    {
      "id": 8,
      "priority": 1,
      "action": { "type": "block" },
      "condition": {
        "urlFilter": "https://*.ttvnw.net/ad*", // Matches Twitch ad-related requests
        "resourceTypes": ["media", "image"]
      }
    }
  ],
  removeRuleIds: [1, 2, 3, 4, 5, 6, 7, 8] // Removes old rules if they exist
}, () => {
  console.log('Ad-blocking rules for YouTube, Spotify, HBO Max, Netflix, and Twitch updated.');
});