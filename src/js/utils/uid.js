const uid = () =>
  `0000000000${Math.floor(Math.random() * +'0x10000000000').toString(16)}`.slice(-10) +
  `-${Date.now().toString(16)}`;

export default uid;
