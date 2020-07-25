#!/bin/bash

#Exercicio 5: checar qual o tipo de arquivo do usuario (diretorio/arquivo/algo a mais)

read -p "Digite o caminho do seu arquivo ou diretorio: " CAMINHO

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
