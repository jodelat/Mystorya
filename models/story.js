module.exports = function(sequelize, DataTypes) {
  var Story = sequelize.define("Story", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 50]
      }
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    viewCount: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    coverImage: {
      type: DataTypes.STRING,
      allowNull: true, 
      validate:{
        isUrl: true,
      }
    },
    storyImage: {
      type: DataTypes.STRING,
      allowNull: true, 
      validate:{
        isUrl: true,
      }
    },
    video: {
      type: DataTypes.STRING,
      allowNull: true, 
      validate:{
        isUrl: true,
      }
    }
  });

  Story.associate = function(models) {
    Story.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Story;
};
