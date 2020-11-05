export class ApiService {
    _baseURL = "https://jsonplaceholder.typicode.com";
    async getResource(url) {
        const response = await fetch(`${this._baseURL}/${url}`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        });

        if (!response.ok) {
            throw new Error(
                `Could not fetch ${url}, received ${response.status}`
            );
        }

        return await response.json();
    }

    async getAllAutors() {
        const result = await this.getResource(`users`);
        return result.map((autor) => this._transformAutor(autor));
    }

    async getAutor(id) {
        const result = await this.getResource(`users/${id}/`);
        return this._transformAutor(result);
    }

    async getPosts() {
        const posts = await this.getResource(`posts/`);
        return posts;
    }

    _transformAutor = (autor) => {
        return {
            id: autor.id,
            name: autor.name,
            email: autor.email,
        };
    };
}
