const ytdl = require("ytdl-core");
const { Client } = require("youtubei");
const youtube = new Client();
const { getLyrics, getSong } = require("genius-lyrics-api");
module.exports = {
  getArtist: async (url) => {
    const info = await ytdl.getInfo(url);
    const artist = {
      song: info.videoDetails.media.song,
      artist: info.videoDetails.media.artist,
    };
    return artist;
  },

  searchLyric: async (song, artist) => {
    const options = {
      apiKey:
        "_jrlcoPx93aPDnM1i1KsMVIwsAM0hCF2rZ_GzyWNNthgeXl0Ohh8s-cgEnG1R0oJ",
      title: song,
      artist: artist,
      optimizeQuery: true,
    };

    const lirik = await getLyrics(options);
    return lirik;
  },
  searchVideo: async (keyword) => {
    try {
      const videos = await youtube.search(keyword, {
        type: "video", // video | playlist | channel | all
      });
      return videos;
    } catch (error) {
      throw error;
    }
  },
};
