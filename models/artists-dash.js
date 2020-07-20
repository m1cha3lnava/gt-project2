// Creating our Creative model 

module.exports = function(sequelize, DataTypes) {
  var ArtistsDash = sequelize.define("ArtistDash", {
    // The email cannot be null, and must be a proper email before creation
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      //   type: { type: DataTypes.STRING }, move to media table
      bio: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      post_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      works_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
  });
  return ArtistsDash;
};