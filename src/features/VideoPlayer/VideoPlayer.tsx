import { useRef, useState, useEffect, useCallback } from "react";
import { WindowContent, Button, Slider } from "react95";

import styles from "./VideoPlayer.module.scss";

function formatTime(secs: number): string {
  if (!secs || !isFinite(secs)) return "00:00";
  const m = Math.floor(secs / 60);
  const s = Math.floor(secs % 60);
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

export function VideoPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const updateProgress = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    setCurrentTime(video.currentTime);
    setProgress((video.currentTime / video.duration) * 100 || 0);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onLoadedMetadata = () => setDuration(video.duration);
    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    const onEnded = () => {
      setPlaying(false);
      setProgress(0);
      setCurrentTime(0);
    };

    video.addEventListener("loadedmetadata", onLoadedMetadata);
    video.addEventListener("play", onPlay);
    video.addEventListener("pause", onPause);
    video.addEventListener("ended", onEnded);
    video.addEventListener("timeupdate", updateProgress);

    return () => {
      video.removeEventListener("loadedmetadata", onLoadedMetadata);
      video.removeEventListener("play", onPlay);
      video.removeEventListener("pause", onPause);
      video.removeEventListener("ended", onEnded);
      video.removeEventListener("timeupdate", updateProgress);
    };
  }, [updateProgress]);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  const handleStop = () => {
    const video = videoRef.current;
    if (!video) return;
    video.pause();
    video.currentTime = 0;
    setPlaying(false);
    setProgress(0);
    setCurrentTime(0);
  };

  const handleSeek = (value: number) => {
    const video = videoRef.current;
    if (!video) return;
    const newTime = (value / 100) * video.duration;
    video.currentTime = newTime;
    setProgress(value);
  };

  return (
    <WindowContent as="article" className={styles.wrapper}>
      <video ref={videoRef} className={styles.player} src="/video/screensaver.mp4" preload="auto" />
      <div className={styles.controls}>
        <Button size="sm" onClick={togglePlay}>
          {playing ? "⏸" : "▶"}
        </Button>
        <Button size="sm" onClick={handleStop}>
          ⏹
        </Button>
        <div className={styles.sliderWrap}>
          <Slider min={0} max={100} step={1} value={progress} onChange={handleSeek} />
        </div>
        <span className={styles.time}>
          {formatTime(currentTime)} / {formatTime(duration)}
        </span>
      </div>
    </WindowContent>
  );
}
