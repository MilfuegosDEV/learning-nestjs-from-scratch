/**
 * Represents the user repository interface.
 */
export interface IUserRepository {
  /**
   * Creates a user.
   * @param user - The user to create.
   */
  create(
    user: import('../../../shared/dtos/users').CreateUserDto,
  ): Promise<import('../../documents').UserDocument>;

  /**
   * Updates a user.
   * @param id - The user id.
   * @param user - The user to update.
   */
  update(
    id: string,
    user: import('../../../shared/dtos/users').UpdateUserDto,
  ): Promise<import('../../documents').UserDocument | null>;

  /**
   * Deletes a user.
   * @param id - The user id.
   */
  delete(id: string): Promise<import('../../documents').UserDocument | null>;

  /**
   * Finds a user by id.
   * @param id - The user id.
   */
  findById(id: string): Promise<import('../../documents').UserDocument | null>;

  /**
   * Finds a user by email.
   * @param email - The user email.
   */
  findByEmail(
    email: string,
  ): Promise<import('../../documents').UserDocument | null>;

  /**
   * Finds a user by username.
   * @param username - The user username.
   */
  findByUsername(
    username: string,
  ): Promise<import('../../documents').UserDocument | null>;

  /**
   * Finds all users.
   */
  findAll(): Promise<import('../../documents').UserDocument[]>;
}
