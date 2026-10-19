import { useEffect, useRef } from 'react'
import { BESOINS, TYPES, formatDate, labelOf, regionsLabel } from '../data/aides.js'

export default function AideModal({ aide, onClose }) {
  const closeRef = useRef(null)

  useEffect(() => {
    const previous = document.activeElement
    closeRef.current?.focus()
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
      previous?.focus()
    }
  }, [onClose])

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button ref={closeRef} className="modal-close" onClick={onClose} aria-label="Fermer">×</button>

        <span className={`tag tag-${aide.type}`}>{labelOf(TYPES, aide.type)}</span>
        <h2 id="modal-title">{aide.nom}</h2>
        <p className="aide-org">{aide.organisme}</p>

        <div className="modal-keyfacts">
          <div>
            <span className="keyfact-label">Montant</span>
            <span className="keyfact-value">{aide.montant}</span>
          </div>
          <div>
            <span className="keyfact-label">Date limite</span>
            <span className="keyfact-value">{formatDate(aide.dateLimite)}</span>
          </div>
        </div>

        <h3>À quoi elle sert</h3>
        <p>{aide.usage}</p>

        <h3>Qui peut en bénéficier</h3>
        <ul className="conditions">
          {aide.conditions.map((condition) => (
            <li key={condition}>{condition}</li>
          ))}
        </ul>

        <h3>Zone et besoins couverts</h3>
        <p>{regionsLabel(aide)}</p>
        <div className="chips">
          {aide.besoins.map((besoin) => (
            <span key={besoin} className="chip">{labelOf(BESOINS, besoin)}</span>
          ))}
        </div>

        <span className="source-link" aria-disabled="true">Source officielle ↗</span>
      </div>
    </div>
  )
}
