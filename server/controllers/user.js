import User from "../models/User.js";

// READ
export const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const getFriends = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const friends = await Promise.all(
      user.friends.map((id) => User.findById(id))
    );

    const formattedFriends = friends.map((friend) => {
      const { _id, firstName, lastName, picturePath, location, occupation } =
        friend;
      return { _id, firstName, lastName, picturePath, location, occupation };
    });
    res.status(200).json(formattedFriends);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

// // UPDATE

// export const addRemoveFriends = async (req, res) => {
//   try {
//     const user = await User.findById(req.params.id);
//     const friend = await User.findById(req.params.friendId);

//     if (!user.friends.includes(friend._id)) {
//       user.friends.push(friend._id);
//       friend.friends.push(user._id);
//     } else {
//       user.friends = user.friends.filter((id) => id !== friend._id);
//       friend.friends = friend.friends.filter((id) => id !== user._id);
//     }
//     await user.save();
//     await friend.save();

//     const formattedFriends = friends.map((friend) => {
//       const { _id, firstName, lastName, picturePath, location, occupation } =
//         friend;
//       return { _id, firstName, lastName, picturePath, location, occupation };
//     });
//     res.status(200).json(formattedFriends);
//   } catch (err) {
//     res.status(404).json({ message: err.message });
//   }
// };

export const addRemoveFriends = async (req, res) => {
  try {
    const { id, friendId } = req.params;
    const user = await User.findById(id);
    const friend = await User.findById(friendId);

    if (user.friends.includes(friendId)) {
      user.friends = user.friends.filter((id) => id !== friendId);
      friend.friends = friend.friends.filter((id) => id !== id);
    } else {
      user.friends.push(friendId);
      friend.friends.push(id);
    }
    await user.save();
    await friend.save();

    const friends = await Promise.all(
      user.friends.map((id) => User.findById(id))
    );
    const formattedFriends = friends.map(
      ({ _id, firstName, lastName, occupation, location, picturePath }) => {
        return { _id, firstName, lastName, occupation, location, picturePath };
      }
    );

    res.status(200).json(formattedFriends);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
