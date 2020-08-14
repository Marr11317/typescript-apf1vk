import { parseChord, chordRendererFactory } from 'chord-symbol';

export class Renderer {
  chords: Array<string> = [];
  transpose: number = 0;

  constructor(chords){
    this.chords = chords
  }

  toString(): string{
    let result = '';
    const renderC = chordRendererFactory({ 
      useShortNamings: false,
      simplify: 'none',
      transposeValue: this.transpose,
      harmonizeAccidentals: false,
      useFlats: true
    });
    this.chords.forEach((chord: string, index: number) => {
      if (!(index % 4))
        result += '\n|'
      result += renderC(parseChord(chord)) + '\t|';
    })

    return result;
  }
}