import { InputType, Field, ID } from '@nestjs/graphql';

@InputType()
export class UpdateUserInput {
  @Field()
  id: number;

  @Field()
  email: string;

  @Field({ nullable: true })
  name: string;
}
