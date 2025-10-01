// Smoothly scroll to an element by id with an optional offset
export function scrollToId(id, offset = 20) {
  const el = document.getElementById(id)
  if (!el) return
  const top = el.getBoundingClientRect().top + window.scrollY - offset
  window.scrollTo({ top, behavior: 'smooth' })
}
