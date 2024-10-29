import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, X } from 'lucide-react';

const WelcomeGuide: React.FC = () => {
  const [step, setStep] = useState(0);

  const steps = [
    {
      title: "Bem-vindo ao Leitor de Cifras!",
      content: "Este guia rápido vai te ajudar a começar. Use os botões acima para navegar e controlar a leitura das cifras."
    },
    {
      title: "Escolha uma Música",
      content: "Clique no botão de menu no canto superior esquerdo para abrir a biblioteca de músicas e selecionar uma cifra.",
      arrow: "menu"
    },
    {
      title: "Ajuste a Velocidade",
      content: "Use os controles no canto superior direito para ajustar a velocidade de rolagem da cifra conforme sua preferência.",
      arrow: "controls"
    },
    {
      title: "Tela Cheia",
      content: "Clica no botão de tela cheia para uma melhor vizualização da cifra",
      arrow: "fullScreen"
    },
    {
      title: "Comece a Tocar!",
      content: "Após selecionar uma música e ajustar a velocidade, você está pronto para começar. Aproveite sua sessão musical!"
    }
  ];

  const handleNext = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    }
  };

  const handlePrevious = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const handleClose = () => {
    setStep(0);
  };

  return (
    <div className="flex items-center justify-center min-h-[400px]">
      {/* Menu Arrow */}
      {steps[step].arrow === 'menu' && (
        <div className="fixed top-40 left-6 w-8 h-8 transform -rotate-45">
          <div className="absolute w-full h-full border-t-8 border-r-8 border-blue-500 animate-pulse" />
        </div>
      )}

      {/* Controls Arrow */}
      {steps[step].arrow === 'controls' && (
        <div className="fixed top-40 right-24 w-8 h-8 transform rotate-45">
          <div className="absolute w-full h-full border-t-8 border-l-8 border-blue-500 animate-pulse" />
        </div>
      )}

      {/* fullScreen Arrow */}
      {steps[step].arrow === 'fullScreen' && (
        <div className="fixed top-40 right-6 w-8 h-8 transform rotate-45">
          <div className="absolute w-full h-full border-t-8 border-l-8 border-blue-500 animate-pulse" />
        </div>
      )}


      {/* Guide Card */}
      <div className="relative bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto z-10">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-800">{steps[step].title}</h2>
          <button
            onClick={handleClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        <p className="text-gray-600 mb-6">{steps[step].content}</p>
        <div className="flex justify-between items-center">
          <button
            onClick={handlePrevious}
            disabled={step === 0}
            className={`flex items-center transition-colors ${step === 0
                ? 'text-gray-400 cursor-not-allowed'
                : 'text-blue-500 hover:text-blue-600'
              }`}
          >
            <ChevronLeft size={20} />
            <span className="ml-1">Anterior</span>
          </button>
          <div className="text-gray-500">
            {step + 1} de {steps.length}
          </div>
          <button
            onClick={handleNext}
            disabled={step === steps.length - 1}
            className={`flex items-center transition-colors ${step === steps.length - 1
                ? 'text-gray-400 cursor-not-allowed'
                : 'text-blue-500 hover:text-blue-600'
              }`}
          >
            <span className="mr-1">Próximo</span>
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeGuide;