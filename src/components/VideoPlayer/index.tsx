const VideoPlayer = ({ src }: { src: string }) => {
  return (
    <video autoPlay={true} muted width="100%">
      <source src={src} type="video/mp4" />
      Sorry, your browser doesn&apos;t support embedded videos.
    </video>
  );
};

export default VideoPlayer;
