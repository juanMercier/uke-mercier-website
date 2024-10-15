import React from 'react'
import AnimatedButton from '../AnimatedButton'

type Props = {
    title: string;
    description?: string;
    link: string;

}

const SecondFooter = ({ title, description, link }: Props) => {
    return (
        <section className="py-12 sm:py-16 md:py-20 bg-tertiary text-white">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8">{title}</h2>
                {description &&
                    <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
                        {description}
                    </p>
                }
                <AnimatedButton backgroundColor='white' textColor='tertiary' text='Contacta-nos hoje' link={link} />
            </div>
        </section>
    )
}

export default SecondFooter