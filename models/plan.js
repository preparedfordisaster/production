const mongoose = require('mongoose');

var addressSchema = new mongoose.Schema({
  streetAddress: String,
  streetAddressPt2: String,
  city: String,
  state: String,
  zip: Number
});

var baseKitSchema = new mongoose.Schema({
  water: { type: Boolean, required: true },
  food: { type: Boolean, required: true },
  noaaWeatherRadio: { type: Boolean, required: true },
  flashlight: { type: Boolean, required: true },
  extraBatteries: { type: Boolean, required: true },
  firstAidKit: { type: Boolean, required: true },
  whistle: { type: Boolean, required: true },
  dustMask: { type: Boolean, required: true },
  sheetingAndDuctTape: { type: Boolean, required: true },
  moistTowelettes: { type: Boolean, required: true },
  garbageBagsAndPlasticTies: { type: Boolean, required: true },
  wrenchOrPliers: { type: Boolean, required: true },
  canOpener: { type: Boolean, required: true },
  localMaps: { type: Boolean, required: true }
});

var iceSchema = new mongoose.Schema({
  firstName: { contentType: String, required: true },
  lastName: { contentType: String, required: true },
  email: String,
  primaryPhone: { contentType: String, required: true },
  secondaryPhone: String,
  address: addressSchema
});

var neighborhoodSchema = new mongoose.Schema({
  zip: { contentType: Number, required: true },
  name: { contentType: String, required: true },
  neighborhoodRally: [addressSchema]
});

var personSchema = new mongoose.Schema({
  relationship: { contentType: String, required: true },
  firstName: { contentType: String, required: true },
  lastName: { contentType: String, required: true },
  email: String,
  primaryPhone: String,
  secondaryPhone: String,
  height: String,
  weight: String,
  picture: { data: Buffer, contentType: String },
  workSchoolName: String,
  workSchoolAddress: addressSchema,
  birthYear: Number,
  workSchoolRally: addressSchema
});

var planSchema = new mongoose.Schema({
    leader: personSchema,
    neighborhood: neighborhoodSchema,
    reminderDate: { type: Date, default: Date() },
    reminderFrequency: { type: Number, default: 91 },
    householdMembers: [personSchema],
    ice: [iceSchema],
    rallyPoints: {
      immediate: String,
      rallyAddress: addressSchema
    },
    emergencykit: {
      location: String,
      baseKit: baseKitSchema,
      addOns: {},
      kitReminderDate: Number
    }
  });

  module.exports = exports = mongoose.model('Plan', planSchema);
