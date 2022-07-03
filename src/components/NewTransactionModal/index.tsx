import { FormEvent, useContext, useState } from 'react';
import Modal from 'react-modal';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { useTransactions } from '../../hooks/useTransactionsContext';
import { Container, TransactionTypeContainer, RadioBox } from './style';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

/**
 * o modal recebe o estado e a função que vem de quem o chama, no caso o App.
 */
export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {

    const { createTransaction } = useTransactions();

    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState('');
    const [type, setType] = useState('deposit');

    async function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault();

        await createTransaction({
            title,
            amount,
            category,
            description: 'Descrição',
            type
        });

        setTitle('');
        setAmount(0);
        setCategory('');
        setType('deposit');

        onRequestClose();
    }


    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName={'react-modal-overlay'}
            className={'react-modal-content'}
        >

            <button
                type='button'
                className='react-modal-close'
                onClick={onRequestClose}
            >
                <img src={closeImg} alt="Fechar modal" />

            </button>
            <Container onSubmit={handleCreateNewTransaction}>
                <h2>Cadastrar transação</h2>

                <input type="text" placeholder='Título' value={title} onChange={event => setTitle(event.target.value)} />

                <input type="number" placeholder='Valor' value={amount} onChange={event => setAmount(Number(event.target.value))} />

                <TransactionTypeContainer>

                    <RadioBox
                        type='button'
                        onClick={() => { setType('deposit') }}
                        isActive={type === 'deposit'}
                        activeColor='green'
                    >
                        <img src={incomeImg} alt="Entrada" />
                        <span>Entrada</span>

                    </RadioBox>

                    <RadioBox
                        type='button'
                        onClick={() => { setType('withdraw') }}
                        isActive={type === 'withdraw'}
                        activeColor='red'

                    >
                        <img src={outcomeImg} alt="Saída" />
                        <span>Saida</span>
                    </RadioBox>

                </TransactionTypeContainer>

                <input type="text" placeholder='Categoria' value={category} onChange={event => setCategory(event.target.value)} />

                <button type='submit'>Cadastrar</button>
            </Container>
        </Modal>
    )
}