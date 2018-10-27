export const SAY_HELLO = 'HELLO';
export const SAY_GOODMORNING = 'MORNING';
export const LOAD_GREETING = 'LOAD_GREETING';

export function sayHello() {
  return { type: SAY_HELLO };
}

export function sayGoodMorning() {
  return { type: SAY_GOODMORNING };
}

export function loadGreeting(greet) {
  return { type: LOAD_GREETING, payload: greet };
}
