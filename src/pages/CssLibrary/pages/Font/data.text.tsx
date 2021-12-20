import cssLengths from "data/css/length";

export const previewWindowText: string =
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique quaerat illum delectus officia, culpa pariatur cumque saepe velit architecto nesciunt repudiandae dolor incidunt ex asperiores, quibusdam a quisquam non veritatis qui! Quidem odit officia aspernatur laudantium, autem illum iure dolorem?";

export const fontSizeLengthText =
  "font-size also accepts: " + cssLengths.join(", ") + ", %";

export const fontSizeLargerSmallerText =
  "Relative-size keywords. The font will be larger or smaller relative to the       parent element's font size, roughly by the ratio used to separate the       absolute-size keywords in 'font-size'-dropdown.";

export const fontWeightLighter =
  "One relative font weight lighter than the parent element. Note that only four font weights are considered for relative weight calculation; see the Meaning of relative weights section below.";

export const fontWeightBolder =
  "One relative font weight heavier than the parent element. Note that only four font weights are considered for relative weight calculation; see the Meaning of relative weights section below.";

export const fontWeightRelativeWeights =
  "Note that when using relative weights, only four font weights are considered — thin (100), normal (400), bold (700), and heavy (900). If a font-family has more weights available, they are ignored for the purposes of relative weight calculation.";

export const fontWeightAccessibilityConcerns =
  "People experiencing low vision conditions may have difficulty reading text set with a font-weight value of 100 (Thin/Hairline) or 200 (Extra Light), especially if the font has a low contrast color ratio.";
