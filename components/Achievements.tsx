import type React from "react"
import PixelPlane from "./PixelPlane"
import Volunteering from "./Volunteering"
import Awards from "./Awards"

const Achievements: React.FC = () => {
  return (
    <div className="space-y-24">
      <section>
        <div className="mb-12">
          <PixelPlane title="Voluntariado" />
        </div>
        <Volunteering />
      </section>

      <section>
        <div className="mb-12">
          <PixelPlane title="Prêmios" />
        </div>
        <Awards />
      </section>
    </div>
  )
}

export default Achievements

