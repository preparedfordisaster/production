const mongoose = require('mongoose');

var planSchema = new mongoose.Schema({
    homeAddress: {
      streetAddress: String,
      streetAddressPt2: String,
      city: String,
      state: String,
      zip: String
    },
    leader: {
      relationship: { type: String, required: true },
      firstName: { type: String, required: true },
      lastName: { type: String, required: true },
      email: String,
      primaryPhone: String,
      secondaryPhone: String,
      height: String,
      weight: String,
      picture: { data: Buffer, type: String },
      workSchoolName: String,
      workSchoolAddress: {
        streetAddress: String,
        streetAddressPt2: String,
        city: String,
        state: String,
        zip: String
      },
      birthYear: Number,
      workSchoolRally: {
        streetAddress: String,
        streetAddressPt2: String,
        city: String,
        state: String,
        zip: String
      }
    },
    neighborhood: {
      zip: { type: String, required: true },
      name: { type: String, required: true },
      neighborhoodRally: [
        {
          streetAddress: String,
          streetAddressPt2: String,
          city: String,
          state: String,
          zip: String
        }
      ]
    },
    reminderDate: { type: Date, default: Date() },
    reminderFrequency: { type: Number, default: 91 },
    householdMembers: [
      {
        relationship: { type: String, required: true },
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        email: String,
        primaryPhone: String,
        secondaryPhone: String,
        height: String,
        weight: String,
        picture: { data: Buffer, type: String },
        workSchoolName: String,
        workSchoolAddress: {
          streetAddress: String,
          streetAddressPt2: String,
          city: String,
          state: String,
          zip: String
        },
        birthYear: Number,
        workSchoolRally: {
          streetAddress: String,
          streetAddressPt2: String,
          city: String,
          state: String,
          zip: String
        }
      }
    ],
    ice: [
      {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        email: String,
        primaryPhone: { type: String, required: true },
        secondaryPhone: String,
        address: {
          streetAddress: String,
          streetAddressPt2: String,
          city: String,
          state: String,
          zip: String
        }
      }
    ],
    rallyPoints: {
      immediate: String,
      rallyAddress: {
        streetAddress: String,
        streetAddressPt2: String,
        city: String,
        state: String,
        zip: String
      }
    },
    emergencykit: {
      location: String,
      baseKit: {
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
      },
      addOns: {},
      kitReminderDate: { type: Date, default: Date() }
    }
  });

module.exports = exports = mongoose.model('Plan', planSchema);
