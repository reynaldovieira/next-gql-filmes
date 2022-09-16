import { ObjectType, Field, ID } from "type-graphql";

@ObjectType()
export class Filme {
  @Field(() => ID)
  titulo: string;

  @Field(() => String)
  genero: string;

  @Field(() => Boolean)
  lancamento: boolean;

  @Field(() => Number)
  duracao: number;

  @Field(() => String)
  estreia: string;
}