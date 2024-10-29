"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Music, Search, PlayCircle, Book } from 'lucide-react'
import Link from 'next/link'
import AnimatedButton from '../AnimatedButton'

const CifraHome = () => {
    const [hoveredFeature, setHoveredFeature] = useState<number | null>(null)
    
    const features = [
        { icon: Search, title: "Pesquisa Rápida", color: "bg-blue-500" },
        { icon: Music, title: "Visualização Clara", color: "bg-green-500" },
        { icon: PlayCircle, title: "Scroll Automático", color: "bg-yellow-500" },
        { icon: Book, title: "Biblioteca Extensa", color: "bg-purple-500" }
    ]

    return (
        <section className="py-16 bg-gradient-to-br from-primary to-tertiary overflow-hidden">
            <div className="container px-4 md:px-6 lg:px-8 mx-auto">
                <motion.div
                    className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 lg:gap-16"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="w-full md:w-1/2 space-y-6 md:pr-4 lg:pr-8">
                        <motion.h2
                            className="text-3xl font-bold text-white"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                        >
                            Descobre o Leitor de Cifras
                        </motion.h2>
                        <motion.p
                            className="text-lg text-white"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                        >
                            Explora a nossa vasta biblioteca de cifras de ukulele e aprende a tocar as tuas músicas favoritas com facilidade. O Leitor de Cifras é a ferramenta perfeita para aprimorar tuas habilidades no ukulele.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.5 }}
                        >
                            <AnimatedButton backgroundColor='tertiary' link='/explorar/leitor-de-cifras' text='Saiba mais' textColor='white' />
                        </motion.div>
                    </div>
                    <div className="w-full md:w-1/2 relative h-80">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                className={`absolute p-4 rounded-xl shadow-lg ${feature.color} ${hoveredFeature === index ? 'z-10' : 'z-0'}`}
                                style={{
                                    top: `${25 * index}%`,
                                    left: `${25 * index}%`,
                                    rotate: `${-15 + 10 * index}deg`
                                }}
                                whileHover={{
                                    scale: 1.1,
                                    rotate: 0,
                                    transition: { duration: 0.2 }
                                }}
                                onHoverStart={() => setHoveredFeature(index)}
                                onHoverEnd={() => setHoveredFeature(null)}
                            >
                                <feature.icon className="text-white mb-2" size={24} />
                                <h3 className="text-white font-semibold">{feature.title}</h3>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default CifraHome