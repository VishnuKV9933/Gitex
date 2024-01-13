import React, { useEffect, useState } from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';
import getYouTubeID from 'get-youtube-id';

type youtubeProps={
    link:string
}

export function Youtube({link}:youtubeProps) {
  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }


  const youtubeId = getYouTubeID(link)

  const opts: YouTubeProps['opts'] = {
    height: '200',
    width: '250',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return <YouTube videoId={`${youtubeId}`} opts={opts} onReady={onPlayerReady} />;
}