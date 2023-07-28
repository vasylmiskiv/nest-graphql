import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { UserEntity } from 'src/users/enitities/user.entity';
import { CreateUserInput } from 'src/users/inputs/create-user.input';
import { UserService } from 'src/users/service/user/user.service';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => UserEntity)
  async createUser(
    @Args('createUser') createUserInput: CreateUserInput,
  ): Promise<UserEntity> {
    return await this.userService.createUser(createUserInput);
  }

  @Mutation(() => UserEntity)
  async updateUser(
    @Args('createUser') createUserInput: CreateUserInput,
  ): Promise<UserEntity> {
    return await this.userService.createUser(createUserInput);
  }

  @Mutation(() => UserEntity)
  async removeUser(@Args('id') id: number): Promise<number> {
    return await this.userService.removeUser(id);
  }

  @Query(() => UserEntity)
  async getOneUser(@Args('id') id: number): Promise<UserEntity> {
    return await this.userService.getOneUser(id);
  }

  @Query(() => UserEntity)
  async getAllUsers(): Promise<UserEntity[]> {
    return await this.userService.getAllUsers();
  }
}
