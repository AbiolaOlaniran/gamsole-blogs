import { useEffect, useState } from 'react';

function VideoComponent({ src, className }) {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  if (!isBrowser) {
    return null;
  }

  return (
    <video className={className} autoPlay muted loop  src={src}>
    </video>
  );
}

export default VideoComponent