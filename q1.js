function detalharEndereco  (endereco)  {
    let {rua, CEP, cidade} = endereco; 
    return `Rua: ${rua}, CEP: ${CEP}, Cidade: ${cidade}`;
};

console.log(detalharEndereco({rua : "XXXX", CEP: "000000000", Cidade: "Macaíba"}))
