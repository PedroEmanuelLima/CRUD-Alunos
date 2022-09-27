const AlunoRouter = require('express').Router();
const Aluno = require('../../model/Aluno');

AlunoRouter.get('/allAlunos', async (req, res) => {
    try {
        const result = await Aluno.find({});
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({mensagem: 'Falha na busca'});
    }
});

AlunoRouter.get('/aluno/:id', async (req, res) => {
    try {
        const result = await Aluno.findOne({email: req.params.email});
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({mensagem: 'Falha na busca'});
    }
});

AlunoRouter.post('/createAluno', async (req, res) => {
    try {
        await Aluno.create(req.body);
        res.status(201).json({mensagem: 'Aluno cadastrado'});
    } catch (error) {
        res.status(500).json({mensagem: 'Erro no cadastro'});
    }
});

AlunoRouter.put('/updateAluno', async (req, res) => {
    try {
        await Aluno.updateOne({email: req.body.email}, req.body);
        res.status(201).json({mensagem: 'Aluno atualizado'});
    } catch (error) {
        res.status(404).json({mensagem: 'Erro na atualiazação'});
    }
});

AlunoRouter.delete('/deleteAluno', async (req, res) => {
    try {
        await Aluno.deleteOne({email: req.body.email});
        res.status(200).json({mensagem: 'Aluno excluído'}); 
    } catch (error) {
        res.status(404).json({mensagem: 'Erro na exclusão'});
    }
});

module.exports = AlunoRouter;