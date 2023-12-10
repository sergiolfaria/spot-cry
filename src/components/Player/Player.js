import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import YouTube from 'react-youtube';
import { faPlay, faPause, faVolumeMute, faVolumeUp, faStepBackward, faStepForward } from '@fortawesome/free-solid-svg-icons';
import { getthumbFromData } from '../../services/Songs/getThumb';
import { getdetailFromData } from '../../services/Songs/GetDuration';
import { ControlButton, VolumeControl, NowPlaying, PlayerContainer, PlayerControls, PlayerStatus, ProgressBar, SongArtist, SongInfo, SongTitle } from './Styles';

const Player = ({ currentSong }) => {
  const [totalDuration, setTotalDuration] = useState(0);
  const [volume, setVolume] = useState(100);
  const [isMuted, setIsMuted] = useState(false);
  const [volumeBeforeMute, setVolumeBeforeMute] = useState(100);
  const [isLoading, setIsLoading] = useState(true); // New loading state

  const opts = {
    height: '0',
    width: '0',
    playerVars: {
      controls: 0,
      disablekb: 1,
    },
  };

  const parseYoutubeDuration = (duration) => {
    const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);

    const hours = (parseInt(match[1], 10) || 0);
    const minutes = (parseInt(match[2], 10) || 0);
    const seconds = (parseInt(match[3], 10) || 0);

    return hours * 3600 + minutes * 60 + seconds;
  };

  const fetchYouTubeData = async () => {
    try {
      const response = await getthumbFromData(videoIdextracted);
      const thumbnailUrl = response.data.items[0]?.snippet.thumbnails.high.url;
      setVideoThumbnail(thumbnailUrl);
      const responseDetail = await getdetailFromData(videoIdextracted);
      const duration = responseDetail.data.items[0]?.contentDetails?.duration;
      const totalDurationInSeconds = parseYoutubeDuration(duration);
      setTotalDuration(totalDurationInSeconds);
      setIsLoading(false); // Set loading to false after fetching data
    } catch (error) {
      console.error('Error fetching video details:', error);
    }
  };

  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const playerRef = useRef(null);
  const [videoThumbnail, setVideoThumbnail] = useState('');

  useEffect(() => {
    setIsLoading(true); // Set loading to true when a new song is selected

    if (playerRef.current) {
      playerRef.current.pauseVideo();
      setIsPlaying(false);
    }

    fetchYouTubeData();
  }, [currentSong]);

  if (!currentSong || !currentSong.url) {
    return null;
  }

  const extractYouTubeVideoId = (url) => {
    if (typeof url !== 'string') {
      return null;
    }

    const urlPattern = /^https?:\/\/(?:www\.)?youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)([a-zA-Z0-9_-]{11})/;
    const match = url.match(urlPattern);
    if (match && match[1]) {
      return match[1];
    } else {
      return null;
    }
  };

  const videoIdextracted = extractYouTubeVideoId(currentSong.url);

  const onReady = (event) => {
    playerRef.current = event.target;

    setInterval(() => {
      const currentTime = playerRef.current.getCurrentTime();
      setProgress(currentTime);
    }, 1000);
  };

  const onPlayPauseClick = () => {
    if (isPlaying) {
      playerRef.current.pauseVideo();
    } else {
      playerRef.current.playVideo();
    }
    setIsPlaying(!isPlaying);
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };
  const onVolumeChange = (e) => {
    const newVolume = e.target.value;
    const newMuteState = newVolume === '0' || newVolume === 0;
    setIsMuted(newMuteState);
    playerRef.current.setVolume(newVolume);
    setVolume(newVolume);
    setVolumeBeforeMute(newMuteState ? volumeBeforeMute : newVolume);
  };
  const onMuteClick = () => {
    const newMuteState = !isMuted;
    setIsMuted(newMuteState);

    if (newMuteState) {
      setVolumeBeforeMute(volume);
      playerRef.current.setVolume(0);
      setVolume(0);
    } else {
      playerRef.current.setVolume(volumeBeforeMute);
      setVolume(volumeBeforeMute);
    }
  };

  return (

      <PlayerContainer>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <>
            <YouTube
              videoId={videoIdextracted}
              opts={opts}
              containerClassName="audio-container"
              onReady={onReady}
            />
    
            <NowPlaying>
              {videoThumbnail && (
                <img src={videoThumbnail} alt="Video Thumbnail" width="480" height="360" />
              )}
              <SongInfo>
                <SongTitle>{currentSong.title}</SongTitle>
                <SongArtist>{currentSong.artist}</SongArtist>
              </SongInfo>
            </NowPlaying>
            <PlayerStatus>
              <PlayerControls>
                <ControlButton>
                  <FontAwesomeIcon icon={faStepBackward} />
                </ControlButton>
                <ControlButton onClick={onPlayPauseClick}>
                  <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
                </ControlButton>
                <ControlButton>
                  <FontAwesomeIcon icon={faStepForward} />
                </ControlButton>
                <VolumeControl type="range" min="0" max="100" value={volume} onChange={onVolumeChange} />
                <ControlButton onClick={onMuteClick}>
                  <FontAwesomeIcon icon={isMuted ? faVolumeMute : faVolumeUp} />
                </ControlButton>
              </PlayerControls>
              <ProgressBar value={progress} max={totalDuration} />
              <span>{formatTime(progress)} / {formatTime(totalDuration)}</span>
            </PlayerStatus>
          </>
        )}
      </PlayerContainer>
  );
};

export default Player;
