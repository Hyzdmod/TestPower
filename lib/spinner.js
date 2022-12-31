var spin = require('spinnies')

var spinner = { 
"interval": 120,
"frames": [
"",
"K",
"KE",
"KEN",
"KENI",
"KENIS",
"KENISA",
"KENISAW",
"KENISAWA",
"KENISAWA ",
"KENISAWA -",
"KENISAWA - D",
"KENISAWA - DE",
"KENISAWA - DEV",
"KENISAWA - DE",
"KENISAWA - D",
"KENISAWA -",
"KENISAWA ",
"KENISAWA",
"KENISAW",
"KENISA",
"KENIS",
"KENI",
"KEN",
"KE",
"K",
""
]}

let globalSpinner;
var getGlobalSpinner = (disableSpins = false) => {
if(!globalSpinner) globalSpinner = new spin({ color: 'white', succeedColor: 'blue', spinner, disableSpins});
return globalSpinner;
}
spins = getGlobalSpinner(false)
module.exports.start = (id, text) => {
spins.add(id, {text: text})
}