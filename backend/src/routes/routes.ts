import { Router } from "express";
import { AdicionarComentarioController } from "../controllers/AdicionarComentarioController";
import { ExcluirComentarioController } from "../controllers/ExcluirComentarioController";
import { VisualizarTodosComentarioController } from "../controllers/VisualizarTodosComentarioController";
import { AdicionarFilmeController } from "../controllers/AdicionarFilmeController";
import { ExcluirFilmeController } from "../controllers/ExcluirFilmeController";

const router = Router();
const AddFilme = new AdicionarFilmeController();
const deletarFilme = new ExcluirFilmeController();

const GetComentario = new VisualizarTodosComentarioController();
const AddComentario = new AdicionarComentarioController();
const deletarComentario = new ExcluirComentarioController();

router.post("/enviarFilme", AddFilme .handle);
router.post("/excluirFilme", deletarFilme.handle);

router.post("/ler/:id", GetComentario.handle);
router.post("/enviar", AddComentario .handle);
router.post("/excluir", deletarComentario.handle);

export { router };