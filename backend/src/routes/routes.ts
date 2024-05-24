import { Router } from "express";
import { AdicionarComentarioController } from "../controllers/AdicionarComentarioController";
import { ExcluirComentarioController } from "../controllers/ExcluirComentarioController";
import { VisualizarComentarioController } from "../controllers/VisualizarComentarioController";

const router = Router();

const GetComentario = new VisualizarComentarioController();
const AddComentario = new AdicionarComentarioController();
const deletarComentario = new ExcluirComentarioController();

router.post("/ler/:id", GetComentario.handle);
router.post("/enviar", AddComentario .handle);
router.post("/excluir", deletarComentario.handle);

export { router };