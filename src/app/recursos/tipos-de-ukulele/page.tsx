import Image from 'next/image'
import UpperSection from '@/components/UpperSection'

const ukuleleTypes = [
    {
        type: "Soprano",
        description: "O Ukulele Soprano é o tipo mais comum. É reconhecido pelo seu tamanho pequeno e seu timbre clássico de 'uke'. À partida este é o tipo de ukulele mais barato e é o mais usado por iniciantes. Mede, em média, 53 cm e tem de 12 a 14 trastes, tendo praticamente o mesmo tamanho que o nosso tradicional cavaquinho.",
        image: "/placeholder.svg?height=300&width=300"
    },
    {
        type: "Concerto",
        description: "O Ukulele Concerto é um pouco maior que o soprano. Mede cerca de 58 cm e tem de 15 a 20 trastes. Devido ao seu tamanho maior, pessoas com mãos grandes acham mais fácil tocá-lo do que o ukulele soprano. Ele tem também um som mais encorpado que o soprano.",
        image: "/placeholder.svg?height=300&width=300"
    },
    {
        type: "Tenor",
        description: "O Ukulele Tenor é ligeiramente maior que a ukulele concerto. Ele mede cerca de 66 cm e tem normalmente mais do que 18 trastes. O ukulele tenor apresenta um som mais rico que o concerto, além de dispor de mais notas devido ao seu braço mais longo. Este é o tamanho que recomendo para adultos pois para além de continuar a ter o som de Uke tem mais volume e fica mais fácil de tocar, pois os dedos não ficam tão juntinhos.",
        image: "/placeholder.svg?height=300&width=300"
    },
    {
        type: "Barítono",
        description: "O ukulele barítono é o maior de todos os tipos, medindo acima de 76 cm e mais de 19 trastes. É afinado da mesma forma que as quatro cordas mais graves do violão, o que torna o som dos dois instrumentos bem parecidos. Devido ao seu tamanho, ele perde o som clássico de ukulele, mas é uma ótima opção se você quer um som rico e encorpado. É possível ter a mesma afinação que os outros ukuleles.",
        image: "/placeholder.svg?height=300&width=300"
    }
]

export default function TiposDeUkuleles() {
    return (
        <div className='pt-24 md:pt-0'>
            <UpperSection title='Tipos de Ukulele' imgLocation='/ukulele/ukulele3.webp' />


            <section className="py-12 sm:py-16 md:py-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {ukuleleTypes.map((ukulele, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
                                <Image
                                    src={ukulele.image}
                                    alt={`Ukulele ${ukulele.type}`}
                                    width={300}
                                    height={300}
                                    className="w-full h-64 object-cover"
                                />
                                <div className="p-6">
                                    <h2 className="text-2xl font-bold mb-4 text-tertiary">{ukulele.type}</h2>
                                    <p className="text-secondary">{ukulele.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-12 sm:py-16 md:py-20 bg-tertiary text-white">
                <div className="container mx-auto px-4">
                    <p className="text-lg text-center max-w-3xl mx-auto">
                        Cada um deles tem o seu timbre característico, no entanto este não depende apenas do tamanho mas também das madeiras utilizadas na sua construção assim como do tipo de cordas.
                    </p>
                </div>
            </section>
        </div>
    )
}