INSERT INTO users (firstName, lastName, email, password, bio, location, profilePic, createdAt, updatedAt)
VALUES ("James", "DeChavez", "abc@abc.com", "passwordyay", "I am James. Hello", "California", "http://lorempixel.com/400/200", now(), now());

INSERT INTO stories (title, body, viewCount, coverImage, storyImage, video, createdAt, updatedAt, userID)
VALUES ("Test Story", "This is a good story!", 70, "http://lorempixel.com/150/200/nightlife", "http://lorempixel.com/50/50/nightlife", null, now(), now(), 1);

INSERT INTO stories (title, body, viewCount,  coverImage, storyImage, video, createdAt, updatedAt, userID)
VALUES ("Test Story 2", "This is a better story!", 80, "http://lorempixel.com/150/200/sports", "http://lorempixel.com/50/50/sports", null, now(), now(), 1);

INSERT INTO stories (title, body, viewCount,  coverImage, storyImage, video, createdAt, updatedAt, userID)
VALUES ("Test Story 3", "This is the best story!", 90, "http://lorempixel.com/150/200/cats", "http://lorempixel.com/50/50/cats", null, now(), now(), 1);

INSERT INTO stories (title, body, viewCount,  coverImage, storyImage, video, createdAt, updatedAt, userID)
VALUES ("Test Story 4", "This is the bestest story!", 100, "http://lorempixel.com/150/200/nature",  "http://lorempixel.com/50/50/nature", null, now(), now(), 1);

INSERT INTO stories (title, body, viewCount,  coverImage, storyImage, video, createdAt, updatedAt, userID)
VALUES ("Test Story 5", "This is the best story times infinity!", 1000000, "http://lorempixel.com/150/200/food", "http://lorempixel.com/50/50/food", null, now(), now(), 1);