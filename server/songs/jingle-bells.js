import { allColor1, allColor2 } from '../services/patterns';
import Song from '../services/songs';
import Note from '../services/notes';

const song = [
  { pattern: allColor1, delay: 500 },
  { pattern: allColor2, delay: 447 },
  { pattern: allColor1, delay: 536 },
  { pattern: allColor2, delay: 663 },
  { pattern: allColor1, delay: 577 },
  { pattern: allColor2, delay: 575 },
  { pattern: allColor1, delay: 616 },
  { pattern: allColor2, delay: 553 },
  { pattern: allColor1, delay: 592 },
  { pattern: allColor2, delay: 576 },
  { pattern: allColor1, delay: 575 },
  { pattern: allColor2, delay: 592 },
  { pattern: allColor1, delay: 568 },
  { pattern: allColor2, delay: 584 },
  { pattern: allColor1, delay: 569 },
  { pattern: allColor2, delay: 575 },
  { pattern: allColor1, delay: 617 },
  { pattern: allColor2, delay: 599 },
  { pattern: allColor1, delay: 600 },
  { pattern: allColor2, delay: 553 },
  { pattern: allColor1, delay: 567 },
  { pattern: allColor2, delay: 544 },
  { pattern: allColor1, delay: 608 },
  { pattern: allColor2, delay: 568 },
  { pattern: allColor1, delay: 577 },
  { pattern: allColor2, delay: 567 },
  { pattern: allColor1, delay: 552 },
  { pattern: allColor2, delay: 584 },
  { pattern: allColor1, delay: 576 },
  { pattern: allColor2, delay: 584 },
  { pattern: allColor1, delay: 592 },
  { pattern: allColor2, delay: 608 },
  { pattern: allColor1, delay: 592 },
  { pattern: allColor2, delay: 576 },
  { pattern: allColor1, delay: 576 },
  { pattern: allColor2, delay: 552 },
  { pattern: allColor1, delay: 600 },
  { pattern: allColor2, delay: 632 },
  { pattern: allColor1, delay: 592 },
  { pattern: allColor2, delay: 584 },
  { pattern: allColor1, delay: 551 },
  { pattern: allColor2, delay: 569 },
  { pattern: allColor1, delay: 576 },
  { pattern: allColor2, delay: 600 },
  { pattern: allColor1, delay: 552 },
  { pattern: allColor2, delay: 624 },
  { pattern: allColor1, delay: 1152 },
  { pattern: allColor2, delay: 280 },
  { pattern: allColor1, delay: 288 },
  { pattern: allColor2, delay: 576 },
  { pattern: allColor1, delay: 319 },
  { pattern: allColor2, delay: 297 },
  { pattern: allColor1, delay: 568 },
  { pattern: allColor2, delay: 304 },
  { pattern: allColor1, delay: 288 },
  { pattern: allColor2, delay: 440 },
  { pattern: allColor1, delay: 152 },
  { pattern: allColor2, delay: 1136 },
  { pattern: allColor1, delay: 287 },
  { pattern: allColor2, delay: 305 },
  { pattern: allColor1, delay: 520 },
  { pattern: allColor2, delay: 335 },
  { pattern: allColor1, delay: 273 },
  { pattern: allColor2, delay: 576 },
  { pattern: allColor1, delay: 352 },
  { pattern: allColor2, delay: 287 },
  { pattern: allColor1, delay: 273 },
  { pattern: allColor2, delay: 280 },
  { pattern: allColor1, delay: 544 },
  { pattern: allColor2, delay: 696 },
  { pattern: allColor1, delay: 255 },
  { pattern: allColor2, delay: 289 },
  { pattern: allColor1, delay: 552 },
  { pattern: allColor2, delay: 288 },
  { pattern: allColor1, delay: 256 },
  { pattern: allColor2, delay: 607 },
  { pattern: allColor1, delay: 297 },
  { pattern: allColor2, delay: 319 },
  { pattern: allColor1, delay: 473 },
  { pattern: allColor2, delay: 215 },
  { pattern: allColor1, delay: 1040 },
  { pattern: allColor2, delay: 296 },
  { pattern: allColor1, delay: 296 },
  { pattern: allColor2, delay: 297 },
  { pattern: allColor1, delay: 311 },
  { pattern: allColor2, delay: 280 },
  { pattern: allColor1, delay: 312 },
  { pattern: allColor2, delay: 344 },
  { pattern: allColor1, delay: 296 },
  { pattern: allColor2, delay: 296 },
  { pattern: allColor1, delay: 304 },
  { pattern: allColor2, delay: 232 },
  { pattern: allColor1, delay: 288 }
];

const JingleBells = new Song('jingle-bells.mp3');
for (const note of song) {
  const n = new Note(note.pattern, note.delay);
  JingleBells.addNote(n);
}

export default JingleBells;
