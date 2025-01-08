const express = require('express');
const app = express();
const path = require('path');
const uploadRoutes = require('./routes/upload'); // Importando as rotas de upload

// Middleware para servir os arquivos estáticos da pasta "uploads"
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Usando as rotas de upload
app.use('/api', uploadRoutes);

// Configurar a porta do servidor
const port = 3000;
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
