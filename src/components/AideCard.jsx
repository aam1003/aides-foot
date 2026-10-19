import { TYPES, formatDate, labelOf } from '../data/aides.js'

export default function AideCard({ aide, onOpen }) {
  return (
    <li>
      <button className="aide-card" onClick={() => onOpen(aide)}>
        <span className={`tag tag-${aide.type}`}>{labelOf(TYPES, aide.type)}</span>
        <span className="aide-name">{aide.nom}</span>
        <span className="aide-org">{aide.organisme}</span>
        <span className="aide-meta">
          <span className="aide-amount">{aide.montant}</span>
          <span className="aide-date">Avant le {formatDate(aide.dateLimite)}</span>
        </span>
        <span className="aide-more">Voir le détail →</span>
      </button>
    </li>
  )
}

export function AideList({ aides, onOpen }) {
  return (
    <ul className="aide-list">
      {aides.map((aide) => (
        <AideCard key={aide.id} aide={aide} onOpen={onOpen} />
      ))}
    </ul>
  )
}
