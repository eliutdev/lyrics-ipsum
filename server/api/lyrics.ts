const API_URL = "https://api.musixmatch.com/ws/1.1/";

export default async (req) => {
  const artist = new URLSearchParams(req.url).get("artist");
  const response = await fetch(
    `${API_URL}track.search?q_artist=${artist}&apikey=${process.env.API_KEY}&s_track_rating=desc`
  );
  const tracks = await response.json();
  const list = tracks.message.body.track_list;
  if (!list.length) {
    return [];
  }
  // Get three random tracks
  const randomTracks = [];
  for (let i = 0; i < 3; i++) {
    randomTracks.push(list[Math.floor(Math.random() * list.length)]);
  }
  // Get track_id from the random tracks
  const trackIds = randomTracks.map(({ track }) => track.track_id);
  // Get lyrics from the track_id
  const lyrics = await Promise.all(
    trackIds.map(async (trackId) => {
      const response = await fetch(
        `${API_URL}track.lyrics.get?track_id=${trackId}&apikey=${process.env.API_KEY}`
      );
      return await response.json();
    })
  );
  if (!lyrics.length) {
    return [];
  }
  return lyrics
    .filter(({ message }) => Object.keys(message.body).length > 0)
    .map(({ message }) => {
      return message.body.lyrics.lyrics_body.replace(
        "******* This Lyrics is NOT for Commercial use *******",
        ""
      );
    });
};
