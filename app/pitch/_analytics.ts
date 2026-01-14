export const PITCH_REF_KEY = "pitch_ref"

export function getStableRef(incomingRef: string | null) {
  if (typeof window === "undefined") return incomingRef || "unknown"
  const existing = window.localStorage.getItem(PITCH_REF_KEY)
  const ref = incomingRef || existing || "unknown"
  window.localStorage.setItem(PITCH_REF_KEY, ref)
  return ref
}

export function nowMs() {
  return typeof performance !== "undefined" ? performance.now() : Date.now()
}
