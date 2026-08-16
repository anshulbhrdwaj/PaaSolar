'use client';

import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize2, X, Sparkles, Video, ShieldCheck, Zap } from 'lucide-react';
import { PaaSolarLogo } from '@/components/ui/PaaSolarLogo';

interface VideoItem {
  id: string;
  title: string;
  subtitle: string;
  location: string;
  src: string;
  tags: string[];
}

const VIDEOS: VideoItem[] = [
  {
    id: 'fb1',
    title: 'C&I Industrial Rooftop Solar Installation',
    subtitle: 'High-efficiency N-Type TOPCon bifacial module mounting and structural engineering in action.',
    location: 'Industrial Solar Hub, Rajasthan',
    src: '/fb1.mp4',
    tags: ['TOPCon 580W+', 'Commercial EPC', '30-Yr Durable'],
  },
  {
    id: 'fb2',
    title: 'Utility-Grade Solar Commissioning & Net Metering',
    subtitle: 'Turnkey grid synchronization, DISCOM net metering setup, and smart inverter cabling.',
    location: 'State Feeder Solar Project, India',
    src: '/fb2.mp4',
    tags: ['Smart Inverters', 'Grid Synchronized', 'ALMM Tier-1'],
  },
];

export function VideoShowcase() {
  const [playingState, setPlayingState] = useState<{ [key: string]: boolean }>({
    fb1: true,
    fb2: true,
  });
  const [mutedState, setMutedState] = useState<{ [key: string]: boolean }>({
    fb1: true,
    fb2: true,
  });
  const [fullscreenVideo, setFullscreenVideo] = useState<VideoItem | null>(null);

  const videoRefs = {
    fb1: useRef<HTMLVideoElement | null>(null),
    fb2: useRef<HTMLVideoElement | null>(null),
  };

  const togglePlay = (id: 'fb1' | 'fb2') => {
    const video = videoRefs[id].current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setPlayingState((prev) => ({ ...prev, [id]: true }));
    } else {
      video.pause();
      setPlayingState((prev) => ({ ...prev, [id]: false }));
    }
  };

  const toggleMute = (id: 'fb1' | 'fb2') => {
    const video = videoRefs[id].current;
    if (!video) return;

    video.muted = !video.muted;
    setMutedState((prev) => ({ ...prev, [id]: video.muted }));
  };

  return (
    <section id="field-videos" className="relative py-16 sm:py-24 bg-bg-primary border-t border-line/60 overflow-hidden">
      {/* Glow Fingerprint Backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-500 text-xs font-bold uppercase tracking-wider mb-4">
            <Video className="w-4 h-4" />
            <span>On-Site Project Execution</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary leading-tight">
            Witness PAA SOLAR Engineering in Motion
          </h2>
          <p className="text-text-primary/80 text-sm sm:text-base md:text-lg font-medium leading-relaxed mt-4">
            Live site footage showcasing our Tier-1 solar panel deployment, industrial rooftop structural mounting, and utility-scale grid commissioning.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {VIDEOS.map((item) => {
            const id = item.id as 'fb1' | 'fb2';
            const isPlaying = playingState[id];
            const isMuted = mutedState[id];

            return (
              <div
                key={item.id}
                className="group relative rounded-3xl overflow-hidden bg-bg-secondary border border-line shadow-2xl hover:border-emerald-500/40 transition-all duration-500 flex flex-col justify-between"
              >
                {/* Video Player Container */}
                <div
                  className="relative aspect-video w-full bg-black overflow-hidden group cursor-pointer"
                  onClick={() => togglePlay(id)}
                >
                  <video
                    ref={videoRefs[id]}
                    src={item.src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30 opacity-90 transition-opacity" />

                  {/* Top Header Bar with Badges & Top Right Watermark */}
                  <div
                    className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2 z-20"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-emerald-500/90 text-white text-[11px] font-bold uppercase tracking-wider backdrop-blur-md flex items-center gap-1.5 shadow-md">
                        <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                        Live Field Video
                      </span>
                      <span className="px-2.5 py-1 rounded-full bg-black/60 text-white/90 text-[11px] font-mono font-medium backdrop-blur-md border border-white/10">
                        {item.location}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      {/* Top Right Translucent Logo & Text Watermark using PaaSolarLogo Component */}
                      <div className="pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] scale-75 sm:scale-90 origin-right">
                        <PaaSolarLogo size="sm" showTagline={false} />
                      </div>

                      {/* Fullscreen Button */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setFullscreenVideo(item);
                        }}
                        className="p-2 rounded-full bg-black/50 hover:bg-emerald-500 text-white backdrop-blur-md transition-all duration-300 border border-white/20 hover:scale-110 shadow-lg"
                        aria-label="Expand Fullscreen Video"
                      >
                        <Maximize2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Center Play/Pause Trigger - Hides during playback, reveals when tapped or hovered */}
                  <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        togglePlay(id);
                      }}
                      className={`p-4 sm:p-5 rounded-full bg-emerald-500/90 hover:bg-emerald-400 text-white shadow-2xl backdrop-blur-md transition-all duration-300 hover:scale-110 active:scale-95 border border-white/30 pointer-events-auto ${
                        isPlaying
                          ? 'opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 group-active:opacity-100'
                          : 'opacity-100 scale-100'
                      }`}
                      aria-label={isPlaying ? 'Pause Video' : 'Play Video'}
                    >
                      {isPlaying ? (
                        <Pause className="w-6 h-6 sm:w-7 sm:h-7 fill-white" />
                      ) : (
                        <Play className="w-6 h-6 sm:w-7 sm:h-7 fill-white ml-0.5" />
                      )}
                    </button>
                  </div>

                  {/* Bottom Control Bar */}
                  <div
                    className="absolute bottom-4 left-4 right-4 flex items-center justify-between z-20"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button
                      onClick={() => toggleMute(id)}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 hover:bg-black/80 text-white text-xs font-semibold backdrop-blur-md transition-colors border border-white/15"
                    >
                      {isMuted ? (
                        <>
                          <VolumeX className="w-4 h-4 text-rose-400" />
                          <span>Unmute Audio</span>
                        </>
                      ) : (
                        <>
                          <Volume2 className="w-4 h-4 text-emerald-400 animate-pulse" />
                          <span>Mute Audio</span>
                        </>
                      )}
                    </button>

                    <div className="flex items-center gap-1.5 font-mono text-[10px] text-white/80 bg-black/40 px-2.5 py-1 rounded-full border border-white/10 backdrop-blur-md">
                      <Zap className="w-3 h-3 text-amber-400" />
                      <span>PAA EPC Site</span>
                    </div>
                  </div>
                </div>

                {/* Content Box Below Video */}
                <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-text-primary group-hover:text-emerald-500 transition-colors mb-2">
                      {item.title}
                    </h3>
                    <p className="text-text-primary/80 text-sm font-medium leading-relaxed mb-6">
                      {item.subtitle}
                    </p>
                  </div>

                  {/* Feature Tags */}
                  <div className="pt-4 border-t border-line/60 flex flex-wrap items-center gap-2">
                    {item.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 text-xs font-semibold flex items-center gap-1.5"
                      >
                        <ShieldCheck className="w-3.5 h-3.5" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Fullscreen Video Modal Preview - Exact size of video */}
      {fullscreenVideo && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-2xl flex items-center justify-center p-3 sm:p-6 animate-fade-in"
          onClick={() => setFullscreenVideo(null)}
        >
          <div
            className="relative max-w-5xl w-full aspect-video rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-white/20 bg-black flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              src={fullscreenVideo.src}
              controls
              autoPlay
              className="w-full h-full object-contain"
            />

            {/* Translucent Brand Logo & Text Watermark in Top Center */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 pointer-events-none z-20 opacity-85 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] scale-75 sm:scale-100">
              <PaaSolarLogo size="sm" showTagline={false} />
            </div>

            {/* Floating Close Button Overlay */}
            <button
              onClick={() => setFullscreenVideo(null)}
              className="absolute top-3 right-3 z-30 p-2 rounded-full bg-black/60 hover:bg-rose-500 text-white backdrop-blur-md transition-all duration-300 border border-white/20 hover:scale-110 shadow-lg"
              aria-label="Close Video Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
