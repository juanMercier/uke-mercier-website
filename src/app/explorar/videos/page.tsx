"use client";

import UpperSection from '@/components/UpperSection';
import { useState } from 'react'

enum Difficulty {
  PRINCIPIANTE = 'Principiante',
  INTERMEDIO = 'Intermédio',
  AVANCADO = 'Avançado',
}

const videoData = [
  {
    id: 1,
    title: "Moon River Fingerstyle",
    youtubeId: "ZoDYr5dIY9s",
    difficulty: Difficulty.AVANCADO,
  },
  {
    id: 2,
    title: "Don't Stop me now",
    difficulty: Difficulty.AVANCADO,
    youtubeId: "Hq9dvYrbCdU"
  },
  {
    id: 3,
    title: "Ukulele Estudo nº1",
    difficulty: Difficulty.PRINCIPIANTE,
    youtubeId: "84rvT6xuQAQ"
  },
  {
    id: 4,
    title: "Ukulele Estudo nº2 - Meditação",
    difficulty: Difficulty.INTERMEDIO,
    youtubeId: "SW_Dsb4P7wg"
  },
  {
    id: 5,
    title: "Exercício Minhoca",
    difficulty: Difficulty.PRINCIPIANTE,
    youtubeId: "AP9pTXnVrWI"
  },

  {
    id: 6,
    title: "Jingle Bells 80bpm",
    difficulty: Difficulty.PRINCIPIANTE,
    youtubeId: "aIQZ11mHQoo"
  },

  {
    id: 7,
    title: "Hino da Alegria 80bpm",
    difficulty: Difficulty.PRINCIPIANTE,
    youtubeId: "6oc73zwG1cM"
  },
  {
    id: 8,
    title: "Imagine Primeira Parte",
    difficulty: Difficulty.PRINCIPIANTE,
    youtubeId: "HaZU5EglMJE"
  },
  {
    id: 9,
    title: "When the saints go marching in",
    difficulty: Difficulty.INTERMEDIO,
    youtubeId: "po7WB8bzM8g"
  },
  {
    id: 10,
    title: "Minueto em Sol Christian Petzoldn",
    difficulty: Difficulty.AVANCADO,
    youtubeId: "UE5QRZjOcuE"
  },

  {
    id: 11,
    title: "Valsa em Do - Ferdinando Carulli",
    difficulty: Difficulty.INTERMEDIO,
    youtubeId: "6psl8X-7f3g"
  },


]

const VideoEmbed = ({ youtubeId, title }: { youtubeId: string, title: string }) => (
  <div className="aspect-w-16 aspect-h-9 w-full">
    <iframe
      src={`https://www.youtube.com/embed/${youtubeId}`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title={title}
      className="w-full h-80 sm:h-[435px] rounded-lg shadow-md"
    ></iframe>
  </div>
)

export default function VideosPage() {
  const [selectedVideo, setSelectedVideo] = useState(videoData[0]);
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty>(Difficulty.PRINCIPIANTE);

  return (
    <div className='pt-24 md:pt-0'>
      <UpperSection title="Vídeos de Ukulele" imgLocation='/explorar/Encontro Ukulele 14 Abril 2.jpg'/>

      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-4">{selectedVideo.title}</h2>
              <div className="w-full max-w-4xl mx-auto">
                <VideoEmbed youtubeId={selectedVideo.youtubeId} title={selectedVideo.title} />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Mais Vídeos</h3>
              <div className="flex space-x-2 mb-4">
                {Object.values(Difficulty).map((difficulty) => (
                  <button
                    key={difficulty}
                    onClick={() => setSelectedDifficulty(difficulty)}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                      selectedDifficulty === difficulty
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
                      className={`w-full text-left p-3 rounded-xl transition-colors ${
                        selectedVideo.id === video.id
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

















// const VideoEmbed = ({ youtubeId, title }: { youtubeId: string, title: string }) => (
//   <div className="aspect-w-16 aspect-h-9 w-full">
//     <iframe
//       src={`https://www.youtube.com/embed/${youtubeId}`}
//       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//       allowFullScreen
//       title={title}
//       className="w-full h-96 rounded-lg shadow-md"
//     ></iframe>
//   </div>
// )

// export default function VideosPage() {
//   const [selectedVideo, setSelectedVideo] = useState(videoData[0])

//   return (
//     <div className='pt-24 md:pt-0'>
//       <section className="relative h-64 sm:h-80 md:h-96 flex items-center justify-center bg-accent">
//         <div className="absolute inset-0 bg-black bg-opacity-50" />
//         <h1 className="relative z-10 text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center">Vídeos de Ukulele</h1>
//       </section>

//       <section className="py-12 sm:py-16 md:py-20">
//         <div className="container mx-auto px-4">
//           <div className="mb-8">
//             <h2 className="text-2xl font-bold mb-4">{selectedVideo.title}</h2>
//             <div className="w-full max-w-5xl mx-auto">
//               <VideoEmbed youtubeId={selectedVideo.youtubeId} title={selectedVideo.title} />
//             </div>
//           </div>

//           <div className="mt-12">
//             <h3 className="text-xl font-bold mb-4">Mais Vídeos</h3>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//               {videoData.map((video) => (
//                 <button
//                   key={video.id}
//                   onClick={() => setSelectedVideo(video)}
//                   className={`w-full text-left p-4 rounded-lg transition-colors ${
//                     selectedVideo.id === video.id
//                       ? 'bg-accent text-white'
//                       : 'bg-gray-100 hover:bg-gray-200'
//                   }`}
//                 >
//                   <div className="aspect-w-16 aspect-h-9 mb-2">
//                     <img 
//                       src={`https://img.youtube.com/vi/${video.youtubeId}/0.jpg`} 
//                       alt={video.title}
//                       className="object-cover rounded"
//                     />
//                   </div>
//                   <p className="font-semibold">{video.title}</p>
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }