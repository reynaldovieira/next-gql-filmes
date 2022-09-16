import { Resolver, Query, Arg } from "type-graphql"

import { Filme } from "./filmes"
import filmes from "./filmes.json"

@Resolver(Filme)
export class FilmesResolver {
    @Query(() => Filme, { nullable: true })
    filme(@Arg("titulo", () => String) titulo: string): Filme | undefined {
      const filme = filmes.find((filme) => filme.titulo === titulo);
      if (filme === undefined) {
        throw new Error("filme not found");
      }
      return filme;
    }
    
    @Query(() => [Filme])
    filmes(): Filme[] {
        return filmes
    }
}