import swaggerJSDoc, {
    OAS3Definition,
    OAS3Options,
} from 'swagger-jsdoc';

const swaggerDefinition: OAS3Definition = {
    openapi: '3.0.0',
    info: {
        title: 'API de Recetas',
        version: '1.0.0',
        description: 'API que maneja informacion de recetas'
    },

    servers: [
        {
            url: 'http://localhost:9090/'
        },
    ],

    components: {
        schemas: {
            Recetas: {
                type: 'object',
                properties: {
                    nombre: { 
                        type: 'string',
                        description: 'Nombre de la receta'
                    },
                    descripcion: {
                        type: 'string',
                        description: 'Descripcion de la receta'
                    },
                    cantidad: {
                        type: 'number',
                        description: "Cantidad que vamos a realizar en la receta"
                    },
                    medida: {
                        type: 'string',
                        enum: ['LITRO', 'GRAMO', 'UNIDAD'],
                        description: 'unidad, gramo o litro'
                    }
                },
            },

        },
    },
};

const swaggerOptions: OAS3Options = {
    swaggerDefinition,
    apis: ['./server.ts'],
};

export default swaggerJSDoc(swaggerOptions);