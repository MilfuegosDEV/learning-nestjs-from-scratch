class EntityBase {
  _id: import('mongoose').Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Represents an user entity.
 * @extends EntityBase
 * @property {string} first_name - The first name of the user.
 * @property {string} last_name - The last name of the user.
 * @property {string} email - The email of the user.
 * @property {string} username - The username of the user.
 * @property {string} password - The password of the user.
 * @property {boolean} is_verified - The verification status of the user.
 */
export class UserEntity extends EntityBase {
  first_name: string;
  last_name: string;
  email: string;
  username: string;
  password: string;
  is_verified: boolean;
}
