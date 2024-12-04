"use client"

import { useState, useEffect } from 'react'
import { User, Users, Clock, X, CheckCircle } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import UpperSection from '@/components/UpperSection'
import 'react-phone-input-2/lib/style.css'
import { useForm, ValidationError } from '@formspree/react'
import Link from 'next/link'


enum ClassType {
  GROUP = 'Grupo',
  INDIVIDUAL = 'Individual',
}

enum Difficulty {
  PRINCIPANTE = 'Principiante',
  INTERMEDIO = 'Intermédio',
  AVANCADO = 'Avançado',
}

const classTypes = [
  {
    type: ClassType.GROUP,
    icon: Users,
    description: 'As aulas em grupo proporcionam uma experiência musical única, onde a alegria e o prazer de tocar em conjunto são centrais. Todos os alunos têm a oportunidade de tocar músicas adaptadas ao seu nível, e o professor garante que cada tema contribua para um progresso harmonioso e estimulante.',
  },
  {
    type: ClassType.INDIVIDUAL,
    icon: User,
    description: 'As aulas individuais oferecem um ensino personalizado, ajustado ao ritmo único de cada aluno. Durante estas aulas, os alunos têm a liberdade de escolher os temas que desejam aprender, desde que estejam adequados ao seu nível de aprendizagem. Além disso, o professor sugere outros temas pertinentes para garantir um progresso mais rápido e eficaz.',
  },
]

const weekDays = ['Quarta-feira', 'Quinta-feira', 'Sexta-feira']



const classSchedule = [
  { day: 'Quarta-feira', time: '12:45 - 13:45', type: ClassType.GROUP, difficulty: Difficulty.AVANCADO },
  { day: 'Quarta-feira', time: '18:00 - 19:00', type: ClassType.GROUP, difficulty: Difficulty.PRINCIPANTE },
  { day: 'Quinta-feira', time: '12:45 - 13:45', type: ClassType.GROUP, difficulty: Difficulty.INTERMEDIO },
  { day: 'Quinta-feira', time: '18:00 - 19:00', type: ClassType.GROUP, difficulty: Difficulty.AVANCADO },
  { day: 'Sexta-feira', time: '18:00 - 19:00', type: ClassType.GROUP, difficulty: Difficulty.PRINCIPANTE }
]

const difficultyColors = {
  [Difficulty.PRINCIPANTE]: 'bg-green-100 text-green-800',
  [Difficulty.INTERMEDIO]: 'bg-yellow-100 text-yellow-800',
  [Difficulty.AVANCADO]: 'bg-red-100 text-red-800',
}

