import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import Modal from 'react-modal';
import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionsProvider } from "./hooks/useTransactionsContext";

Modal.setAppElement('#root')/**
 * falar para o Modal qual o root da aplicação para facilitar seu trabalho, 
 * melhorando a acessibilidade.
 * ele faz com que o root receba a informação que o modal está aberto
 * dai a pessoa não consegue interagir com o root
 * e quem precisa de algum tipo de acessiblidade, o navegador irá inerpretar
 * para a pessoa!
 */

export function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)//estado do modal da página.

  function handleOpenNewTransactionModal() {//função para alterar o estado do modal de falso para verdadeiro
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {//função para alterar o estado do modal de verdadeiro para falso
    setIsNewTransactionModalOpen(false);

  }

  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard />

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />

      <GlobalStyle />
    </TransactionsProvider>
  );
}