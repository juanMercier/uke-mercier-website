"use client"

import { useState, useEffect } from 'react'
import { User, Users, Clock, X, CheckCircle } from 'lucide-react'
import UpperSection from '@/components/UpperSection'

const classTypes = [
  {
    type: 'Individual',
    icon: User,
    description: 'Aulas individuais personalizadas para atender às suas necessidades específicas. Foco intensivo no seu desenvolvimento pessoal.',
  },
  {
    type: 'Grupo',
    icon: Users,
    description: 'Aulas em grupo para aprender e praticar em um ambiente colaborativo e divertido. Ótimo para desenvolver habilidades de conjunto.',
  },
]

const weekDays = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex']

const classSchedule = [
  { day: 'Seg', time: '18:00 - 19:30', type: 'Grupo' },
  { day: 'Ter', time: '17:00 - 18:00', type: 'Individual' },
  { day: 'Ter', time: '19:00 - 20:30', type: 'Grupo' },
  { day: 'Qua', time: '18:00 - 19:00', type: 'Individual' },
  { day: 'Qui', time: '17:00 - 18:30', type: 'Grupo' },
  { day: 'Sex', time: '16:00 - 17:00', type: 'Individual' }
]

export default function ClassInformation() {
  const [selectedDay, setSelectedDay] = useState(weekDays[0])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedClassType, setSelectedClassType] = useState('')
  const [email, setEmail] = useState('')
  const [showToast, setShowToast] = useState(false)
  const [isFadingOut, setIsFadingOut] = useState(false)

  const openModal = (classType: string) => {
    setSelectedClassType(classType)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setEmail('')
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(`Signing up for ${selectedClassType} class with email: ${email}`)
    closeModal()
    setShowToast(true)
  }

  useEffect(() => {
    if (showToast) {
      const fadeOutTimer = setTimeout(() => {
        setIsFadingOut(true)
      }, 4500)

      const hideTimer = setTimeout(() => {
        setShowToast(false)
        setIsFadingOut(false)
      }, 5000)

      return () => {
        clearTimeout(fadeOutTimer)
        clearTimeout(hideTimer)
      }
    }
  }, [showToast])

  return (
    <div className='pt-24 lg:pt-0'>
      <UpperSection title='Aulas' imgLocation='/ukulele/UkuleleDeitado.jpg' />
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
                  Inscrever-se
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-primary-foreground rounded-xl p-6 shadow-lg">
          <h2 className="text-3xl font-bold text-center mb-8 text-secondary">Calendário Semanal</h2>
          <div className="flex justify-center space-x-2 mb-8">
            {weekDays.map((day) => (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`w-10 h-10 rounded-full font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary focus:ring-tertiary ${
                  selectedDay === day
                    ? 'bg-tertiary text-primary'
                    : 'bg-secondary text-primary hover:bg-secondary-hover'
                }`}
              >
                {day}
              </button>
            ))}
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-secondary border-opacity-20">
                  <th className="px-6 py-3 text-left text-xs font-medium text-secondary uppercase tracking-wider">Horário</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-secondary uppercase tracking-wider">Tipo de Aula</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-secondary divide-opacity-20">
                {classSchedule
                  .filter((schedule) => schedule.day === selectedDay)
                  .map((schedule, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-secondary">{schedule.time}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-secondary">{schedule.type}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-secondary bg-opacity-50 backdrop-filter backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-primary rounded-2xl p-8 w-full max-w-md relative animate-fade-in-scale">
            <h3 className="text-2xl font-bold text-secondary mb-4">Inscrever-se para Aula {selectedClassType}</h3>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                className="w-full px-4 py-2 rounded-full border border-secondary focus:outline-none focus:ring-2 focus:ring-tertiary mb-4"
                placeholder="Seu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                type="submit"
                className="w-full bg-tertiary text-primary font-bold py-2 px-4 rounded-full hover:bg-tertiary-hover transition-colors duration-300"
              >
                Inscrever-se
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

      {showToast && (
        <div className={`fixed bottom-4 right-4 bg-tertiary text-primary px-6 py-3 rounded-full shadow-lg flex items-center space-x-2 ${isFadingOut ? 'animate-fade-out' : 'animate-fade-in-up'}`}>
          <CheckCircle className="h-6 w-6" />
          <span className="font-bold">Obrigado por se inscrever! Entraremos em contato em breve.</span>
        </div>
      )}
    </div>
    </div>

  )
}