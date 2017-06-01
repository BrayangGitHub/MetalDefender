// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;



// Create a Schema and a Model
const GunSchema = new Schema({
  // int - weapon ID
  id: Number,
  // int - level damage
  level_damage: Number,
  //int - level number of bullet 
  level_numberOfBullets: Number,
  totalCurrentBullets: Number
});
const ItemSchema = new Schema({
  // luc tao data chua co' data cua item explosive.
  // moi object explosive data chua' ca'c field
  //- explosive ID
  id: Number,
  //- level damage
  level_damage: Number,
  //current amount
  amount: Number
});
const DefenceSchema = new Schema({
  // tuong tu nhu explosive
  // moi object defence data chua
  id: Number,//- defense id
  //- level defense
  level_defense: Number,
  //- field nay la de? cho viec, unlock, xong purchase thi` moi co the du`ng duoc.
  purchased: Boolean
});
const AchievementItemSchema = new Schema({
  id: Number,
  currentProgress: Number,
  earned: Boolean,
  isGotGold: Boolean
});
const InfoSchema = new Schema({
  name: string,//string - player's name'
  timeActive: Date, //DateTime - Time actvie Daily mission

  lsGunCurrent: [GunSchema],
  lsItemCurrent: [ItemSchema],
  lsDefenceCurrent: [DefenceSchema]
});
const ProgessSchema = new Schema({
  isEndTutorial: Boolean, // bool : check end tutorial
  //list isendChap
  lsEndChap: [Boolean],
  temp_missionID: Number, // int : cai nay cua a Binh, e chua hieu lam
  current_missionID: Number, // int : cai nay cua a Binh, e chua hieu lam
  listEnemyWatchID: [Number] // int : list enemy da watch detail, dung de check xuat hien nut' de? coi enemy detail
});
const InventorySchema = new Schema({
  gold: Number, // int - gold
  potion: Number, // int - revive potion 
  energy: Number, // int - current stamina
  lsItem: [ItemSchema], // List<int> list Item data
  lsDefence: [DefenceSchema], // List <int> list defense data
  lsGun: [GunSchema], // List<int> list weapon data

});
const AchievementDataSchema = new Schema({
  lsAchievement: [AchievementItemSchema]
});

const UserSchema = new Schema({
  info: InfoSchema,
  progess: ProgessSchema,
  inventory: InventorySchema,
  achievementData: AchievementDataSchema
});
const UserData = mongoose.model('userdata', UserSchema);

module.exports = UserData;


/*// create a schema
var userSchema = new Schema({
  name: String,
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  admin: Boolean,
  location: String,
  meta: {
    age: Number,
    website: String
  },
  created_at: Date,
  updated_at: Date
});*/