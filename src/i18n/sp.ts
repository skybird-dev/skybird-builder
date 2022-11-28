import frenchMessages from 'ra-language-spanish';

export default {
    simple: {
        action: {
            close: 'Cerca',
            resetViews: 'Restablecer vistas',
        },
        'create-post': 'Nueva publicación',
    },
    ...frenchMessages,
    resources: {
        posts: {
            name: 'Article |||| Articles',
            fields: {
                average_note: 'Nota media',
                body: 'Contenido',
                category: 'Categoría',
                comments: 'Comentarios',
                commentable: 'Comentable',
                commentable_short: 'Com.',
                created_at: 'Creó el',
                notifications: 'Destinatarios de notificaciones',
                nb_view: 'Nb de vistas',
                password: 'Contraseña (si está protegida)',
                pictures: 'Fotos relacionadas',
                'pictures.url': 'URL',
                'pictures.metas.authors': 'Auteurs',
                'pictures.metas.authors.name': 'Nombre',
                authors: 'Autores',
                'authors.user_id': 'Usuario',
                'authors.role': 'Rol',
                published_at: 'Publicado en',
                teaser: 'Description',
                tags: 'Catégories',
                title: 'Título',
                views: 'Vistas',
            },
        },
        comments: {
            name: 'Comentario |||| Comentarios',
            fields: {
                body: 'Contenido',
                created_at: 'Creó el',
                post_id: 'Article',
                author: {
                    name: 'Auteur',
                },
            },
        },
        users: {
            name: 'Usuario |||| Usuarios',
            fields: {
                name: 'Nombre',
                role: 'Rol',
            },
        },
    },
    post: {
        list: {
            search: 'Búsqueda',
        },
        form: {
            summary: 'Resumen',
            body: 'Contenido',
            miscellaneous: 'Extra',
            comments: 'Comentarios',
        },
        edit: {
            title: 'Articulos "%{title}"',
        },
    },
    comment: {
        list: {
            about: 'A propósito de',
        },
    },
    user: {
        list: {
            search: 'Búsqueda',
        },
        form: {
            summary: 'Resumen',
            security: 'Seguridad',
        },
    },
};