export default function ClassInformation() {
  const [selectedDay, setSelectedDay] = useState(weekDays[2])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedClassType, setSelectedClassType] = useState('')
  const [isFadingOut, setIsFadingOut] = useState(false)
  const [state, handleSubmit] = useForm("xgveelzo")
  const [consentChecked, setConsentChecked] = useState(false);

  const openModal = (classType: ClassType) => {
    setSelectedClassType(classType)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)
    formData.set('tipo_de_aula', selectedClassType)
    formData.set('consentimento', consentChecked.toString());
    await handleSubmit(formData)
  }

  useEffect(() => {
    if (state.succeeded) {
      closeModal(); // Only close the modal after form is successfully submitted

      setIsFadingOut(false);
      const fadeOutTimer = setTimeout(() => {
        setIsFadingOut(true);
      }, 4500); // Wait for 4.5 seconds before fading out the message

      return () => {
        clearTimeout(fadeOutTimer);
      };
    }
  }, [state.succeeded]);


  return (
    <div className='pt-24 lg:pt-0'>
      <UpperSection title='Aulas' imgLocation='/group/FotoAulas.jpg' />
      <div className="min-h-screen bg-primary text-secondary py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          <div className="mb-16">
            {/* <h2 className="text-3xl font-bold text-center mb-8 text-secondary">Tipos de Aulas</h2> */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {classTypes.map((classType) => (
                <div key={classType.type} className="bg-primary-foreground rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center mb-4">
                    <div className="bg-tertiary p-3 rounded-full mr-4">
                      <classType.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-secondary">{classType.type}</h3>
                  </div>
                  <p className="text-secondary mb-6">{classType.description}</p>
                  <button
                    onClick={() => openModal(classType.type)}
                    className="w-full bg-tertiary text-primary font-bold py-2 px-4 rounded-full hover:bg-tertiary-hover transition-colors duration-300"
                  >
                    Obter mais Informações
                  </button>
                </div>
              ))}
            </div>
          </div>
          
          <Card className="w-full">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center">Calendário Semanal</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {weekDays.map((day) => (
                  <div key={day} className="space-y-4">
                    <h3 className="text-xl font-semibold text-center">{day}</h3>
                    {classSchedule
                      .filter((schedule) => schedule.day === day)
                      .map((schedule, index) => (
                        <Card key={index} className="bg-primary-foreground rounded-xl">
                          <CardContent className="p-4">
                            <div className="font-medium text-lg">{schedule.time}</div>
                            <div className="flex items-center justify-between mt-2">
                              <div className="flex items-center">
                                <Users className="w-5 h-5 mr-2" />
                                <span className="text-sm">{schedule.type}</span>
                              </div>
                              <Badge className={`text-sm ${difficultyColors[schedule.difficulty]}`}>
                                {schedule.difficulty}
                              </Badge>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>



        </div>

        {isModalOpen && (
          <div className="fixed inset-0 z-10 bg-secondary bg-opacity-50 backdrop-filter backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-primary rounded-2xl p-8 w-full max-w-md relative animate-fade-in-scale">
              <h3 className="text-2xl font-bold text-secondary mb-4">Obter mais Informações para Aula {selectedClassType === ClassType.GROUP ? 'de' : ''} {selectedClassType}</h3>
              <form onSubmit={onSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-secondary mb-1">Nome</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 rounded-full border border-secondary focus:outline-none focus:ring-2 focus:ring-tertiary"
                    placeholder="Seu nome"
                    required
                  />
                  <ValidationError prefix="Name" field="name" errors={state.errors} />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-secondary mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 rounded-full border border-secondary focus:outline-none focus:ring-2 focus:ring-tertiary"
                    placeholder="Seu email"
                    required
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-secondary mb-1">Telemóvel</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-2 rounded-full border border-secondary focus:outline-none focus:ring-2 focus:ring-tertiary"
                    placeholder="Número de telemóvel"
                    required
                  />
                  <ValidationError prefix="Phone" field="phone" errors={state.errors} />
                </div>
                <div className="flex items-start mb-4">
                  <input
                    type="checkbox"
                    id="consent"
                    checked={consentChecked}
                    onChange={(e) => setConsentChecked(e.target.checked)}
                    className="mt-1 mr-2"
                    required
                  />
                  <label htmlFor="consent" className="text-sm text-secondary">
                    Dou o meu consentimento para o processamento dos meus dados pessoais de acordo com a <Link href="/politica-de-privacidade" className='text-tertiary underline'>Política de privacidade</Link>.
                  </label>
                </div>
                <button
                  type="submit"
                  disabled={state.submitting || !consentChecked}
                  className="w-full bg-tertiary text-primary font-bold py-2 px-4 rounded-full hover:bg-tertiary-hover transition-colors duration-300 disabled:opacity-50"
                >
                  {state.submitting ? 'Enviando...' : 'Enviar pedido'}
                </button>
              </form>
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-secondary hover:text-tertiary focus:outline-none focus:ring-2 focus:ring-tertiary rounded-full p-1"
                aria-label="Fechar"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
          </div>
        )}


        {state.succeeded && (
          <div className={`fixed bottom-4 right-4 bg-tertiary text-primary px-6 py-3 rounded-full shadow-lg flex items-center space-x-2 ${isFadingOut ? 'opacity-0' : 'opacity-100'}`}>
            <CheckCircle className="h-6 w-6" />
            <span className="font-bold">Obrigado! Entraremos em contato em breve.</span>
          </div>
        )}
      </div>
    </div>

  )
}