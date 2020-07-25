#!/bin/bash

#Exercicio 6: Receber o caminho como ARGUMENTO, e checar qual o tipo de arquivo do usuario (diretorio/arquivo/algo a mais)

CAMINHO=$1
echo "Buscando informacoes sobre o seu arquivo..."
sleep 1; echo "."; sleep 1; echo "."; sleep 1; echo "."; sleep 1

    if [ -f $CAMINHO ]
    then
    echo "O arquivo $CAMINHO e um arquivo comum"
    elif [ -d $CAMINHO ]
    then
    echo "O caminho para $CAMINHO e um diretorio"
    LISTAR=`ls -l $CAMINHO`
    echo "Veja abaixo a lista detalhada de arquivos no diretorio $CAMINHO"
    echo "$LISTAR"
    else
    echo "O arquivo $CAMINHO e desconhecido"
    fi 