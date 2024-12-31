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
      }
    ],
    removeRuleIds: [1, 2, 3, 4] // Removes old rules if they exist
  }, () => {
    console.log('Ad-blocking rules for YouTube and Spotify updated.');
  });
  