import { colors } from '@jerp-ignite-ui/tokens'
import { getContrast } from 'polished'

export const ColorsGrid = () => {
  const getColorContrast = (color: string) =>
    getContrast(color, '#FFF') < 3.5 ? '#000' : '#FFF'

  return Object.entries(colors).map(([key, color]) => (
    <div key={key} style={{ backgroundColor: color }} className="colors-grid">
      <p
        style={{
          color: getColorContrast(color),
        }}
      >
        <strong>{key}</strong>
        <span>{color}</span>
      </p>
    </div>
  ))
}
