type AppleVariety = unknown;
type BananaVariety = unknown;
type CherryVariety = unknown;

type FruitSalad = {
  readonly apple: AppleVariety;
  readonly banana: BananaVariety;
  readonly cherry: CherryVariety;
};

type FruitSnack = AppleVariety | BananaVariety | CherryVariety;
