import { Music } from "lucide-react";
import AnimatedButton from "../AnimatedButton";

export default function FreeMonth() {

  return (
    <section className="bg-tertiary text-primary py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-8 md:mb-0 md:mr-8">
            <h2 className="text-4xl font-extrabold mb-4">
            Primeira Aula Grátis!
            </h2>
            <p className="text-xl mb-6">
              Comece sua jornada musical sem custos. Inscreva-se agora e aproveite sua primeira aula de grupo gratuitamente.
            </p>
            <AnimatedButton backgroundColor="white" textColor="tertiary" text='Começa agora' link='/aulas' />
          </div>
          <div className="relative">
            <div className="w-64 h-64 bg-tertiary rounded-full flex items-center justify-center animate-pulse">
              <Music className="w-32 h-32 text-primary" />
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-tertiary via-transparent to-transparent opacity-50 animate-spin-slow"></div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-tertiary opacity-10 transform -skew-y-6"></div>
    </section>
  )
}