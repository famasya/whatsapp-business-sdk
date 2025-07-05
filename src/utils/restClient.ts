interface RestClientParams {
	baseURL?: string;
	apiToken?: string;
	errorHandler?: (error: any) => any;
}

export const createRestClient = ({ baseURL, apiToken, errorHandler }: RestClientParams) => {
	const defaultHeaders: Record<string, string> = {
		'Content-Type': 'application/json',
	};

	if (apiToken) {
		defaultHeaders.authorization = `Bearer ${apiToken}`;
	}

	const makeRequest = async <Response = any>(
		endpoint: string,
		options: RequestInit = {}
	): Promise<Response> => {
		const url = baseURL ? `${baseURL}/${endpoint}`.replace(/\/+/g, '/').replace(':/', '://') : endpoint;

		try {
			const response = await fetch(url, {
				...options,
				headers: {
					...defaultHeaders,
					...options.headers,
				},
			});

			if (!response.ok) {
				const errorData = await response.json().catch(() => ({ message: response.statusText }));
				const error = new Error(`HTTP ${response.status}: ${response.statusText}`);
				(error as any).response = { data: errorData, status: response.status };
				throw error;
			}

			// Handle different response types
			const contentType = response.headers.get('content-type');
			if (contentType?.includes('application/json')) {
				return await response.json();
			} else if (options.method === 'GET' && (options as any).responseType === 'stream') {
				return response.body as any;
			} else {
				return await response.text() as any;
			}
		} catch (error) {
			if (errorHandler) {
				return errorHandler(error);
			}
			throw error;
		}
	};

	return {
		fetch: {
			get: (url: string, config?: RequestInit) => makeRequest(url, { method: 'GET', ...config }),
			post: (url: string, data?: any, config?: RequestInit) => makeRequest(url, {
				method: 'POST',
				body: data instanceof FormData ? data : JSON.stringify(data),
				...config
			}),
			put: (url: string, data?: any, config?: RequestInit) => makeRequest(url, {
				method: 'PUT',
				body: JSON.stringify(data),
				...config
			}),
			delete: (url: string, config?: RequestInit) => makeRequest(url, { method: 'DELETE', ...config }),
		},
		get: async <Response = any, Params = Record<string, string>>(
			endpoint: string,
			params?: Params,
			config?: RequestInit & { baseURL?: string; responseType?: string }
		): Promise<Response> => {
			let url = endpoint;
			if (params) {
				const searchParams = new URLSearchParams();
				Object.entries(params).forEach(([key, value]) => {
					if (value !== undefined && value !== null) {
						searchParams.append(key, String(value));
					}
				});
				const queryString = searchParams.toString();
				if (queryString) {
					url += `?${queryString}`;
				}
			}

			const requestUrl = config?.baseURL !== undefined
				? (config.baseURL ? `${config.baseURL}/${url}`.replace(/\/+/g, '/').replace(':/', '://') : url)
				: (baseURL ? `${baseURL}/${url}`.replace(/\/+/g, '/').replace(':/', '://') : url);

			const response = await fetch(requestUrl, {
				method: 'GET',
				headers: {
					...defaultHeaders,
					...config?.headers,
				},
				...config,
			});

			if (!response.ok) {
				const errorData = await response.json().catch(() => ({ message: response.statusText }));
				const error = new Error(`HTTP ${response.status}: ${response.statusText}`);
				(error as any).response = { data: errorData, status: response.status };
				if (errorHandler) {
					return errorHandler(error);
				}
				throw error;
			}

			if (config?.responseType === 'stream') {
				return response.body as any;
			}

			const contentType = response.headers.get('content-type');
			if (contentType?.includes('application/json')) {
				return await response.json();
			}
			return await response.text() as any;
		},
		post: async <Response = any, Payload = Record<string, any>>(
			endpoint: string,
			payload?: Payload,
			config?: RequestInit
		): Promise<Response> => {
			const url = baseURL ? `${baseURL}/${endpoint}`.replace(/\/+/g, '/').replace(':/', '://') : endpoint;

			let body: string | FormData | undefined;
			let headers = { ...defaultHeaders };

			if (payload instanceof FormData) {
				body = payload;
				// Remove Content-Type header for FormData - browser will set it with boundary
				delete headers['Content-Type'];
			} else if (payload !== undefined) {
				body = JSON.stringify(payload);
			}

			const response = await fetch(url, {
				method: 'POST',
				headers: {
					...headers,
					...config?.headers,
				},
				body,
				...config,
			});

			if (!response.ok) {
				const errorData = await response.json().catch(() => ({ message: response.statusText }));
				const error = new Error(`HTTP ${response.status}: ${response.statusText}`);
				(error as any).response = { data: errorData, status: response.status };
				if (errorHandler) {
					return errorHandler(error);
				}
				throw error;
			}

			const contentType = response.headers.get('content-type');
			if (contentType?.includes('application/json')) {
				return await response.json();
			}
			return await response.text() as any;
		},
		put: async <Response = any, Payload = Record<string, any>>(
			endpoint: string,
			payload?: Payload,
			config?: RequestInit
		): Promise<Response> => {
			const url = baseURL ? `${baseURL}/${endpoint}`.replace(/\/+/g, '/').replace(':/', '://') : endpoint;

			const response = await fetch(url, {
				method: 'PUT',
				headers: {
					...defaultHeaders,
					...config?.headers,
				},
				body: payload ? JSON.stringify(payload) : undefined,
				...config,
			});

			if (!response.ok) {
				const errorData = await response.json().catch(() => ({ message: response.statusText }));
				const error = new Error(`HTTP ${response.status}: ${response.statusText}`);
				(error as any).response = { data: errorData, status: response.status };
				if (errorHandler) {
					return errorHandler(error);
				}
				throw error;
			}

			const contentType = response.headers.get('content-type');
			if (contentType?.includes('application/json')) {
				return await response.json();
			}
			return await response.text() as any;
		},
		delete: async <Response = any, Params = Record<string, any>>(
			endpoint: string,
			params?: Params,
			config?: RequestInit
		): Promise<Response> => {
			let url = endpoint;
			if (params) {
				const searchParams = new URLSearchParams();
				Object.entries(params).forEach(([key, value]) => {
					if (value !== undefined && value !== null) {
						searchParams.append(key, String(value));
					}
				});
				const queryString = searchParams.toString();
				if (queryString) {
					url += `?${queryString}`;
				}
			}

			const requestUrl = baseURL ? `${baseURL}/${url}`.replace(/\/+/g, '/').replace(':/', '://') : url;

			const response = await fetch(requestUrl, {
				method: 'DELETE',
				headers: {
					...defaultHeaders,
					...config?.headers,
				},
				...config,
			});

			if (!response.ok) {
				const errorData = await response.json().catch(() => ({ message: response.statusText }));
				const error = new Error(`HTTP ${response.status}: ${response.statusText}`);
				(error as any).response = { data: errorData, status: response.status };
				if (errorHandler) {
					return errorHandler(error);
				}
				throw error;
			}

			const contentType = response.headers.get('content-type');
			if (contentType?.includes('application/json')) {
				return await response.json();
			}
			return await response.text() as any;
		},
	};
};
