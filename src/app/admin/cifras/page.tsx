import { getCifras } from '@/lib/data'
import { uploadCifra, deleteCifra } from '../actions'

export const dynamic = 'force-dynamic'

export default async function AdminCifrasPage() {
  const cifras = await getCifras()

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-8">Cifras</h2>

      <form action={uploadCifra} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-8">
        <label className="block text-sm font-medium text-gray-700 mb-1">Ficheiro PDF</label>
        <div className="flex items-end gap-4">
          <input
            type="file"
            name="file"
            accept="application/pdf"
            required
            className="block flex-1 text-sm text-gray-600 border rounded-lg p-2"
          />
          <button type="submit" className="px-4 py-2 bg-gray-900 text-white rounded-lg text-sm hover:bg-gray-700 transition-colors">
            Carregar
          </button>
        </div>
        <p className="text-xs text-gray-400 mt-2">
          Nomeie o ficheiro como &quot;N Nome da Música.pdf&quot; (ex: &quot;12 Parabéns a Você.pdf&quot;) — o número
          é removido no leitor, mas mantém a ordenação alfabética consistente com as cifras existentes.
        </p>
      </form>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 divide-y divide-gray-100">
        {cifras.length === 0 && (
          <p className="px-6 py-4 text-sm text-gray-400">Nenhuma cifra carregada.</p>
        )}
        {cifras.map((cifra) => (
          <div key={cifra.filename} className="flex items-center justify-between px-6 py-4">
            <div>
              <p className="font-medium text-gray-800">{cifra.name}</p>
              <p className="text-xs text-gray-400">{cifra.filename}</p>
            </div>
            <div className="flex items-center gap-4">
              <a href={cifra.url} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                Ver
              </a>
              <form action={deleteCifra.bind(null, cifra.filename)}>
                <button type="submit" className="text-sm text-red-400 hover:text-red-600 transition-colors">
                  Eliminar
                </button>
              </form>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
