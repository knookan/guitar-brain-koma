# Guitar Brain · Koma

A browser-based guitar theory studio for chord voicings, scales, harmony, and Turkish makam references. The interface opens in English; Turkish is available in Settings. It runs locally without a build tool or external audio requests.

## Run

Open `index.html` from a local web server (recommended for service-worker/PWA features). The application also works as a standalone HTML file generated with:

```sh
node build-standalone.js
```

This writes `Guitar_Brain_Koma.html` in the project directory. To run the included automated checks:

```sh
node tests/run.cjs
```

## Included

- Interactive 3D guitar fretboard, tuning and capo controls
- Chord finder, voicing search and chord diagrams
- Scale discovery and harmony map with secondary dominants and borrowed chords
- Turkish makam reference records, 53-EDO theoretical interval display and optional microtonal playback
- Chord/scale playback, arpeggiation, MIDI and image/PDF exports
- PWA install support and responsive layout

## Theory and playback limits

Makam records keep theoretical 53-EDO coordinates separate from the nearest 12-TET guitar-fret projection. The coordinates are an explanatory model, not measured performance intonation or a complete makam performance simulator. The guitar playback uses CC0 Spanish classical-guitar samples; makam playback adjusts pitch continuously in the browser audio engine. Microtonal MIDI/MPE export is not included.

The harmony map applies explicit note-membership and contextual relationship rules. It does not claim to model full counterpoint or traditional makam harmony.

## Research and data

See `MAKAM-REFERENCE.md`, `Makam_Arastirmasi.md`, `SCALE-HARMONY-RESEARCH.md`, `SCALE-HARMONY-ATLAS.md`, `VOICING-RESEARCH.md`, and `CHORD-MATCHING-AUDIO.md`. Data catalogs and their source links are included alongside the application code.

## Third-party notices

- `CATALOG-LICENSE.txt`: chord-shape data derived from `tombatossals/chords-db` (MIT).
- `SCALE-CATALOG-LICENSE.txt` and `TONAL-LICENSE.txt`: scale formulas and related material from Tonal (MIT).
- `assets/audio/CC0-LICENSE.txt` and `assets/audio/SOURCE-README.txt`: FreePats Spanish classical-guitar recordings (CC0).
- `assets/fonts/Manrope-OFL.txt` and `assets/fonts/SpaceGrotesk-OFL.txt`: bundled fonts and their OFL terms.

The project source is licensed under the MIT License; see `LICENSE`. Third-party license terms still apply to their corresponding bundled material.
