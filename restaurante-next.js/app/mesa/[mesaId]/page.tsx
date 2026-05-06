export default function Mesa({
    params,
}: {
    params: { mesaId: string };
}) {
    return <h1>Mesa: {params.mesaId}</h1>;
}