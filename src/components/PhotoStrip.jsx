/* A panoramic "strip" photo (Trev's 1106×202 crops) used to break up long pages.
   Purely decorative, so alt="" — screen readers skip it. `focus` is the
   object-position used when the strip is cropped taller on mobile; point it at
   the car. Layout, breakout width and the hill-edge mask live in index.css. */
export default function PhotoStrip({ src, focus = '50% 50%' }) {
  return (
    <div className="photo-strip" style={{ '--focus': focus }}>
      <img
        src={src}
        width="1106"
        height="202"
        alt=""
        loading="lazy"
        decoding="async"
      />
    </div>
  )
}
