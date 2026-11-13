// Optional mood track, played through the YouTube IFrame Player API.
//
// The iframe stays mounted for the life of the page — tearing it down and
// rebuilding on every toggle costs a fresh ad-request and network round trip
// each time. It is parked at 1x1 px rather than display:none, since a
// display:none iframe gets no player instance and never fires ready.

const VIDEO_ID = "fxTlIeoncPo";
const SRC = `https://www.youtube.com/embed/${VIDEO_ID}?enablejsapi=1&playsinline=1&rel=0&modestbranding=1`;
const VOLUME = 40;

let apiPromise = null;

function loadApi() {
  if (apiPromise) return apiPromise;
  apiPromise = new Promise((resolve, reject) => {
    if (window.YT?.Player) return resolve(window.YT);

    const previous = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      previous?.();
      resolve(window.YT);
    };

    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    tag.onerror = () => reject(new Error("iframe api unreachable"));
    document.head.append(tag);
  });
  return apiPromise;
}

// Player states worth distinguishing. Anything else counts as not playing.
const PLAYING = 1;
const ENDED = 0;

export function createAudio(host, onState) {
  let player = null;
  let ready = false;
  let failed = false;
  let duration = 0;

  function attach() {
    const iframe = document.createElement("iframe");
    iframe.src = SRC;
    iframe.title = "Mood track";
    iframe.width = "1";
    iframe.height = "1";
    iframe.allow = "autoplay; encrypted-media";
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("aria-hidden", "true");
    host.append(iframe);
    return iframe;
  }

  async function ensure() {
    if (ready || failed) return ready;
    try {
      const YT = await loadApi();
      const iframe = attach();
      player = await new Promise((resolve) => {
        new YT.Player(iframe, {
          events: {
            onReady: (e) => resolve(e.target),
            // playVideo() resolves before the player actually starts, so the
            // authoritative state arrives here instead.
            onStateChange: () => report(),
            // Fires when the video cannot be played in an embed, or when the
            // owner blocks embedding — 150/101 are the usual ones.
            onError: () => {
              failed = true;
              onState("error");
            },
          },
        });
      });
      player.setVolume(VOLUME);
      duration = player.getDuration() || 0;
      ready = true;
      onState("ready", { duration });
      return true;
    } catch {
      failed = true;
      onState("error");
      return false;
    }
  }

  function report() {
    const playing = ready && player.getPlayerState() === PLAYING;
    onState(playing ? "playing" : "paused", {
      time: ready ? player.getCurrentTime() : 0,
      duration,
    });
  }

  return {
    isPlaying() {
      return ready && player.getPlayerState() === PLAYING;
    },

    async play() {
      if (!(await ensure())) return false;
      if (player.getPlayerState() === ENDED) {
        player.seekTo(0, true);
      }
      // Rejects when the player booted without a user gesture; the next
      // toggle arrives as a real gesture and succeeds.
      player.playVideo()?.catch?.(() => {});
      report();
      return true;
    },

    pause() {
      if (!ready) return;
      player.pauseVideo();
      report();
    },

    // Seek while paused, so dragging the scrubber doesn't start playback.
    seek(seconds) {
      if (!ready || !duration) return;
      const clamped = Math.max(0, Math.min(duration, seconds));
      player.seekTo(clamped, true);
      report();
    },

    duration() {
      return duration;
    },

    currentTime() {
      return ready ? player.getCurrentTime() : 0;
    },
  };
}