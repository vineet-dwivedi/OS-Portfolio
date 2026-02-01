import React from "react";
import MacWindows from "./MacWindows";
import "./applemusic.scss";

const AppleMusic = () => {
  return (
    <MacWindows>
      <div className="applemusic-window minimal">
        <iframe
          src="https://embed.music.apple.com/in/playlist/pl.u-55D6XPqt6v34YGz"
          width="100%"
          height="100%"
          allow="autoplay *; encrypted-media *;"
          allowFullScreen
          loading="lazy"
          title="Bloom After Run - Apple Music Playlist"
        />
      </div>
    </MacWindows>
  );
};

export default AppleMusic;