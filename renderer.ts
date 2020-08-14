import { parseChord, chordRendererFactory } from 'chord-symbol';

export class Renderer {
  chords: Array<string> = [];
  transpose: number = 0;
  useFlats = true;
  harmonizeAccidentals = false;
  simplify = 'none';
  useShortNamings = false;

  constructor(chords){
    this.chords = chords
  }

  toString(): string{
    let result = '';
    const renderC = chordRendererFactory({ 
      useShortNamings: this.useShortNamings,
      simplify: this.simplify,
      transposeValue: this.transpose,
      harmonizeAccidentals: this.harmonizeAccidentals,
      useFlats: this.useFlats
    });
    this.chords.forEach((chord: string, index: number) => {
      if ((index % 4) === 0)
        result += '\n|'
      result += renderC(parseChord(chord)) + '\t|';
    })
    result += '|'

    return result;
  }
}