interface Props {
    mesaNumero: string;
}

function OrderForm({ mesaNumero }: Props) {
    return <div>Pedido para mesa {mesaNumero}</div>;
}

export default OrderForm;