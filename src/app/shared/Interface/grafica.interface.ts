export interface DatoNgx {
  name:   string;
  series?: Series[];
}

export interface Series {
  value: number;
  name:  string;
}
