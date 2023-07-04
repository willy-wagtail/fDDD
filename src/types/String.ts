/** Contrained Types */

type String1 = string;
type CreateString1 = (string: string) => Option<String1>;

type String50 = string;
type CreateString50 = (string: string) => Option<String50>;

let createString1: CreateString1 = (s) => (s.length <= 1 ? s : null);
let createString50: CreateString50 = (s) => (s.length <= 50 ? s : null);
