
import YouTube, { YouTubeProps } from 'react-youtube';


export function YoutubeVideo() {

  const opts: YouTubeProps['opts'] = {
    height: '300',
    width: '100%', 
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div  className="col-span-1">
      <YouTube videoId="ZafNN80sT3s" opts={opts} />
    </div>
  );
}
