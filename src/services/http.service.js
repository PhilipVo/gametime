import { AsyncStorage } from 'react-native';

class HttpService {
	constructor() {
		this.ip = 'http://54.241.143.173';
		// this.ip = 'http://192.168.1.118:5000';
		this.s3 = 'https://s3-us-west-1.amazonaws.com/roningametime';
	}

	handleResponse(response) {
		// Reject on error:
		if (response.status >= 300) return response.json()
			.then(data => Promise.reject(data.message))
			.catch(error => {
				if (typeof error === 'string') return Promise.reject(error);
				else return Promise.reject(response);
			});
		// Resolve on success:
		else return response.json()
			.then(data => Promise.resolve(data))
			.catch(error => Promise.resolve(response));
	}

	/////////////////////////////////////////////////
	//                HTTP METHODS
	/////////////////////////////////////////////////
	delete(url) {
		return AsyncStorage.getItem('gametimeToken')
			.then(gametimeToken => {
				return fetch(`${this.ip}${url}`, {
					method: 'DELETE',
					headers: {
						'Authorization': `Bearer ${gametimeToken}`
					}
				});
			}).then(response => this.handleResponse(response))
			.catch(error => Promise.reject(error));
	}

	get(url) {
		return AsyncStorage.getItem('gametimeToken')
			.then(gametimeToken => {
				return fetch(`${this.ip}${url}`, {
					method: 'GET',
					headers: {
						'Authorization': `Bearer ${gametimeToken}`
					}
				});
			}).then(response => this.handleResponse(response))
			.catch(error => Promise.reject(error));
	}

	post(url, body) {
		return AsyncStorage.getItem('gametimeToken')
			.then(gametimeToken => {
				return fetch(`${this.ip}${url}`, {
					method: 'POST',
					headers: {
						'Authorization': `Bearer ${gametimeToken}`,
						'Content-Type': 'application/json'
					},
					body: body
				});
			}).then(response => this.handleResponse(response))
			.catch(error => Promise.reject(error));
	}

	put(url, body) {
		return AsyncStorage.getItem('gametimeToken')
			.then(gametimeToken => {
				return fetch(`${this.ip}${url}`, {
					method: 'PUT',
					headers: {
						'Authorization': `Bearer ${gametimeToken}`,
						'Content-Type': 'application/json'
					},
					body: body
				});
			}).then(response => this.handleResponse(response))
			.catch(error => Promise.reject(error));
	}
}

export default new HttpService();