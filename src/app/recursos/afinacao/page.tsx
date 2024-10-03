import Image from 'next/image'
import UpperSection from '@/components/UpperSection'

export default function AfinacaoUkulele() {
  return (
    <div className='pt-24 md:pt-0'>
        <UpperSection title='Afinação' imgLocation='/ukulele/ukulele3.webp' />


      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-lg mb-6">
              A afinação mais comum do ukulele soprano no seu auge na década de 20 era em D6: (A4, D4, F#4, B4), mas hoje em dia a mais popular é em C6 (G4, C4, E4, A4). Para os tamanhos concerto e tenor a afinação mais usual também é em C6.
            </p>
            <p className="text-lg mb-6">
              Uma característica do ukulele é a utilização da afinação reentrante, em que a quarta corda é mais aguda do que a terceira. No entanto, uma quarta corda grave pode ser utilizada (afinação linear).
            </p>
            <p className="text-lg mb-6">
              O ukulele barítono normalmente é afinado linearmente em DGBE, como as 4 cordas mais agudas de uma guitarra. O ukulele tenor, na época de sua criação também tinha essa afinação como recomendada.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Image
              src="/recursos/image001.png"
              alt="Diagrama de afinação do Ukulele"
              width={800}
              height={400}
              className="w-full rounded-lg shadow-md mb-8"
            />
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">Caso não tenha um afinador cromático pode fazer da seguinte forma:</h2>
            <h3 className="text-xl font-bold mb-4">Afinação a partir da corda G</h3>
            <ol className="list-decimal list-inside space-y-4">
              <li className="text-lg">
                <span className="font-bold">Afine a corda G.</span> Afine a corda G (a mais próxima de você) até que ela esteja no tom correto.
              </li>
              <li className="text-lg">
                <span className="font-bold">Toque a corda A.</span> Posicione seu dedo no segundo traste (o segundo espaço aberto de cima para baixo) na corda G afinada. Essa nota deve ser um A, e ter o mesmo tom que a corda mais distante de você.
              </li>
              <li className="text-lg">
                <span className="font-bold">Afine a corda A.</span> Afine a corda A usando a nota que você encontrou na sua corda G.
              </li>
              <li className="text-lg">
                <span className="font-bold">Toque um G na corda E.</span> Ponha seu dedo no terceiro traste da corda E. A corda deve produzir uma nota G que combina com a sua corda G. Se não combinar é provável que sua nota E esteja fora do tom.
              </li>
              <li className="text-lg">
                <span className="font-bold">Afine a corda E.</span> Afine a corda E até que ela tenha o mesmo som da corda G.
              </li>
              <li className="text-lg">
                <span className="font-bold">Toque um E na corda C.</span> Ponha seu dedo no quarto traste da corda C. O som produzido deve ser um E.
              </li>
              <li className="text-lg">
                <span className="font-bold">Afine a nota C.</span> Afine a nota C até que ela tenha o mesmo tom da corda E.
              </li>
            </ol>
          </div>
        </div>
      </section>
    </div>
  )
}