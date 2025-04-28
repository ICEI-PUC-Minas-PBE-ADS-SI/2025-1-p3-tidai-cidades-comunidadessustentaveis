## Arquivo .sql

```sql
-- Criação da tabela Admin
CREATE TABLE Admin (
    AdmCodigo INTEGER PRIMARY KEY,
    AdmNome VARCHAR(100),
    AdmSenha VARCHAR(100),
    FOREIGN KEY (UseCodigo) REFERENCES Usuario(UseCodigo),
    FOREIGN KEY (DenCodigo) REFERENCES Denuncia(DenCodigo),
    FOREIGN KEY (EmpCodigo) REFERENCES Empresas(EmpCodigo)
    
);

-- Criação da tabela Usuário
CREATE TABLE Usuario (
    UseCodigo INTEGER PRIMARY KEY,
    UseNome VARCHAR(100),
    UseSobrenome VARCHAR(100),
    UseCPF VARCHAR(100),
    UseTel VARCHAR(100),
    UseEmail VARCHAR(100),
    UseSenha VARCHAR(100)
);

-- Criação da tabela Denúncia
CREATE TABLE Denuncia (
    DenCodigo INTEGER PRIMARY KEY,
    UseCodigo INTEGER,
    Data DATE,
    Denuncia VARCHAR(100),
    Rua VARCHAR(100),
    Bairro VARCHAR(100),
    DescProblema VARCHAR(100),
    AnxImagem VARCHAR(255), //Caminho da imagem
    StausDenuncia VARCHAR(100),
    FOREIGN KEY (UseCodigo) REFERENCES Usuario(UseCodigo)
);

-- Criação da tabela Status
CREATE TABLE StatusDenuncia (
    StatusDenCodigo INTEGER PRIMARY KEY,
    DenCodigo INTEGER,
    StausDenuncia VARCHAR(100),
    FOREIGN KEY (DenCodigo) REFERENCES Denuncia(DenCodigo)
);


-- Criação da tabela Empresas responsáveis
CREATE TABLE Empresas (
    EmpCodigo INTEGER PRIMARY KEY,
    EmpNome VARCHAR(100),
    EmpTipo VARCHAR(100), //Água, luz, etc
    FOREIGN KEY (Denuncia) REFERENCES Denuncia(Denuncia)
);
```
