import { Input } from 'antd';
import React, { useState } from 'react';

export function InputMasc(e) {

    const [complet, setComplet] = useState('');
    // CPF value

    value = e.currentTarget.value;
    console.log(value);
    let caractere = e.currentTarget.value;
    console.log(caractere)
    let cpf = caractere.length;

    const validarCPF = (cpf) => {
        console.log('passou 02')
        if (cpf === 0) return false;
        console.log('passou 03')

        // Elimina CPFs inválidos conhecidos	
        if (cpf != 11 ||
            caractere == "00000000000" ||
            caractere == "11111111111" ||
            caractere == "22222222222" ||
            caractere == "33333333333" ||
            caractere == "44444444444" ||
            caractere == "55555555555" ||
            caractere == "66666666666" ||
            caractere == "77777777777" ||
            caractere == "88888888888" ||
            caractere == "99999999999") {
            console.log('passou 04')
            return false;
        }
        // Valida 1  digito, soma os números até a penultima casa, e verifica a condição com último caracter
        let i = 0;
        let add = 0;
        for (i = 0; i < 9; i++)
            add += parseInt(caractere.charAt(i)) * (10 - i);

        let rev = 11 - (add % 11);
        if (rev === 10 || rev === 11)
            rev = 0;
        if (rev != parseInt(caractere.charAt(9))) {
            console.log('passou 06')

            return false;
        }
        // Valida 2o digito, soma todos os números, verifica com penultimo caracter
        add = 0;
        for (i = 0; i < 10; i++)
            add += parseInt(caractere.charAt(i)) * (11 - i);
        rev = 11 - (add % 11);
        if (rev === 10 || rev === 11)
            rev = 0;
        if (rev != parseInt(caractere.charAt(10))) {
            console.log(rev, caractere.charAt(10))
            console.log('passou 07')

            return false;
        }
        else {
            return true;
        }

    }

    const telefone_validation = (cpf) => {
        //retira todos os caracteres menos os números
        caractere = caractere.replace(/\D/g, '');
        // verifica se tem a quantidade de números correto
        if (!(cpf >= 10 && cpf <= 11)) return false;

        //Se tiver 11 caracteres, verificar se começa com 9 o celular
        if (cpf == 11 && parseInt(caractere.substring(2, 3)) != 9) return false;

        //verifica se não é nenhum numero digitado errado (propositalmente)
        for (var n = 0; n < 10; n++) {
            if (caractere == new Array(11).join(n) || caractere == new Array(12).join(n)) return false;
        }
        //DDDs validos
        var codigosDDD = [11, 12, 13, 14, 15, 16, 17, 18, 19,
            21, 22, 24, 27, 28, 31, 32, 33, 34,
            35, 37, 38, 41, 42, 43, 44, 45, 46,
            47, 48, 49, 51, 53, 54, 55, 61, 62,
            64, 63, 65, 66, 67, 68, 69, 71, 73,
            74, 75, 77, 79, 81, 82, 83, 84, 85,
            86, 87, 88, 89, 91, 92, 93, 94, 95,
            96, 97, 98, 99];
        // verifica se o DDD é valido
        if (codigosDDD.indexOf(parseInt(caractere.substring(0, 2))) == -1) return false;

        //  Verifica se o numero é realmente válido.
        if (new Date().getFullYear() < 2017) return true;
        if (cpf == 10 && [2, 3, 4, 5, 7].indexOf(parseInt(caractere.substring(2, 3))) == -1) return false;

        return true;
    }

    const isNumber = (caractere) => {
        return !isNaN(parseFloat(caractere)) && isFinite(caractere);
    }


    console.log("passou 01")
    if (cpf === 11 && (/[a-zA-Z]/).test(caractere) === false) {


        if (telefone_validation(cpf) === true) {
            let value = e.currentTarget.value;
            value = value.replace(/^(\d{0})(\d{2})(\d{1})(\d{4})(\d{4})/, "$1($2) $3 $4-$5")
            e.currentTarget.value = value;
        }

        else if (validarCPF(cpf) === true) {
            let value = e.currentTarget.value;
            value = value.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")
            e.currentTarget.value = value;
        }

    }
    else {

        if ((/[a-zA-Z]/).test(caractere) === true) {
            let car_replaced = caractere.replace(/(\.)|(\/)|(\-)/g, '')
            console.log('email')
            console.log(isNumber(caractere));
            e.currentTarget.value = car_replaced;
        }
        else {
            let car_replaced = caractere.replace(/\D/g, '')
            if (car_replaced.length === 14) {
                console.log("CNPJ")
                car_replaced = car_replaced.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5")
                e.currentTarget.value = car_replaced;
                e.currentTarget.maxLength = 14;
            }
        }
    }
}


return (
    <>
        <Input placeholder='CPF, Email, Telefone ou CNPJ' onKeyUp={handleComplet} value={complet} onChange={(event) => setComplet(event.target.value)} />
    </>
)


