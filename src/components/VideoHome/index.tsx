import React from 'react'
import AnimatedButton from '../AnimatedButton'
import { videoData } from '@/data/videoData';
import VideoEmbed from '../VideoEmbed';

type Props = {
    id: number;
}

const VideoHome = ({ id }: Props) => {
    const video = videoData[id];

    return (
        <section className="py-16">
            <div className="container px-4 md:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 lg:gap-16">
                    <div className="w-full md:w-1/2 space-y-6 md:pr-4 lg:pr-8">
                        <h2 className="text-3xl font-bold text-secondary">Explora as nossas lições de video</h2>
                        <p className="text-lg text-secondary-foreground">
                            Explora a nossa coleção de vídeos de aulas de ukulele. Quer sejas principiante ou estejas à procura de aperfeiçoar as tuas habilidades, temos conteúdo para todos os níveis.
                        </p>
                        <AnimatedButton backgroundColor='tertiary' link='/explorar/videos' text='Saiba mais' textColor='white' />
                    </div>
                    <div className="w-full md:w-1/2">
                        <VideoEmbed youtubeId={video.youtubeId} title={video.title} isHome={true}/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default VideoHome