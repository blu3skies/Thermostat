describe('Thermostat', function(){

  var thermostat

  beforeEach(function() {
    thermostat = new Thermostat();
  })

  it('should start at 20c', function(){
    expect(thermostat.temperature).toEqual(20)
  })

  describe('up', function() {
    it('raises the temp by 1c', function() {
    thermostat.up();
    expect(thermostat.temperature).toEqual(21);
    });

    it('can not exceed the max temp(25c)', function() {
      for(var i = 0 ; i < 5; i++) {
        thermostat.up();
      };
      expect(thermostat.temperature).toEqual(25);
      thermostat.up();
      expect(thermostat.temperature).toEqual(25);
    })
    it('can not exceed the max temp(32c)', function() {
      thermostat.switchPowerSavingMode()
      for(var i = 0 ; i < 12; i++) {
        thermostat.up();
      };
      expect(thermostat.temperature).toEqual(32);
      thermostat.up();
      expect(thermostat.temperature).toEqual(32);
    })
  });

  describe('down', function(){
    it('should decrease the temp buy 1c', function(){
      thermostat.down();
      expect(thermostat.temperature).toEqual(19)
    });
  });
  
  it('has a min temp of 10c', function() {
    expect(thermostat.MIN_TEMP).toEqual(10);
  });
  
  describe('powersaver', function(){
    it('power saving mode should be on', function() {
      expect(thermostat.powerSaverMode).toBe(true)
    });

    it('switches the power saving mode to off', function(){
      thermostat.switchPowerSavingMode();
      expect(thermostat.powerSaverMode).toBe(false);
    });

    it('max temp should be 25c (powersaver mode off)', function() {
      expect(thermostat.maxTemp).toEqual(25)
    });

    it('max temp should be 32c (powersaver mode on)', function() {
      thermostat.switchPowerSavingMode();
      expect(thermostat.maxTemp).toEqual(32)
    });
  });

  describe('reset', function(){
    it('should reset temp to 20c', function(){
      [1,1,1].forEach(function(i){
        thermostat.up();
      });
      expect(thermostat.temperature).toEqual(23)
      thermostat.reset();
      expect(thermostat.temperature).toEqual(20)
    });
  });

  describe('usage_indicator', function() {
    it('show mid-usage when 18 <= temp < 25', function() {
      expect(thermostat.usage_indicator()).toEqual('mid-usage');
    });

    it('show low-usage when temp < 18', function(){
      [1,2,3].forEach(function(i){
        thermostat.down();
      })
      expect(thermostat.temperature).toEqual(17)
      expect(thermostat.usage_indicator()).toEqual('low-usage')
    });

    it('show high-usage when temp >= 25', function(){
      for (var i = 0 ; i < 5 ; i++) {
        thermostat.up()
      }
      expect(thermostat.temperature).toEqual(25)
      expect(thermostat.usage_indicator()).toEqual('high-usage')
    });
  });

});