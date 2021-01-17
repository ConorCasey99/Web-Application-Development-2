import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const PeopleSchema = new Schema({
  also_known_as: [{ type: String }],
  id: { type: Number, required: true, unique: true },
  birthday: { type: String },
  adult: { type: Boolean },
  poster_path: { type: String },
  deathday: { type: String },
  name: { type: String },
  gender: { type: Number },
  biography: { type: String },
  popularity: { type: Number },
  place_of_birth: { type: String },
  profile_path: { type: String },
  imdb_id: { type: String },
  homepage:{type: String}
});

PeopleSchema.statics.findByPersonDBId = function (id) {
  return this.findOne({ id: id });
};

export default mongoose.model('People', PeopleSchema);


