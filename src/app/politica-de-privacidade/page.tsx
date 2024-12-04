import UpperSection from '@/components/UpperSection'

export default function PrivacyPolicy() {
  return (
    <div className="pt-24 md:pt-0">
      <UpperSection title="Política de Privacidade" imgLocation="/ukulele/UkuleleDeitado.jpg" />

      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-primary-foreground rounded-xl shadow-md overflow-hidden">
            <div className="p-8">
              <p className="text-lg text-secondary mb-6">
                Nosso compromisso com a proteção dos seus dados pessoais é total. Conforme o Regulamento Geral sobre a Proteção de Dados (RGPD), informamos que recolhemos dados pessoais apenas com o seu consentimento e utilizamos esses dados exclusivamente para os fins indicados. Todos os dados são armazenados de forma segura e só acessíveis por pessoal autorizado.
              </p>

              <h2 className="text-2xl font-bold text-tertiary mb-4">Dados que recolhemos:</h2>
              <p className="text-lg text-secondary mb-6">
                Nome, e-mail, número de telefone, e qualquer outra informação que você nos forneça através das mensagens enviadas.
              </p>

              <h2 className="text-2xl font-bold text-tertiary mb-4">Finalidade da recolha de dados:</h2>
              <p className="text-lg text-secondary mb-6">
                Utilizamos os seus dados para responder às suas mensagens, fornecer informações sobre os nossos serviços e enviar comunicações que possam ser do seu interesse.
              </p>

              <h2 className="text-2xl font-bold text-tertiary mb-4">Direitos dos titulares dos dados:</h2>
              <p className="text-lg text-secondary mb-6">
                Você tem o direito de aceder, corrigir, limitar o uso, apagar ou transferir os seus dados a qualquer momento. Para exercer estes direitos, por favor, entre em contato connosco através do e-mail <a href="mailto:ukeinparque@gmail.com" className="text-tertiary hover:underline">ukeinparque@gmail.com</a>.
              </p>

              <h2 className="text-2xl font-bold text-tertiary mb-4">Período de retenção:</h2>
              <p className="text-lg text-secondary mb-6">
                Os seus dados serão mantidos enquanto for necessário para as finalidades descritas acima, a menos que a lei exija um período de retenção mais longo.
              </p>

              <h2 className="text-2xl font-bold text-tertiary mb-4">Segurança dos dados:</h2>
              <p className="text-lg text-secondary mb-6">
                Implementamos medidas de segurança técnicas e organizacionais adequadas para proteger os seus dados contra acesso, alteração, divulgação ou destruição não autorizados.
              </p>

              <p className="text-lg text-secondary mt-8">
                Para mais informações ou para exercer os seus direitos, por favor, entre em contacto connosco.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}