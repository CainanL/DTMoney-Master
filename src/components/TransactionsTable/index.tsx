import { useContext, useEffect, useState } from "react";
import { useTransactions } from "../../hooks/useTransactionsContext";
import { Container } from "./styles";

export function TransactionsTable() {

    const { transactions } = useTransactions();

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    {transactions.map(transaction => (
                        <tr key={transaction.id}>
                            <td>{transaction.title}</td>
                            <td className={transaction.type}>
                                {new Intl.NumberFormat('pt-BR',{
                                    style: 'currency',
                                    currency: 'BRL'
                                }).format(transaction.amount) /*converter para formato de dinheiro BR */}
                            </td>
                            <td>{transaction.category}</td>
                            <td>{new Intl.DateTimeFormat('pt-BR').format(new Date(transaction.createdAt)) /**COnverter para formato de data (só funciona com data (new Date)) */}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Container>
    );
}