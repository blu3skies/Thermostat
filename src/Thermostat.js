function Thermostat() {
  this.temperature = 20;
  this.MIN_TEMP = 10;
  this.powerSaverMode = true;
  this.maxTemp =25;
}

Thermostat.prototype.up = function() {
  if (this.temperature < this.maxTemp) { this.temperature++ };
}

Thermostat.prototype.down = function() {
  this.temperature--;
}

Thermostat.prototype.switchPowerSavingMode = function() {
  this.powerSaverMode = ( this.powerSaverMode ? false : true );
  this.changeMaxTemp();
}

Thermostat.prototype.changeMaxTemp = function() {
  this.maxTemp = ( this.powerSaverMode ? 25 : 32 ); 
}

Thermostat.prototype.reset = function() {
  this.temperature = 20;
}

Thermostat.prototype.usage_indicator = function() {
  if (this.temperature < 18) {
    return 'low-usage'
  } else if (this.temperature >= 25) {
    return 'high-usage'
  } else {
    return 'mid-usage'
  }
}
 

