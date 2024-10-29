"use client";

import UpperSection from '@/components/UpperSection';
import VideoEmbed from '@/components/VideoEmbed';
import { videoData } from '@/data/videoData';
import { Difficulty } from '@/models/Difficulty';
import { useState } from 'react'

export default function VideosPage() {
  const [selectedVideo, setSelectedVideo] = useState(videoData[7]);
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty>(Difficulty.PRINCIPIANTE);

  return (
    <div className='pt-24 md:pt-0'>
      <UpperSection
        title="Vídeos de Ukulele"
        imgLocation='/explorar/Encontro Ukulele 14 Abril 2.jpg'
      />

      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-4">{selectedVideo.title}</h2>
              <div className="w-full max-w-4xl mx-auto">
                <VideoEmbed youtubeId={selectedVideo.youtubeId} title={selectedVideo.title} isHome={false} />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Mais Vídeos</h3>
              <div className="flex space-x-2 mb-4">
                {Object.values(Difficulty).map((difficulty) => (
                  <button
                    key={difficulty}
                    onClick={() => setSelectedDifficulty(difficulty)}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${selectedDifficulty === difficulty
                        ? 'bg-tertiary text-white'
                        : 'bg-primary-foreground hover:bg-tertiary-hover'
                      }`}
                  >
                    {difficulty}
                  </button>
                ))}
              </div>
              <div className="space-y-2">
                {videoData
                  .filter((video) => video.difficulty === selectedDifficulty)
                  .map((video) => (
                    <button
                      key={video.id}
                      onClick={() => setSelectedVideo(video)}
                      className={`w-full text-left p-3 rounded-xl transition-colors ${selectedVideo.id === video.id
                          ? 'bg-tertiary text-white'
                          : 'bg-primary-foreground hover:bg-tertiary-hover'
                        }`}
                    >
                      {video.title}
                    </button>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}






