import { dehydrate, useQuery } from "react-query";
import Head from "next/head";
import Link from "next/link";
import { Grid, Card, Image, Text, Title } from "@mantine/core";

import { queryClient, getFilmes } from "../src/api";

export async function getServerSideProps() {
  await queryClient.prefetchQuery(["filmes"], () => getFilmes());

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default function Home() {
  const { data } = useQuery(["filmes"], () => getFilmes());

  return (
    <div>
      <Grid>
        {data?.filmes.map((f, i) => (
          <Grid.Col xs={12} md={6} lg={4} key={[f.titulo, i].join(":")} p={5}>
            <Link href={`/filme/${f.titulo}`} passHref>
              <Card>
                <Card.Section>
                  <Image height={350} src="https://img.freepik.com/premium-vector/clapper-film-movie-icon-design_24877-23150.jpg" alt="green iguana" />
                </Card.Section>
                <Title order={3}>{f.titulo}</Title>
                <Text>
                  <p>Duração: {f.duracao}</p>
                  <p>Gênero: {f.genero}</p>
                  <p>Estréia: {f.estreia}</p>
                  <p>{f.lancamento && <strong>Lançamento!</strong>}</p>
                </Text>
              </Card>
            </Link>
          </Grid.Col>
        ))}
      </Grid>
    </div>
  );
}