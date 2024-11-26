import { defineConfig, envField } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	experimental: {
		env: {
			schema: {
				FOO: envField.string({ context: "server", access: "public", optional: true, default: "ABC" }),
			}
		}
	}
});
