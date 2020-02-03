module.exports = device => {
  const deviceName = device.toLowerCase().replace(/ /g, '-')
  return `${deviceName}-full.png`
}
