import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../components/PageDefault';
import Button from '../../components/Button';

function Pagina404() {
  return (
    <PageDefault>
      <>
        <h1>Erro 404 - Página não encontrada</h1>
        <p>Já que está por aqui que tal adquirir mais conhecimentos? Vídeos recomendados durante a semana de Imersão React da Alura.</p>
      </>

      <Button as={Link} className="ButtonLink" to="/">
        Voltar para Home
      </Button>
    </PageDefault>
  );
}

export default Pagina404;
