type SvgConfiguration = {
  width: string;
  height: string;
};
type CircleConfiguration = {
  cx: string;
  cy: string;
  radius: number;
  fill: string;
  strokeColor1: string;
  strokeColor2: string;
  strokeWidth?: string;
};
type TextConfiguration = {
  fill: string;
  textAnchor?: string;
  x?: string;
  y?: string;
};
interface ChartConfiguration {
  svg: SvgConfiguration;
  circle: CircleConfiguration;
  text: TextConfiguration;
  percentagevalue: number;
}

export { ChartConfiguration };
