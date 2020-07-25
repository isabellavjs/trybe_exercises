#!/bin/bash

#Exercicio 7: Checar se o argumento recebido e um diretorio, e contar quantos arquivos existem nele"

DIRETORIO=$1

if [ -d $DIRETORIO ]
then
echo "O seu arquivo e um diretorio"
LISTAR=`ls -l $DIRETORIO | wc -l`
echo "O diretorio $DIRETORIO tem $LISTAR arquivos"
else 
echo "O argumento $DIRETORIO nao e um diretorio!"
fi