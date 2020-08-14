require { parseChord, chordRendererFactory } from 'chord-symbol';

export class Renderer {
  chords: Array<string> = [];

  constructor(chords){

  }

  print(): string{
    let result = '|';
    this.chords.forEach((chord: string) => {
      const c = parseChord(chord);
      const renderC = chordRendererFactory({ 
        useShortNamings: true,
        simplify: 'core',
        transposeValue: 0,
        harmonizeAccidentals: false,
        useFlats: true
      })
      result += renderC + '|';
    })

    return result;
  }
}