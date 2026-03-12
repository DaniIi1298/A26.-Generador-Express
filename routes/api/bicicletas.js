let express = require('express');
let router = express.Router();
let BicicletaControllerAPI = require("../../controllers/api/BicicletaControllerAPI");

/**
 * @swagger
 * components:
 *   schemas:
 *     Bicicleta:
 *       type: object
 *       required:
 *         - color
 *         - modelo
 *       properties:
 *         id:
 *           type: integer
 *           description: ID de la bicicleta
 *         color:
 *           type: string
 *           description: Color de la bicicleta
 *         modelo:
 *           type: string
 *           description: Modelo de la bicicleta
 *       example:
 *         id: 1
 *         color: rojo
 *         modelo: Trek
 */


/**
 * @swagger
 * /api/bicicletas:
 *   get:
 *     summary: Obtener todas las bicicletas
 *     tags: [Bicicletas]
 *     responses:
 *       200:
 *         description: Lista de bicicletas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Bicicleta'
 */
router.get("/", BicicletaControllerAPI.bicicleta_list);


/**
 * @swagger
 * /api/bicicletas/create:
 *   post:
 *     summary: Crear una nueva bicicleta
 *     tags: [Bicicletas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Bicicleta'
 *     responses:
 *       200:
 *         description: Bicicleta creada correctamente
 */
router.post("/create", BicicletaControllerAPI.bicicleta_create);


/**
 * @swagger
 * /api/bicicletas/delete:
 *   delete:
 *     summary: Eliminar una bicicleta
 *     tags: [Bicicletas]
 *     responses:
 *       200:
 *         description: Bicicleta eliminada correctamente
 */
router.delete("/delete", BicicletaControllerAPI.bicicleta_delete);


/**
 * @swagger
 * /api/bicicletas/update:
 *   put:
 *     summary: Actualizar una bicicleta
 *     tags: [Bicicletas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Bicicleta'
 *     responses:
 *       200:
 *         description: Bicicleta actualizada correctamente
 */
router.put("/update", BicicletaControllerAPI.bicicleta_update);


module.exports = router;