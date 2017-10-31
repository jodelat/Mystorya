module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 20]
      }
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 20]
      }
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 20]
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [7, 50]
      }
    },
    bio:{
      type: DataTypes.STRING,
      allowNull: true,
      validate:{
        len: [1, 255]
      }
    },
    location:{
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1, 50]
      }
    },
    profilePic:{
      type: DataTypes.BLOB,
      allowNull: true,
      validate: {
        isUrl: true,
      }
    }
  });

  User.associate = function(models) {
    User.hasMany(models.Story, {
      onDelete: "cascade"
    });
  };

  return User;
};
