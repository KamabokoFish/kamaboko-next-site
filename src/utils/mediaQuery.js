// Reusable media queries(mobile first)

const breakpoints = [710];

const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

export default mq;
