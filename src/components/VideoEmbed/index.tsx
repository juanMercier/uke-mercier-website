import React from 'react'

type Props = {
    youtubeId: string;
    title: string;
    isHome: boolean;
}

const VideoEmbed = ({ youtubeId, title, isHome }: Props) => {
    return (
        <div className="aspect-w-16 aspect-h-9 w-full">
            <iframe
                src={`https://www.youtube.com/embed/${youtubeId}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={title}
                className={`w-full h-80 ${isHome ? 'md:h-[320px]' : 'sm:h-[435px]'} rounded-lg shadow-md`}
            ></iframe>
        </div>
    )
}

export default VideoEmbed



