import { capitalize } from 'tn-capitalize'
import { spaceCase } from 'tn-case'
import { random } from 'tn-random'
import ung from 'unique-names-generator'

const dic: string[] = []
const dicadd = (a: string[]) => a.map(e => dic.push(...e.split(/[ -]/g).filter(i => i.length > 2)))
dicadd([ung.countries, ung.animals, ung.adjectives, ung.colors, ung.languages].flat())

export const uniqname = (words = 2, seed: string | undefined) => {
  const properseed = seed ?? `${new Date().getTime()}${random(0, 1000)}`
  const dictionaries = Array.from<string[]>({ length: words }).fill(dic)
  const name = ung.uniqueNamesGenerator({ dictionaries, seed: properseed })
  return capitalize(spaceCase(name))
}
