import { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'

export function ThemeColors(Contexto) {
    const themeMode = useContext(Contexto)
    console.log(themeMode)

    

    const colorMode = {
        header: themeMode[0] === 'light' ? '#273FAD' : '#3E3E3E'
    }

    return colorMode
}
