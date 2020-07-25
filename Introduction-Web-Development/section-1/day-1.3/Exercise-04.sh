#!/bin/bash

#Exercicio 4: Verificar se o caminho ate um arquivo existe, e se ele esta habilitado.

read -p "Digite o caminho do arquivo que deseja testar:" CAMINHO

    if [ -e $CAMINHO -a -w $CAMINHO ]
    then
    echo "O caminho $CAMINHO existe, e voce tem permissao para escrita!"
    elif [ -e $CAMINHO ]
    then
    echo "Favor habilitar a sua permissao de escrita para o caminho $CAMINHO"
    else
    echo "O caminho nao existe."
    fi

    