import { useMemo, useState } from 'react'
import { AIDES, BESOINS, REGIONS, TYPES, byMontantDesc, coversRegion } from '../data/aides.js'
import { AideList } from './AideCard.jsx'

const NO_FILTERS = { type: '', region: '', besoin: '' }

export default function Catalog({ onOpen, onBack }) {
  const [filters, setFilters] = useState(NO_FILTERS)
  const hasFilters = Object.values(filters).some(Boolean)

  const aides = useMemo(
    () =>
      AIDES.filter(
        (aide) =>
          (!filters.type || aide.type === filters.type) &&
          (!filters.region || coversRegion(aide, filters.region)) &&
          (!filters.besoin || aide.besoins.includes(filters.besoin)),
      ).sort(byMontantDesc),
    [filters],
  )

  const update = (key) => (e) => setFilters({ ...filters, [key]: e.target.value })

  return (
    <section className="listing">
      <button className="back" onClick={onBack}>← Retour à mes résultats</button>
      <h1>Toutes les <span className="accent">aides</span></h1>

      <div className="filters">
        <label>
          Type
          <select value={filters.type} onChange={update('type')}>
            <option value="">Tous les types</option>
            {TYPES.map((t) => <option key={t.value} value={t.value}>{t.label}</option>)}
          </select>
        </label>
        <label>
          Région
          <select value={filters.region} onChange={update('region')}>
            <option value="">Toutes les régions</option>
            {REGIONS.map((r) => <option key={r} value={r}>{r}</option>)}
          </select>
        </label>
        <label>
          Besoin
          <select value={filters.besoin} onChange={update('besoin')}>
            <option value="">Tous les besoins</option>
            {BESOINS.map((b) => <option key={b.value} value={b.value}>{b.label}</option>)}
          </select>
        </label>
      </div>

      <div className="filters-bar">
        <span className="count" aria-live="polite">
          {aides.length} aide{aides.length > 1 ? 's' : ''} trouvée{aides.length > 1 ? 's' : ''}
        </span>
        {hasFilters && <button className="back" onClick={() => setFilters(NO_FILTERS)}>Effacer les filtres</button>}
      </div>

      {aides.length > 0 ? (
        <AideList aides={aides} onOpen={onOpen} />
      ) : (
        <p className="empty">Aucune aide ne correspond à ces filtres.</p>
      )}
    </section>
  )
}
