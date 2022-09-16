import { dehydrate, useQuery } from "react-query";
import Head from "next/head";
import Link from "next/link";
import { Grid, Card, Image, Text, Title } from "@mantine/core";

import { queryClient, filmePorNome } from "../../src/api";

export async function getServerSideProps({ params }) {
    await queryClient.prefetchQuery("filme", () => filmePorNome({ titulo: params.titulo }))

    return {
        props: {
            titulo: params.titulo,
            dehydratedState: dehydrate(queryClient),
        },
    };
}

const DetalhesFilme: React.FunctionComponent<{
    titulo: string
}> = ({ titulo }) => {
    const { data } = useQuery("filme", () => filmePorNome({ titulo }))

    if (!data.filme) {
        return <div>Filme não encontrado</div>
    }

    return (
        <Grid>
            <Grid.Col>
                <Title>{data.filme.titulo}</Title>
                <Text>
                    <p>Duração: {data.filme.duracao}</p>
                    <p>Gênero: {data.filme.genero}</p>
                    <p>Estréia: {data.filme.estreia}</p>
                    <p>{data.filme.lancamento && <strong>Lançamento!</strong>}</p>
                </Text>
            </Grid.Col>
        </Grid>
    )
}

export default DetalhesFilme