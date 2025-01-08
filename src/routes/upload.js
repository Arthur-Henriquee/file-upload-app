const express = require('express');
const multer = require('multer');
const path = require('path');
const router = express.Router();

// Configuração do Multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Diretório onde os arquivos serão armazenados
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Nome único para cada arquivo
    }
});

const upload = multer({ storage: storage });

// Rota de upload de arquivos
router.post('/upload', upload.single('file'), (req, res) => {
    if (!req.file) {
        return res.status(400).send('Nenhum arquivo enviado.');
    }
    res.send({
        message: 'Arquivo enviado com sucesso!',
        file: req.file
    });
});

module.exports = router;
