import { resolve } from 'path'
import { AliasOptions } from 'vite'

const r = (p: string) => resolve(__dirname, p)

const alias: AliasOptions = {
  '@': r('./src'),
}

export default alias
